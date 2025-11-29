import { z } from "zod";

// Client-side contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  requirements: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
