import Link from "next/link";
import {
  SCHOOL_INFO,
  SCHOOL_STATS,
  SERVICE_CARDS,
  DASHBOARD_CARDS,
  EVENTS,
  ANNOUNCEMENTS,
  PEOPLE,
} from "@/data/constants";

// ─── Hero Section ───
export function HeroSection() {
  return (
    <section className="hero">
      {/* Dekorasi lingkaran latar */}
      <div className="hero__bg-deco" aria-hidden="true">
        <div className="hero__bg-circle hero__bg-circle--1" />
        <div className="hero__bg-circle hero__bg-circle--2" />
      </div>

      <div className="hero__inner container">
        {/* Konten Utama */}
        <div className="hero__content">
          <div className="hero__eyebrow">✦ {SCHOOL_INFO.tagline} Terpadu</div>

          <h1 className="hero__title">
            {SCHOOL_INFO.motto.split(",")[0]}, <em>{SCHOOL_INFO.motto.split(",")[1]}</em>,
            <br />dan {SCHOOL_INFO.motto.split(",")[2]}
          </h1>

          <p className="hero__desc">
            Mewujudkan generasi unggul yang berakhlak mulia, berprestasi
            akademik, dan siap menghadapi tantangan global dengan landasan
            nilai-nilai Islam.
          </p>

          <div className="hero__cta">
            <Link href="/ppdb" className="btn btn--primary btn--lg">
              📝 Daftar PPDB 2025
            </Link>
            <Link href="/about" className="btn btn--outline-white btn--lg">
              Pelajari Lebih Lanjut →
            </Link>
          </div>
        </div>

        {/* Statistik */}
        <div className="hero__stats">
          {SCHOOL_STATS.map((stat, idx) => (
            <div key={idx} className="hero__stat">
              <span className="hero__stat-num">{stat.num}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Kartu Layanan Utama ───
export function ServiceCards() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Layanan Utama</span>
          <h2>Informasi & Layanan</h2>
          <div className="section-rule" />
          <p className="subtitle">
            Akses cepat ke layanan akademik, pendaftaran, dan portal siswa
          </p>
        </div>

        <div className="services-grid">
          {SERVICE_CARDS.map((card, idx) => (
            <Link key={idx} href={card.href} className="card">
              <div className={`card__icon card__icon--${card.iconType}`}>
                {card.icon}
              </div>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__desc">{card.desc}</p>
              <div className="card__footer">
                <span className={`badge badge--${card.badgeType}`}>
                  {card.badge}
                </span>
                <span className="card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Kartu Dashboard Ringkasan ───
export function DashboardCards() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Dashboard</span>
          <h2>Ringkasan Kegiatan</h2>
          <div className="section-rule" />
        </div>

        <div className="info-cards-grid">
          {DASHBOARD_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`card card--${card.variant}`}
              data-emoji={card.emoji}
            >
              <span className="card__count">{card.count}</span>
              <div className="card__title">{card.title}</div>
              <p className="card__desc">{card.desc}</p>
              <Link href={card.href} className="card__link">
                {card.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section Event & Pengumuman ───
export function EventsAndAnnouncements() {
  return (
    <section className="section">
      <div className="container">
        <div className="events-layout">

          {/* Kolom kiri: Event */}
          <div>
            <div className="section-header">
              <span className="eyebrow">Kalender</span>
              <h2>Event & Kegiatan</h2>
              <div className="section-rule" />
            </div>

            <div className="event-list">
              {EVENTS.map((event, idx) => (
                <div key={idx} className="event-item">
                  <div className="event-item__date">
                    <span className="event-item__day">{event.day}</span>
                    <span className="event-item__month">{event.month}</span>
                  </div>
                  <div className="event-item__content">
                    <span className="event-item__tag">{event.tag}</span>
                    <h4 className="event-item__title">{event.title}</h4>
                    <p className="event-item__desc">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/event" className="btn btn--outline-blue" style={{ marginTop: "24px" }}>
              Lihat Semua Kegiatan →
            </Link>
          </div>

          {/* Kolom kanan: Pengumuman */}
          <div>
            <div className="section-header">
              <span className="eyebrow">Terbaru</span>
              <h2>Pengumuman</h2>
              <div className="section-rule" />
            </div>

            <div className="announcement-list">
              {ANNOUNCEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className={`announcement-item announcement-item--${item.variant}`}
                >
                  <div className="announcement-item__date">{item.date}</div>
                  <div className="announcement-item__title">{item.title}</div>
                  <p className="announcement-item__desc">{item.desc}</p>
                </div>
              ))}

              <Link href="/pengumuman" className="btn btn--outline-blue" style={{ textAlign: "center", marginTop: "8px" }}>
                Lihat Semua Pengumuman →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Section Guru & Alumni ───
export function PeopleSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Komunitas</span>
          <h2>Tenaga Pendidik & Alumni</h2>
          <div className="section-rule" />
        </div>

        <div className="people-grid">
          {PEOPLE.map((person, idx) => (
            <div key={idx} className="person-card">
              <div className="person-card__avatar">{person.avatar}</div>
              <div className="person-card__name">{person.name}</div>
              <div className="person-card__role">{person.role}</div>
              <div className="person-card__tag">{person.tag}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "32px", justifyContent: "center" }}>
          <Link href="/guru" className="btn btn--outline-blue">
            Lihat Semua Guru →
          </Link>
          <Link href="/alumni" className="btn btn--outline-blue">
            Lihat Alumni →
          </Link>
        </div>
      </div>
    </section>
  );
}
