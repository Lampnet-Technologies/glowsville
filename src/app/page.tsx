// File: /src/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import ServicesOverview from "@/components/ServicesOverview";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactSection />
      <ExcellenceSection />
      <ServicesOverview />
    </>
  );
}
