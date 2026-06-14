import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: "MAN 1 Kota Contoh",
    template: "%s | MAN 1 Kota Contoh",
  },
  description:
    "Website resmi Madrasah Aliyah Negeri 1 Kota Contoh — Bersama Ilmu, Iman, dan Amal.",
  keywords: ["madrasah", "MAN", "sekolah Islam", "PPDB", "pendidikan"],
  openGraph: {
    title: "MAN 1 Kota Contoh",
    description: "Website resmi Madrasah Aliyah Negeri 1 Kota Contoh",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
