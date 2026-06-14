"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/admin.css";

// ─── Menu Sidebar Admin ───
const ADMIN_MENUS = [
  {
    label: "Utama",
    items: [
      { icon: "🏠", label: "Dashboard",     href: "/admin/dashboard",  badge: null },
    ],
  },
  {
    label: "Akademik",
    items: [
      { icon: "👨‍🎓", label: "Data Siswa",    href: "/admin/siswa",       badge: null },
      { icon: "👨‍🏫", label: "Data Guru",     href: "/admin/guru",        badge: null },
      { icon: "📅", label: "Jadwal",        href: "/admin/jadwal",      badge: null },
      { icon: "📊", label: "Nilai & Rapor", href: "/admin/nilai",       badge: null },
    ],
  },
  {
    label: "PPDB",
    items: [
      { icon: "📝", label: "Pendaftar",     href: "/admin/ppdb",        badge: "248" },
      { icon: "📋", label: "Seleksi",       href: "/admin/ppdb/seleksi", badge: null },
    ],
  },
  {
    label: "Ujian",
    items: [
      { icon: "❓", label: "Bank Soal",     href: "/admin/soal",        badge: null },
      { icon: "✅", label: "Koreksi AI",    href: "/admin/koreksi",     badge: "12" },
      { icon: "📈", label: "Hasil Ujian",   href: "/admin/hasil",       badge: null },
    ],
  },
  {
    label: "Konten",
    items: [
      { icon: "📢", label: "Pengumuman",    href: "/admin/pengumuman",  badge: null },
      { icon: "🎉", label: "Event",         href: "/admin/event",       badge: null },
    ],
  },
  {
    label: "Sistem",
    items: [
      { icon: "⚙️", label: "Pengaturan",   href: "/admin/pengaturan",  badge: null },
      { icon: "🔐", label: "Keluar",        href: "/logout",            badge: null },
    ],
  },
];

// ─── Statistik Dashboard ───
const STATS = [
  { icon: "👨‍🎓", iconBg: "var(--blue-pale)",   num: "1.240", label: "Total Siswa",    trend: "+12", up: true  },
  { icon: "📝",   iconBg: "rgba(200,164,0,.12)", num: "248",   label: "Pendaftar PPDB", trend: "+8",  up: true  },
  { icon: "✅",   iconBg: "var(--success-pale)", num: "94%",   label: "Kelulusan UN",   trend: "+2%", up: true  },
  { icon: "📢",   iconBg: "var(--warning-pale)", num: "6",     label: "Event Aktif",    trend: "-1",  up: false },
];

// ─── Aktivitas Terbaru ───
const ACTIVITIES = [
  { icon: "📝", text: "Pendaftar baru: Ahmad Fauzan",      time: "2 mnt lalu",   color: "var(--blue)"    },
  { icon: "✅", text: "Koreksi soal IPA kelas XII selesai", time: "15 mnt lalu",  color: "var(--success)" },
  { icon: "📢", text: "Pengumuman PPDB diperbarui",        time: "1 jam lalu",   color: "var(--gold)"    },
  { icon: "👨‍🎓", text: "Data siswa kelas X IPA1 diupdate", time: "3 jam lalu",   color: "var(--navy)"    },
  { icon: "📅", text: "Jadwal semester baru diunggah",     time: "Kemarin",      color: "var(--blue)"    },
];

// ─── Aksi Cepat ───
const QUICK_ACTIONS = [
  { icon: "➕", label: "Tambah Siswa",    href: "/admin/siswa/baru"       },
  { icon: "📝", label: "Buat Soal",       href: "/admin/soal/baru"        },
  { icon: "📢", label: "Tulis Pengumuman",href: "/admin/pengumuman/baru"  },
  { icon: "📊", label: "Laporan",         href: "/admin/laporan"          },
];

// ─── Sidebar ───
function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="admin-sidebar">
      {ADMIN_MENUS.map((group) => (
        <div key={group.label}>
          <div className="admin-sidebar__label">{group.label}</div>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-item ${pathname === item.href ? "is-active" : ""}`}
            >
              <span className="admin-nav-item__icon">{item.icon}</span>
              {item.label}
              {item.badge && (
                <span className="admin-nav-item__badge">{item.badge}</span>
              )}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}

// ─── Halaman Dashboard Utama ───
export default function AdminDashboardPage() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-content">
        {/* Topbar */}
        <div className="admin-topbar">
          <div>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--gray-400)", marginBottom: "4px" }}>
              Selamat datang kembali 👋
            </div>
            <h1 className="admin-topbar__title">Dashboard Admin</h1>
          </div>
          <div className="admin-topbar__right">
            <div style={{ fontSize: "var(--text-xs)", color: "var(--gray-400)" }}>
              {new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </div>
            <div className="admin-user-badge">
              <div className="admin-user-badge__avatar">👤</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="admin-stats">
          {STATS.map((s, idx) => (
            <div key={idx} className="admin-stat-card">
              <div className="admin-stat-card__icon" style={{ background: s.iconBg }}>
                {s.icon}
              </div>
              <div className="admin-stat-card__body">
                <span className="admin-stat-card__num">{s.num}</span>
                <span className="admin-stat-card__label">{s.label}</span>
                <span className={`admin-stat-card__trend admin-stat-card__trend--${s.up ? "up" : "down"}`}>
                  {s.up ? "▲" : "▼"} {s.trend} bulan ini
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Konten */}
        <div className="admin-grid">

          {/* Tabel PPDB terbaru */}
          <div>
            <div className="admin-panel">
              <div className="admin-panel__header">
                <span className="admin-panel__title">📝 Pendaftar PPDB Terbaru</span>
                <Link href="/admin/ppdb" className="btn btn--outline-blue btn--sm">Lihat Semua</Link>
              </div>
              <div className="table-wrap" style={{ borderRadius: 0, border: "none" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Asal Sekolah</th>
                      <th>Jalur</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Ahmad Fauzan",    "SMPN 1 Kota",   "Reguler",  "menunggu"],
                      ["Siti Maryam",     "MTsN 2 Kota",   "Prestasi", "lolos"],
                      ["Budi Santoso",    "SMPN 3 Kota",   "Afirmasi", "menunggu"],
                      ["Nur Hidayah",     "MTsN 1 Kota",   "Prestasi", "lolos"],
                      ["Rizki Ramadhan",  "SMPN 2 Kota",   "Reguler",  "ditolak"],
                    ].map(([nama, sekolah, jalur, status], i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 500, color: "var(--navy)" }}>{nama}</td>
                        <td>{sekolah}</td>
                        <td><span className="badge badge--blue">{jalur}</span></td>
                        <td>
                          <span className={`badge badge--${status === "lolos" ? "green" : status === "menunggu" ? "gold" : "red"}`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Kanan */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>

            {/* Aksi Cepat */}
            <div className="admin-panel">
              <div className="admin-panel__header">
                <span className="admin-panel__title">⚡ Aksi Cepat</span>
              </div>
              <div className="admin-panel__body">
                <div className="admin-actions">
                  {QUICK_ACTIONS.map((a, idx) => (
                    <Link key={idx} href={a.href} className="admin-action-btn">
                      <span className="admin-action-btn__icon">{a.icon}</span>
                      <span className="admin-action-btn__label">{a.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="admin-panel">
              <div className="admin-panel__header">
                <span className="admin-panel__title">🕐 Aktivitas Terbaru</span>
              </div>
              <div className="admin-panel__body">
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {ACTIVITIES.map((a, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: a.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>
                        {a.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: "var(--text-sm)", color: "var(--gray-700)" }}>{a.text}</div>
                        <div style={{ fontSize: "var(--text-xs)", color: "var(--gray-400)", marginTop: "2px" }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
