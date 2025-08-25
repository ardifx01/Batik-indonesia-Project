import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";

const BudayaTradisiPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const traditions = [
    {
      title: "Tradisi yang Hidup",
      description: "Batik masih digunakan dalam berbagai upacara adat dan perayaan tradisional. Dari kelahiran hingga pernikahan, batik menjadi saksi perjalanan hidup masyarakat Indonesia.",
      items: [
        { label: "Upacara Siraman Pengantin", text: "Batik dipakai untuk melambangkan kesucian dan doa bagi calon pengantin." },
        { label: "Ritual Mitoni (7 Bulanan)", text: "Ibu hamil mengenakan kain batik khusus untuk keselamatan janin." },
        { label: "Perayaan Hari Raya", text: "Batik menjadi busana kebersamaan pada Idul Fitri, Natal, dan perayaan besar lainnya." },
        { label: "Acara Resmi Negara", text: "Batik dipakai dalam acara kenegaraan sebagai simbol identitas nasional." }
      ]
    },
    {
      title: "Makna dalam Kehidupan",
      description: "Setiap fase kehidupan manusia diiringi dengan motif batik yang sarat makna filosofis.",
      items: [
        { label: "Masa Kanak-kanak", text: "Motif sederhana yang melambangkan harapan dan perlindungan." },
        { label: "Masa Remaja", text: "Motif yang mengajarkan nilai moral dan pembentukan karakter." },
        { label: "Masa Dewasa", text: "Motif yang menunjukkan tanggung jawab dan kedewasaan." },
        { label: "Masa Tua", text: "Motif yang melambangkan kebijaksanaan dan pengalaman hidup." }
      ]
    },
    {
      title: "Filosofi dan Nilai",
      description: "Batik mengajarkan nilai-nilai kehidupan melalui proses dan motifnya.",
      items: [
        { label: "Kesabaran dan Ketekunan", text: "Membatik membutuhkan waktu dan ketelitian, melatih kesabaran." },
        { label: "Keharmonisan dengan Alam", text: "Motif flora, fauna, dan kosmos mencerminkan keseimbangan hidup." },
        { label: "Kebijaksanaan Sosial", text: "Motif tertentu hanya boleh dipakai pada momen khusus, sebagai bentuk kearifan lokal." }
      ]
    },
    {
      title: "Batik sebagai Identitas Komunitas",
      description: "Motif batik menjadi identitas khas setiap daerah di Indonesia.",
      items: [
        { label: "Parang", text: "Simbol keberanian dan keteguhan dari Yogyakarta dan Solo." },
        { label: "Megamendung", text: "Motif khas Cirebon yang melambangkan ketenangan." },
        { label: "Kawung", text: "Motif Jawa Tengah yang melambangkan kesucian dan pengendalian diri." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="budaya_tradisi" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Budaya dan <span className="text-orange">Tradisi</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Batik bukan hanya seni, melainkan bagian dari perjalanan hidup masyarakat Indonesia, 
              penuh makna dalam setiap helai kainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {traditions.map((section, index) => (
              <div key={section.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl text-foreground mb-4">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={item.label} 
                          className="space-y-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                          data-aos="fade-right" 
                          data-aos-delay={(index * 100) + (itemIndex * 50)}
                        >
                          <Badge variant="secondary" className="text-sm font-medium">
                            {item.label}
                          </Badge>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Values Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Warisan yang Abadi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Batik telah menjadi bagian tak terpisahkan dari kehidupan masyarakat Indonesia. 
            Melalui setiap motif dan proses pembuatannya, batik mengajarkan nilai-nilai luhur 
            yang terus dilestarikan dari generasi ke generasi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 mx-auto bg-orange/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Seni dan Kreativitas</h3>
              <p className="text-muted-foreground">Setiap motif mencerminkan kreativitas dan keindahan</p>
            </div>
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 mx-auto bg-orange/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Kebersamaan</h3>
              <p className="text-muted-foreground">Mengikat komunitas dalam tradisi dan ritual</p>
            </div>
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 mx-auto bg-orange/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Kebijaksanaan</h3>
              <p className="text-muted-foreground">Mengajarkan nilai-nilai kehidupan yang bermakna</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BudayaTradisiPage;