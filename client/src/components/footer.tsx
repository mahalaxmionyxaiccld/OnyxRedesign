import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block" data-testid="footer-logo">
              Onyx Industries
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="footer-description">
              Transforming concepts into tangible, high-quality products through advanced manufacturing and engineering solutions. Your trusted partner for precision and innovation.
            </p>
            <div className="text-background/60 text-sm space-y-2">
              <p>T188/6, MIDC, Bhosari, Pune, MH 411026</p>
              <p>Email: contact@onyx-industries.com</p>
              <p>Phone: +91 84593 83263</p>
            </div>

          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/offerings/machining" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-machining">
                  Machining Services
                </Link>
              </li>
              <li>
                <Link href="/offerings/sheet-metal" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-sheet-metal">
                  Sheet Metal
                </Link>
              </li>
              <li>
                <Link href="/offerings/fabrication" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-fabrication">
                  Fabrication
                </Link>
              </li>
              <li>
                <Link href="/offerings/3d-printing" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-3d-printing">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link href="/offerings/vacuum-casting" className="hover:text-primary transition-colors duration-200" data-testid="footer-service-vacuum-casting">
                  Vacuum Casting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-company-title">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200" data-testid="footer-link-about">
                  About Us
                </Link>
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
                <Link href="/contact" className="hover:text-primary transition-colors duration-200" data-testid="footer-link-contact">
                  Contact
                </Link>
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
            &copy; 2026 Onyx Industries. All rights reserved. | Precision Manufacturing & Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
