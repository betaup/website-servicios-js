import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logo_js.png"
              alt="Confort y Eficiencia JS Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <a href="#" className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Confort y Eficiencia JS
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-600 ${isScrolled ? 'text-slate-600' : 'text-slate-700'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand-500 text-white font-medium hover:bg-brand-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Cotizar Ahora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 animate-fade-in-down">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-brand-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsappUrl}
              className="w-full text-center px-5 py-3 rounded-lg bg-brand-500 text-white font-bold"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 text-white font-bold text-xl">
            <img
              src="/assets/logo_js.png"
              alt="Confort y Eficiencia JS Logo"
              className="h-10 w-10 object-contain"
            />
            <span>Confort y Eficiencia JS</span>
          </div>
          <p className="text-sm text-slate-400 max-w-xs">
            Expertos en climatización, electricidad y energía solar. Comprometidos con la calidad y tu tranquilidad.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-white font-semibold text-lg">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand-500" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-500" />
              <span>{CONTACT_INFO.email}</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-brand-500" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-white font-semibold text-lg">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Reseñas</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Confort y Eficiencia JS. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export const WhatsAppButton: React.FC = () => {
  return (
    <>
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Escríbenos!
        </span>
      </a>
      <style>{`
        .whatsapp-float {
          animation: whatsapp-pulse 2.5s ease-in-out infinite;
        }
        
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          50% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
};
