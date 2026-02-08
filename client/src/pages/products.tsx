import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import { openContactPage } from "@/lib/utils";
import SEO from "@/components/seo";

export default function ProductsPage() {

  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Products & Solutions - Overhead Cranes & Software"
        description="Explore our range of industrial products including Bridge Cranes, Material Handling Systems, and Advanced Industrial Software."
        keywords="Industrial Products, Material Handling Pune, Overhead Cranes, Manufacturing Software, Industrial Solutions"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
            Discover our comprehensive range of precision-manufactured products and solutions designed to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={openContactPage}
              data-testid="get-quote-button"
            >
              Request Product Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={openContactPage}
              data-testid="contact-button"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="coming-soon-title">
            Product Catalog Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="coming-soon-description">
            We're currently updating our product catalog with detailed specifications and technical documentation.
            In the meantime, please contact us directly to discuss your specific product requirements.
          </p>
          <Button
            size="lg"
            onClick={openContactPage}
            data-testid="contact-now-button"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}