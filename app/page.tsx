import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { USPSection } from "../components/USPSection";
import { AboutSection } from "../components/AboutSection";
import { BestSellers } from "../components/BestSellers";
import { ServicesList } from "../components/ServicesList";
import { LeadGen } from "../components/LeadGen";
import { Footer } from "../components/Footer";
import { FinalInvitation } from "../components/FinalInvitation";
import { ServicesPage } from "../components/ServicesPage";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#E5E1DE] selection:bg-[#C5A27D] selection:text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <USPSection />
      <AboutSection />
      <BestSellers />
      <ServicesList />
      <LeadGen />
      <FinalInvitation />
      <Footer/>
    </div>
  );
}