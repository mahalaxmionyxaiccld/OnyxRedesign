import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
              Our Offerings
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="services-description">
              Onyx is a One-Stop partner to all Industrial sectors, helping companies transfer their manufacturing value chain with our complete manufacturing and engineering solutions.
            </p>
            <p className="text-1xl md:text-1xl lg:text-2xl font-bold">
              From Prototyping to Production
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal delay={200}>
            <div className="order-2 lg:order-1">
              <img
                src="11062b_272ff3e288454249898a9a003c68d689f000.avif"
                alt="Modern industrial manufacturing facility showcasing advanced machinery"
                className="rounded-2xl shadow-lg w-full h-auto landify-card hover:shadow-2xl hover:scale-105 transition-all duration-500"
                data-testid="services-image"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Complete Manufacturing & Engineering Solutions
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    From prototyping to production, we deliver comprehensive manufacturing services that transform your concepts into high-quality, tangible products with precision and excellence.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">Manufacturing Services</span>
                  </div>
                  <div className="flex items-start space-x-3 group hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">Material Handling Automation & Robotics Services</span>
                  </div>
                  <div className="flex items-start space-x-3 group hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">Sourcing Services</span>
                  </div>
                  <div className="flex items-start space-x-3 group hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">Supplier Development Services</span>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
