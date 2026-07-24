import { content } from '../content'

export default function QuoteDivider() {
  return (
    <section className="relative py-24 md:py-40 bg-gradient-to-b from-night via-obsidian to-night overflow-hidden">
      {/* Background decorative quote mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-[20rem] md:text-[30rem] text-gold/[0.03] italic leading-none select-none">
          &ldquo;
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="reveal">
          <div className="flex justify-center mb-8">
            <span className="gold-rule-thick" />
          </div>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic text-ivory leading-relaxed mb-8">
            &ldquo;{content.quote.text}&rdquo;
          </blockquote>
          <div className="flex justify-center mb-6">
            <span className="gold-rule" />
          </div>
          <p className="text-xs uppercase tracking-mega-wide text-gold font-light">
            — {content.quote.author}
          </p>
        </div>
      </div>
    </section>
  )
}
