import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Code, Cloud, Database, Shield } from "lucide-react";

export default function SoftwareServicesPage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific manufacturing and industrial requirements"
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Integration",
      description: "Seamless cloud-based solutions for data management, monitoring, and remote operations"
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Analytics & Reporting",
      description: "Advanced analytics platforms for production optimization and performance monitoring"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Industrial IoT Solutions",
      description: "Connected manufacturing systems with real-time monitoring and predictive maintenance"
    }
  ];

  const services = [
    {
      title: "Manufacturing Execution Systems (MES)",
      description: "Complete MES solutions for production tracking, quality control, and workflow optimization",
      image: "https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png"
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Integrated ERP systems for streamlined business operations and resource management",
      image: "https://static.wixstatic.com/media/adfab1_7bb6f0157fe34bd29b16dff423962f14~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/blueprint.png"
    },
    {
      title: "SCADA Systems",
      description: "Supervisory control and data acquisition systems for industrial process monitoring",
      image: "https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png"
    },
    {
      title: "Maintenance Management Systems",
      description: "Comprehensive maintenance scheduling and asset management solutions",
      image: "https://static.wixstatic.com/media/adfab1_7bb6f0157fe34bd29b16dff423962f14~mv2.png/v1/fill/w_98,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/blueprint.png"
    }
  ];

  const technologies = [
    "Industrial IoT Platforms",
    "Cloud Computing (AWS, Azure, Google Cloud)",
    "Real-time Data Processing",
    "Machine Learning & AI",
    "Mobile Applications",
    "Web-based Dashboards",
    "API Development & Integration",
    "Database Management Systems"
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
                Software Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
                Comprehensive software solutions for modern manufacturing. From custom applications to enterprise systems, we deliver technology that drives efficiency and innovation in industrial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground btn-hover-scale"
                  onClick={navigateToContact}
                  data-testid="get-quote-button"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="btn-hover-scale"
                  onClick={navigateToContact}
                  data-testid="learn-more-button"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/adfab1_ddfd068904b642dabafdfb29ae9751fc~mv2.png/v1/fill/w_743,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/manufacture.png" 
                alt="Software Services and Manufacturing Technology" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="features-title">
              Advanced Software Solutions for Manufacturing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-description">
              Our software services combine cutting-edge technology with deep manufacturing expertise to deliver solutions that optimize your operations and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow hover-lift landify-card" data-testid={`feature-${index}`}>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
              Comprehensive Software Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
              From enterprise systems to specialized manufacturing applications, we provide complete software solutions tailored to your industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow hover-lift landify-card" data-testid={`service-${index}`}>
                <div className="flex items-start space-x-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button 
                      variant="outline" 
                      onClick={navigateToContact}
                      className="btn-hover-scale"
                      data-testid={`service-contact-${index}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="technologies-title">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="technologies-description">
              We leverage the latest technologies and platforms to build robust, scalable solutions for modern manufacturing environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow" data-testid={`technology-${index}`}>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            Contact our software experts today to discuss your requirements and discover how our solutions can optimize your manufacturing processes and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={navigateToContact}
              className="btn-hover-scale"
              data-testid="cta-contact-button"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-hover-scale"
              onClick={navigateToContact}
              data-testid="cta-quote-button"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}