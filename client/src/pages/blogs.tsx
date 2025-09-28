import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogsPage() {
  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Manufacturing Insights & News
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
            Stay informed with the latest industry trends, manufacturing insights, and technical articles from our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={navigateToContact}
              data-testid="subscribe-button"
            >
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="coming-soon-title">
            Blog Content Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="coming-soon-description">
            We're preparing engaging content about manufacturing processes, industry insights, and technical guides. 
            Check back soon for valuable articles and resources.
          </p>
          <Button 
            size="lg" 
            onClick={navigateToContact}
            data-testid="contact-button"
          >
            Contact Us for Updates
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}