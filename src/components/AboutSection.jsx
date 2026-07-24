import { Instagram } from 'lucide-react'
import { content } from '../content'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-night overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="reveal relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-smoke via-night to-obsidian overflow-hidden">
              {/* Placeholder — when adding real image:
              <img src="/images/about.jpg" alt="Vaidilė Gudašiūtė" className="w-full h-full object-cover object-top" />
              */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl font-display italic text-goldDim/30">V</span>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-obsidian border border-ash/60 p-8 max-w-xs">
              <div className="space-y-6">
                {content.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-gold mb-1">{stat.number}</p>
                    <p className="text-[10px] uppercase tracking-ultra-wide text-mist font-light">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <p className="text-xs uppercase tracking-ultra-wide text-gold font-light">
                {content.about.eyebrow}
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-ivory mb-8 leading-tight">
              {content.about.title}
            </h2>

            <div className="space-y-5 text-pearl/80 font-light leading-relaxed mb-10">
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Mobile stats */}
            <div className="grid grid-cols-3 gap-4 md:hidden mb-10 py-6 border-y border-ash/40">
              {content.about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl text-gold mb-1">{stat.number}</p>
                  <p className="text-[9px] uppercase tracking-ultra-wide text-mist font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-5 mb-10">
              {content.about.values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <span className="gold-rule mt-3 shrink-0" />
                  <div>
                    <p className="font-display text-lg text-ivory mb-1">{v.title}</p>
                    <p className="text-sm text-mist font-light">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram link */}
            <a
              href={content.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gold hover:text-goldLight transition-colors duration-500"
            >
              <Instagram size={16} />
              <span className="uppercase tracking-ultra-wide text-xs font-light">
                @{content.brand.instagram}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
