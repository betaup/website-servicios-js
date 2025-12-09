import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

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
