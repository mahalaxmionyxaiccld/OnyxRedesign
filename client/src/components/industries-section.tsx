import ScrollReveal from "@/components/scroll-reveal";

export default function IndustriesSection() {
  const industries = [
    { 
      icon: "https://static.wixstatic.com/media/adfab1_de9421c36e0443caae7277b75e1f6eb6~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/engineering.png", 
      name: "Engineering" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_27f012eb6c114f68a9c7e8b5116ee1be~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/milling-machine.png", 
      name: "Machine Building" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_c93e7979c58c4ec7999396703fdfdc90~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/circuit.png", 
      name: "Electronics" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_9e05a8816c4f412ca4cea3361657fff0~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/automotive.png", 
      name: "Automotive" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_a86ea0676a4d4d40831853c365b394c1~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/responsive.png", 
      name: "Consumer Products" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_fe9cfe1640bd42389bbc45525662b803~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defribillator.png", 
      name: "Medical" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_a9cfd863585a46f498d71c8011b5dbb8~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/book.png", 
      name: "Academics" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_d4f354527f81448caae84a58dab97a49~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/technology.png", 
      name: "Automation" 
    },
    { 
      icon: "https://static.wixstatic.com/media/adfab1_150cb26668f6429db0e02800f73f83a3~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aerospace-engineering.png", 
      name: "Aerospace" 
    }
  ];

  return (
    <section id="industries" className="section-padding relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/11062b_272ff3e288454249898a9a003c68d689f000.jpg/v1/fill/w_1919,h_830,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_272ff3e288454249898a9a003c68d689f000.jpg')"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="industries-title">
              Possibilities Are Endless
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="industries-description">
              From concept to creation, we empower industries with limitless opportunities through innovation, advanced engineering, and precision manufacturing.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <img 
              src="https://static.wixstatic.com/media/adfab1_7c66b809a6124ca1973a2e4c46975790~mv2.jpg/v1/fill/w_980,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freepik__upload__49441.jpg" 
              alt="Industrial manufacturing facility showcasing diverse industry applications" 
              className="rounded-2xl shadow-2xl w-full h-auto mb-12 landify-card hover:shadow-3xl transition-all duration-500"
              data-testid="industries-hero-image"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="bg-white/80 dark:bg-card/80 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-border/20 hover-lift text-center landify-card transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                data-testid={`industry-card-${index}`}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full p-2 transition-all duration-300 group-hover:bg-primary/20">
                  <img 
                    src={industry.icon} 
                    alt={`${industry.name} industry icon`}
                    className="w-16 h-16 object-contain filter transition-all duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground transition-colors duration-300" data-testid={`industry-name-${index}`}>
                  {industry.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
