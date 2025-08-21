import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MotifSection = () => {
  const motifs = [
    {
      name: "Parang",
      region: "Yogyakarta & Solo",
      philosophy: "Keberanian dan Kekuatan",
      description: "Motif diagonal yang melambangkan ombak laut yang tak pernah putus, mewakili semangat yang pantang menyerah.",
      color: "orange",
      pattern: "Diagonal berulang",
    },
    {
      name: "Kawung",
      region: "Jawa Tengah",
      philosophy: "Kesucian dan Keluhuran",
      description: "Motif berbentuk bulat yang terinspirasi dari buah aren, melambangkan kesucian hati dan pikiran.",
      color: "purple",
      pattern: "Lingkaran geometris",
    },
    {
      name: "Mega Mendung",
      region: "Cirebon",
      philosophy: "Kesabaran dan Ketenangan",
      description: "Motif awan yang melambangkan kesabaran dalam menghadapi badai kehidupan.",
      color: "turquoise",
      pattern: "Awan berlapis",
    },
    {
      name: "Truntum",
      region: "Yogyakarta",
      philosophy: "Cinta yang Tumbuh",
      description: "Motif bunga yang melambangkan cinta kasih yang terus tumbuh dan berkembang.",
      color: "pink",
      background: "blue",
      pattern: "Bunga kecil",
    },
  ];

  return (
    <section className="py-20 bg-background" id="galeri">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Galeri <span className="text-turquoise">Motif Batik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Setiap motif batik memiliki filosofi dan makna yang mendalam. Jelajahi keindahan dan kebijaksanaan yang tersimpan dalam setiap goresan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {motifs.map((motif, index) => (
            <Card key={index} className={`p-6  hover:shadow-lg hover:shadow-${motif.color} transition-all duration-300 border-border  bg-opacity-5 `}>
              <div className="text-center mb-4">
                <div className={`w-20 h-20 mx-auto mb-4 bg-${motif.color} rounded-full flex items-center justify-center`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{motif.name}</h3>
                <Badge variant="outline" className="mb-2">
                  {motif.region}
                </Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className={`text-sm font-semibold text-${motif.color} mb-1`}>Filosofi</h4>
                  <p className="text-sm text-foreground font-medium">{motif.philosophy}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-secondary-foreground mb-1 ">Pola</h4>
                  <p className="text-sm text-secondary-foreground">{motif.pattern}</p>
                </div>

                <p className="text-sm text-secondary-foreground leading-relaxed">{motif.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Lebih dari 3000 Motif Tradisional</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Indonesia memiliki ribuan motif batik yang tersebar di seluruh nusantara. Setiap daerah memiliki ciri khas dan filosofi yang unik, mencerminkan kearifan lokal dan nilai-nilai budaya setempat.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-orange">3000+</div>
                <div className="text-sm text-muted-foreground">Motif Tradisional</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple">34</div>
                <div className="text-sm text-muted-foreground">Provinsi</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-turquoise">100+</div>
                <div className="text-sm text-muted-foreground">Daerah Penghasil</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink">500+</div>
                <div className="text-sm text-muted-foreground">Makna Filosofi</div>
              </div>
            </div>
            <Button variant="contact" size="lg">
              Jelajahi Semua Motif
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">Tahukah Anda?</h4>
              <div className="space-y-4 text-muted-foreground">
                <p>• Motif Parang Rusak hanya boleh digunakan oleh keluarga keraton</p>
                <p>• Setiap motif memiliki aturan penggunaan berdasarkan acara dan status</p>
                <p>• Proses membuat satu kain batik tulis bisa memakan waktu 2-6 bulan</p>
                <p>• Warna tradisional batik menggunakan pewarna alami dari tumbuhan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotifSection;
