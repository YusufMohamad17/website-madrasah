# 🕌 Website Madrasah — Struktur Project

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom CSS Modules
- **Deploy**: Cloudflare Pages
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2
- **Session**: Cloudflare KV
- **AI**: Cloudflare Workers AI

---

## 📁 Struktur Folder Lengkap

```
website-madrasah/
│
├── 📄 package.json          ← Dependensi & skrip
├── 📄 next.config.js        ← Konfigurasi Next.js
├── 📄 wrangler.toml         ← Konfigurasi Cloudflare
├── 📄 jsconfig.json         ← Alias path (@/...)
├── 📄 .gitignore
│
├── 📁 public/
│   ├── logo-madrasah.png    ← Logo sekolah (ganti emoji)
│   └── favicon.ico
│
└── 📁 src/
    │
    ├── 📁 app/              ← Halaman (Next.js App Router)
    │   ├── globals.css      ← TITIK MASUK CSS (import semua)
    │   ├── layout.jsx       ← Layout root (Navbar + Footer)
    │   ├── page.jsx         ← Beranda /
    │   │
    │   ├── 📁 ppdb/
    │   │   └── page.jsx     ← /ppdb
    │   │
    │   ├── 📁 siswa/
    │   │   └── page.jsx     ← /siswa (portal)
    │   │
    │   ├── 📁 ujian/
    │   │   └── page.jsx     ← /ujian (koreksi soal)
    │   │
    │   ├── 📁 pengumuman/
    │   │   └── page.jsx     ← /pengumuman
    │   │
    │   ├── 📁 event/
    │   │   └── page.jsx     ← /event
    │   │
    │   ├── 📁 about/
    │   │   └── page.jsx     ← /about
    │   │
    │   ├── 📁 api/          ← API Routes (backend)
    │   │   ├── 📁 siswa/
    │   │   │   └── route.js ← GET/POST /api/siswa
    │   │   ├── 📁 ppdb/
    │   │   │   └── route.js ← GET/POST /api/ppdb
    │   │   ├── 📁 soal/
    │   │   │   └── route.js ← GET/POST /api/soal
    │   │   └── 📁 koreksi/
    │   │       └── route.js ← POST /api/koreksi (AI)
    │   │
    │   └── 📁 admin/
    │       └── 📁 dashboard/
    │           └── page.jsx ← /admin/dashboard
    │
    ├── 📁 components/
    │   ├── 📁 layout/
    │   │   ├── Navbar.jsx   ← Header + menu hamburger
    │   │   └── Footer.jsx   ← Footer + sosial media
    │   │
    │   ├── 📁 home/
    │   │   └── Sections.jsx ← Hero, Services, Events, People
    │   │
    │   └── 📁 ui/           ← (shadcn/ui — generate otomatis)
    │
    ├── 📁 styles/           ← FILE CSS TERPISAH
    │   ├── variables.css    ← Token warna, font, spacing
    │   ├── base.css         ← Reset & tipografi
    │   ├── components.css   ← Tombol, kartu, badge, form
    │   ├── navbar.css       ← Navbar & hamburger menu
    │   ├── footer.css       ← Footer
    │   ├── home.css         ← Halaman beranda
    │   ├── ppdb.css         ← Halaman PPDB
    │   ├── admin.css        ← Dashboard admin
    │   └── (tambah halaman baru di sini)
    │
    ├── 📁 data/
    │   └── constants.js     ← Nama sekolah, menu, data statis
    │
    └── 📁 lib/              ← Utilitas & koneksi DB
        ├── db.js            ← Koneksi Cloudflare D1
        ├── r2.js            ← Upload ke Cloudflare R2
        ├── kv.js            ← Session dengan KV
        └── ai.js            ← Koreksi soal Workers AI
```

---

## 🎨 Sistem CSS

Semua CSS diimpor melalui `src/app/globals.css` dengan urutan:

```
1. variables.css   → Token desain (warna, font)
2. base.css        → Reset & elemen dasar
3. components.css  → UI komponen reusable
4. navbar.css      → Navigasi
5. footer.css      → Footer
6. home.css        → Halaman beranda
7. ppdb.css        → PPDB
8. admin.css       → Admin dashboard
   ...dst
```

### Cara Menambah Halaman Baru:
1. Buat file `src/styles/namahalaman.css`
2. Tambahkan `@import './namahalaman.css'` di `globals.css`
3. Buat `src/app/namahalaman/page.jsx`

---

## ✏️ Cara Ubah Identitas Sekolah

Edit **satu file** saja: `src/data/constants.js`

```js
export const SCHOOL_INFO = {
  name:     "MAN 1 Kota Contoh",   ← ubah ini
  tagline:  "Madrasah Aliyah Negeri",
  motto:    "Bersama Ilmu, Iman, dan Amal",
  phone:    "(021) 123-4567",       ← ubah ini
  // ...dst
};
```

---

## 🚀 Perintah Dasar

```bash
npm run dev     # Jalankan lokal di localhost:3000
npm run build   # Build untuk production
npm run deploy  # Build + deploy ke Cloudflare
```

---

## 📄 Cara Tambah Halaman Baru

Contoh: membuat halaman Galeri (`/galeri`)

```bash
# 1. Buat file CSS
touch src/styles/galeri.css

# 2. Tambahkan import di globals.css
echo "@import './galeri.css';" >> src/app/globals.css

# 3. Buat folder & file halaman
mkdir src/app/galeri
touch src/app/galeri/page.jsx
```

Isi `page.jsx` minimal:
```jsx
import "@/styles/galeri.css";

export const metadata = { title: "Galeri" };

export default function GaleriPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Galeri</h1>
      </div>
    </section>
  );
}
```
