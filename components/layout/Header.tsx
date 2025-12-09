import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

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
