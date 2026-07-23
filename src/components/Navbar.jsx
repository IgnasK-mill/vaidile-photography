import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ language, setLanguage, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-blush">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-display font-bold text-stone">VG</h1>
          <div className="text-xs font-body">
            <p className="font-semibold text-stone">Vaidilė</p>
            <p className="text-sage text-xs">Fotografė</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium text-stone hover:text-sage transition-colors">
            {t.nav.portfolio}
          </button>
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-stone hover:text-sage transition-colors">
            {t.nav.services}
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-stone hover:text-sage transition-colors">
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-stone hover:text-sage transition-colors">
            {t.nav.testimonials}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-stone hover:text-sage transition-colors">
            {t.nav.contact}
          </button>

          {/* Language Toggle */}
          <div className="flex gap-2 ml-4 pl-4 border-l border-blush">
            <button
              onClick={() => setLanguage('lt')}
              className={`text-xs font-semibold px-3 py-1 rounded-sm transition-colors ${
                language === 'lt' ? 'bg-stone text-cream' : 'text-stone hover:bg-warm'
              }`}
            >
              LT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`text-xs font-semibold px-3 py-1 rounded-sm transition-colors ${
                language === 'en' ? 'bg-stone text-cream' : 'text-stone hover:bg-warm'
              }`}
            >
              EN
            </button>
          </div>

          <button className="btn-primary text-sm">
            {t.nav.book}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm border-t border-blush">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-sm font-medium text-stone hover:text-sage">
              {t.nav.portfolio}
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm font-medium text-stone hover:text-sage">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm font-medium text-stone hover:text-sage">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-sm font-medium text-stone hover:text-sage">
              {t.nav.testimonials}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-sm font-medium text-stone hover:text-sage">
              {t.nav.contact}
            </button>

            <div className="flex gap-2 py-4 border-t border-blush">
              <button
                onClick={() => setLanguage('lt')}
                className={`flex-1 text-xs font-semibold px-3 py-2 rounded-sm transition-colors ${
                  language === 'lt' ? 'bg-stone text-cream' : 'text-stone hover:bg-blush'
                }`}
              >
                Lietuvių
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 text-xs font-semibold px-3 py-2 rounded-sm transition-colors ${
                  language === 'en' ? 'bg-stone text-cream' : 'text-stone hover:bg-blush'
                }`}
              >
                English
              </button>
            </div>

            <button className="w-full btn-primary text-sm">
              {t.nav.book}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
