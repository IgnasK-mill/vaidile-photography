export default function AboutSection({ t }) {
  return (
    <section id="about" className="section-container bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-full">
          <div className="w-full h-full bg-gradient-to-br from-blush via-warm to-cream flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">👤</div>
              <p className="text-sm text-stone/60">Vaidilė Gudašiūtė</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="gold-divider"></div>
            <h2 className="text-4xl font-display text-stone">{t.about.title}</h2>
          </div>

          <p className="text-lg text-stone/80 leading-relaxed">
            {t.about.bio}
          </p>

          <p className="text-lg text-stone/80 leading-relaxed">
            {t.about.mission}
          </p>

          {/* Values */}
          <div className="space-y-6 pt-4">
            {t.about.values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blush/20 text-sage">
                    {index === 0 && '✓'}
                    {index === 1 && '♥'}
                    {index === 2 && '★'}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-stone">{value.title}</h3>
                  <p className="text-stone/70 text-sm mt-1">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blush">
            <div className="text-center">
              <p className="text-3xl font-bold text-sage">200+</p>
              <p className="text-xs text-stone/70 uppercase tracking-wide">Sesijos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sage">8+</p>
              <p className="text-xs text-stone/70 uppercase tracking-wide">Metų</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-sage">🏆</p>
              <p className="text-xs text-stone/70 uppercase tracking-wide">Apie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
