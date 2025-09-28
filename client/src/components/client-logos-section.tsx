export default function ClientLogosSection() {
  const clientLogos = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Client Logo ${i + 1}`
  }));

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="clients-title">
            Our Clients
          </h2>
          <p className="text-muted-foreground" data-testid="clients-description">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="flex justify-center" data-testid={`client-logo-${logo.id}`}>
              <div className="w-24 h-24 bg-muted-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground text-center">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
