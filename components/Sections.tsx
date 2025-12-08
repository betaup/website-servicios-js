import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Quote,
  Send
} from 'lucide-react';
import { SERVICES, BENEFITS, STATS, CLIENTS, REVIEWS, BRANDS, CONTACT_INFO } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute right-0 top-0 w-2/3 h-full bg-slate-100/50 skew-x-[-12deg] translate-x-20"></div>
        <img 
            src="https://picsum.photos/id/193/1920/1080" 
            alt="Hero Background" 
            className="absolute top-0 right-0 w-full h-full object-cover opacity-5 md:opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-2 border border-brand-100">
              Servicio Técnico Profesional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Soluciones Fiables en <span className="text-brand-600">Mantenimiento y Energía</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Especialistas en aire acondicionado, electricidad y paneles solares. Garantizamos eficiencia y confort para tu hogar o negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={CONTACT_INFO.whatsappUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
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
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://picsum.photos/id/439/800/600" 
                    alt="Técnico trabajando" 
                    className="w-full h-auto object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                    <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle className="text-brand-400" size={20} />
                        Disponibilidad Inmediata
                    </p>
                 </div>
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
              ¿Por qué elegir <span className="text-brand-600">Control y Eficiencia JS</span>?
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
    <section className="py-16 bg-brand-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <div className="w-64 h-64 border-4 border-white rounded-full"></div>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Nuestros números hablan por sí mismos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.id} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-brand-400">{stat.value}</div>
              <div className="text-brand-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClientsSection: React.FC = () => {
  return (
    <section id="clientes" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 font-medium mb-8 uppercase tracking-widest text-sm">Empresas que confían en nosotros</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders styled like logos for generic use, 
                in a real app these would be SVGs or PNGs */}
            {CLIENTS.map((client) => (
                <div key={client.id} className="text-xl md:text-2xl font-bold text-slate-400 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                    {client.name}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Lo que dicen nuestros clientes</h2>
        
        {/* Horizontal scroll container for cards */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar">
            {REVIEWS.map((review) => (
                <div key={review.id} className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center">
                    <div className="flex gap-1 text-yellow-400 mb-4">
                        {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-slate-800 mb-8">Especialistas en las mejores marcas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {BRANDS.map(brand => (
                <div key={brand.id} className="bg-slate-50 py-3 px-2 rounded-lg text-slate-500 font-bold text-sm border border-slate-100">
                    {brand.name}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    setFormState({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-brand-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-brand-600 py-6 px-8">
                <h2 className="text-2xl font-bold text-white text-center">¡Contáctanos Hoy!</h2>
                <p className="text-brand-100 text-center mt-2">Déjanos tus datos y te responderemos a la brevedad.</p>
            </div>
            <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                            <input 
                                required
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="Juan Pérez"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                            <input 
                                required
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                type="tel" 
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                placeholder="55 1234 5678"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Servicio de Interés</label>
                        <select 
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="aire">Aire Acondicionado</option>
                            <option value="electricidad">Electricidad</option>
                            <option value="solar">Paneles Solares</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                        <textarea 
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Describe brevemente lo que necesitas..."
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg shadow-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-2"
                    >
                        <Send size={20} /> Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};