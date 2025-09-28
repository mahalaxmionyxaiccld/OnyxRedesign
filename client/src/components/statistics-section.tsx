export default function StatisticsSection() {
  const stats = [
    { number: "250+", label: "Projects Done" },
    { number: "50+", label: "Materials Available" },
    { number: "45+", label: "Happy Clients" },
    { number: "7", label: "Days Avg Delivery" }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-number-${index}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
