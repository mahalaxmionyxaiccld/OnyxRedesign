export default function StatisticsSection() {
  const stats = [
    { number: "250+", label: "Projects Done" },
    { number: "50+", label: "Material Available" },
    { number: "45+", label: "Happy Client" },
    { number: "7 Days", label: "Avg Delivery" }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`stat-${index}`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-foreground/70 font-medium text-sm lg:text-base" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
