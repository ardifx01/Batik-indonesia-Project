import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import MotifSection from "@/components/MotifSection";
import CulturalValueSection from "@/components/CulturalValueSection";
import ModernBatikSection from "@/components/ModernBatikSection";

import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-behavior-smooth">
      <Header />
      <Hero />
      <AboutSection />
      <HistorySection />
      <MotifSection />
      <CulturalValueSection />
      <ModernBatikSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
