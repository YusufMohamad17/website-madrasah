import Link from "next/link";
import {
  SCHOOL_INFO,
  FOOTER_MENU_AKADEMIK,
  FOOTER_MENU_INFO,
} from "@/data/constants";

// ─── Tombol Sosial Media ───
function SocialButton({ href, title, icon }) {
  return (
    <a
      href={href}
      className="social-btn"
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
    >
      {icon}
    </a>
  );
}

// ─── Kolom Link Footer ───
function FooterCol({ title, links }) {
  return (
    <div className="footer__col">
      <h4>{title}</h4>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Komponen Utama Footer ───
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, tagline, logo, address, phone, whatsapp, email, domain, socialMedia } =
    SCHOOL_INFO;

  return (
    <footer className="footer">
      <div className="footer__grid">

        {/* Kolom Brand */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <div className="footer__logo-badge">{logo}</div>
            <div>
              <span className="footer__school-name">{name}</span>
              <span className="footer__school-sub">{tagline}</span>
            </div>
          </Link>
          <p>
            Membentuk insan cendekia yang beriman, bertaqwa, dan berdaya
            saing global melalui pendidikan Islam terpadu.
          </p>

          {/* Sosial Media */}
          <div className="footer__social">
            <SocialButton href={socialMedia.facebook}  title="Facebook"  icon="f" />
            <SocialButton href={socialMedia.instagram} title="Instagram" icon="📷" />
            <SocialButton href={socialMedia.youtube}   title="YouTube"   icon="▶" />
            <SocialButton href={socialMedia.twitter}   title="Twitter/X" icon="𝕏" />
            <SocialButton href={socialMedia.whatsapp}  title="WhatsApp"  icon="💬" />
          </div>
        </div>

        {/* Kolom Akademik */}
        <FooterCol title="Akademik" links={FOOTER_MENU_AKADEMIK} />

        {/* Kolom Informasi */}
        <FooterCol title="Informasi" links={FOOTER_MENU_INFO} />

        {/* Kolom Kontak */}
        <div className="footer__col">
          <h4>Hubungi Kami</h4>
          <div className="footer__contact">
            <div className="contact-item">
              <span className="contact-item__icon">📍</span>
              <span>{address}</span>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">📞</span>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">💬</span>
              <a
                href={socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {whatsapp} (WA)
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">✉️</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>

      </div>

      {/* Baris Bawah */}
      <div className="footer__bottom">
        <span>
          © {currentYear} {name} ·{" "}
          <a href={`https://${domain}`} target="_blank" rel="noopener noreferrer">
            {domain}
          </a>
        </span>
        <span>Built with ❤️ Next.js + Cloudflare</span>
      </div>
    </footer>
  );
}
