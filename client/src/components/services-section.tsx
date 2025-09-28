import { Button } from "@/components/ui/button";
import { Settings, Box, Compass } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Complete Manufacturing Solutions",
      description: "From initial concept to final production, we provide end-to-end manufacturing services."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Advanced 3D Printing",
      description: "Cutting-edge 3D printing technology for rapid prototyping and production."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Engineering Excellence",
      description: "Expert engineering solutions tailored to your specific industry requirements."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Our Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="services-description">
            Onyx is a One-Stop partner to all Industrial sectors, helping companies transfer their manufacturing value chain with our complete manufacturing and engineering solutions - from Prototyping to Production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Modern industrial manufacturing facility" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="services-image"
            />
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`service-${index}`}>
                <div className="text-primary mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            <Button 
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="services-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
