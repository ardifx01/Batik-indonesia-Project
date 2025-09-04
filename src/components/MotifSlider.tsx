import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MotifSliderItem {
  name: string;
  description: string;
  image: string;
}

interface MotifSliderProps {
  title: string;
  content: string;
  items: MotifSliderItem[];
  autoplay?: boolean;
}

const MotifSlider = ({ title, content, items, autoplay = true }: MotifSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {content}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up" data-aos-delay="200">
          <div className="relative h-96 md:h-[400px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide 
                    ? "opacity-100 transform translate-x-0" 
                    : index < currentSlide 
                      ? "opacity-0 transform -translate-x-full"
                      : "opacity-0 transform translate-x-full"
                }`}
              >
                <Card className="h-full border-0 bg-card shadow-xl">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                    </div>
                    <CardContent className="flex items-center justify-center p-8 md:p-12">
                      <div className="text-center md:text-left space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
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

export default MotifSlider;