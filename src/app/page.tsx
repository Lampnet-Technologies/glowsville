
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudySection from "@/components/CaseStudySection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactSection />
      <ExcellenceSection />
      <ServicesOverview />
      <CaseStudySection />
      <ContactCTA />
    </>
  );
}
