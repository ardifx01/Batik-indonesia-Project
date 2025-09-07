import { useEffect } from "react";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AOS from "aos";

const HistoryPage = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground" data-aos="fade-up">
            Sejarah Batik Indonesia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Batik bukan sekadar kain bermotif, tetapi warisan budaya yang telah menjadi identitas bangsa Indonesia selama berabad-abad. 
            Dari era Hindu-Buddha hingga pengakuan UNESCO, setiap goresan canting menyimpan cerita peradaban yang tak ternilai.
          </p>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Origins Section */}
          <Card className="mb-12 border-l-4 border-l-orange bg-card/50 backdrop-blur-sm" data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-orange">
                Asal Mula (Abad ke-4 hingga ke-13)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Pada era Hindu-Buddha, teknik batik mulai dikenal di Nusantara. Pengaruh budaya India dan Tiongkok 
                    membawa teknik pewarnaan dengan lilin yang kemudian berkembang menjadi seni batik yang khas Indonesia. 
                    Motif-motif awal terinspirasi dari alam dan kepercayaan spiritual.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Candi-candi di Jawa memperlihatkan relief patung yang mengenakan kain bermotif, menandakan 
                    bahwa teknik batik telah menjadi bagian integral dari kehidupan masyarakat pada masa itu.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-orange/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Relief Candi yang menunjukkan penggunaan kain bermotif</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Golden Age Section */}
          <Card className="mb-12 border-l-4 border-l-purple bg-card/50 backdrop-blur-sm" data-aos="fade-left">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-purple">
                Era Keemasan (Abad ke-14 hingga ke-15)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-muted/30 rounded-lg p-8 text-center order-2 md:order-1">
                  <div className="w-24 h-24 bg-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👑</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Motif Majapahit yang megah dan penuh makna</p>
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Masa Kerajaan Majapahit menjadi puncak kejayaan seni batik. Motif-motif klasik seperti 
                    kawung, parang, dan truntum mulai berkembang dengan filosofi yang mendalam. Batik menjadi 
                    simbol status sosial dan identitas kebangsawanan.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Teknik pembuatan batik semakin halus dengan penggunaan canting yang lebih presisi. 
                    Warna-warna indigo, soga, dan merah mengkudu menjadi ciri khas periode ini.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Development Period Section */}
          <Card className="mb-12 border-l-4 border-l-turquoise bg-card/50 backdrop-blur-sm" data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-turquoise">
                Masa Perkembangan (Abad ke-16 hingga ke-19)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Era kemasan membawa inovasi besar dalam dunia batik. Teknik cap mulai diperkenalkan, 
                    memungkinkan produksi massal tanpa menghilangkan keindahan motif tradisional. 
                    Setiap daerah mengembangkan ciri khas tersendiri.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Batik Yogyakarta, Solo, Pekalongan, dan Cirebon memiliki karakteristik unik yang 
                    mencerminkan budaya lokal. Pengaruh Tionghoa dan Eropa juga mulai terlihat dalam 
                    motif-motif baru yang lebih beragam.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-turquoise/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Alat-alat tradisional canting dan cap</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modern Era Section */}
          <Card className="mb-12 border-l-4 border-l-pink bg-card/50 backdrop-blur-sm" data-aos="fade-left">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-pink">
                Era Modern (Abad ke-20)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-muted/30 rounded-lg p-8 text-center order-2 md:order-1">
                  <div className="w-24 h-24 bg-pink/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🇮🇩</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Batik sebagai simbol identitas nasional</p>
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <p className="text-muted-foreground leading-relaxed">
                    Masa revolusi kemerdekaan memberikan makna baru pada batik sebagai simbol perlawanan 
                    dan identitas nasional. Para pejuang menggunakan batik sebagai seragam dan simbol 
                    persatuan bangsa.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Abad ke-20 menyaksikan modernisasi industri batik dengan teknologi printing, 
                    namun batik tulis tetap dihargai sebagai karya seni tinggi. Seniman batik seperti 
                    K.R.T. Hardjonagoro menjadi pelopor inovasi motif kontemporer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UNESCO Recognition Section */}
          <Card className="mb-12 border-l-4 border-l-orange bg-card/50 backdrop-blur-sm" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-orange">
                Pengakuan UNESCO (2009)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-6">
                <div className="bg-muted/30 rounded-lg p-8 inline-block">
                  <div className="w-32 h-32 bg-orange/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Karya Agung Warisan Lisan dan Tak Benda Dunia</p>
                </div>
                <div className="max-w-3xl mx-auto">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pada 2 Oktober 2009, UNESCO secara resmi mengakui batik Indonesia sebagai 
                    "Karya Agung Warisan Lisan dan Tak Benda Dunia". Pengakuan ini 
                    menegaskan bahwa batik bukan hanya warisan budaya Indonesia, tetapi juga 
                    warisan dunia yang harus dilestarikan.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sejak itu, 2 Oktober diperingati sebagai Hari Batik Nasional, mengingatkan 
                    seluruh bangsa Indonesia akan pentingnya melestarikan dan mengembangkan 
                    warisan budaya yang tak ternilai ini.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Warisan yang Abadi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Perjalanan panjang batik dari era Hindu-Buddha hingga pengakuan UNESCO menunjukkan 
            ketahanan dan adaptabilitas budaya Indonesia. Hari ini, batik tidak hanya menjadi 
            busana tradisional, tetapi juga simbol kreativitas, identitas, dan kebanggaan bangsa 
            yang terus berkembang di era modern.
          </p>
          <p className="text-base text-muted-foreground italic">
            "Batik adalah jiwa Indonesia yang tertuang dalam setiap helai benang dan warna."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoryPage;