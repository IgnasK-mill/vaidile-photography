import { ChevronDown } from 'lucide-react'
import { content } from '../content'

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Vaidilė Gudašiūtė fotografija"
          className="w-full h-full object-cover animate-slow-zoom"
          style={{ objectPosition: 'center 15%' }}
        />
      </div>

      {/* Multi-layer gradient overlays for cinematic depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/95 via-obsidian/60 to-obsidian/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl animate-fade-up">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-rule" />
            <p className="text-xs md:text-sm uppercase tracking-ultra-wide text-gold font-light">
              {content.hero.eyebrow}
            </p>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-ivory mb-6">
            {content.hero.title}
            <br />
            <span className="italic text-goldLight">{content.hero.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-pearl/80 font-light leading-relaxed max-w-xl mb-12">
            {content.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('portfolio')}
              className="group bg-gold text-obsidian px-8 py-4 text-xs uppercase tracking-ultra-wide font-medium hover:bg-goldLight transition-all duration-500"
            >
              {content.hero.ctaPrimary}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="border border-ivory/40 text-ivory px-8 py-4 text-xs uppercase tracking-ultra-wide font-light hover:border-gold hover:text-gold transition-all duration-500"
            >
              {content.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Vertical decorative label — right edge */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
        <p className="vertical-text text-xs uppercase text-mist font-light">
          @{content.brand.instagram}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-gentle-pulse">
        <p className="text-[10px] uppercase tracking-mega-wide text-mist font-light">
          {content.hero.scrollHint}
        </p>
        <ChevronDown className="text-gold" size={20} />
      </div>
    </section>
  )
}
