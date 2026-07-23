import { ChevronDown } from 'lucide-react';

export default function HeroSection({ t }) {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-cream via-ivory to-cream min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-block">
                <div className="h-1 w-12 bg-blush rounded-full mb-4"></div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-stone leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-sage font-display italic">{t.hero.subtitle}</p>
            </div>

            <p className="text-lg text-stone/80 max-w-lg leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={scrollToPortfolio} className="btn-primary">
                {t.hero.cta}
              </button>
              <button className="btn-outline">
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder - in production, use a real image */}
            <div className="w-full h-full bg-gradient-to-br from-warm via-blush to-stone/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-sm text-stone/60">Featured Portrait</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 md:mt-20 flex justify-center animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="p-3 hover:bg-warm rounded-full transition-colors"
        >
          <ChevronDown className="text-sage" size={24} />
        </button>
      </div>
    </section>
  );
}
