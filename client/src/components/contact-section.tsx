import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MapIcon } from "lucide-react";
import type { ContactFormData } from "@shared/schema";
import { contactFormSchema } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Google Apps Script URL from environment variable
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        toast({
          title: "Configuration Error",
          description: "Google Sheets integration is not configured. Please see README.md for setup instructions.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Submit to Google Sheets via Apps Script
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors mode
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName || "",
          companyName: formData.companyName || "",
          phone: formData.phone || "",
          email: formData.email,
          requirements: formData.requirements || "",
          timestamp: new Date().toISOString(),
        }),
      });

      // Note: With no-cors mode, we can't read the response
      // Assume success if no error is thrown
      toast({
        title: "Success!",
        description: "Thank you for your inquiry. We will get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your ideas to life? Get in touch with our expert team for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="image3.png"
              alt="Professional team collaboration and consultation meeting"
              className="rounded-2xl shadow-lg w-full h-auto landify-card"
              data-testid="contact-image"
            />

            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-muted-foreground">support@onyxindustries.co.in</div>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-muted-foreground">+91-8459383263 / +91-7999829720</div>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-address">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-muted-foreground">
                    <a
                      href="https://maps.app.goo.gl/gNrHDKcpYCKf8UCU9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 bg-blue-50 dark:bg-blue-950/30
                                    px-2 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40
                                    underline underline-offset-2 transition"
                    >
                      T188/6, MIDC, Bhosari, Pune 411026 Behind Faurecia company
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName || ""}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                  Company name
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName || ""}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  placeholder="Your Company"
                  data-testid="input-company-name"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us Your Requirement
                </Label>
                <Textarea
                  id="requirements"
                  rows={4}
                  value={formData.requirements || ""}
                  onChange={(e) => handleInputChange("requirements", e.target.value)}
                  placeholder="Describe your project requirements..."
                  className="resize-none"
                  data-testid="textarea-requirements"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
