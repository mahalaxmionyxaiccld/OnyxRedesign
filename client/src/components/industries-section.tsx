import { 
  Settings, 
  Wrench, 
  Cpu, 
  Car, 
  Smartphone, 
  Heart, 
  GraduationCap, 
  Bot, 
  Plane 
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: <Settings className="w-8 h-8" />, name: "Engineering", bgColor: "bg-primary/10", iconColor: "text-primary" },
    { icon: <Wrench className="w-8 h-8" />, name: "Machine Building", bgColor: "bg-secondary/10", iconColor: "text-secondary" },
    { icon: <Cpu className="w-8 h-8" />, name: "Electronics", bgColor: "bg-primary/10", iconColor: "text-primary" },
    { icon: <Car className="w-8 h-8" />, name: "Automotive", bgColor: "bg-secondary/10", iconColor: "text-secondary" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Consumer Products", bgColor: "bg-primary/10", iconColor: "text-primary" },
    { icon: <Heart className="w-8 h-8" />, name: "Medical", bgColor: "bg-secondary/10", iconColor: "text-secondary" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Academics", bgColor: "bg-primary/10", iconColor: "text-primary" },
    { icon: <Bot className="w-8 h-8" />, name: "Automation", bgColor: "bg-secondary/10", iconColor: "text-secondary" },
    { icon: <Plane className="w-8 h-8" />, name: "Aerospace", bgColor: "bg-primary/10", iconColor: "text-primary" }
  ];

  return (
    <section id="industries" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="industries-title">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="industries-description">
            From engineering to aerospace, we provide specialized manufacturing solutions across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover-lift text-center"
              data-testid={`industry-card-${index}`}
            >
              <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <div className={industry.iconColor}>
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold" data-testid={`industry-name-${index}`}>
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
