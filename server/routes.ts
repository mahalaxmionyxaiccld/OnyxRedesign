import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here
      console.log("Contact form submission received:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry. We will get back to you soon!" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
