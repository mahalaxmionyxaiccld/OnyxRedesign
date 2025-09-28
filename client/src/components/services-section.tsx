import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Our Offerings
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="services-description">
            Onyx is a One-Stop partner to all Industrial sectors, helping companies transfer their manufacturing value chain with our complete manufacturing and engineering solutions - from Prototyping to Production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://static.wixstatic.com/media/11062b_272ff3e288454249898a9a003c68d689f000.jpg/v1/fill/w_1919,h_830,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_272ff3e288454249898a9a003c68d689f000.jpg" 
              alt="Modern industrial manufacturing facility showcasing advanced machinery" 
              className="rounded-2xl shadow-lg w-full h-auto landify-card"
              data-testid="services-image"
            />
          </div>
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
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Advanced 3D printing and precision manufacturing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Complete value chain transformation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Expert engineering across all industrial sectors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Cutting-edge technology and innovation</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 hover-lift"
                data-testid="services-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
