import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shirt, Briefcase, Sparkles, Palette } from "lucide-react";

const ModernBatikSection = () => {
  const modernApplications = [
    {
      icon: Shirt,
      title: "Fashion Contemporary",
      description: "Batik hadir dalam desain modern untuk dress, blazer, dan aksesori fashion yang trendi.",
      examples: ["Dress Batik Modern", "Blazer Kombinasi", "Tas & Sepatu Batik"],
      color: "orange"
    },
    {
      icon: Briefcase,
      title: "Busana Formal",
      description: "Batik menjadi pilihan utama untuk acara formal, memberikan kesan elegan dan berbudaya.",
      examples: ["Kemeja Kantor", "Jas Batik", "Seragam Corporate"],
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "High Fashion",
      description: "Designer internasional mengadopsi motif batik dalam koleksi haute couture mereka.",
      examples: ["Runway Internasional", "Designer Collaboration", "Luxury Brand"],
      color: "turquoise"
    },
    {
      icon: Palette,
      title: "Fusion Design",
      description: "Perpaduan batik dengan teknik modern menciptakan inovasi baru dalam dunia fashion.",
      examples: ["Digital Print Batik", "Eco-Friendly Batik", "Smart Textile"],
      color: "pink"
    }
  ];

  const trendingStyles = [
    {
      name: "Batik Minimalis",
      description: "Motif batik sederhana dengan warna netral untuk gaya kasual modern",
      popularity: "95%"
    },
    {
      name: "Batik Athleisure",
      description: "Kombinasi batik dengan material sporty untuk aktivitas sehari-hari",
      popularity: "87%"
    },
    {
      name: "Batik Couture",
      description: "Batik premium dengan cutting modern untuk acara formal eksklusif",
      popularity: "92%"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Batik <span className="text-orange">Kontemporer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Melihat bagaimana batik bertransformasi dan beradaptasi dengan dunia fashion modern, 
            tetap mempertahankan nilai tradisional sambil mengikuti tren global.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {modernApplications.map((app, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border">
              <div className={`w-12 h-12 bg-gradient-${app.color} rounded-lg flex items-center justify-center mb-4`}>
                <app.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{app.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{app.description}</p>
              <div className="space-y-2">
                {app.examples.map((example, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs mr-2 mb-1">
                    {example}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Tren Fashion Batik 2024
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Batik terus berkembang mengikuti tren fashion dunia. Dari streetwear hingga haute couture, 
              batik membuktikan fleksibilitasnya dalam berbagai gaya fashion modern.
            </p>
            <div className="space-y-6">
              {trendingStyles.map((style, index) => (
                <div key={index} className="border-l-4 border-orange pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-foreground">{style.name}</h4>
                    <Badge variant="outline">{style.popularity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-purple rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Global Impact</h4>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm opacity-80">Negara Pengimpor</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$2.8B</div>
                <div className="text-sm opacity-80">Export Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Fashion Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-80">Brand Global</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6">
              Batik Indonesia telah menjadi inspirasi bagi designer internasional dan hadir 
              di berbagai fashion week dunia.
            </p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Lihat Koleksi Terbaru
            </Button>
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Sustainable Fashion dengan Batik
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Batik tradisional yang dibuat dengan pewarna alami dan teknik ramah lingkungan 
            menjadi solusi untuk fashion berkelanjutan di era modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="lg">
              Jelajahi Eco-Batik
            </Button>
            <Button variant="outline" size="lg">
              Belajar Membatik
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBatikSection;