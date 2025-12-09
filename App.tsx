import React from 'react';
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
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