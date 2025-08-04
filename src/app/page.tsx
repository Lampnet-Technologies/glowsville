
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import ServicesOverview from "@/components/ServicesOverview";
import CaseStudySection from "@/components/CaseStudySection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactSection />
      <ExcellenceSection />
      <ServicesOverview />
      <section id="casestudy">
      <CaseStudySection />
      </section>
      <ContactCTA />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
