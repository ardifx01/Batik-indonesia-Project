import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
const batikImages = ["/src/assets/hero-student.jpg", "/images/batik2.jpg", "/images/batik3.jpg"];
const GaleriPage = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % batikImages.length);
    }, 5000); // ganti tiap 5 detik

    return () => clearInterval(interval);
  }, []);

  const motifs = [
    {
      name: "Parang",
      region: "Yogyakarta & Solo",
      philosophy: "Keberanian dan Kekuatan",
      description: "Motif diagonal yang melambangkan ombak laut yang tak pernah putus, mewakili semangat yang pantang menyerah dan keberanian menghadapi tantangan hidup.",
      detailedContent:
        "Motif parang memiliki pola diagonal berulang yang menyerupai gelombang laut. Dalam filosofi Jawa, parang melambangkan kekuatan yang tidak pernah putus dan keberanian dalam menghadapi berbagai rintangan hidup. Motif ini sering digunakan dalam upacara adat dan acara formal sebagai simbol kepemimpinan.",
      color: "orange",
      pattern: "Diagonal berulang",
      usage: "Upacara formal, kepemimpinan",
    },
    {
      name: "Kawung",
      region: "Jawa Tengah",
      philosophy: "Kesucian dan Keluhuran",
      description: "Motif berbentuk bulat yang terinspirasi dari buah aren, melambangkan kesucian hati dan pikiran serta harmoni dalam kehidupan.",
      detailedContent:
        "Kawung adalah salah satu motif tertua dalam tradisi batik Jawa. Bentuk geometris yang elegan ini terinspirasi dari irisan buah aren (kawung) dan melambangkan kesucian, keluhuran budi, serta harmoni dalam kehidupan. Motif ini sering digunakan dalam berbagai upacara spiritual dan keagamaan.",
      color: "purple",
      pattern: "Lingkaran geometris",
      usage: "Upacara spiritual, keagamaan",
    },
    {
      name: "Mega Mendung",
      region: "Cirebon",
      philosophy: "Kesabaran dan Ketenangan",
      description: "Motif awan yang melambangkan kesabaran dalam menghadapi badai kehidupan dan harapan akan datangnya kesejukan setelah panas terik.",
      detailedContent:
        "Megamendung berasal dari daerah Cirebon dan menggambarkan bentuk awan yang berlapis-lapis. Motif ini melambangkan kesabaran, ketenangan, dan harapan. Dalam filosofi Jawa, awan yang menutupi matahari memberikan kesejukan, sama seperti kesabaran yang membawa kedamaian dalam hidup.",
      color: "turquoise",
      pattern: "Awan berlapis",
      usage: "Kehidupan sehari-hari, simbol kesabaran",
    },
    {
      name: "Truntum",
      region: "Yogyakarta",
      philosophy: "Cinta yang Tumbuh",
      description: "Motif bunga yang melambangkan cinta kasih yang terus tumbuh dan berkembang, serta harapan akan kebahagiaan yang abadi.",
      detailedContent:
        "Truntum memiliki pola bunga-bunga kecil yang tersebar merata, melambangkan cinta kasih yang tumbuh dan berkembang. Motif ini sering digunakan dalam upacara pernikahan sebagai simbol harapan agar cinta pasangan terus tumbuh dan berkembang sepanjang masa.",
      color: "pink",
      pattern: "Bunga kecil tersebar",
      usage: "Upacara pernikahan, simbol cinta",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {batikImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${img})` }} />
          ))}
          <div className="absolute inset-0 bg-black/40" /> {/* overlay biar teks tetap terbaca */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
            Galeri <span className="text-turquoise">Motif Batik</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Jelajahi keindahan dan filosofi mendalam di balik setiap motif batik. Setiap goresan memiliki makna yang tersimpan dalam kearifan lokal nusantara.
          </p>
        </div>
      </section>

      {/* Motif Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {motifs.map((motif, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className={`bg-gradient-to-r from-${motif.color}/20 to-${motif.color}/10 border-b border-border`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">{motif.name}</CardTitle>
                      <Badge variant="outline" className="mb-2">
                        {motif.region}
                      </Badge>
                    </div>
                    <div className={`w-16 h-16 bg-${motif.color} rounded-full flex items-center justify-center`}>
                      <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className={`text-lg font-semibold text-${motif.color} mb-2`}>Filosofi: {motif.philosophy}</h4>
                      <p className="text-foreground font-medium mb-3">{motif.description}</p>
                    </div>

                    <div className="bg-secondary/20 rounded-lg p-4">
                      <p className="text-sm text-secondary-foreground leading-relaxed">{motif.detailedContent}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-secondary-foreground">Pola:</span>
                        <p className="text-muted-foreground">{motif.pattern}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-secondary-foreground">Penggunaan:</span>
                        <p className="text-muted-foreground">{motif.usage}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-foreground mb-6">Kekayaan Motif Nusantara</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Indonesia memiliki ribuan motif batik yang tersebar di seluruh nusantara. Setiap daerah memiliki ciri khas dan filosofi yang unik, mencerminkan kearifan lokal dan nilai-nilai budaya setempat yang telah diwariskan
                turun-temurun.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">3000+</div>
                  <div className="text-sm text-muted-foreground">Motif Tradisional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple mb-2">34</div>
                  <div className="text-sm text-muted-foreground">Provinsi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-turquoise mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Daerah Penghasil</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Makna Filosofi</div>
                </div>
              </div>

              <Button variant="contact" size="lg">
                Lihat Motif Lainnya
              </Button>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gradient-hero rounded-2xl p-8 border border-border">
                <h4 className="text-xl font-bold text-foreground mb-6">Fakta Menarik</h4>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Setiap motif batik memiliki aturan penggunaan berdasarkan acara dan status sosial</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Motif Parang Rusak hanya boleh digunakan oleh keluarga keraton</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Proses membuat satu kain batik tulis bisa memakan waktu 2-6 bulan</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>UNESCO mengakui batik sebagai Warisan Budaya Takbenda pada tahun 2009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GaleriPage;
