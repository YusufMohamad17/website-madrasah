/** @type {import('next').NextConfig} */
const nextConfig = {
  // Diperlukan untuk deploy ke Cloudflare Pages
  output: "export",

  // Nonaktifkan optimasi gambar Next.js (tidak didukung di Cloudflare Pages static export)
  images: {
    unoptimized: true,
  },

  // Trailing slash agar routing berfungsi di Cloudflare Pages
  trailingSlash: true,

  // Path alias agar @/components bekerja
  experimental: {
    // Aktifkan jika menggunakan fitur terbaru Next.js
  },
};

module.exports = nextConfig;
