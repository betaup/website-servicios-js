import React from 'react';
import { Header, Footer, WhatsAppButton } from './components/Layout';
import {
  HeroSection,
  ServicesSection,
  BenefitsSection,
  StatsSection,
  ClientsSection,
  ReviewsSection,
  BrandsSection,
  ContactSection
} from './components/Sections';

const App: React.FC = () => {
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