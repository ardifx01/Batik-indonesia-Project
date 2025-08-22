import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import batik from "@/assets/batik_megamendung.glb";
const EcoBatikPage = () => {
  const sustainableFeatures = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Pewarna Alami",
      description: "Menggunakan ekstrak tumbuhan dan mineral alami yang tidak merusak lingkungan",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-600" />,
      title: "Zero Waste Process",
      description: "Teknik tradisional yang memanfaatkan setiap bagian bahan tanpa limbah berlebih",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Handmade dengan Cinta",
      description: "Setiap karya dibuat dengan tangan oleh pengrajin yang berpengalaman turun-temurun",
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Dampak Global Positif",
      description: "Mendukung ekonomi lokal sambil menjaga kelestarian budaya dan lingkungan",
      color: "from-purple-500/20 to-indigo-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 text-center bg-gradient-to-b from-background to-accent/5" id="budaya_tradisi">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-orange bg-clip-text text-transparent leading-tight">Sustainable Fashion dengan Batik</h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Batik tradisional yang dibuat dengan pewarna alami dan teknik ramah lingkungan menjadi solusi untuk fashion berkelanjutan di era modern.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button variant="hero" size="xl" className="hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              Jelajahi Eco-Batik
            </Button>
            <Button variant="outline" size="xl" className="hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              Pelajari Proses
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainable Features Section */}
      <section className="py-20 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Mengapa Eco-Batik?</h3>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">Menggabungkan kearifan tradisional dengan prinsip sustainability modern</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainableFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-orange hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-accent/10" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Belajar Membatik Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <model-viewer src={batik} alt="Batik 3D Model" auto-rotate camera-controls style={{ width: "100%", height: "100vh" }}></model-viewer>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-orange bg-clip-text text-transparent">Belajar Membantik</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Pelajari seni membatik ramah lingkungan dengan menonton video yang sudah disediakan. Dukung fashion berkelanjutan sambil menjaga warisan budaya Indonesia</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-orange rounded-full"></div>
                  <span className="text-foreground">Video Pewarna Alami</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-orange rounded-full"></div>
                  <span className="text-foreground">Video Teknik Canting Tradisional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-orange rounded-full"></div>
                  <span className="text-foreground">Video Motif dan Filosofi Batik</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={() => window.open("https://fitinline.com/article/read/7-langkah-mudah-membuat-kain-batik-dengan-teknik-eco-print-yang-bisa-anda-coba/", "_blank")}
                  variant="hero"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300"
                >
                  Selengkapnya
                </Button>
                <Button onClick={() => window.open("https://www.youtube.com/results?search_query=Belajar+Membatik", "_blank")} variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                  Lihat Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/10 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground" data-aos="fade-up">
            Dampak Positif Eco-Batik
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-orange bg-clip-text text-transparent">70%</div>
              <p className="text-muted-foreground">Pengurangan limbah kimia dibanding batik konvensional</p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-orange bg-clip-text text-transparent">500+</div>
              <p className="text-muted-foreground">Pengrajin lokal yang terlibat dalam program sustainability</p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-orange bg-clip-text text-transparent">15+</div>
              <p className="text-muted-foreground">Tumbuhan lokal digunakan sebagai pewarna alami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Mari Bersama Wujudkan Fashion Berkelanjutan</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Bergabunglah dengan gerakan eco-batik dan jadilah bagian dari solusi fashion berkelanjutan. Setiap pilihan Anda berkontribusi pada pelestarian budaya dan lingkungan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" className="hover:scale-105 transition-all duration-300">
              Mulai Sekarang
            </Button>
            <Button variant="outline" size="xl" className="hover:scale-105 transition-all duration-300">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EcoBatikPage;
