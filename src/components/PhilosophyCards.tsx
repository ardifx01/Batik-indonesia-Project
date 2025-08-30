import { Card, CardContent } from "@/components/ui/card";

const philosophyItems = [
  {
    icon: "🌊",
    title: "Kesabaran & Ketenangan",
    text: "Motif mega mendung mengajarkan pentingnya menjaga ketenangan hati."
  },
  {
    icon: "⚔️",
    title: "Keberanian & Keteguhan",
    text: "Motif parang melambangkan kekuatan dan tekad untuk menghadapi tantangan hidup."
  },
  {
    icon: "🌸",
    title: "Cinta Kasih & Keharmonisan",
    text: "Motif truntum dipercaya melambangkan cinta yang tulus dan abadi."
  }
];

const PhilosophyCards = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Makna Filosofi Batik
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Batik bukan sekadar kain, tetapi sarat dengan pesan moral, doa, dan nilai kehidupan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card/80 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyCards;