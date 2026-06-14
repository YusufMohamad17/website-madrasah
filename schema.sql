-- ═══════════════════════════════════════
--  SCHEMA DATABASE MADRASAH
--  Jalankan: wrangler d1 execute db-madrasah --file=schema.sql
-- ═══════════════════════════════════════

-- ─── TABEL SISWA ───
CREATE TABLE IF NOT EXISTS siswa (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  nis          TEXT NOT NULL UNIQUE,
  nisn         TEXT UNIQUE,
  nama         TEXT NOT NULL,
  kelas        TEXT NOT NULL,
  jurusan      TEXT,
  jenis_kelamin TEXT CHECK(jenis_kelamin IN ('L','P')),
  tanggal_lahir DATE,
  alamat       TEXT,
  nama_ortu    TEXT,
  telp_ortu    TEXT,
  email        TEXT,
  foto_url     TEXT,
  status       TEXT DEFAULT 'aktif',
  tahun_masuk  INTEGER,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── TABEL PENDAFTARAN PPDB ───
CREATE TABLE IF NOT EXISTS ppdb (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  no_daftar       TEXT NOT NULL UNIQUE,
  nama_lengkap    TEXT NOT NULL,
  nisn            TEXT,
  nik             TEXT,
  tempat_lahir    TEXT,
  tanggal_lahir   DATE,
  jenis_kelamin   TEXT,
  agama           TEXT DEFAULT 'Islam',
  asal_sekolah    TEXT,
  nilai_rata       REAL,
  jalur           TEXT,
  pilihan_jurusan TEXT,
  nama_ortu       TEXT,
  telp_ortu       TEXT,
  email           TEXT,
  alamat          TEXT,
  file_ijazah_url TEXT,
  file_kk_url     TEXT,
  file_foto_url   TEXT,
  status          TEXT DEFAULT 'menunggu',
  catatan_admin   TEXT,
  tanggal_daftar  DATETIME DEFAULT CURRENT_TIMESTAMP,
  tanggal_update  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── TABEL MATA PELAJARAN ───
CREATE TABLE IF NOT EXISTS mata_pelajaran (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  kode    TEXT NOT NULL UNIQUE,
  nama    TEXT NOT NULL,
  kelas   TEXT,
  jurusan TEXT,
  guru_id INTEGER REFERENCES guru(id)
);

-- ─── TABEL GURU ───
CREATE TABLE IF NOT EXISTS guru (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  nip         TEXT UNIQUE,
  nama        TEXT NOT NULL,
  jabatan     TEXT,
  mata_pel    TEXT,
  email       TEXT UNIQUE,
  telp        TEXT,
  foto_url    TEXT,
  password_hash TEXT,
  role        TEXT DEFAULT 'guru',
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── TABEL SOAL UJIAN ───
CREATE TABLE IF NOT EXISTS soal (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  mapel_id    INTEGER REFERENCES mata_pelajaran(id),
  kelas       TEXT NOT NULL,
  judul       TEXT,
  pertanyaan  TEXT NOT NULL,
  pilihan_a   TEXT,
  pilihan_b   TEXT,
  pilihan_c   TEXT,
  pilihan_d   TEXT,
  kunci_jawaban TEXT NOT NULL,
  tipe        TEXT DEFAULT 'pilihan_ganda',
  poin        INTEGER DEFAULT 1,
  created_by  INTEGER REFERENCES guru(id),
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── TABEL UJIAN (sesi ujian) ───
CREATE TABLE IF NOT EXISTS ujian (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  mapel_id     INTEGER REFERENCES mata_pelajaran(id),
  judul        TEXT NOT NULL,
  kelas        TEXT NOT NULL,
  tanggal      DATETIME,
  durasi_menit INTEGER DEFAULT 90,
  status       TEXT DEFAULT 'draft',
  created_by   INTEGER REFERENCES guru(id)
);

-- ─── TABEL JAWABAN SISWA ───
CREATE TABLE IF NOT EXISTS jawaban_siswa (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  ujian_id    INTEGER REFERENCES ujian(id),
  soal_id     INTEGER REFERENCES soal(id),
  siswa_id    INTEGER REFERENCES siswa(id),
  jawaban     TEXT,
  skor        REAL DEFAULT 0,
  ai_feedback TEXT,
  dikoreksi   INTEGER DEFAULT 0,
  waktu_jawab DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── TABEL NILAI ───
CREATE TABLE IF NOT EXISTS nilai (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  siswa_id   INTEGER REFERENCES siswa(id),
  ujian_id   INTEGER REFERENCES ujian(id),
  mapel_id   INTEGER REFERENCES mata_pelajaran(id),
  nilai_total REAL,
  keterangan  TEXT,
  semester    INTEGER,
  tahun_ajar  TEXT
);

-- ─── TABEL PENGUMUMAN ───
CREATE TABLE IF NOT EXISTS pengumuman (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  judul      TEXT NOT NULL,
  isi        TEXT NOT NULL,
  kategori   TEXT DEFAULT 'umum',
  penulis_id INTEGER REFERENCES guru(id),
  tanggal    DATETIME DEFAULT CURRENT_TIMESTAMP,
  aktif      INTEGER DEFAULT 1
);

-- ─── TABEL EVENT ───
CREATE TABLE IF NOT EXISTS event (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  nama       TEXT NOT NULL,
  deskripsi  TEXT,
  tanggal    DATE NOT NULL,
  lokasi     TEXT,
  kategori   TEXT,
  foto_url   TEXT
);

-- ─── TABEL JADWAL PELAJARAN ───
CREATE TABLE IF NOT EXISTS jadwal (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  kelas    TEXT NOT NULL,
  hari     TEXT NOT NULL,
  jam_ke   INTEGER,
  jam_mulai TIME,
  jam_selesai TIME,
  mapel_id INTEGER REFERENCES mata_pelajaran(id),
  guru_id  INTEGER REFERENCES guru(id),
  ruang    TEXT
);

-- ─── DATA AWAL: Admin default ───
INSERT OR IGNORE INTO guru (nip, nama, jabatan, email, password_hash, role)
VALUES (
  'ADMIN001', 'Administrator', 'Admin Sistem',
  'admin@madrasah.web.id',
  '$2b$10$GANTI_DENGAN_HASH_BCRYPT',
  'admin'
);
