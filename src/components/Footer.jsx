import { Instagram, Mail } from 'lucide-react'
import { content } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-obsidian border-t border-ash/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl text-ivory mb-3">
              Vaidilė<span className="text-gold">.</span>
            </p>
            <p className="text-xs uppercase tracking-ultra-wide text-mist font-light mb-4">
              {content.brand.tagline}
            </p>
            <p className="text-sm text-mist italic font-light">
              {content.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-light mb-6">
              Navigacija
            </p>
            <div className="flex flex-col gap-3">
              {['portfolio', 'about', 'services', 'testimonials', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-pearl hover:text-gold transition-colors duration-500 text-left font-light"
                >
                  {content.nav[id]}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-ultra-wide text-gold font-light mb-6">
              Sekite
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={content.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-pearl hover:text-gold transition-colors duration-500"
              >
                <Instagram size={16} />
                <span className="text-sm font-light">@{content.brand.instagram}</span>
              </a>
              <a
                href={`mailto:${content.brand.email}`}
                className="flex items-center gap-3 text-pearl hover:text-gold transition-colors duration-500"
              >
                <Mail size={16} />
                <span className="text-sm font-light">{content.brand.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="flex justify-center mb-8">
          <span className="gold-rule" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-mist font-light">
            © {year} Vaidilė Gudašiūtė Photography. {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
