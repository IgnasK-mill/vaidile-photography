import { useState } from 'react'
import { Instagram, ArrowUpRight } from 'lucide-react'
import { content } from '../content'

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all')

  const filters = [
    { key: 'all', label: content.portfolio.filters.all },
    { key: 'portraits', label: content.portfolio.filters.portraits },
    { key: 'weddings', label: content.portfolio.filters.weddings },
    { key: 'birthdays', label: content.portfolio.filters.birthdays },
  ]

  const items = filter === 'all'
    ? content.portfolio.items
    : content.portfolio.items.filter((i) => i.category === filter)

  // Placeholder gradients for each category (until real images are added)
  const gradientFor = (cat) => {
    if (cat === 'portraits') return 'from-smoke via-night to-obsidian'
    if (cat === 'weddings') return 'from-night via-smoke to-ash/60'
    return 'from-ash/40 via-smoke to-night'
  }

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="reveal max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="gold-rule" />
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-light">
              {content.portfolio.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-4">
            {content.portfolio.title}
          </h2>
          <p className="text-pearl/70 font-light text-lg italic">
            {content.portfolio.subtitle}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="reveal flex flex-wrap gap-3 md:gap-6 mb-12 md:mb-16">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`text-xs uppercase tracking-ultra-wide px-5 py-3 font-light transition-all duration-500 ${
                filter === f.key
                  ? 'text-gold border-b border-gold'
                  : 'text-mist hover:text-pearl border-b border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-item reveal aspect-[3/4] bg-gradient-to-br ${gradientFor(item.category)}`}
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              {/* Placeholder — when adding real images, replace with:
              <img src={`/images/portfolio-${item.id}.jpg`} alt={item.title} className="w-full h-full object-cover" />
              */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl font-display text-goldDim/30 italic">
                  {item.id}
                </span>
              </div>
              <div className="gallery-overlay">
                <div>
                  <p className="text-[10px] uppercase tracking-ultra-wide text-gold mb-2 font-light">
                    {content.portfolio.filters[item.category] || item.category}
                  </p>
                  <p className="font-display text-xl text-ivory">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal mt-16 md:mt-20 text-center">
          <p className="text-mist font-light italic mb-6">{content.portfolio.ctaText}</p>
          <a
            href={content.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold hover:text-goldLight transition-colors duration-500 group"
          >
            <Instagram size={18} />
            <span className="uppercase tracking-ultra-wide text-sm font-light">
              {content.portfolio.ctaLink}
            </span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
