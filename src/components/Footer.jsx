import { Instagram, Facebook, MapPin } from 'lucide-react';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-display font-bold">VG</h3>
              <p className="text-cream/70 text-sm">Fotografė • Kaunas</p>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Profesionali studijinių portretų fotografė, sukurianti autentiškas ir gražias nuotraukas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Nuorodas</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#portfolio" className="hover:text-cream transition-colors">Darbai</a></li>
              <li><a href="#services" className="hover:text-cream transition-colors">Paslaugos</a></li>
              <li><a href="#about" className="hover:text-cream transition-colors">Apie</a></li>
              <li><a href="#contact" className="hover:text-cream transition-colors">Susisiekti</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Kontaktai</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a href="mailto:vaidile.gudasiute@gmail.com" className="hover:text-cream transition-colors">
                  vaidile.gudasiute@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+37062345678" className="hover:text-cream transition-colors">
                  +370 623 45 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kaunas, Lietuva</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-cream mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/gudasiute_photography"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/gudasiute.photography"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/70">
            <p>© {currentYear} Vaidilė Gudašiūtė Photography. Visos teisės saugotos.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cream transition-colors">Privatumas</a>
              <a href="#" className="hover:text-cream transition-colors">Sąlygos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
