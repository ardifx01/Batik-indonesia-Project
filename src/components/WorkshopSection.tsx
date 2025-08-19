import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin } from "lucide-react";

const WorkshopSection = () => {
  const workshops = [
    {
      title: "Batik Tulis untuk Pemula",
      duration: "3 Hari",
      participants: "Maks 15 Orang",
      level: "Pemula",
      price: "Rp 750.000",
      description: "Pelajari teknik dasar membatik tulis dari persiapan kain hingga proses pewarnaan.",
      features: ["Alat & Bahan Disediakan", "Sertifikat", "Makan Siang", "Karya Bisa Dibawa Pulang"],
      instructor: "Bu Sari Handayani",
      rating: "4.9",
      location: "Yogyakarta"
    },
    {
      title: "Batik Cap Modern",
      duration: "2 Hari",
      participants: "Maks 20 Orang",
      level: "Menengah",
      price: "Rp 500.000",
      description: "Teknik batik cap dengan desain kontemporer yang sesuai untuk fashion modern.",
      features: ["Desain Modern", "Teknik Cepat", "Portfolio Digital", "Networking Session"],
      instructor: "Pak Budi Santoso",
      rating: "4.8",
      location: "Solo"
    },
    {
      title: "Batik Lukis Ekspresif",
      duration: "1 Hari",
      participants: "Maks 12 Orang",
      level: "Semua Level",
      price: "Rp 350.000",
      description: "Ekspresikan kreativitas Anda melalui teknik batik lukis yang bebas dan artistik.",
      features: ["Teknik Ekspresif", "Mentoring Personal", "Galeri Mini", "Refreshment"],
      instructor: "Mbak Indira Sari",
      rating: "4.7",
      location: "Jakarta"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Instruktur Berpengalaman",
      description: "Belajar langsung dari master batik dengan pengalaman puluhan tahun"
    },
    {
      icon: Users,
      title: "Kelas Kecil",
      description: "Perhatian personal dengan maksimal 20 peserta per kelas"
    },
    {
      icon: Clock,
      title: "Fleksibel",
      description: "Jadwal weekend dan weekday tersedia sesuai kebutuhan Anda"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      description: "Studio di pusat kota dengan akses mudah dan fasilitas lengkap"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Workshop <span className="text-turquoise">Belajar Batik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wujudkan impian Anda menjadi pembatik handal. Ikuti workshop interaktif 
            dan rasakan pengalaman membuat batik langsung dari ahlinya.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{workshop.level}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground">{workshop.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{workshop.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{workshop.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {workshop.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {workshop.participants}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {workshop.location}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Yang Anda Dapatkan:</h4>
                <div className="space-y-2">
                  {workshop.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Instruktur</div>
                    <div className="font-semibold text-foreground">{workshop.instructor}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-turquoise">{workshop.price}</div>
                    <div className="text-sm text-muted-foreground">per orang</div>
                  </div>
                </div>
                <Button className="w-full" variant="contact">
                  Daftar Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-turquoise rounded-full flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Program Khusus Corporate
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kami juga menyediakan program team building dan CSR untuk perusahaan 
                yang ingin memberikan pengalaman budaya yang berkesan bagi karyawan.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-turquoise rounded-full"></div>
                  <span className="text-foreground">Team Building Workshop</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                  <span className="text-foreground">Corporate Gift Workshop</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple rounded-full"></div>
                  <span className="text-foreground">Cultural Immersion Program</span>
                </div>
              </div>
              <Button variant="contact" size="lg">
                Konsultasi Corporate
              </Button>
            </div>

            <div className="bg-white/50 dark:bg-black/20 rounded-xl p-8 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-6">Statistik Workshop</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-turquoise">2500+</div>
                  <div className="text-sm text-muted-foreground">Alumni Workshop</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple">150+</div>
                  <div className="text-sm text-muted-foreground">Workshop per Tahun</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink">95%</div>
                  <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;