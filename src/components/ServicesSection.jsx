import { Check } from 'lucide-react'
import { content } from '../content'

export default function ServicesSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="relative py-24 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-rule" />
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-light">
              {content.services.eyebrow}
            </p>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-4">
            {content.services.title}
          </h2>
          <p className="text-pearl/70 font-light text-lg italic">
            {content.services.subtitle}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {content.services.items.map((service, idx) => (
            <div
              key={service.name}
              className={`reveal relative p-8 md:p-10 transition-all duration-700 ${
                service.featured
                  ? 'bg-gradient-to-b from-smoke to-night border border-gold/40 md:-mt-6 md:pb-14'
                  : 'bg-night border border-ash/30 hover:border-gold/30'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-obsidian px-6 py-2 text-[10px] uppercase tracking-ultra-wide font-medium whitespace-nowrap">
                  {service.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-3xl text-ivory mb-3">{service.name}</h3>
                <p className="text-xs uppercase tracking-ultra-wide text-mist mb-6 font-light">
                  {service.duration}
                </p>
                <div className="flex justify-center mb-4">
                  <span className="gold-rule" />
                </div>
                <p className="font-display text-4xl text-gold">{service.price}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-pearl/80 font-light">
                    <Check size={16} className="text-gold shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('contact')}
                className={`w-full py-4 text-xs uppercase tracking-ultra-wide font-light transition-all duration-500 ${
                  service.featured
                    ? 'bg-gold text-obsidian hover:bg-goldLight'
                    : 'border border-ash text-pearl hover:border-gold hover:text-gold'
                }`}
              >
                Rezervuoti
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal text-center text-mist text-sm italic mt-12 max-w-2xl mx-auto font-light">
          {content.services.note}
        </p>
      </div>
    </section>
  )
}
