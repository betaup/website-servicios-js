import React from 'react';
import StatItem from './ItemEstadistica';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Send,
  User,
  Phone,
  List,
  MessageSquare,
  MessageCircle,
  Clock,
  X
} from 'lucide-react';
import { SERVICES, BENEFITS, STATS, CLIENTS, REVIEWS, BRANDS, CONTACT_INFO } from '../constants';

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

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
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

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-slate-50">
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

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <div className="w-64 h-64 border-4 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-12 opacity-5">
        <div className="w-48 h-48 border-4 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Nuestros números hablan por sí mismos</h2>
          <p className="text-brand-100 text-lg">Experiencia comprobada en cada servicio</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => {
            const isMaintenance = stat.label.includes('Mantenimientos') || stat.id === '1';
            return (
              <StatItem
                key={stat.id}
                value={stat.value}
                label={stat.label}
                isMaintenance={isMaintenance}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        .stat-glow {
          text-shadow: 
            0 0 20px rgba(96, 165, 250, 0.6),
            0 0 40px rgba(96, 165, 250, 0.4),
            0 0 60px rgba(96, 165, 250, 0.2);
          animation: stat-pulse 3s ease-in-out infinite alternate;
        }
        
        @keyframes stat-pulse {
          from {
            text-shadow: 
              0 0 20px rgba(96, 165, 250, 0.6),
              0 0 40px rgba(96, 165, 250, 0.4),
              0 0 60px rgba(96, 165, 250, 0.2);
          }
          to {
            text-shadow: 
              0 0 30px rgba(96, 165, 250, 0.8),
              0 0 50px rgba(96, 165, 250, 0.6),
              0 0 70px rgba(96, 165, 250, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-500 font-medium mb-12 uppercase tracking-widest text-sm text-center">
          Empresas que confían en nosotros
        </p>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          {/* Subtle fade at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Animated carousel track - duplicated for seamless loop */}
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {/* First set */}
            {CLIENTS.map((client) => (
              <div
                key={`first-${client.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div className="bg-slate-50 px-8 py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 text-slate-400 hover:text-brand-600 transition-colors">
                    <span className="w-4 h-4 rounded-full bg-brand-200"></span>
                    <span className="text-lg md:text-xl font-bold whitespace-nowrap">{client.name}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {CLIENTS.map((client) => (
              <div
                key={`second-${client.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <div className="bg-slate-50 px-8 py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 text-slate-400 hover:text-brand-600 transition-colors">
                    <span className="w-4 h-4 rounded-full bg-brand-200"></span>
                    <span className="text-lg md:text-xl font-bold whitespace-nowrap">{client.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export const ReviewsSection: React.FC = () => {
  return (
    <section id="clientes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Lo que dicen nuestros clientes</h2>

        {/* Horizontal scroll container for cards */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar">
          {REVIEWS.map((review) => (
            <div key={review.id} className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <div className="mb-6 relative">
                <Quote className="absolute -top-2 -left-2 text-brand-100 w-8 h-8 transform scale-150 opacity-50" />
                <p className="text-slate-600 italic relative z-10">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatarUrl} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-slate-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-800 mb-12">
          Especialistas en las mejores marcas
        </h3>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          {/* Subtle fade at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          {/* Animated carousel track - duplicated for seamless loop */}
          <div className="flex animate-scroll-brands hover:[animation-play-state:paused] items-center gap-16">
            {/* First set */}
            {BRANDS.map(brand => (
              <div
                key={`first-${brand.id}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                ) : (
                  <span className="text-slate-400 hover:text-brand-600 font-semibold text-lg whitespace-nowrap transition-colors">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {BRANDS.map(brand => (
              <div
                key={`second-${brand.id}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                ) : (
                  <span className="text-slate-400 hover:text-brand-600 font-semibold text-lg whitespace-nowrap transition-colors">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-brands {
          animation: scroll-brands 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({ name: '', phone: '', service: '', message: '' });
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="aire">Aire Acondicionado</option>
                      <option value="electricidad">Electricidad</option>
                      <option value="solar">Paneles Solares</option>
                      <option value="otro">Otro</option>
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
        
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};