import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Operations Director, AutoParts Ltd",
      content: "We use only the highest-quality materials to ensure your products are built to last, no matter the industry or application. Their attention to detail and commitment to excellence is unmatched.",
      avatar: "profile.png",
      rating: 5
    },
    {
      name: "Anjali Sharma",
      role: "Lead Engineer, TechFab India",
      content: "Outstanding service and incredible precision in manufacturing. Onyx Industries has transformed our product development process with their innovative solutions and reliable delivery.",
      avatar: "profile.png",
      rating: 5
    },
    {
      name: "Suresh K.",
      role: "CEO, Pune Precision Systems",
      content: "The team at Onyx Industries goes above and beyond to ensure project success. Their expertise in advanced manufacturing and commitment to quality is truly impressive.",
      avatar: "profile.png",
      rating: 5
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewBody": t.content,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating,
          "bestRating": "5"
        }
      }
    }))
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
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
            <div key={index} className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300" data-testid={`testimonial-card-${index}`}>
              <div className="flex items-center mb-6">
                <div className="text-5xl text-primary/20 mr-4">"</div>
                <div className="flex text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center border-t border-border/50 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary/10"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
