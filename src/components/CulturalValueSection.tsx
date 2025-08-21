import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, Heart, Sparkles } from "lucide-react";

const CulturalValueSection = () => {
  const culturalValues = [
    {
      icon: Crown,
      title: "Simbol Status Sosial",
      description: "Batik tradisional menunjukkan kedudukan seseorang dalam masyarakat. Motif tertentu hanya boleh digunakan oleh kalangan bangsawan.",
      color: "orange",
      traditions: ["Upacara Kerajaan", "Pernikahan Adat", "Ritual Keagamaan"],
    },
    {
      icon: Heart,
      title: "Nilai Spiritual",
      description: "Setiap motif batik mengandung doa dan harapan baik. Proses pembuatannya dianggap sebagai meditasi spiritual.",
      color: "purple",
      traditions: ["Meditasi Saat Membatik", "Doa dalam Motif", "Ritual Pemberkatan"],
    },
    {
      icon: Users,
      title: "Ikatan Komunitas",
      description: "Batik menjadi pengikat komunitas dan identitas daerah. Setiap daerah memiliki motif khas yang dibanggakan.",
      color: "turquoise",
      traditions: ["Festival Batik", "Gotong Royong", "Warisan Keluarga"],
    },
    {
      icon: Sparkles,
      title: "Filosofi Hidup",
      description: "Motif batik mengajarkan nilai-nilai kehidupan seperti kesabaran, keharmonisan, dan kebijaksanaan.",
      color: "pink",
      traditions: ["Pendidikan Karakter", "Nilai Moral", "Kearifan Lokal"],
    },
  ];

  return (
    <section className="py-20 bg-background-secondary" id="budaya_tradisi">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nilai <span className="text-purple">Budaya & Tradisi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Batik bukan hanya seni, tetapi juga sistem nilai yang mengatur kehidupan sosial, spiritual, dan budaya masyarakat Indonesia sejak berabad-abad lalu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {culturalValues.map((value, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-border">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-${value.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{value.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {value.traditions.map((tradition, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tradition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Tradisi yang Hidup</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Batik masih digunakan dalam berbagai upacara adat dan perayaan tradisional. Dari kelahiran hingga pernikahan, batik menjadi saksi perjalanan hidup masyarakat Indonesia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                  <span className="text-foreground">Upacara Siraman Pengantin</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple rounded-full"></div>
                  <span className="text-foreground">Ritual Mitoni (7 Bulanan)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-turquoise rounded-full"></div>
                  <span className="text-foreground">Perayaan Hari Raya</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink rounded-full"></div>
                  <span className="text-foreground">Acara Resmi Negara</span>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-black/20 rounded-xl p-8 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-6">Makna dalam Kehidupan</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Masa Kanak-kanak</h5>
                  <p className="text-sm text-muted-foreground">Motif sederhana yang melambangkan harapan dan perlindungan</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Masa Remaja</h5>
                  <p className="text-sm text-muted-foreground">Motif yang mengajarkan nilai-nilai moral dan karakter</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Masa Dewasa</h5>
                  <p className="text-sm text-muted-foreground">Motif yang menunjukkan tanggung jawab dan kedewasaan</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Masa Tua</h5>
                  <p className="text-sm text-muted-foreground">Motif yang melambangkan kebijaksanaan dan pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalValueSection;
