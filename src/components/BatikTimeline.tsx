const timelineEvents = [
  {
    year: "Abad ke-4",
    text: "Awal mula batik berkembang di era Hindu-Buddha sebagai bentuk seni tekstil."
  },
  {
    year: "Abad ke-14",
    text: "Batik mencapai puncak kejayaan di era Majapahit dengan motif klasik."
  },
  {
    year: "Abad ke-19",
    text: "Batik mulai berkembang di pesisir dengan pengaruh budaya asing."
  },
  {
    year: "2009",
    text: "UNESCO menetapkan batik sebagai Warisan Budaya Takbenda Dunia."
  }
];

const BatikTimeline = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perjalanan Sejarah Batik
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />
              
              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
              }`}>
                <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {event.year}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatikTimeline;