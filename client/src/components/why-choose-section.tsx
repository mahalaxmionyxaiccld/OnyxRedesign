export default function WhyChooseSection() {
  const features = [
    {
      icon: "3d-printing.avif",
      title: "Cutting-Edge Technology",
      description: "Experience the power of advanced precision manufacturing to bring your ideas to life."
    },
    {
      icon: "settings.avif",
      title: "Best-in-Class Service",
      description: "Our team is dedicated to delivering a seamless experience, with personalized support at every stage of your project."
    },
    {
      icon: "advanced.avif",
      title: "Durable Materials",
      description: "We use only the highest-quality materials to ensure your products are built to last, no matter the industry or application."
    },
    {
      icon: "engineer.avif",
      title: "Years of Expertise",
      description: "With decades of industry knowledge, we provide unmatched insights and solutions tailored to your specific needs."
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="why-choose-title">
            Why Onyx
          </h2>
          <p className="text-xl lg:text-2xl text-primary font-bold mb-6" data-testid="why-choose-subtitle">
            WE DON'T JUST MANUFACTURE - WE INNOVATE
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="why-choose-description">
            Partner with Onyx Industries and transform your manufacturing goals into reality with precision, innovation, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover-lift text-center landify-card"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
