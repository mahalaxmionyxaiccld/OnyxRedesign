import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertContactSubmission>({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    requirements: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
        requirements: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContactSubmission, value: string) => {
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team consultation meeting" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="contact-image"
            />
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-muted-foreground">info@onyxindustries.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-4" data-testid="contact-address">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-muted-foreground">123 Industrial Ave, Manufacturing District</div>
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
                disabled={contactMutation.isPending}
                data-testid="button-submit"
              >
                {contactMutation.isPending ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
