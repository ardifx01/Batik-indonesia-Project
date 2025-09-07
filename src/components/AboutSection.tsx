import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Warisan Turun Temurun",
      description: "Batik telah diwariskan dari generasi ke generasi dengan teknik dan filosofi yang mendalam.",
    },
    {
      icon: Sparkles,
      title: "Seni yang Hidup",
      description: "Setiap motif batik memiliki makna spiritual dan cerita yang menghubungkan kita dengan leluhur.",
    },
    {
      icon: Globe,
      title: "Diakui UNESCO",
      description: "Batik Indonesia telah diakui UNESCO sebagai Karya Agung Warisan Lisan dan Tak Benda Dunia.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mengapa Batik <span className="text-orange">Istimewa?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Batik bukan sekadar kain bermotif. Ini adalah perwujudan filosofi hidup, spiritualitas, dan identitas budaya yang telah mengakar dalam jiwa bangsa Indonesia selama berabad-abad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" data-aos="fade-left" data-aos-duration="500">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center border-b-2 border-orange ">
          <h3 className="text-3xl font-bold text-foreground mb-4">Setiap Motif Bercerita</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto ">
            Dari motif parang yang melambangkan keberanian, hingga kawung yang mewakili kesucian. Batik adalah bahasa visual yang menyampaikan nilai-nilai luhur nenek moyang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
