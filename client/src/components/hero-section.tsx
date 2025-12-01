import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/scroll-reveal";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "We bring your ideas to life with precision & excellence";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="absolute inset-0 landify-hero-bg opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transform hover:scale-105 transition-transform duration-300" data-testid="hero-title">
                {typedText}
                {showCursor && <span className="animate-pulse text-primary">|</span>}
              </h1>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0" data-testid="hero-description">
                Turning concepts into tangible, high-quality products
              </p>
            </div>

            <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.6s" }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-all duration-300 hover-lift transform hover:scale-105 hover:shadow-xl"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                data-testid="button-enquire-now"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              <img
                src="adfab1_c9a48dfff8344514998ba29304ee2036~mv2.avif"
                alt="Advanced 3D printing and precision manufacturing"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-lg"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
