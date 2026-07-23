import { useState } from 'react';
import { Instagram } from 'lucide-react';

const portfolioItems = [
  { id: 1, category: 'professional', title: 'Portrait Session', color: 'bg-gradient-to-br from-warm to-blush' },
  { id: 2, category: 'personal', title: 'Personal Session', color: 'bg-gradient-to-br from-blush to-warm' },
  { id: 3, category: 'families', title: 'Family Portrait', color: 'bg-gradient-to-br from-stone/10 to-sage/20' },
  { id: 4, category: 'professional', title: 'Corporate Headshot', color: 'bg-gradient-to-br from-sage/30 to-stone/10' },
  { id: 5, category: 'personal', title: 'Lifestyle Shot', color: 'bg-gradient-to-br from-warm via-blush to-cream' },
  { id: 6, category: 'families', title: 'Group Photo', color: 'bg-gradient-to-br from-blush/50 to-warm/50' },
  { id: 7, category: 'professional', title: 'Business Portrait', color: 'bg-gradient-to-br from-stone/5 to-sage/15' },
  { id: 8, category: 'personal', title: 'Creative Session', color: 'bg-gradient-to-br from-warm/60 to-blush/60' },
  { id: 9, category: 'families', title: 'Children Portrait', color: 'bg-gradient-to-br from-cream to-warm' },
];

export default function PortfolioSection({ t }) {
  const [filter, setFilter] = useState('all');

  const filters = [
    { value: 'all', label: t.portfolio.filters.all },
    { value: 'professional', label: t.portfolio.filters.professional },
    { value: 'personal', label: t.portfolio.filters.personal },
    { value: 'families', label: t.portfolio.filters.families },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-container bg-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="gold-divider"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-stone">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-stone/70 max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.value
                  ? 'bg-stone text-cream'
                  : 'border border-stone text-stone hover:bg-warm'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow h-80 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-full h-full ${item.color} flex items-center justify-center`}>
                <p className="text-center text-stone/40 font-display text-lg">{item.title}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-cream font-display text-lg">{item.title}</p>
                  <p className="text-cream/70 text-sm mt-2">Professional Studio</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center pt-8 space-y-4">
          <p className="text-stone/70">
            Daugiau darbų rasite mūsų Instagram profilyje
          </p>
          <a
            href="https://instagram.com/gudasiute_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Instagram size={20} />
            @gudasiute_photography
          </a>
        </div>
      </div>
    </section>
  );
}
