import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sandeep Pandey",
      role: "CMO, Darzi Company",
      content: "We use only the highest-quality materials to ensure your products are built to last, no matter the industry or application. Their attention to detail and commitment to excellence is unmatched.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sandeep Pandey",
      role: "CMO, Darzi Company",
      content: "Outstanding service and incredible precision in manufacturing. Onyx Industries has transformed our product development process with their innovative solutions and reliable delivery.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Sandeep Pandey",
      role: "CMO, Darzi Company",
      content: "The team at Onyx Industries goes above and beyond to ensure project success. Their expertise in advanced manufacturing and commitment to quality is truly impressive.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="testimonials-title">
            Why Clients Love Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-description">
            Hear what our satisfied clients have to say about our manufacturing excellence and service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg" data-testid={`testimonial-card-${index}`}>
              <div className="flex items-center mb-6">
                <div className="text-5xl text-primary/20 mr-4">"</div>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} headshot`} 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <div className="font-semibold" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
