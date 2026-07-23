import { useState } from 'react';
import { content } from './content';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('lt');
  const t = content[language];

  return (
    <div className="grain">
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <HeroSection t={t} />
        <PortfolioSection t={t} />
        <ServicesSection t={t} />
        <AboutSection t={t} />
        <TestimonialsSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
