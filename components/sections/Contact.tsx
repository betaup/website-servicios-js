import React, { useState } from 'react';
import { User, Phone, List, MessageSquare, Send, X, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', phone: '', service: '', message: '' });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Validación para nombre: solo letras y espacios
        if (name === 'name') {
            const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
            setFormState({ ...formState, [name]: onlyLetters });
            return;
        }

        // Validación para teléfono: solo números
        if (name === 'phone') {
            const onlyNumbers = value.replace(/[^0-9]/g, '');
            setFormState({ ...formState, [name]: onlyNumbers });
            return;
        }

        // Para otros campos, sin restricciones
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Preparar datos del formulario para Netlify
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        try {
            // Enviar a Netlify Forms
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            // Mostrar modal de éxito
            setShowSuccess(true);
            // Limpiar formulario
            setFormState({ name: '', phone: '', service: '', message: '' });

            // Auto-cerrar después de 5 segundos
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        } catch (error) {
            // Si hay error, mostrar alerta básica
            alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.');
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-brand-50/30 to-slate-50 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¡Contáctanos Hoy!</h2>
                    <p className="text-lg text-slate-600">Estamos listos para ayudarte. Déjanos tus datos y nos comunicaremos contigo pronto.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Business Hours Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-brand-100 rounded-xl">
                                    <Clock className="text-brand-600" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Horarios</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-brand-500 mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <p className="font-semibold text-slate-800">Atención todos los días</p>
                                        <p className="text-sm text-slate-600 mt-1">Con cita previa</p>
                                    </div>
                                </div>
                                <div className="bg-brand-50 rounded-lg p-4 border border-brand-100">
                                    <p className="text-sm text-brand-800 font-medium">
                                        Horario flexible para emergencias y servicios urgentes
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="bg-brand-600 text-white rounded-2xl shadow-lg p-6">
                            <h4 className="font-bold mb-3">Contáctanos directamente</h4>
                            <a
                                href={CONTACT_INFO.whatsappUrl}
                                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-3 mb-2"
                            >
                                <Phone size={20} className="phone-vibrate" />
                                <span className="text-sm">{CONTACT_INFO.phone}</span>
                            </a>
                        </div>
                        <style>{`
              .phone-vibrate {
                animation: phone-ring 2s ease-in-out infinite;
              }
              
              @keyframes phone-ring {
                0%, 100% {
                  transform: rotate(0deg);
                }
                10%, 30% {
                  transform: rotate(-10deg);
                }
                20%, 40% {
                  transform: rotate(10deg);
                }
                50%, 100% {
                  transform: rotate(0deg);
                }
              }
            `}</style>
                    </div>

                    {/* Contact Form Card */}
                    <div id="contacto" className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="p-8 md:p-10">
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {/* Campo oculto requerido por Netlify */}
                                <input type="hidden" name="form-name" value="contact" />

                                {/* Honeypot anti-spam (campo oculto) */}
                                <p className="hidden">
                                    <label>
                                        Don't fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                <User size={20} />
                                            </div>
                                            <input
                                                required
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                type="text"
                                                pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
                                                title="Solo se permiten letras y espacios"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Input */}
                                    <div className="relative">
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Teléfono</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                                <Phone size={20} />
                                            </div>
                                            <input
                                                required
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                pattern="[0-9]+"
                                                minLength={10}
                                                maxLength={15}
                                                title="Solo se permiten números (10-15 dígitos)"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="55 1234 5678"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Select */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Servicio de Interés</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                            <List size={20} />
                                        </div>
                                        <select
                                            required
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Selecciona una opción</option>
                                            <option value="Aire Acondicionado">Aire Acondicionado</option>
                                            <option value="Electricidad">Electricidad</option>
                                            <option value="Paneles Solares">Paneles Solares</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 text-slate-400">
                                            <MessageSquare size={20} />
                                        </div>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                                            placeholder="Describe brevemente lo que necesitas..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-brand-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <Send size={22} /> Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn">
                        {/* Close button */}
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={24} />
                        </button>

                        {/* Success Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce-once">
                                <CheckCircle className="text-green-600" size={48} />
                            </div>
                        </div>

                        {/* Success Message */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                ¡Mensaje Enviado!
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
                            </p>

                            {/* WhatsApp CTA */}
                            <div className="space-y-3">
                                <a
                                    href={CONTACT_INFO.whatsappUrl}
                                    className="block w-full bg-[#25D366] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={20} />
                                    ¿Urgente? Escríbenos por WhatsApp
                                </a>

                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="w-full bg-slate-100 text-slate-700 font-semibold py-3 px-6 rounded-xl hover:bg-slate-200 transition-all"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Animations */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @keyframes bounce-once {
          0% { transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
        </section>
    );
};
