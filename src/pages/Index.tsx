import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import MotifSection from "@/components/MotifSection";
import CulturalValueSection from "@/components/CulturalValueSection";
import ModernBatikSection from "@/components/ModernBatikSection";
import AOS from "aos";
import { useEffect } from "react";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
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
