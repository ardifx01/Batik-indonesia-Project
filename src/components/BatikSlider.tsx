import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import batikJawa from "@/assets/batik-jawa.jpg";
import batikPekalongan from "@/assets/batik-pekalongan.jpg";
import batikCirebon from "@/assets/batik-cirebon.jpg";
import batikBali from "@/assets/batik-bali.jpg";

const slides = [
  {
    image: batikJawa,
    title: "Batik Jawa",
    text: "Motif parang, kawung, dan truntum dari Jawa melambangkan kebijaksanaan, keteguhan, dan kasih sayang abadi."
  },
  {
    image: batikPekalongan,
    title: "Batik Pekalongan",
    text: "Pekalongan dikenal dengan batik pesisir yang penuh warna cerah, dipengaruhi budaya Tionghoa dan Arab."
  },
  {
    image: batikCirebon,
    title: "Batik Cirebon",
    text: "Motif mega mendung dari Cirebon melambangkan kesabaran, ketenangan, dan kebesaran jiwa."
  },
  {
    image: batikBali,
    title: "Batik Bali",
    text: "Batik Bali identik dengan motif flora dan fauna, terinspirasi dari keindahan alam serta nilai spiritual."
  }
];

const BatikSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ragam Budaya Batik Nusantara
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Setiap daerah di Indonesia memiliki batik khas yang mencerminkan nilai, cerita, dan filosofi kehidupan masyarakatnya.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          <div className="relative h-96 md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  </div>
                  <div className="flex items-center justify-center p-8 md:p-12 bg-gradient-to-br from-background/95 to-muted/95">
                    <div className="text-center md:text-left space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {slide.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatikSlider;