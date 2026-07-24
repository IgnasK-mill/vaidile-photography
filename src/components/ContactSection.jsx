import { useState } from 'react'
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react'
import { content } from '../content'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: content.contact.form.serviceOptions[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({
      name: '',
      email: '',
      phone: '',
      service: content.contact.form.serviceOptions[0],
      message: '',
    })
  }

  const inputClass = "w-full bg-transparent border-b border-ash/60 py-3 text-ivory placeholder-mist/50 font-light focus:border-gold focus:outline-none transition-colors duration-500 text-sm"

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-rule" />
              <p className="text-xs uppercase tracking-ultra-wide text-gold font-light">
                {content.contact.eyebrow}
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              {content.contact.title}
            </h2>

            <p className="text-pearl/70 font-light text-lg leading-relaxed mb-12 italic">
              {content.contact.subtitle}
            </p>

            {/* Availability badge */}
            <div className="inline-block bg-night border border-gold/30 px-5 py-3 mb-12">
              <p className="text-xs text-gold font-light">
                {content.contact.availability}
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <a href={`mailto:${content.brand.email}`} className="flex items-center gap-4 text-pearl hover:text-gold transition-colors duration-500 group">
                <Mail size={18} className="text-gold" />
                <span className="font-light">{content.brand.email}</span>
              </a>

              <a href={`tel:${content.brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-pearl hover:text-gold transition-colors duration-500">
                <Phone size={18} className="text-gold" />
                <span className="font-light">{content.brand.phone}</span>
              </a>

              <div className="flex items-center gap-4 text-pearl">
                <MapPin size={18} className="text-gold" />
                <span className="font-light">{content.brand.location}</span>
              </div>

              <a
                href={content.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-pearl hover:text-gold transition-colors duration-500"
              >
                <Instagram size={18} className="text-gold" />
                <span className="font-light">@{content.brand.instagram}</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-ultra-wide text-gold font-light">
                  {content.contact.form.name} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase tracking-ultra-wide text-gold font-light">
                    {content.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-ultra-wide text-gold font-light">
                    {content.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-ultra-wide text-gold font-light">
                  {content.contact.form.service}
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} bg-obsidian`}
                >
                  {content.contact.form.serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-obsidian">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-ultra-wide text-gold font-light">
                  {content.contact.form.message} *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={content.contact.form.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-gold text-obsidian px-8 py-4 text-xs uppercase tracking-ultra-wide font-medium hover:bg-goldLight transition-all duration-500"
              >
                {content.contact.form.submit}
                <Send size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
              </button>

              {submitted && (
                <div className="animate-fade-in border border-gold/40 bg-gold/5 p-4 text-sm text-gold font-light">
                  {content.contact.form.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
