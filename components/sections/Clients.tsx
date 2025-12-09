import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CLIENTS } from '../../constants';

export const ClientsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-slate-500 font-medium mb-12 uppercase tracking-widest text-sm text-center">
                    Empresas que confían en nosotros
                </p>

                <div className="clients-carousel-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={24}
                        speed={800}
                        autoplay={{
                            delay: 1300,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {CLIENTS.map((client) => (
                            <SwiperSlide key={client.id}>
                                <div className="flex items-center justify-center h-56 md:h-64 transition-all duration-300">
                                    <div className="bg-slate-50 px-4 md:px-8 py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full h-full flex flex-col items-center justify-center gap-4 group">
                                        <div className="h-16 w-16 bg-white rounded-full p-3 shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/assets/logo_js.png"
                                                alt="Cliente"
                                                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-base md:text-lg font-bold text-slate-700 text-center leading-tight">
                                                {client.name}
                                            </span>
                                            <span className="text-xs text-brand-500 font-medium bg-brand-50 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                                Cliente Verificado
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style>{`
                .clients-carousel-wrapper {
                    user-select: none;
                }
                
                .clients-carousel-wrapper .swiper-slide {
                    height: auto;
                    display: flex;
                }
            `}</style>
        </section>
    );
};