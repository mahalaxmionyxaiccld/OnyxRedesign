export default function ArticlesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="articles-title">
            Helpful Articles
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8" data-testid="articles-description">
              Check back soon
            </p>
            <p className="text-muted-foreground" data-testid="articles-placeholder">
              Once posts are published, you'll see them here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}