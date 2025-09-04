import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import GalleryGrid from "@/components/GalleryGrid";
import MotifSlider from "@/components/MotifSlider";

// Import images
import heroBackground from "@/assets/background-hero-batik.jpg";
import batikParang from "@/assets/batik-parang.jpg";
import batikKawung from "@/assets/batik-kawung.jpg";
import batikMegamendung from "@/assets/batik-megamendung.jpg";
import batikTruntum from "@/assets/batik-truntum.jpg";
import batikSidomukti from "@/assets/batik-sidomukti.jpg";
import batikLasem from "@/assets/batik-lasem.jpg";
import batikLereng from "@/assets/batik-lereng.jpg";
import batikPriyangan from "@/assets/batik-priyangan.jpg";
import batikTambal from "@/assets/batik-tambal.jpg";
import batikCendrawasih from "@/assets/batik-cendrawasih.jpg";

const GaleriPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);

  const galleryItems = [
    {
      name: "Parang",
      description: "Motif batik yang melambangkan kekuatan, keberanian, dan tekad yang tak tergoyahkan.",
      image: batikParang
    },
    {
      name: "Kawung",
      description: "Motif berbentuk lingkaran simetris, melambangkan kesucian, keseimbangan, dan pengendalian diri.",
      image: batikKawung
    },
    {
      name: "Mega Mendung",
      description: "Motif khas Cirebon dengan bentuk awan bergelombang, melambangkan keteduhan, kesabaran, dan pengendalian emosi.",
      image: batikMegamendung
    },
    {
      name: "Truntum",
      description: "Motif batik yang melambangkan cinta kasih yang abadi dan tanpa syarat.",
      image: batikTruntum
    },
    {
      name: "Sido Mukti",
      description: "Motif yang sering digunakan dalam upacara pernikahan, melambangkan kebahagiaan dan kemakmuran.",
      image: batikSidomukti
    },
    {
      name: "Lasem",
      description: "Motif dengan pengaruh Tionghoa yang khas, melambangkan akulturasi budaya yang harmonis.",
      image: batikLasem
    }
  ];

  const sliderItems = [
    {
      name: "Batik Lereng",
      description: "Motif diagonal yang melambangkan perjalanan hidup dan ketekunan.",
      image: batikLereng
    },
    {
      name: "Batik Priyangan",
      description: "Motif khas Jawa Barat dengan sentuhan flora dan fauna.",
      image: batikPriyangan
    },
    {
      name: "Batik Tambal",
      description: "Motif unik dengan potongan-potongan kecil, melambangkan penyatuan dan harapan.",
      image: batikTambal
    },
    {
      name: "Batik Cendrawasih",
      description: "Motif burung cendrawasih dari Papua, melambangkan keindahan dan kemewahan.",
      image: batikCendrawasih
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
            Galeri Motif Batik Indonesia
          </h1>
          <p className="text-xl md:text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Jelajahi keindahan dan filosofi dari setiap motif batik yang sarat akan makna budaya.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            onClick={() => document.getElementById('galeri')?.scrollIntoView({ behavior: 'smooth' })}
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Mulai Jelajah
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pesona Motif Batik Nusantara
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Batik Indonesia tidak hanya sekadar kain, tetapi juga simbol budaya, tradisi, dan filosofi kehidupan. 
            Setiap motif batik memiliki makna mendalam yang diwariskan dari generasi ke generasi. 
            Mari kita kenali motif-motif batik populer berikut.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <div id="galeri">
        <GalleryGrid 
          title="Koleksi Motif Batik"
          items={galleryItems}
        />
      </div>

      {/* Slider Section */}
      <MotifSlider
        title="Eksplorasi Motif Batik"
        content="Geser untuk melihat lebih banyak motif batik yang memukau dari berbagai daerah di Indonesia."
        items={sliderItems}
        autoplay={true}
      />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ingin Tahu Lebih Banyak?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Temukan filosofi lengkap dari setiap motif batik dan bagaimana batik menjadi warisan dunia yang diakui UNESCO.
          </p>
          <Button 
            variant="contact" 
            size="lg"
            onClick={() => navigate("/sejarah")}
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GaleriPage;