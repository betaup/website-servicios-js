import React from 'react';
import { CheckCircle } from 'lucide-react';
import { BENEFITS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const BenefitsSection: React.FC = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15, delay: 100 });

    return (
        <section
            ref={ref}
            id="beneficios"
            className={`py-20 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {BENEFITS.map((benefit) => (
                            <div key={benefit.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <benefit.icon className="text-sky-500 mb-4" size={32} />
                                <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                                <p className="text-sm text-slate-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            ¿Por qué elegir <span className="text-brand-600">Confort y Eficiencia JS</span>?
                        </h2>
                        <p className="text-slate-600 text-lg">
                            No somos solo técnicos; somos aliados en el confort y funcionamiento de tu espacio. Entendemos la importancia de un trabajo bien hecho a la primera.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Presupuestos claros y sin sorpresas.",
                                "Equipo técnico certificado y uniformado.",
                                "Uso de repuestos originales y de calidad.",
                                "Seguimiento post-servicio."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="text-brand-500 shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
