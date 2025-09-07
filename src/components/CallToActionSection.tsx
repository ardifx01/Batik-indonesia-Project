import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, Users, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: BookOpen,
      title: "Pelajari Batik",
      description: "Mulai perjalanan Anda untuk memahami keindahan dan filosofi batik Indonesia",
      action: "Mulai Belajar",
      color: "orange",
      aksi: () => navigate("/sejarah"),
    },
    {
      icon: Share2,
      title: "Sebarkan Warisan",
      description: "Bagikan keindahan batik kepada dunia melalui media sosial dan komunitas",
      action: "Bagikan Sekarang",
      color: "purple",
      aksi: () => {
        window.open("https://wa.me/6282244594151", "_blank");
      },
    },
    {
      icon: Users,
      title: "Gabung Komunitas",
      description: "Bergabunglah dengan komunitas pecinta batik dari seluruh Indonesia",
      action: "Gabung Komunitas",
      color: "turquoise",
      aksi: () => {
        window.open("https://wa.me/6282244594151", "_blank");
      },
    },
    {
      icon: Heart,
      title: "Dukung Pengrajin",
      description: "Dukung pengrajin batik lokal dengan membeli produk batik asli Indonesia",
      action: "Beli Batik Asli",
      color: "pink",
      aksi: () => navigate("/beli-batik"),
    },
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mari Lestarikan <span className="text-orange">Warisan Batik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Batik adalah milik kita bersama. Setiap tindakan kecil Anda berkontribusi dalam melestarikan warisan budaya tak ternilai ini untuk generasi mendatang.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {actions.map((action, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border">
              <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-${action.color} rounded-full flex items-center justify-center`}>
                <action.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{action.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{action.description}</p>
              <Button onClick={() => action.aksi()} variant="contact" className="w-full">
                {action.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center border border-border mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">Batik untuk Indonesia yang Lebih Baik</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Dengan melestarikan batik, kita tidak hanya menjaga tradisi, tetapi juga memberdayakan ekonomi kreatif dan identitas budaya bangsa.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-orange">1M+</div>
              <div className="text-sm text-muted-foreground">Pengrajin Batik</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple">500K+</div>
              <div className="text-sm text-muted-foreground">Keluarga Terdampak</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-turquoise">$2.8B</div>
              <div className="text-sm text-muted-foreground">Kontribusi Ekonomi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink">34</div>
              <div className="text-sm text-muted-foreground">Provinsi</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="contact" size="xl">
              Mulai Aksi Sekarang
            </Button>
            <Button variant="outline" size="xl">
              Pelajari Dampaknya
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-orange text-white border-0">
            <h4 className="text-xl font-bold mb-4">Untuk Generasi Muda</h4>
            <p className="text-sm opacity-90 mb-6">Ajak generasi muda untuk mencintai dan melestarikan batik sebagai identitas budaya.</p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Program Edukasi
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-purple text-white border-0">
            <h4 className="text-xl font-bold mb-4">Untuk Pengrajin</h4>
            <p className="text-sm opacity-90 mb-6">Dukung pengrajin batik dengan membeli produk asli dan mengapresiasi karya mereka.</p>
            <Button onClick={() => navigate("/beli-batik")} variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Beli Batik Asli
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-turquoise text-white border-0">
            <h4 className="text-xl font-bold mb-4">Untuk Dunia</h4>
            <p className="text-sm opacity-90 mb-6">Perkenalkan keindahan batik Indonesia kepada dunia internasional.</p>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Share ke Dunia
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
