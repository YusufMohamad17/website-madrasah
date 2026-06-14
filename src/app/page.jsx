import {
  HeroSection,
  ServiceCards,
  DashboardCards,
  EventsAndAnnouncements,
  PeopleSection,
} from "@/components/home/Sections";

export const metadata = {
  title: "Beranda",
  description:
    "Selamat datang di website resmi MAN 1 Kota Contoh — informasi akademik, PPDB, event, dan layanan siswa.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <DashboardCards />
      <EventsAndAnnouncements />
      <PeopleSection />
    </>
  );
}
