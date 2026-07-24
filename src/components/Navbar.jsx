import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '../content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'portfolio', label: content.nav.portfolio },
    { id: 'about', label: content.nav.about },
    { id: 'services', label: content.nav.services },
    { id: 'testimonials', label: content.nav.testimonials },
    { id: 'contact', label: content.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-sm py-4 border-b border-ash/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-ivory tracking-wide hover:text-gold transition-colors duration-500 whitespace-nowrap"
        >
          Vaidilė<span className="text-gold">.</span>Gudašiūtė
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm uppercase tracking-ultra-wide text-pearl hover:text-gold transition-colors duration-500 font-light"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm uppercase tracking-ultra-wide border border-gold text-gold hover:bg-gold hover:text-obsidian px-6 py-3 transition-all duration-500 font-light"
          >
            {content.nav.cta}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-ivory hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-obsidian/98 backdrop-blur-md border-t border-ash/40 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-sm uppercase tracking-ultra-wide text-pearl hover:text-gold transition-colors font-light"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-sm uppercase tracking-ultra-wide border border-gold text-gold hover:bg-gold hover:text-obsidian px-6 py-3 transition-all duration-500 font-light text-center mt-4"
            >
              {content.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
