import { Button } from "@/components/ui/button";
import { PenTool, Factory, Truck } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "You Design",
      description: "Share your concept, and we'll refine it for optimal production.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "We Manufacture",
      description: "Using cutting-edge technology, we bring your design to life with precision.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Delivery On-Time",
      description: "High-quality, production-ready parts, shipped with speed and reliability.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="process-title">
            Process Simplified
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="process-description">
            Our streamlined three-step process ensures your ideas become reality with maximum efficiency and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="process-step text-center" data-testid={`process-step-${index}`}>
              <div className={`w-24 h-24 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className={step.iconColor}>
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid={`process-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`process-step-description-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            data-testid="process-lets-connect"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
