import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Hammer,
  Settings,
  Truck,
  Award,
} from "lucide-react";

export default function FabricationPage() {
  const navigateToContact = () => {
    window.location.href = "/#contact";
  };

  const services = [
    {
      icon: <Hammer className="h-6 w-6 text-primary" />,
      title: "Custom Fabrication",
      description:
        "Complete fabrication solutions from concept to finished product",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Assembly Services",
      description: "Professional assembly and integration of complex systems",
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Installation Support",
      description: "On-site installation and commissioning services",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control throughout the process",
    },
  ];

  const capabilities = [
    {
      category: "Welding & Joining",
      techniques: [
        "TIG (GTAW) Welding",
        "MIG (GMAW) Welding",
        "Stick (SMAW) Welding",
        "Oxy-Acetylene Welding",
        "Brazing and Soldering",
        "Mechanical Fastening",
      ],
    },
    {
      category: "Forming & Shaping",
      techniques: [
        "Press Brake Forming",
        "Roll Forming",
        "Stamping and Punching",
        "Tube Bending",
        "Hydroforming",
        "Hand Forming",
      ],
    },
    {
      category: "Cutting & Preparation",
      techniques: [
        "Plasma Cutting",
        "Laser Cutting",
        "Waterjet Cutting",
        "Flame Cutting",
        "Bandsaw Cutting",
        "Grinding and Finishing",
      ],
    },
    {
      category: "Assembly & Integration",
      techniques: [
        "Mechanical Assembly",
        "Electrical Integration",
        "Hydraulic Systems",
        "Pneumatic Systems",
        "Control Systems",
        "Testing and Commissioning",
      ],
    },
  ];

  const industries = [
    "Aerospace and Defense",
    "Automotive Manufacturing",
    "Oil and Gas",
    "Marine and Offshore",
    "Power Generation",
    "Chemical Processing",
    "Food and Beverage",
    "Pharmaceutical",
    "Mining and Minerals",
    "Construction Equipment",
  ];

  const projects = [
    {
      title: "Structural Steel Fabrication",
      description:
        "Custom steel structures for industrial and commercial applications",
      features: [
        "Complex geometries",
        "Heavy-duty construction",
        "Certified welding",
      ],
    },
    {
      title: "Process Equipment",
      description: "Specialized equipment for chemical and process industries",
      features: [
        "Pressure vessel code",
        "Exotic materials",
        "Precision assembly",
      ],
    },
    {
      title: "Custom Machinery",
      description: "One-off machinery and automation equipment fabrication",
      features: [
        "Precision tolerances",
        "System integration",
        "Performance testing",
      ],
    },
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
                Custom Fabrication Service
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8"
                data-testid="hero-description"
              >
                Get instant online fabrication service quotes on custom parts in
                over 80 metal and plastic materials. Order Fabricated items and
                get Free Shipping on all US orders. ISO 9001:2015, ISO 13485,
                IATF 16949:2016, and AS9100D certified. ITAR registered.
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
                  View Projects
                </Button>
              </div>
            </div>
            <div>
              <img
                src="../fabrication.png"
                alt="Custom fabrication and manufacturing services"
                className="rounded-2xl shadow-lg w-full h-auto landify-card"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="services-title"
            >
              Our Fabrication Services
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="services-description"
            >
              Comprehensive fabrication capabilities to handle projects of any
              size and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="landify-card p-6 text-center"
                data-testid={`service-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="capabilities-title"
            >
              Fabrication Capabilities
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="capabilities-description"
            >
              Advanced techniques and equipment for all aspects of metal
              fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="landify-card p-8"
                data-testid={`capability-${index}`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {capability.category}
                </h3>
                <div className="space-y-3">
                  {capability.techniques.map((technique, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{technique}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="projects-title"
            >
              Project Types
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="projects-description"
            >
              Diverse fabrication projects across multiple industries and
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="landify-card p-8"
                data-testid={`project-${index}`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="industries-title"
            >
              Industries We Serve
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="industries-description"
            >
              Fabrication expertise across diverse industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 landify-card p-6"
                data-testid={`industry-${index}`}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding bg-primary text-primary-foreground"
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Hammer className="h-16 w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="cta-title"
          >
            Ready to Start Your Fabrication Project?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            From concept to completion, our fabrication experts will work with
            you to bring your project to life with precision and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" data-testid="contact-button">
              Discuss Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="portfolio-button"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
