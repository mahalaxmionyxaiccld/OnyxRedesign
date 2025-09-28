import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4" data-testid="footer-logo">
              Onyx Industries
            </div>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="footer-description">
              Transforming concepts into tangible, high-quality products through advanced manufacturing and engineering solutions. Your trusted partner for precision and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-3d-printing">
                  3D Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-prototyping">
                  Prototyping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-manufacturing">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-engineering">
                  Engineering
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-company-title">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors duration-200 text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors duration-200 text-left"
                  data-testid="footer-link-services"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors duration-200 text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-primary transition-colors duration-200 text-left"
                  data-testid="footer-link-testimonials"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p data-testid="footer-copyright">
            &copy; 2024 Onyx Industries. All rights reserved. | Precision Manufacturing & Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
