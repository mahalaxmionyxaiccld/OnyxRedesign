import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Award,
} from "lucide-react";
import { openContactPage } from "@/lib/utils";
import SEO from "@/components/seo";

export default function ThreeDPrintingPage() {

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Selective Laser Sintering (SLS)"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Stereolithography (SLA)",

    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Fused Deposition Modeling (FDM)",

    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "HP Multi Jet Fusion (MJF)",

    },
  ];

  const materials = [
    "PLA (Polylactic Acid)",
    "ABS (Acrylonitrile Butadiene Styrene)",
    "PETG (Polyethylene Terephthalate Glycol)",
    "TPU (Thermoplastic Polyurethane)",
    "Nylon (PA)",
    "Wood-filled PLA",
    "Metal-filled PLA",
    "Carbon Fiber reinforced",
  ];

  const applications = [
    {
      title: "Rapid Prototyping",
      description:
        "Quickly validate designs and concepts before full production",
    },
    {
      title: "Custom Parts",
      description: "Low-volume production of specialized components",
    },
    {
      title: "Educational Models",
      description: "Visual aids and teaching tools for academic institutions",
    },
    {
      title: "Medical Devices",
      description: "Biocompatible parts for medical and dental applications",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="3D Printing Services - Rapid Prototyping & Custom Parts"
        description="High-quality 3D printing services for rapid prototyping and production. We offer FDM, SLA, and SLS printing with a wide range of materials."
        keywords="3D Printing Pune, Rapid Prototyping, FDM, SLA, SLS, Custom 3D Printed Parts, Industrial 3D Printing"
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
                Custom Online 3D Printing Service
              </h1>
              <p
                className="text-xl text-muted-foreground mb-8"
                data-testid="hero-description"
              >
                Get instant online 3D printing service quotes on custom parts in
                over 80 metal and plastic materials. Order 3D Printed items and
                get shipped within 2-3 days to your desired location all over the globe.
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
                src="../adfab1_c9a48dfff8344514998ba29304ee2036~mv2.avif"
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
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              data-testid="features-title"
            >
              Onyx's Online 3D Printing Services: High-Quality Rapid Prototyping
              and Production Parts
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="features-description"
            >
              Onyx offers industry-leading 3D printing online services. Whether
              you need prototypes or production parts, we can make them on
              demand. We are your one-stop shop for accurate, precise, custom
              3D-printed parts at an affordable price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="landify-card p-6 text-center"
                data-testid={`feature-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
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
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-8"
                data-testid="materials-title"
              >
                Available Materials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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


          </div>
        </div>
      </section>
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Applications */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-8"
              data-testid="applications-title"
            >
              Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="landify-card p-6"
                  data-testid={`application-${index}`}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {application.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {application.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
