import { Button } from "@/components/ui/button";
import { openContactPage } from "@/lib/utils";

export default function ProcessSection() {
  const steps = [
    {
      icon: "blueprint.avif",
      title: "You Design",
      description: "Share your concept, and we'll refine it for optimal production."
    },
    {
      icon: "manufacture.avif",
      title: "We Manufacture",
      description: "Using cutting-edge technology, we bring your design to life with precision."
    },
    {
      icon: "blueprint.avif",
      title: "Delivery On-Time",
      description: "High-quality, production-ready parts, shipped with speed and reliability."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="process-title">
            Process Simplified
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="process-description">
            Our streamlined three-step process ensures your ideas become reality with maximum efficiency and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="process-step text-center" data-testid={`process-step-${index}`}>
              <div className="w-32 h-32 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8 landify-card">
                <img
                  src={step.icon}
                  alt={`${step.title} process icon`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground" data-testid={`process-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`process-step-description-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            onClick={openContactPage}
            size="lg"
            className="bg-primary text-primary-foreground px-10 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover-lift"
            data-testid="process-lets-connect"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
