import React from 'react';
import { SERVICES } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ServicesSection: React.FC = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

    return (
        <section
            ref={ref}
            id="servicios"
            className={`py-20 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-slate-600 text-lg">Cubrimos todas tus necesidades técnicas con personal certificado y herramientas de última generación.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 hover:border-brand-100">
                            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
