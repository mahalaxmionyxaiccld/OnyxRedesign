import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import ProcessSection from "@/components/process-section";
import IndustriesSection from "@/components/industries-section";
import TestimonialsSection from "@/components/testimonials-section";
import ClientLogosSection from "@/components/client-logos-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SEO from "@/components/seo";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Onyx Industries",
    "url": "https://onyx-industries.com",
    "logo": "https://onyx-industries.com/onyx_vertical.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8459383263",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "T188/6, MIDC, Bhosari",
      "addressLocality": "Pune",
      "postalCode": "411026",
      "addressCountry": "IN"
    },
    "description": "Leading provider of Precision Manufacturing, 3D Printing, and Engineering Solutions in Pune, India."
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Onyx Industries - Precision Manufacturing & 3D Printing"
        description="Experience manufacturing excellence with Onyx Industries. We specialize in 3D Printing, CNC Machining, and Sheet Metal Fabrication. ISO 9001:2015 certified."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
