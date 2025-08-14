import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, Monitor, Heart } from "lucide-react";

const programs = [
  {
    title: "STEM Education",
    icon: Brain,
    gradient: "bg-gradient-pink",
    shadow: "shadow-lg hover:shadow-pink"
  },
  {
    title: "Teacher Training", 
    icon: Users,
    gradient: "bg-gradient-orange",
    shadow: "shadow-lg hover:shadow-orange"
  },
  {
    title: "Digital Literacy",
    icon: Monitor,
    gradient: "bg-gradient-turquoise", 
    shadow: "shadow-lg hover:shadow-lg"
  },
  {
    title: "Community Learning",
    icon: Heart,
    gradient: "bg-gradient-purple",
    shadow: "shadow-lg hover:shadow-purple"
  }
];

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Browse Top Essential Educational Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index}
                className={`p-8 text-center ${program.gradient} ${program.shadow} border-0 transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {program.title}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="browse" size="sm">
            Browse All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;