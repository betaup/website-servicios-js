import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute right-0 top-0 w-2/3 h-full bg-slate-100/50 skew-x-[-12deg] translate-x-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-brand-700 font-semibold text-sm mb-2 border-2 border-brand-500 neon-badge">
                            Servicio Técnico Profesional
                        </div>
                        <style>{`
              .neon-badge {
                box-shadow:
                  0 0 10px rgba(15, 76, 129, 0.6),
                  0 0 20px rgba(15, 76, 129, 0.4),
                  0 0 30px rgba(15, 76, 129, 0.2);
                animation: neon-glow 2s ease-in-out infinite alternate;
              }
              
              @keyframes neon-glow {
                from {
                  box-shadow:
                    0 0 10px rgba(15, 76, 129, 0.6),
                    0 0 20px rgba(15, 76, 129, 0.4),
                    0 0 30px rgba(15, 76, 129, 0.2);
                }
                to {
                  box-shadow:
                    0 0 15px rgba(15, 76, 129, 0.8),
                    0 0 25px rgba(15, 76, 129, 0.6),
                    0 0 35px rgba(15, 76, 129, 0.3);
                }
              }
            `}</style>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Soluciones Fiables en <span className="text-brand-600">Mantenimiento y Energía</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
                            Especialistas en aire acondicionado, electricidad y paneles solares. Garantizamos eficiencia y confort para tu hogar o negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={CONTACT_INFO.whatsappUrl}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 whatsapp-cta"
                            >
                                Cotizar por WhatsApp <ArrowRight className="ml-2" size={20} />
                            </a>
                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition-all"
                            >
                                Ver Servicios
                            </a>
                        </div>
                        <style>{`
              .whatsapp-cta {
                animation: heartbeat 2s ease-in-out infinite;
              }
              
              @keyframes heartbeat {
                0%, 100% {
                  transform: scale(1);
                }
                10% {
                  transform: scale(1.05);
                }
                20% {
                  transform: scale(1);
                }
                30% {
                  transform: scale(1.05);
                }
                40%, 100% {
                  transform: scale(1);
                }
              }
            `}</style>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/front.png"
                                alt="Confort y Eficiencia JS - Servicio Profesional"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl hidden md:block border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-50 p-2 rounded-full">
                                    <Star className="text-yellow-500 fill-yellow-500" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">4.9/5</p>
                                    <p className="text-xs text-slate-500">Valoración Clientes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
