import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatisticsSection from "@/components/statistics-section";
import ServicesSection from "@/components/services-section";
import WhyChooseSection from "@/components/why-choose-section";
import ProcessSection from "@/components/process-section";
import IndustriesSection from "@/components/industries-section";
import TestimonialsSection from "@/components/testimonials-section";
import ClientLogosSection from "@/components/client-logos-section";
import ArticlesSection from "@/components/articles-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
