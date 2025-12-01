import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import { useState } from "react";

export default function BlogsPage() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const articles = [
    {
      id: 1,
      title: "The Future of AI in Precision Manufacturing",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing precision manufacturing processes, from automated quality control to predictive maintenance systems.",
      image: "manufacture.avif",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      content: {
        sections: [
          {
            heading: "Introduction to AI in Manufacturing",
            content: "Artificial Intelligence is transforming the manufacturing landscape at an unprecedented pace. From predictive maintenance to quality control, AI technologies are enabling manufacturers to achieve higher efficiency, reduce costs, and improve product quality. This transformation is particularly significant in precision manufacturing where tolerances are measured in microns and quality standards are exceptionally high."
          },
          {
            heading: "Machine Learning for Quality Control",
            content: "Advanced machine learning algorithms can now detect defects and anomalies that would be impossible for human inspectors to identify. Computer vision systems powered by deep learning can analyze thousands of parts per minute, identifying surface defects, dimensional variations, and material inconsistencies with accuracy rates exceeding 99.9%. This technology is particularly valuable in industries like aerospace and medical devices where quality is paramount."
          },
          {
            heading: "Predictive Maintenance Revolution",
            content: "AI-driven predictive maintenance systems analyze vibration patterns, temperature fluctuations, and operational data to predict equipment failures before they occur. This approach reduces unplanned downtime by up to 50% and extends equipment life by 20-25%. By implementing IoT sensors and machine learning algorithms, manufacturers can transition from reactive maintenance to predictive strategies that optimize production schedules and resource allocation."
          },
          {
            heading: "The Road Ahead",
            content: "As AI technologies continue to evolve, we can expect to see even more sophisticated applications in manufacturing. Generative AI will enable automated design optimization, while reinforcement learning will optimize production parameters in real-time. The future of manufacturing lies in the seamless integration of human expertise with AI capabilities, creating smart factories that adapt and learn continuously."
          }
        ]
      }
    },
    {
      id: 2,
      title: "3D Printing Materials: Beyond Plastics to Metal Innovation",
      excerpt: "Discover the latest advances in 3D printing materials, including metal alloys, ceramics, and composite materials that are expanding the possibilities of additive manufacturing.",
      image: "adfab1_c9a48dfff8344514998ba29304ee2036~mv2.avif",
      author: "James Rodriguez",
      date: "November 28, 2024",
      readTime: "6 min read",
      content: {
        sections: [
          {
            heading: "Evolution of 3D Printing Materials",
            content: "The landscape of 3D printing materials has evolved dramatically from simple PLA and ABS plastics to sophisticated engineering materials including titanium alloys, stainless steel, and high-performance ceramics. This evolution has opened new applications in aerospace, medical, and automotive industries where material properties are as important as geometric complexity."
          },
          {
            heading: "Metal 3D Printing Breakthroughs",
            content: "Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) technologies now support a wide range of metal alloys including Inconel, titanium, aluminum, and tool steels. These materials maintain mechanical properties comparable to traditional manufacturing methods while enabling complex internal geometries impossible with conventional machining. Applications range from lightweight aerospace components to patient-specific medical implants."
          },
          {
            heading: "Composite and Ceramic Materials",
            content: "Advanced composite materials combining carbon fiber with thermoplastics offer exceptional strength-to-weight ratios for automotive and aerospace applications. Meanwhile, technical ceramics enable high-temperature applications in turbine components and electronic substrates. These materials require specialized printing techniques and post-processing but deliver performance characteristics that justify the additional complexity."
          },
          {
            heading: "Future Material Innovations",
            content: "Emerging materials include biocompatible polymers for medical applications, electrically conductive filaments for electronics integration, and smart materials that change properties in response to environmental conditions. As material science advances, we can expect to see 3D printing expand into new industries and applications previously thought impossible."
          }
        ]
      }
    },
    {
      id: 3,
      title: "Sustainable Manufacturing: Green Technologies and Practices",
      excerpt: "Learn how modern manufacturing is embracing sustainability through energy-efficient processes, waste reduction strategies, and circular economy principles.",
      image: "freepik__upload__49441.avif",
      author: "Maria Gonzalez",
      date: "November 10, 2024",
      readTime: "7 min read",
      content: {
        sections: [
          {
            heading: "The Imperative for Sustainable Manufacturing",
            content: "As environmental concerns intensify and regulations become more stringent, manufacturers are recognizing that sustainability is not just an ethical imperative but also a business necessity. Sustainable manufacturing practices reduce operational costs, improve brand reputation, and ensure long-term viability in an increasingly environmentally conscious market."
          },
          {
            heading: "Energy Efficiency in Manufacturing",
            content: "Modern manufacturing facilities are implementing smart energy management systems that optimize power consumption based on production schedules and demand patterns. LED lighting, variable frequency drives, and high-efficiency motors can reduce energy consumption by 30-50%. Additionally, renewable energy sources like solar and wind are becoming increasingly viable for powering manufacturing operations."
          },
          {
            heading: "Waste Reduction and Circular Economy",
            content: "Implementing circular economy principles, manufacturers are finding innovative ways to minimize waste and maximize resource utilization. This includes designing products for disassembly and recycling, implementing closed-loop water systems, and finding secondary uses for manufacturing byproducts. Advanced analytics help identify waste streams and optimization opportunities throughout the production process."
          },
          {
            heading: "The Business Case for Sustainability",
            content: "Sustainable manufacturing practices often lead to significant cost savings through reduced material consumption, lower energy bills, and decreased waste disposal costs. Companies implementing comprehensive sustainability programs report average cost reductions of 15-25% while improving their competitive position in environmentally conscious markets. The initial investment in green technologies typically pays for itself within 2-3 years."
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Manufacturing Insights & News
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="hero-description">
            Stay informed with the latest industry trends, manufacturing insights, and technical articles from our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={navigateToContact}
              data-testid="subscribe-button"
            >
              Subscribe to Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedArticle === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="bg-card rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift landify-card cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedArticle(article.id)}
                  data-testid={`article-card-${index}`}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {(() => {
                const article = articles.find(a => a.id === selectedArticle);
                if (!article) return null;
                return (
                  <div>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedArticle(null)}
                      className="mb-8"
                      data-testid="back-to-articles"
                    >
                      ← Back to Articles
                    </Button>
                    <article className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg mb-8"
                      />
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-6">{article.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-6">{article.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        {article.title}
                      </h1>
                      <div className="prose prose-lg max-w-none">
                        {article.content.sections.map((section, index) => (
                          <div key={index} className="mb-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-4">
                              {section.heading}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 pt-8 border-t border-border">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-foreground mb-4">
                            Interested in Our Manufacturing Services?
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Contact us to learn more about how these technologies can benefit your manufacturing processes.
                          </p>
                          <Button
                            size="lg"
                            onClick={navigateToContact}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Get in Touch
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}