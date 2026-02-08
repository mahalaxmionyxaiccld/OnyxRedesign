import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import SEO from "@/components/seo";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Get a Quote for Your Manufacturing Project"
        description="Reach out to Onyx Industries for precision manufacturing, 3D printing, and custom fabrication. Get expert advice and instant quotes in Pune."
        keywords="Contact Onyx Industries, Get Quote, Manufacturing Inquiry, Pune Factory Contact"
      />
      <Navigation />

      {/* Main Contact Content */}
      <div className="bg-background">
        <ContactSection />
      </div>

      {/* Additional Info Cards */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="landify-card p-8 text-center" data-testid="email-card">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
              <p className="text-muted-foreground">
                support@onyxindustries.co.in
              </p>
            </div>

            <div className="landify-card p-8 text-center" data-testid="phone-card">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
              <p className="text-muted-foreground">
                +91-8459383263 / +91-7999829720
              </p>
            </div>

            <div className="landify-card p-8 text-center" data-testid="location-card">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Visit Us</h3>
              <p className="text-muted-foreground">
                T188/6, MIDC, Bhosari, Pune 411026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}