import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Target, Cog, Award } from "lucide-react";

export default function MachiningPage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const capabilities = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Custom CNC Machining",
      description: "Quality prototypes and production parts. 1-Day expedite. Free shipping on all US and international orders."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Custom CNC Turning",
      description: "Quality prototypes and production parts in as little as one day. Free shipping on all US and international orders."
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      title: "Custom CNC Milling", 
      description: "High-Quality Large Format CNC Milling 1-Day Expedite Available. Free Shipping on All US and International Orders."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Custom CNC Drilling",
      description: "Prototypes, color concept models, and simulated overmold parts in days Free shipping on all US orders"
    }
  ];

  const services = [
    {
      title: "CNC Milling",
      description: "Precision milling for complex parts and prototypes",
      image: "https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png"
    },
    {
      title: "CNC Turning",
      description: "High-precision turning for cylindrical and rotational parts",
      image: "https://static.wixstatic.com/media/adfab1_7bb6f0157fe34bd29b16dff423962f14~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/blueprint.png"
    },
    {
      title: "Swiss Machining", 
      description: "Ultra-precise machining for small, complex components",
      image: "https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png"
    },
    {
      title: "Surface Finishing",
      description: "Professional finishing including anodizing and coating",
      image: "https://static.wixstatic.com/media/adfab1_7bb6f0157fe34bd29b16dff423962f14~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/blueprint.png"
    }
  ];

  const materials = [
    "Aluminum Alloys (6061, 7075, 2024)",
    "Stainless Steel (304, 316, 17-4 PH)", 
    "Carbon Steel (1018, 4140, 4340)",
    "Brass and Bronze Alloys",
    "Titanium (Grade 2, Grade 5)",
    "Inconel and Hastelloy",
    "Engineering Plastics (PEEK, Delrin, Nylon)",
    "Exotic Alloys"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
                Custom CNC Machining Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
                Get instant quotes on custom metal and plastic machined parts with our Online CNC Machining Service. Make quick turn prototypes and production parts in days with free standard shipping on all US orders. ISO 9001:2015, ISO 13485, IATF 16949:2016, and AS9100D certified. ITAR registered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={navigateToContact}
                  data-testid="get-quote-button"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  data-testid="learn-more-button"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_743,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png"
                alt="Advanced CNC machining equipment and precision manufacturing"
                className="rounded-2xl shadow-lg w-full h-auto landify-card"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="capabilities-title">
              Why Use Onyx for Custom CNC Machining Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="capabilities-description">
              Onyx provides a custom online CNC machining service to engineers, product developers, designers, and more through our vetted network of suppliers. Our highly qualified AS9100D machine shops can make any custom design, simple or complex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="landify-card p-6 text-center" data-testid={`capability-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="services-title">
              Our Machining Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
              Comprehensive machining solutions for all your precision manufacturing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="landify-card p-6 text-center" data-testid={`service-${index}`}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="materials-title">
              Materials We Machine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="materials-description">
              Expertise across a wide range of metals, alloys, and engineering plastics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="flex items-center space-x-3 landify-card p-4" data-testid={`material-${index}`}>
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cog className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Ready for Precision Machining?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            Get a quote for your machining project. Our team of experts will work with you to deliver precision parts that meet your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              data-testid="contact-button"
            >
              Request Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="technical-specs-button"
            >
              Technical Specifications
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}