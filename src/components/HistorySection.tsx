import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HistorySection = () => {
  const timeline = [
    {
      year: "4 - 13 Abad",
      title: "Era Kerajaan Hindu-Buddha",
      description: "Batik mulai berkembang sebagai busana kerajaan dengan motif-motif sakral dan spiritual.",
      highlight: "Awal Mula",
    },
    {
      year: "14 - 15 Abad",
      title: "Era Majapahit",
      description: "Teknik batik tulis mencapai puncaknya dengan motif-motif klasik yang masih digunakan hingga kini.",
      highlight: "Puncak Klasik",
    },
    {
      year: "16 - 19 Abad",
      title: "Era Kesultanan",
      description: "Batik menjadi identitas kerajaan dengan aturan ketat tentang motif yang boleh digunakan.",
      highlight: "Era Keemasan",
    },
    {
      year: "20 Abad",
      title: "Era Modern",
      description: "Batik cap ditemukan, memungkinkan produksi massal dan penyebaran ke seluruh lapisan masyarakat.",
      highlight: "Revolusi",
    },
    {
      year: "2009",
      title: "Pengakuan UNESCO",
      description: "Batik Indonesia diakui sebagai Masterpiece of Oral and Intangible Heritage of Humanity.",
      highlight: "Dunia",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary" id="sejarah">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perjalanan <span className="text-purple">Sejarah Batik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ikuti jejak sejarah batik dari era kerajaan hingga pengakuan dunia internasional. Sebuah perjalanan panjang yang penuh makna dan transformasi.</p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <Badge variant="outline" className="mb-2">
                    {item.highlight}
                  </Badge>
                  <h3 className="text-2xl font-bold text-orange">{item.year}</h3>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-purple rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Lebih dari 1000 Tahun Sejarah</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Batik telah melewati berbagai zaman, beradaptasi dengan perubahan waktu namun tetap mempertahankan esensi dan nilai-nilai tradisionalnya.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-80">Tahun Sejarah</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm opacity-80">Era Berbeda</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2009</div>
                <div className="text-sm opacity-80">UNESCO</div>
              </div>
              <div>
                <div className="text-3xl font-bold">34</div>
                <div className="text-sm opacity-80">Provinsi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
