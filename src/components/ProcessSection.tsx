import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";

const ProcessSection = () => {
  const processImages = [
    { src: process1, alt: "Menggambar pola batik" },
    { src: process2, alt: "Proses mencanting" },
    { src: process3, alt: "Pewarnaan alami" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proses Pembuatan Batik
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proses membatik dilakukan dengan penuh ketelitian dan cinta, mulai dari mencanting hingga pewarnaan alami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;