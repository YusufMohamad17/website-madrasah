"use client";

import { useState } from "react";
import "@/styles/ppdb.css";

const STEPS = ["Data Diri", "Dokumen", "Konfirmasi"];

const JALUR_OPTIONS = ["Prestasi Akademik", "Reguler", "Afirmasi", "Perpindahan Tugas Orang Tua"];
const JURUSAN_OPTIONS = ["IPA", "IPS", "Bahasa", "Keagamaan"];
const PROVINSI_OPTIONS = ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "DKI Jakarta", "Banten", "Lainnya"];

export default function PPDBPage() {
  const [step, setStep]     = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]     = useState({
    nama: "", nik: "", tempat_lahir: "", tanggal_lahir: "",
    jenis_kelamin: "", agama: "Islam", asal_sekolah: "",
    nisn: "", nilai_rata: "", jalur: "", jurusan: "",
    provinsi: "", kota: "", alamat: "",
    nama_ortu: "", telp_ortu: "", email: "",
    file_ijazah: null, file_kk: null, file_foto: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  }

  function handleNext(e) {
    e.preventDefault();
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "460px" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>✅</div>
          <h2 style={{ color: "var(--navy)", marginBottom: "12px" }}>Pendaftaran Berhasil!</h2>
          <p style={{ color: "var(--gray-400)", marginBottom: "24px" }}>
            Nomor pendaftaran kamu adalah <strong style={{ color: "var(--navy)" }}>PPDB-2025-{Math.floor(Math.random()*9000)+1000}</strong>.
            Simpan nomor ini untuk pengecekan status.
          </p>
          <a href="/ppdb/status" className="btn btn--primary">Cek Status Pendaftaran</a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="ppdb-header">
        <div className="ppdb-header__inner">
          <div className="ppdb-header__eyebrow">📝 Penerimaan Peserta Didik Baru</div>
          <h1>PPDB Online 2025/2026</h1>
          <p className="ppdb-header__sub">
            Daftar sekarang — cepat, mudah, dan transparan
          </p>
        </div>
      </div>

      {/* Layout utama */}
      <div className="ppdb-layout">

        {/* Form Pendaftaran */}
        <div className="ppdb-form-card">
          <h2 className="ppdb-form-card__title">Formulir Pendaftaran</h2>

          {/* Step indicator */}
          <div className="ppdb-steps">
            {STEPS.map((label, idx) => (
              <div key={idx} className={`ppdb-step ${idx < step ? "ppdb-step--done" : ""} ${idx === step ? "ppdb-step--active" : ""}`}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className="ppdb-step__circle">
                    {idx < step ? "✓" : idx + 1}
                  </div>
                  <span className="ppdb-step__label">{label}</span>
                </div>
                {idx < STEPS.length - 1 && <div className="ppdb-step__line" />}
              </div>
            ))}
          </div>

          <form onSubmit={handleNext}>

            {/* STEP 0 — Data Diri */}
            {step === 0 && (
              <div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Nama Lengkap</label>
                    <input name="nama" className="form-input" placeholder="Sesuai akta lahir" value={form.nama} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">NISN</label>
                    <input name="nisn" className="form-input" placeholder="10 digit angka" value={form.nisn} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Tempat Lahir</label>
                    <input name="tempat_lahir" className="form-input" placeholder="Kota" value={form.tempat_lahir} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Tanggal Lahir</label>
                    <input name="tanggal_lahir" type="date" className="form-input" value={form.tanggal_lahir} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Jenis Kelamin</label>
                    <select name="jenis_kelamin" className="form-select" value={form.jenis_kelamin} onChange={handleChange} required>
                      <option value="">-- Pilih --</option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Agama</label>
                    <select name="agama" className="form-select" value={form.agama} onChange={handleChange}>
                      <option>Islam</option>
                      <option>Kristen</option>
                      <option>Katolik</option>
                      <option>Hindu</option>
                      <option>Buddha</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Asal Sekolah</label>
                    <input name="asal_sekolah" className="form-input" placeholder="Nama SMP/MTs" value={form.asal_sekolah} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Nilai Rata-rata</label>
                    <input name="nilai_rata" type="number" step="0.01" min="0" max="100" className="form-input" placeholder="0 - 100" value={form.nilai_rata} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Jalur Pendaftaran</label>
                    <select name="jalur" className="form-select" value={form.jalur} onChange={handleChange} required>
                      <option value="">-- Pilih Jalur --</option>
                      {JALUR_OPTIONS.map((j) => <option key={j}>{j}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">Pilihan Jurusan</label>
                    <select name="jurusan" className="form-select" value={form.jurusan} onChange={handleChange} required>
                      <option value="">-- Pilih Jurusan --</option>
                      {JURUSAN_OPTIONS.map((j) => <option key={j}>{j}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label form-label--required">Alamat Lengkap</label>
                  <textarea name="alamat" className="form-textarea" rows={2} placeholder="Jl. ..." value={form.alamat} onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label form-label--required">Nama Orang Tua/Wali</label>
                    <input name="nama_ortu" className="form-input" placeholder="Nama lengkap" value={form.nama_ortu} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label--required">No. Telepon/WA Orang Tua</label>
                    <input name="telp_ortu" className="form-input" placeholder="+62 ..." value={form.telp_ortu} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Aktif</label>
                  <input name="email" type="email" className="form-input" placeholder="contoh@email.com" value={form.email} onChange={handleChange} />
                  <span className="form-hint">Untuk menerima notifikasi status pendaftaran</span>
                </div>
              </div>
            )}

            {/* STEP 1 — Upload Dokumen */}
            {step === 1 && (
              <div>
                <div className="alert alert--info" style={{ marginBottom: "24px" }}>
                  <span>ℹ️</span>
                  <span>Upload file dalam format <strong>PDF atau JPG/PNG</strong>, ukuran maksimal <strong>2 MB</strong> per file.</span>
                </div>
                <div className="form-group">
                  <label className="form-label form-label--required">Ijazah / Surat Keterangan Lulus</label>
                  <input name="file_ijazah" type="file" className="form-input" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                  <span className="form-hint">Scan atau foto ijazah yang jelas</span>
                </div>
                <div className="form-group">
                  <label className="form-label form-label--required">Kartu Keluarga (KK)</label>
                  <input name="file_kk" type="file" className="form-input" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label form-label--required">Foto 3×4 Terbaru</label>
                  <input name="file_foto" type="file" className="form-input" accept=".jpg,.jpeg,.png" onChange={handleChange} required />
                  <span className="form-hint">Latar belakang merah, berpakaian rapi</span>
                </div>
              </div>
            )}

            {/* STEP 2 — Konfirmasi */}
            {step === 2 && (
              <div>
                <div className="alert alert--warning" style={{ marginBottom: "24px" }}>
                  <span>⚠️</span>
                  <span>Periksa kembali data sebelum mengirim. Data tidak dapat diubah setelah pendaftaran.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    ["Nama Lengkap", form.nama],
                    ["NISN", form.nisn],
                    ["Asal Sekolah", form.asal_sekolah],
                    ["Jalur", form.jalur],
                    ["Jurusan", form.jurusan],
                    ["Nama Orang Tua", form.nama_ortu],
                    ["No. Telepon", form.telp_ortu],
                  ].map(([label, val]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "var(--gray-50)", borderRadius: "8px", fontSize: "14px" }}>
                      <span style={{ color: "var(--gray-400)" }}>{label}</span>
                      <strong style={{ color: "var(--navy)" }}>{val || "—"}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigasi tombol */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", gap: "12px" }}>
              {step > 0 && (
                <button type="button" className="btn btn--outline-blue" onClick={() => setStep((s) => s - 1)}>
                  ← Kembali
                </button>
              )}
              <button type="submit" className="btn btn--primary" style={{ marginLeft: "auto" }}>
                {step === STEPS.length - 1 ? "✅ Kirim Pendaftaran" : "Lanjut →"}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="ppdb-sidebar">
          {/* Kuota */}
          <div className="ppdb-quota">
            <div className="ppdb-quota__title">📊 Kuota PPDB 2025</div>
            {[
              { label: "IPA", terisi: 72, total: 100 },
              { label: "IPS", terisi: 58, total: 80 },
              { label: "Keagamaan", terisi: 45, total: 60 },
              { label: "Bahasa", terisi: 73, total: 60 },
            ].map((k) => (
              <div key={k.label} style={{ marginBottom: "14px" }}>
                <div className="ppdb-quota__label" style={{ marginBottom: "6px" }}>
                  <span>{k.label}</span>
                  <strong>{k.terisi}/{k.total}</strong>
                </div>
                <div className="ppdb-quota__bar-wrap">
                  <div className="ppdb-quota__bar" style={{ width: `${Math.min((k.terisi / k.total) * 100, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Info Jadwal */}
          <div className="ppdb-info-card">
            <div className="ppdb-info-card__title">📅 Jadwal PPDB</div>
            <div className="ppdb-info-list">
              {[
                ["🟢", "Pendaftaran Online", "1 – 30 Juli 2025"],
                ["🟡", "Seleksi Berkas", "1 – 5 Agustus 2025"],
                ["🔵", "Pengumuman", "10 Agustus 2025"],
                ["🔴", "Daftar Ulang", "11 – 15 Agustus 2025"],
              ].map(([dot, label, date]) => (
                <div key={label} className="ppdb-info-item">
                  <span className="ppdb-info-item__icon">{dot}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{label}</div>
                    <div style={{ fontSize: "var(--text-xs)", opacity: 0.7 }}>{date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bantuan */}
          <div style={{ background: "var(--gold-pale)", border: "1px solid var(--gold)", borderRadius: "var(--radius-lg)", padding: "var(--space-4)" }}>
            <div style={{ fontFamily: "var(--serif)", fontWeight: 700, color: "var(--navy)", marginBottom: "10px" }}>💬 Butuh Bantuan?</div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--gray-600)", marginBottom: "12px" }}>
              Hubungi panitia PPDB jika ada kendala dalam pendaftaran.
            </p>
            <a href="https://wa.me/6281234567890" className="btn btn--secondary btn--sm" target="_blank" rel="noreferrer">
              WhatsApp Panitia
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
