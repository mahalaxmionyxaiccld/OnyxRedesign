import ScrollReveal from "@/components/scroll-reveal";

export default function IndustriesSection() {
  const industries = [
    {
      icon: "engineering.avif",
      name: "Engineering"
    },
    {
      icon: "milling-machine.avif",
      name: "Machine Building"
    },
    {
      icon: "circuit.avif",
      name: "Electronics"
    },
    {
      icon: "automotive.avif",
      name: "Automotive"
    },
    {
      icon: "responsive.avif",
      name: "Consumer Products"
    },
    {
      icon: "defribillator.avif",
      name: "Medical"
    },
    {
      icon: "book.avif",
      name: "Academics"
    },
    {
      icon: "technology.avif",
      name: "Automation"
    },
    {
      icon: "aerospace-engineering.avif",
      name: "Aerospace"
    }
  ];

  return (
    <section id="industries" className="section-padding relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage: "url('11062b_272ff3e288454249898a9a003c68d689f000.avif')"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="industries-title">
              Possibilities Are Endless
            </h2>
            <p className="text-lg lg:text-xl text-secondary max-w-4xl mx-auto leading-relaxed" data-testid="industries-description">
              We cater to Precision Manufacturing applications for every Industry.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <video
              src="manufacturing.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-2xl shadow-2xl w-full h-auto mb-12 landify-card hover:shadow-3xl transition-all duration-500"
              data-testid="industries-hero-image"
            />

        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="bg-secondary text-primary-foreground p-6 lg:p-8 rounded-xl shadow-lg 
                          border border-primary/30 text-center transform hover:scale-105 
                          transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center 
                                bg-primary-foreground/10 rounded-full">
                  <img
                    src={industry.icon}
                    alt={`${industry.name} industry icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="text-lg font-bold">
                  {industry.name}
                </h3>
              </div>

            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
