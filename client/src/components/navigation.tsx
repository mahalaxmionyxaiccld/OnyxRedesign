import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary" data-testid="logo">
              Onyx Industries
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-200 nav-link"
                data-testid="nav-home"
              >
                Home
              </Link>

              {/* Offerings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="nav-offerings">
                  Offerings
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/offerings/3d-printing" className="w-full" data-testid="nav-3d-printing">
                      3D Printing Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/offerings/machining" className="w-full" data-testid="nav-machining">
                      Machining
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/offerings/sheet-metal" className="w-full" data-testid="nav-sheet-metal">
                      Sheet Metal & Fabrication
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/offerings/vacuum-casting" className="w-full" data-testid="nav-vacuum-casting">
                      Vacuum Casting
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/offerings/fabrication" className="w-full" data-testid="nav-fabrication">
                      Fabrication
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="nav-products">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/products" className="w-full" data-testid="nav-all-products">
                      View All Products
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/products/material-handling-crane" className="w-full" data-testid="nav-material-handling-crane">
                      Material Handling Crane
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link 
                href="/blogs"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 nav-link"
                data-testid="nav-blogs"
              >
                Blogs
              </Link>
              <Link 
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 nav-link"
                data-testid="nav-about"
              >
                About Us
              </Link>
              <Link 
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 nav-link"
                data-testid="nav-contact"
              >
                Contact Us
              </Link>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover-scale"
                data-testid="nav-get-quote"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm border-t border-border">
              <Link 
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
                data-testid="mobile-nav-home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Offerings */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-muted-foreground font-medium">Offerings</div>
                <Link 
                  href="/offerings/3d-printing"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-3d-printing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  3D Printing Services
                </Link>
                <Link 
                  href="/offerings/machining"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-machining"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Machining
                </Link>
                <Link 
                  href="/offerings/sheet-metal"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-sheet-metal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sheet Metal & Fabrication
                </Link>
                <Link 
                  href="/offerings/vacuum-casting"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-vacuum-casting"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vacuum Casting
                </Link>
                <Link 
                  href="/offerings/fabrication"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-fabrication"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fabrication
                </Link>
              </div>

              {/* Mobile Products */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-muted-foreground font-medium">Products</div>
                <Link 
                  href="/products"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-all-products"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Products
                </Link>
                <Link 
                  href="/products/material-handling-crane"
                  className="block px-6 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="mobile-nav-material-handling-crane"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Material Handling Crane
                </Link>
              </div>

              <Link 
                href="/blogs"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-blogs"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/about"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="mobile-nav-contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
                data-testid="mobile-nav-get-quote"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
