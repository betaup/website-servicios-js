import React, { useEffect } from 'react';
import { Header, Footer, WhatsAppButton } from './components/layout';
import {
  HeroSection,
  ServicesSection,
  BenefitsSection,
  StatsSection,
  ClientsSection,
  ReviewsSection,
  BrandsSection,
  ContactSection
} from './components/sections';

const App: React.FC = () => {
  // Scroll al inicio al cargar/recargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIX CRÍTICO: Forzar resize para que react-slick se inicialice correctamente
  useEffect(() => {
    const forceSliderResize = () => {
      window.dispatchEvent(new Event('resize'));
    };

    // Ejecutar múltiples veces para asegurar inicialización correcta
    const timers = [
      setTimeout(forceSliderResize, 100),
      setTimeout(forceSliderResize, 300),
      setTimeout(forceSliderResize, 500),
      setTimeout(forceSliderResize, 1000)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <StatsSection />
        <ClientsSection />
        <ReviewsSection />
        <BrandsSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;