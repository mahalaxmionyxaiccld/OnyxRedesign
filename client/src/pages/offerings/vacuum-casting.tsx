import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Droplets,
  Clock,
  Palette,
  Award,
} from "lucide-react";
import { openContactPage } from "@/lib/utils";
import SEO from "@/components/seo";

export default function VacuumCastingPage() {

  const advantages = [
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Superior Surface Quality",
      description:
        "Bubble-free castings with excellent surface finish and fine detail reproduction",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Rapid Prototyping",
      description:
        "Quick turnaround for prototype parts and low-volume production runs",
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Material Variety",
      description:
        "Wide range of polyurethane resins with different properties and colors",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Cost Effective",
      description:
        "Economical solution for small to medium production quantities",
    },
  ];

  const applications = [
    {
      title: "Prototype Development",
      description:
        "Functional prototypes that closely match final production properties",
      benefits: [
        "Material validation",
        "Fit and function testing",
        "Market validation",
      ],
    },
    {
      title: "Low-Volume Production",
      description:
        "Cost-effective production for specialized or limited-run products",
      benefits: ["Reduced tooling costs", "Quick market entry", "Flexibility"],
    },
    {
      title: "Complex Geometries",
      description: "Parts with intricate details, undercuts, and thin walls",
      benefits: ["Design freedom", "Fine details", "Smooth surfaces"],
    },
    {
      title: "Replacement Parts",
      description: "Recreate discontinued or hard-to-find components",
      benefits: [
        "No minimum quantities",
        "Match original specs",
        "Fast delivery",
      ],
    },
  ];

  const materials = [
    {
      name: "Rigid Polyurethanes",
      properties: "High strength, excellent dimensional stability",
      applications: "Housings, brackets, structural components",
    },
    {
      name: "Flexible Polyurethanes",
      properties: "Rubber-like flexibility, tear resistance",
      applications: "Gaskets, seals, flexible components",
    },
    {
      name: "Clear Resins",
      properties: "Optical clarity, UV stability",
      applications: "Lenses, light guides, transparent parts",
    },
    {
      name: "High-Temperature Resins",
      properties: "Heat resistance up to 200°C",
      applications: "Automotive, aerospace applications",
    },
  ];

  const process = [
    "Create or modify master pattern",
    "Prepare silicone mold around pattern",
    "Vacuum chamber preparation",
    "Material mixing and degassing",
    "Vacuum casting process",
    "Curing and finishing",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Vacuum Casting Services - Low Volume Production & Prototyping"
        description="High-quality vacuum casting for plastic parts and functional prototypes. Rapid turnaround for polyurethane casting in Pune."
        keywords="Vacuum Casting Pune, Polyurethane Casting, Batch Production, Silicone Molds, Plastic Prototyping"
      />
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
                Custom Vacuum Casting Service
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8"
                data-testid="hero-description"
              >
                Get instant online vacuum casting service quotes on custom parts
                in over 80 metal and plastic materials. Order Vacuum Cast items
                and get Free Shipping on all US orders. ISO 9001:2015, ISO
                13485, IATF 16949:2016, and AS9100D certified. ITAR registered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={openContactPage}
                  data-testid="get-quote-button"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <img
                src="../vaccum_casting.png"
                alt="Technicians performing precision vacuum casting with polyurethane resins"
                className="rounded-2xl shadow-lg w-full h-auto landify-card"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="advantages-title"
            >
              Vacuum Casting Advantages
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="advantages-description"
            >
              Experience the benefits of vacuum casting for your prototyping and
              low-volume production needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="landify-card p-6 text-center"
                data-testid={`advantage-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="applications-title"
            >
              Applications & Use Cases
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="applications-description"
            >
              Versatile vacuum casting solutions for diverse industry
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="landify-card p-8"
                data-testid={`application-${index}`}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {application.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {application.description}
                </p>
                <div className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="materials-title"
            >
              Available Materials
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="materials-description"
            >
              Comprehensive range of polyurethane resins for different
              application requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div
                key={index}
                className="landify-card p-8"
                data-testid={`material-${index}`}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {material.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {material.properties}
                </p>
                <div className="text-sm text-primary font-medium">
                  Applications: {material.applications}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="process-title"
            >
              Our Process
            </h2>
            <p
              className="text-lg text-muted-foreground"
              data-testid="process-description"
            >
              Professional vacuum casting process ensuring consistent quality
              and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="landify-card p-6 text-center"
                data-testid={`process-step-${index}`}
              >
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step}
                </h3>
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
          <Droplets className="h-16 w-16 mx-auto mb-6" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="cta-title"
          >
            Ready for Vacuum Casting?
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
            Transform your designs into high-quality polyurethane parts with our
            vacuum casting services. Get a quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" data-testid="contact-button" onClick={openContactPage}>
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
