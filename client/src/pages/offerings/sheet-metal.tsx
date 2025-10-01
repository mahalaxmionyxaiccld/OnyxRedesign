import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Wrench,
  Layers,
  Shield,
  Award,
} from "lucide-react";

export default function SheetMetalPage() {
  const navigateToContact = () => {
    window.location.href = "/#contact";
  };

  const capabilities = [
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "Sheet Cutting Services",
      description:
        "Quality prototypes and production parts. 1-Day expedite. Free shipping on all US and international orders.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Custom Online Laser Cutting Service",
      description:
        "Quality prototypes and production parts in as little as one day. Free shipping on all US and international orders.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Online Waterjet Cutting Service",
      description:
        "High-Quality Large Format cutting 1-Day Expedite Available. Free Shipping on All US and International Orders.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Plasma Cutting Service",
      description:
        "Prototypes, color concept models, and simulated overmold parts in days Free shipping on all US orders",
    },
  ];

  const processes = [
    {
      title: "Laser Cutting",
      description:
        "High-precision cutting for intricate designs and tight tolerances",
      thickness: "Up to 1 inch steel, 0.5 inch aluminum",
    },
    {
      title: "Press Brake Forming",
      description: "Accurate bending and forming for complex sheet metal parts",
      thickness: "Up to 0.25 inch capacity",
    },
    {
      title: "Welding & Assembly",
      description:
        "Professional welding and assembly services for complete fabrication",
      thickness: "All material types",
    },
    {
      title: "Finishing Services",
      description:
        "Complete finishing including powder coating and custom painting",
      thickness: "All coating types",
    },
  ];

  const materials = [
    "Mild Steel (Hot Rolled, Cold Rolled)",
    "Stainless Steel (304, 316, 316L)",
    "Aluminum (5052, 6061, 3003)",
    "Galvanized Steel",
    "Copper and Brass",
    "Specialty Alloys",
    "Pre-finished Materials",
    "Perforated and Expanded Metal",
  ];

  const applications = [
    "Architectural Components",
    "Industrial Equipment Enclosures",
    "HVAC Ductwork and Components",
    "Custom Brackets and Supports",
    "Decorative Panels and Screens",
    "Electrical Enclosures",
    "Food Service Equipment",
    "Transportation Components",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                data-testid="hero-title"
              >
                Custom Metal Sheet & Fabrication Services
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8"
                data-testid="hero-description"
              >
                Upload your CAD files to get an instant online fabrication quote
                on custom formed sheet metal prototypes and production parts.
                Lead times as fast as days and free standard shipping on all US
                orders.
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
                  View Portfolio
                </Button>
              </div>
            </div>
            <div>
              <img
                src="../sheet_metal.jpg"
                alt="Sheet metal fabrication and manufacturing equipment"
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
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="capabilities-title"
            >
              Our Fabrication Capabilities
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="capabilities-description"
            >
              Advanced equipment and skilled craftsmen delivering superior sheet
              metal fabrication results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="landify-card p-6 text-center"
                data-testid={`capability-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processes Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="processes-title"
            >
              Fabrication Processes
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="processes-description"
            >
              Comprehensive sheet metal processing capabilities for all your
              fabrication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className="landify-card p-8"
                data-testid={`process-${index}`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {process.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  Capacity: {process.thickness}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Applications */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Materials */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                data-testid="materials-title"
              >
                Materials We Work With
              </h2>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                    data-testid={`material-${index}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                data-testid="applications-title"
              >
                Industry Applications
              </h2>
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                    data-testid={`application-${index}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding bg-primary text-primary-foreground"
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="cta-title"
          >
            Ready to Start Your Fabrication Project?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            From concept to completion, we'll work with you to fabricate custom
            sheet metal components that meet your exact requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" data-testid="contact-button">
              Get Custom Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="capabilities-button"
            >
              View Capabilities
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
