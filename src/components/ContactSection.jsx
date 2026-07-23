import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactSection({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'studio',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'studio', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-container bg-white">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="gold-divider"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-stone">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="text-lg font-display text-stone mb-4">
                Jei turite klausimų, prašau susisiekite su manimi
              </p>
              <p className="text-stone/70">
                {t.contact.availability}
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Mail className="text-sage" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-stone">El. paštas</p>
                  <a href={`mailto:${t.contact.email}`} className="text-sage hover:text-stone transition-colors">
                    {t.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Phone className="text-sage" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-stone">Telefono numeris</p>
                  <a href="tel:+37062345678" className="text-sage hover:text-stone transition-colors">
                    +370 623 45 678
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <MapPin className="text-sage" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-stone">Vieta</p>
                  <p className="text-stone/70">
                    {t.contact.location}
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Instagram className="text-sage" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-stone">Instagram</p>
                  <a 
                    href="https://instagram.com/gudasiute_photography" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:text-stone transition-colors"
                  >
                    @gudasiute_photography
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-ivory rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-3xl mb-4">✓</p>
                <p className="text-lg font-display text-stone mb-2">Ačiū!</p>
                <p className="text-stone/70">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-stone mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blush rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    placeholder="Jūsų vardas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blush rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    placeholder="el@paštas.lt"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blush rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    placeholder="+370 623 45 678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone mb-2">
                    {t.contact.form.service}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blush rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                  >
                    <option value="studio">Studijiniai portretai</option>
                    <option value="events">Įmonės renginiai</option>
                    <option value="weddings">Vestuves</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-blush rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                    placeholder="Papasakokite apie savo fotografijos poreikius..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
