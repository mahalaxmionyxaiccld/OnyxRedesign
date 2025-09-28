import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export default function AboutPage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            About Onyx Industries
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
            Your trusted partner in precision manufacturing and 3D printing solutions. Learn more about our commitment to quality, innovation, and customer success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={navigateToContact}
              data-testid="contact-button"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="overview-title">
            Building the Future of Manufacturing
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="overview-description">
            At Onyx Industries, we combine cutting-edge technology with years of expertise to deliver precision manufacturing solutions that exceed expectations. Our comprehensive approach ensures that every project, from rapid prototyping to full-scale production, meets the highest standards of quality and reliability.
          </p>
          <Button 
            size="lg" 
            onClick={navigateToContact}
            data-testid="learn-more-button"
          >
            Learn More About Our Services
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}