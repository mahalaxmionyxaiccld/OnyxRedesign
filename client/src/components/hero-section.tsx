import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" data-testid="hero-title">
              We bring your ideas to life with 
              <span className="text-secondary"> precision & excellence</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="hero-description">
              Turning concepts into tangible, high-quality products through advanced 3D printing and precision manufacturing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 shadow-lg"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
                data-testid="button-enquire-now"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          <div className="animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced 3D printing technology in action" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
