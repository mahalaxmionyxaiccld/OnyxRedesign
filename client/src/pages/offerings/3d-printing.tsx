import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Clock, Users, Shield, Award } from "lucide-react";

export default function ThreeDPrintingPage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "High Precision",
      description: "Layer resolution down to 0.1mm for precise prototypes and parts"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Fast Turnaround",
      description: "Most prints completed within 24-48 hours"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Support",
      description: "Professional consultation throughout your project"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Quality Assured",
      description: "Rigorous quality control for every printed part"
    }
  ];

  const materials = [
    "PLA (Polylactic Acid)",
    "ABS (Acrylonitrile Butadiene Styrene)", 
    "PETG (Polyethylene Terephthalate Glycol)",
    "TPU (Thermoplastic Polyurethane)",
    "Nylon (PA)",
    "Wood-filled PLA",
    "Metal-filled PLA",
    "Carbon Fiber reinforced"
  ];

  const applications = [
    {
      title: "Rapid Prototyping",
      description: "Quickly validate designs and concepts before full production"
    },
    {
      title: "Custom Parts",
      description: "Low-volume production of specialized components"
    },
    {
      title: "Educational Models",
      description: "Visual aids and teaching tools for academic institutions"
    },
    {
      title: "Medical Devices",
      description: "Biocompatible parts for medical and dental applications"
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
                3D Printing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
                Transform your ideas into reality with our advanced 3D printing technology. From rapid prototyping to custom manufacturing, we deliver precision parts with exceptional quality and speed.
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
                src="https://static.wixstatic.com/media/adfab1_b6c93ad19a7943f3af4c50dc90b04b52~mv2.png/v1/fill/w_743,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/3d%20printing%20image.png"
                alt="Advanced 3D printing technology and equipment"
                className="rounded-2xl shadow-lg w-full h-auto landify-card"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="features-title">
              Why Choose Our 3D Printing Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="features-description">
              Experience the advantages of working with industry-leading 3D printing technology and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="landify-card p-6 text-center" data-testid={`feature-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Applications */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Materials */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="materials-title">
                Available Materials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`material-${index}`}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="applications-title">
                Applications
              </h2>
              <div className="space-y-6">
                {applications.map((application, index) => (
                  <div key={index} className="landify-card p-6" data-testid={`application-${index}`}>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{application.title}</h3>
                    <p className="text-muted-foreground">{application.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
            Ready to Start Your 3D Printing Project?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            Get a custom quote for your 3D printing needs. Our experts are ready to help bring your ideas to life with precision and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              data-testid="contact-button"
            >
              Contact Us Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="upload-files-button"
            >
              Upload Your Files
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}