import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-student.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Education for a{" "}
              <span className="text-purple">Brighter Indonesia</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Our programs are designed to make quality education accessible, engaging, 
              and inspiring for every student in Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button variant="contact" size="xl">
                Contact
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-6 text-foreground">
                <div>
                  <div className="text-3xl font-bold text-orange">100+</div>
                  <div className="text-sm text-muted-foreground">Educational Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple">2M+</div>
                  <div className="text-sm text-muted-foreground">Students Reached</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Indonesian student with educational materials"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-orange rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-purple rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;