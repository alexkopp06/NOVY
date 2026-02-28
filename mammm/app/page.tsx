// 1. OPRAVA IMPORTŮ - Tady byl ten největší zásek
import { HeroSection } from "@/components/Hero"; // Přidány složené závorky zpět
import ServicesSection from "@/components/ServicesSection"; // Default import pro robota
import { StatsSection } from "@/components/StatsSection"; // Přidány složené závorky
import { AboutSection } from "@/components/AboutSection"; // Přidány složené závorky

export default function Home() {
  return (
    <main className="min-h-screen w-full antialiased selection:bg-blue-600 selection:text-white bg-black">
      {/* Všechny tvoje sekce přesně tak, jak mají být za sebou */}
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
    </main>
  );
}