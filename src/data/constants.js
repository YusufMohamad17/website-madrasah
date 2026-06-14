/* ============================================================
   DATA KONSTAN — Informasi Sekolah & Menu
   Edit file ini untuk mengubah nama sekolah, kontak, menu, dll
   ============================================================ */

// ─── Informasi Sekolah ───
export const SCHOOL_INFO = {
  name:      "MAN 1 Kota Contoh",
  fullName:  "Madrasah Aliyah Negeri 1 Kota Contoh",
  tagline:   "Madrasah Aliyah Negeri",
  motto:     "Bersama Ilmu, Iman, dan Amal",
  logo:      "🕌",
  domain:    "man1kotacontoh.web.id",
  email:     "info@man1kotacontoh.web.id",
  phone:     "(021) 123-4567",
  whatsapp:  "+62 812-3456-7890",
  address:   "Jl. Pendidikan No. 1, Kota Contoh, 12345",
  founded:   1993,
  socialMedia: {
    facebook:  "https://facebook.com/man1kotacontoh",
    instagram: "https://instagram.com/man1kotacontoh",
    youtube:   "https://youtube.com/@man1kotacontoh",
    twitter:   "https://twitter.com/man1kotacontoh",
    whatsapp:  "https://wa.me/6281234567890",
  },
};

// ─── Statistik Sekolah ───
export const SCHOOL_STATS = [
  { num: "1.240", label: "Siswa Aktif" },
  { num: "87",    label: "Tenaga Pendidik" },
  { num: "32+",   label: "Tahun Berdiri" },
];

// ─── Item Menu Navigasi ───
export const MENU_ITEMS = [
  { icon: "🏠", label: "Beranda",             href: "/" },
  { icon: "📚", label: "Akademik",             href: "/akademik" },
  { icon: "📅", label: "Kurikulum & Jadwal",   href: "/kurikulum" },
  { divider: true },
  { icon: "📝", label: "PPDB Online",          href: "/ppdb" },
  { icon: "✅", label: "Koreksi Jawaban",       href: "/ujian" },
  { icon: "📢", label: "Pengumuman",            href: "/pengumuman" },
  { icon: "🎉", label: "Event & Kegiatan",      href: "/event" },
  { divider: true },
  { icon: "👥", label: "Tentang Madrasah",     href: "/about" },
  { icon: "🎓", label: "Alumni",               href: "/alumni" },
  { icon: "👨‍🏫", label: "Tenaga Pendidik",     href: "/guru" },
  { divider: true },
  { icon: "📞", label: "Hubungi Kami",         href: "/kontak" },
];

// ─── Menu Footer: Akademik ───
export const FOOTER_MENU_AKADEMIK = [
  { label: "Portal Siswa",       href: "/siswa" },
  { label: "Jadwal Pelajaran",   href: "/kurikulum" },
  { label: "Kalender Akademik",  href: "/akademik/kalender" },
  { label: "Kurikulum",          href: "/akademik/kurikulum" },
  { label: "Ekstrakurikuler",    href: "/akademik/ekskul" },
];

// ─── Menu Footer: Informasi ───
export const FOOTER_MENU_INFO = [
  { label: "PPDB Online",        href: "/ppdb" },
  { label: "Pengumuman",         href: "/pengumuman" },
  { label: "Event & Kegiatan",   href: "/event" },
  { label: "Prestasi",           href: "/prestasi" },
  { label: "Berita Madrasah",    href: "/berita" },
];

// ─── Teks Ticker / Pengumuman ───
export const TICKER_TEXT =
  "PPDB Tahun Ajaran 2025/2026 telah dibuka — Daftar sebelum 30 Juli 2025  •  " +
  "Pembagian Rapor Semester Genap: 21 Juni 2025  •  " +
  "Lomba Olimpiade Sains Kabupaten: 15 Juli 2025";

// ─── Kartu Layanan Utama ───
export const SERVICE_CARDS = [
  {
    icon:     "📚",
    iconType: "blue",
    title:    "Portal Akademik",
    desc:     "Nilai, absensi, dan jadwal pelajaran siswa secara real-time.",
    badge:    "Siswa & Guru",
    badgeType:"blue",
    href:     "/siswa",
  },
  {
    icon:     "📝",
    iconType: "gold",
    title:    "PPDB Online",
    desc:     "Pendaftaran peserta didik baru mudah dan transparan secara online.",
    badge:    "Buka Sekarang",
    badgeType:"gold",
    href:     "/ppdb",
  },
  {
    icon:     "✅",
    iconType: "green",
    title:    "Koreksi Soal AI",
    desc:     "Sistem koreksi ujian otomatis berbasis kecerdasan buatan untuk hasil akurat.",
    badge:    "Powered by AI",
    badgeType:"green",
    href:     "/ujian",
  },
  {
    icon:     "📅",
    iconType: "blue",
    title:    "Jadwal & Kurikulum",
    desc:     "Jadwal pelajaran, kalender akademik, dan silabus kurikulum terbaru.",
    badge:    "TP 2024/2025",
    badgeType:"blue",
    href:     "/kurikulum",
  },
];

// ─── Kartu Dashboard ───
export const DASHBOARD_CARDS = [
  {
    count:   "248",
    title:   "Pendaftar PPDB 2025",
    desc:    "Kuota tersisa 52 kursi dari total 300 kursi yang tersedia untuk tahun ajaran baru.",
    link:    "Lihat Status →",
    href:    "/ppdb/status",
    emoji:   "📝",
    variant: "dark",
  },
  {
    count:   "14",
    title:   "Prestasi Tahun Ini",
    desc:    "Medali & penghargaan dari kompetisi tingkat kabupaten, provinsi, dan nasional.",
    link:    "Lihat Semua →",
    href:    "/prestasi",
    emoji:   "🏆",
    variant: "gold",
  },
  {
    count:   "6",
    title:   "Event Bulan Ini",
    desc:    "Kegiatan aktif: LDKS, Olimpiade Sains, Pesantren Kilat, dan kunjungan industri.",
    link:    "Lihat Jadwal →",
    href:    "/event",
    emoji:   "📢",
    variant: "dark",
  },
];

// ─── Data Event ───
export const EVENTS = [
  {
    day:   "15",
    month: "Jul",
    tag:   "Akademik",
    title: "Olimpiade Sains Kabupaten 2025",
    desc:  "Seleksi internal mulai 10 Juli — Lokasi: Gedung Serbaguna",
  },
  {
    day:   "21",
    month: "Jun",
    tag:   "Administrasi",
    title: "Pembagian Rapor Semester Genap",
    desc:  "Pukul 08.00 – 12.00 WIB — Orang tua/wali diharap hadir",
  },
  {
    day:   "28",
    month: "Jun",
    tag:   "Keagamaan",
    title: "Pesantren Kilat Ramadhan",
    desc:  "Seluruh siswa kelas X–XII — Pendampingan guru agama",
  },
  {
    day:   "05",
    month: "Jul",
    tag:   "Kesiswaan",
    title: "LDKS Pengurus OSIS Baru",
    desc:  "Latihan Dasar Kepemimpinan — Lokasi: Bumi Perkemahan",
  },
];

// ─── Data Pengumuman ───
export const ANNOUNCEMENTS = [
  {
    date:    "13 Jun 2025",
    title:   "Jadwal UKK Semester Genap",
    desc:    "Pelaksanaan UKK dimulai tanggal 17 Juni 2025 untuk semua jurusan.",
    variant: "blue",
  },
  {
    date:    "10 Jun 2025",
    title:   "Beasiswa Prestasi Dibuka",
    desc:    "Pendaftaran beasiswa bagi siswa berprestasi dengan nilai rata-rata minimal 8.5.",
    variant: "gold",
  },
  {
    date:    "05 Jun 2025",
    title:   "Perubahan Jadwal Ekstrakurikuler",
    desc:    "Pramuka dan PMR dialihkan ke hari Sabtu mulai pekan depan.",
    variant: "blue",
  },
];

// ─── Data Guru & Alumni ───
export const PEOPLE = [
  {
    avatar: "👨‍🏫",
    name:   "Dr. Ahmad Fauzi",
    role:   "Kepala Madrasah",
    tag:    "Pimpinan",
    type:   "guru",
  },
  {
    avatar: "👩‍🏫",
    name:   "Ibu Siti Rahayu",
    role:   "Waka Kurikulum",
    tag:    "Pendidik",
    type:   "guru",
  },
  {
    avatar: "🎓",
    name:   "Muhammad Rizki",
    role:   "Alumni 2020 · UI",
    tag:    "Alumni",
    type:   "alumni",
  },
  {
    avatar: "🎓",
    name:   "Nur Aisyah",
    role:   "Alumni 2019 · ITB",
    tag:    "Alumni",
    type:   "alumni",
  },
];
