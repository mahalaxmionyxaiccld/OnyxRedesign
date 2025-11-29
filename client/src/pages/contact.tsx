import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const navigateToHomeContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Contact Onyx Industries
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
            Ready to start your next manufacturing project? Get in touch with our team of experts for personalized consultation and quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={navigateToHomeContact}
              data-testid="contact-form-button"
            >
              Use Contact Form
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="contact-info-title">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="contact-info-description">
              Multiple ways to reach our team for your manufacturing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="landify-card p-8 text-center" data-testid="email-card">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us a detailed message about your project requirements
              </p>
              <Button
                variant="outline"
                onClick={navigateToHomeContact}
                data-testid="email-button"
              >
                Send Message
              </Button>
            </div>

            <div className="landify-card p-8 text-center" data-testid="phone-card">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our technical experts
              </p>
              <Button
                variant="outline"
                onClick={navigateToHomeContact}
                data-testid="phone-button"
              >
                Get Phone Number
              </Button>
            </div>

            <div className="landify-card p-8 text-center" data-testid="location-card">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a consultation at our facility
              </p>
              <Button
                variant="outline"
                onClick={navigateToHomeContact}
                data-testid="visit-button"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}