import { Cpu, Settings, Shield, GraduationCap } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "Experience the power of advanced 3D printing and precision manufacturing to bring your ideas to life.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Best-in-Class Service",
      description: "Our team is dedicated to delivering a seamless experience, with personalized support at every stage of your project.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Durable Materials",
      description: "We use only the highest-quality materials to ensure your products are built to last, no matter the industry or application.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Years of Expertise",
      description: "With decades of industry knowledge, we provide unmatched insights and solutions tailored to your specific needs.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="why-choose-title">
            Why Onyx
          </h2>
          <p className="text-xl text-primary font-semibold mb-4" data-testid="why-choose-subtitle">
            WE DON'T JUST MANUFACTURE - WE INNOVATE
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-description">
            Partner with Onyx Industries and transform your manufacturing goals into reality with precision, innovation, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover-lift text-center"
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=500" 
            alt="Manufacturing possibilities showcase with various products" 
            className="rounded-2xl shadow-lg w-full h-auto"
            data-testid="possibilities-image"
          />
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-foreground" data-testid="possibilities-title">
              Possibilities Are Endless
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
