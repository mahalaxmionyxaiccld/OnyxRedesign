export default function ClientLogosSection() {
  const clientLogos = [
    {
      id: 1,
      name: "BOBST India"
    },
    {
      id: 2,
      name: "Mahindra & Mahindra"
    },
    {
      id: 3,
      name: "ONGC"
    },
    {
      id: 4,
      name: "Mag9"
    },
    {
      id: 5,
      name: "BBS Automation"
    },
    {
      id: 6,
      name: "Ecoppia Scientific LLP"
    },
    {
      id: 7,
      name: "Packam Controls"
    },
    {
      id: 8,
      name: "Infinity Automation Systems pvt ltd"
    },
    {
      id: 9,
      name: "Milcon Engineers"
    },
    {
      id: 10,
      name: "SSIG"
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
              <p className="text-lg font-bold text-foreground" data-testid={`client-name-${logo.id}`}>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
