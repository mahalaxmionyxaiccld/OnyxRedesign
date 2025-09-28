import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Truck, Settings, Shield, Award } from "lucide-react";

export default function MaterialHandlingCranePage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Heavy Duty Construction",
      description: "Built to handle loads up to 50 tons with maximum reliability"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Versatile Operation",
      description: "Suitable for various industrial and construction applications"
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Precision Control",
      description: "Advanced control systems for accurate load positioning"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Safety First",
      description: "Multiple safety features and compliance with industry standards"
    }
  ];

  const specifications = [
    "Load Capacity: Up to 50 tons",
    "Boom Length: 20-80 meters",
    "Lifting Height: Up to 60 meters", 
    "Power Source: Electric/Diesel/Hybrid",
    "Control System: Digital with remote operation",
    "Safety Features: Load moment indicator, anti-collision system",
    "Mobility: Track-mounted or stationary installation",
    "Certification: CE marked and industry compliant"
  ];

  const applications = [
    {
      title: "Construction Projects",
      description: "Heavy lifting for building construction and infrastructure projects"
    },
    {
      title: "Manufacturing Facilities",
      description: "Material handling in production environments and warehouses"
    },
    {
      title: "Port Operations",
      description: "Container handling and cargo operations at ports and terminals"
    },
    {
      title: "Steel Industry",
      description: "Moving heavy steel components and machinery in industrial settings"
    }
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
                Material Handling Crane
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
                Heavy-duty material handling cranes designed for maximum efficiency, safety, and reliability. Perfect for construction, manufacturing, and industrial applications requiring precise load management.
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
                  size="lg" 
                  variant="outline"
                  onClick={navigateToContact}
                  data-testid="learn-more-button"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/6e1739_a8c9b2d3f4a4462db8c8d8f9c8e7b6a5~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/crane-hero.jpg" 
                alt="Material Handling Crane" 
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
              Key Features & Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="features-description">
              Our material handling cranes combine cutting-edge technology with robust engineering to deliver superior performance in demanding environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow" data-testid={`feature-${index}`}>
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

      {/* Specifications Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="specifications-description">
                Engineered to meet the highest standards of performance and safety in material handling operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`specification-${index}`}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://static.wixstatic.com/media/6e1739_b9d0c3e4f5b5573ec9d9e0f0d9f8c7b6~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/crane-specifications.jpg" 
                alt="Crane Specifications" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-testid="specifications-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="applications-title">
              Industrial Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="applications-description">
              Our material handling cranes are designed to excel in a wide range of industrial environments and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="p-8 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow" data-testid={`application-${index}`}>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{app.title}</h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                <Button 
                  variant="outline" 
                  onClick={navigateToContact}
                  data-testid={`application-contact-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Ready to Enhance Your Material Handling Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            Contact our experts today to discuss your specific requirements and get a customized quote for your material handling crane solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={navigateToContact}
              data-testid="cta-contact-button"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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