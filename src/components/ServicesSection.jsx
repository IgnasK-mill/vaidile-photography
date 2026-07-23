import { Check } from 'lucide-react';

export default function ServicesSection({ t }) {
  const services = [
    {
      name: t.services.studio.name,
      description: t.services.studio.description,
      price: t.services.studio.price,
      features: t.services.studio.features,
      featured: false,
      icon: '📸'
    },
    {
      name: t.services.weddings.name,
      description: t.services.weddings.description,
      price: t.services.weddings.price,
      features: t.services.weddings.features,
      featured: true,
      icon: '💍'
    },
    {
      name: t.services.events.name,
      description: t.services.events.description,
      price: t.services.events.price,
      features: t.services.events.features,
      featured: false,
      icon: '🎉'
    }
  ];

  return (
    <section id="services" className="section-container bg-gradient-to-b from-cream to-ivory">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="gold-divider"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-stone">
            {t.services.title}
          </h2>
          <p className="text-lg text-stone/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all ${
                service.featured
                  ? 'md:scale-105 shadow-2xl bg-stone text-cream ring-2 ring-blush'
                  : 'shadow-lg bg-white text-stone hover:shadow-xl'
              }`}
            >
              <div className={`p-8 ${service.featured ? 'bg-stone' : 'bg-warm'}`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-2">{service.name}</h3>
                <p className={`text-sm mb-4 ${service.featured ? 'text-cream/80' : 'text-stone/70'}`}>
                  {service.description}
                </p>
                <div className={`text-3xl font-bold ${service.featured ? 'text-blush' : 'text-sage'}`}>
                  {service.price}
                </div>
              </div>

              <div className={`p-8 space-y-4 ${service.featured ? 'bg-stone/50' : 'bg-ivory'}`}>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <Check size={20} className={service.featured ? 'text-blush flex-shrink-0' : 'text-sage flex-shrink-0'} />
                    <p className={`text-sm ${service.featured ? 'text-cream/90' : 'text-stone'}`}>
                      {feature}
                    </p>
                  </div>
                ))}

                <button className={`w-full mt-6 py-3 rounded-sm font-medium transition-colors ${
                  service.featured
                    ? 'bg-blush text-stone hover:bg-blush/80'
                    : 'border-2 border-stone text-stone hover:bg-stone hover:text-cream'
                }`}>
                  {service.featured ? '✨ Populiariausia' : 'Sužinoti daugiau'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-white rounded-lg p-6 text-center border border-blush">
          <p className="text-sm text-stone/70">
            💡 <span className="font-semibold">Pasirinktinė kaina:</span> Kainos gali skirtis priklausomai nuo vietos, laiko ir papildomų pageidavimų. Susisiekite, kad gautumėte tikslinį pasiūlymą.
          </p>
        </div>
      </div>
    </section>
  );
}
