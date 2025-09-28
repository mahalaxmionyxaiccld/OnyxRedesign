export default function ClientLogosSection() {
  const clientLogos = [
    {
      id: 1,
      src: "https://static.wixstatic.com/media/a3c153_694bc34e396646218d96228b187ed4d5~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%201.png",
      alt: "Client partner logo 1"
    },
    {
      id: 2,
      src: "https://static.wixstatic.com/media/a3c153_3952fdce0a414a82aac8856bda6df67b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%202.png",
      alt: "Client partner logo 2"
    },
    {
      id: 3,
      src: "https://static.wixstatic.com/media/a3c153_8fcae36c9c7943e1aedb144c75248951~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%203.png",
      alt: "Client partner logo 3"
    },
    {
      id: 4,
      src: "https://static.wixstatic.com/media/a3c153_6f0dd109133d4836abd7eada38ce8748~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%204.png",
      alt: "Client partner logo 4"
    },
    {
      id: 5,
      src: "https://static.wixstatic.com/media/a3c153_037f2efc2b034aabac0efeb3d7a18919~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%205.png",
      alt: "Client partner logo 5"
    }
  ];

  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="clients-title">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="clients-description">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center" data-testid={`client-logo-${logo.id}`}>
              <img 
                src={logo.src}
                alt={logo.alt}
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 landify-card"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
