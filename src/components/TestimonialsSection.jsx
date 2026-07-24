import { Quote } from 'lucide-react'
import { content } from '../content'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-night">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-rule" />
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-light">
              {content.testimonials.eyebrow}
            </p>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory">
            {content.testimonials.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.testimonials.items.map((t, idx) => (
            <div
              key={t.name}
              className="reveal group bg-obsidian border border-ash/30 p-8 md:p-10 hover:border-gold/40 transition-all duration-700"
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              <Quote className="text-gold mb-6 opacity-60" size={28} />
              <p className="text-pearl/80 font-light leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-ash/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-goldDim/40 flex items-center justify-center font-display text-lg text-ivory">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-ivory">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-ultra-wide text-mist font-light mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
