import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BatikSlider from "@/components/BatikSlider";
import PhilosophyCards from "@/components/PhilosophyCards";
import ProcessSection from "@/components/ProcessSection";
import BatikTimeline from "@/components/BatikTimeline";
import AOS from "aos";
import heroBudayaBatik from "@/assets/hero-budaya-batik.jpg";

const BudayaTradisiPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBudayaBatik}
            alt="Budaya dan Tradisi Batik Indonesia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Budaya dan <span className="text-orange">Tradisi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium">
              Batik Indonesia
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Menyelami keindahan, makna, dan filosofi batik yang menjadi warisan budaya tak ternilai.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <a href="#slider-batik">
                  Jelajahi Lebih Dalam
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Batik Slider Section */}
      <div id="slider-batik">
        <BatikSlider />
      </div>

      {/* Philosophy Cards Section */}
      <PhilosophyCards />

      {/* Process Section */}
      <ProcessSection />

      {/* Timeline Section */}
      <BatikTimeline />

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lestarikan Budaya Batik
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Mari bersama-sama menjaga dan melestarikan batik sebagai warisan budaya Indonesia yang mendunia.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/sejarah">
              Pelajari Lebih Banyak
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BudayaTradisiPage;