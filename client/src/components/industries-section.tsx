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
    <section id="industries" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="industries-title">
            Industries We Serve
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="industries-description">
            From engineering to aerospace, we provide specialized manufacturing solutions across diverse sectors.
          </p>
        </div>

        <div className="relative">
          <img 
            src="https://static.wixstatic.com/media/adfab1_7c66b809a6124ca1973a2e4c46975790~mv2.jpg/v1/fill/w_980,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/freepik__upload__49441.jpg" 
            alt="Industrial manufacturing facility showcasing diverse industry applications" 
            className="rounded-2xl shadow-lg w-full h-auto mb-12 landify-card"
            data-testid="industries-hero-image"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-card p-6 lg:p-8 rounded-xl shadow-sm border border-border/50 hover-lift text-center landify-card"
              data-testid={`industry-card-${index}`}
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={industry.icon} 
                  alt={`${industry.name} industry icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground" data-testid={`industry-name-${index}`}>
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
