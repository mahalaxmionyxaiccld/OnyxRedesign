import AnimatedCounter from "@/components/animated-counter";
import ScrollReveal from "@/components/scroll-reveal";

export default function StatisticsSection() {
  const stats = [
    { number: 250, suffix: "+", label: "Projects Done" },
    { number: 50, suffix: "+", label: "Material Available" },
    { number: 45, suffix: "+", label: "Happy Client" },
    { number: 7, suffix: " Days", label: "Avg Delivery" }
  ];

  return (
    <section className="section-padding relative bg-gradient-to-br from-primary/95 via-primary to-primary/80 text-white overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/11062b_272ff3e288454249898a9a003c68d689f000.jpg/v1/fill/w_1919,h_830,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_272ff3e288454249898a9a003c68d689f000.jpg')"
        }}
      />
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and customer satisfaction
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div 
                className="text-center group"
                data-testid={`stat-${index}`}
              >
                <div className="relative">
                  {/* Animated background circle */}
                  <div className="absolute inset-0 bg-white/10 rounded-full transform group-hover:scale-110 transition-transform duration-500 w-24 h-24 mx-auto top-1/2 -translate-y-1/2"></div>
                  
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 relative z-10 group-hover:scale-105 transition-transform duration-300" data-testid={`stat-number-${index}`}>
                    <AnimatedCounter 
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2500}
                      startDelay={index * 300}
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="text-white/90 font-semibold text-sm lg:text-base uppercase tracking-wide" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
                
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-white/30 mx-auto mt-3 transform group-hover:w-16 transition-all duration-300"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
