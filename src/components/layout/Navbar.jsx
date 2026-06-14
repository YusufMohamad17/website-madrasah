"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SCHOOL_INFO, MENU_ITEMS, TICKER_TEXT } from "@/data/constants";

// ─── Komponen Logo ───
function Logo({ inFooter = false }) {
  return (
    <Link href="/" className="navbar__logo">
      <div className="navbar__logo-badge">
        {SCHOOL_INFO.logo}
      </div>
      <div className="navbar__logo-text">
        <span className={`navbar__school-name ${inFooter ? "text-white" : ""}`}>
          {SCHOOL_INFO.name}
        </span>
        <span className="navbar__school-sub">
          {SCHOOL_INFO.tagline}
        </span>
      </div>
    </Link>
  );
}

// ─── Komponen Hamburger Menu ───
function HamburgerMenu({ isOpen, onToggle, onClose }) {
  const pathname = usePathname();

  return (
    <div className={`menu-overlay ${isOpen ? "is-open" : ""}`}>
      {/* Backdrop */}
      <div className="menu-overlay__backdrop" onClick={onClose} />

      {/* Panel */}
      <div className="menu-overlay__panel" role="dialog" aria-label="Menu navigasi">
        <button
          className="menu-overlay__close"
          onClick={onClose}
          aria-label="Tutup menu"
        >
          ✕
        </button>

        <h3 className="menu-overlay__title">Menu Utama</h3>

        <nav className="menu-items">
          {MENU_ITEMS.map((item, idx) => {
            // Render garis pemisah
            if (item.divider) {
              return <div key={idx} className="menu-divider" />;
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={idx}
                href={item.href}
                className={`menu-item ${isActive ? "is-active" : ""}`}
                onClick={onClose}
              >
                <span className="menu-item__icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

// ─── Komponen Utama Navbar ───
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Tutup menu saat tekan Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Cegah scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: arahkan ke halaman hasil pencarian
      console.log("Cari:", searchQuery);
    }
  }

  return (
    <>
      {/* Ticker Pengumuman */}
      <div className="ticker">
        <div className="ticker__inner">
          <span className="ticker__label">🔔 Pengumuman</span>
          <span className="ticker__text">{TICKER_TEXT}</span>
        </div>
      </div>

      {/* Navbar Utama */}
      <header className="navbar">
        <div className="navbar__inner">
          {/* Logo kiri */}
          <Logo />

          {/* Kanan: Search + Hamburger */}
          <div className="navbar__right">
            {/* Search */}
            <form className="search-bar" onSubmit={handleSearch}>
              <span className="search-bar__icon">🔍</span>
              <input
                type="text"
                className="search-bar__input"
                placeholder="Cari informasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Cari"
              />
            </form>

            {/* Tombol Menu */}
            <button
              className={`hamburger-btn ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
            >
              <div className="hamburger-icon" aria-hidden="true">
                <span className="hamburger-icon__line" />
                <span className="hamburger-icon__line" />
                <span className="hamburger-icon__line" />
              </div>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <HamburgerMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((o) => !o)}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export { Logo };
