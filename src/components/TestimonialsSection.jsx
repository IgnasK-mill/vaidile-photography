import { Star } from 'lucide-react';

export default function TestimonialsSection({ t }) {
  return (
    <section id="testimonials" className="section-container bg-gradient-to-b from-cream to-ivory">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="gold-divider"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-stone">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {t.testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-sage text-sage"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone/80 italic leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-blush pt-4">
                <p className="font-semibold text-stone">{review.name}</p>
                <p className="text-xs text-sage uppercase tracking-wide">Klientė</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p className="text-stone/70 mb-4">
            Nuo mano klientų žinoma mano profesionalumas ir dedikacija
          </p>
          <button className="btn-primary">
            Perskaitykite daugiau atsiliepimų
          </button>
        </div>
      </div>
    </section>
  );
}
