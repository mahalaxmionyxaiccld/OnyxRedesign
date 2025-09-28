export default function WhyChooseSection() {
  const features = [
    {
      icon: "https://static.wixstatic.com/media/adfab1_ced8106a499a49b68542b462e7ca15e3~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3d-printing.png",
      title: "Cutting-Edge Technology",
      description: "Experience the power of advanced 3D printing and precision manufacturing to bring your ideas to life."
    },
    {
      icon: "https://static.wixstatic.com/media/adfab1_8455ab35f7a94877bbda6c5add7fcce0~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/settings.png",
      title: "Best-in-Class Service",
      description: "Our team is dedicated to delivering a seamless experience, with personalized support at every stage of your project."
    },
    {
      icon: "https://static.wixstatic.com/media/adfab1_263eca911a5649ffb665087d426d77a1~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/advanced.png",
      title: "Durable Materials",
      description: "We use only the highest-quality materials to ensure your products are built to last, no matter the industry or application."
    },
    {
      icon: "https://static.wixstatic.com/media/adfab1_85eb1092b9304abc91924ee8ebd53c5d~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/engineer.png",
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

        <div className="text-center">
          <div className="relative">
            <img 
              src="https://static.wixstatic.com/media/nsplsh_73faf9a541af42759dd526f52a1982d7~mv2.jpg/v1/fill/w_505,h_647,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Maksym%20Kaharlytskyi.jpg" 
              alt="Manufacturing possibilities showcase with various advanced products" 
              className="rounded-2xl shadow-lg w-full h-auto max-w-2xl mx-auto landify-card"
              data-testid="possibilities-image"
            />
            <div className="mt-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground" data-testid="possibilities-title">
                Possibilities Are Endless
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
