import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { BRANDS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const BrandsSection: React.FC = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15, delay: 250 });

    return (
        <section
            ref={ref}
            className={`py-20 bg-slate-50 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-800 mb-12">
                    Especialistas en las mejores marcas
                </h3>

                <div className="brands-carousel-wrapper">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={5}
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
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {BRANDS.map(brand => (
                            <SwiperSlide key={brand.id}>
                                <div className="flex items-center justify-center h-20 md:h-24 transition-all duration-300 w-full">
                                    {brand.logoUrl ? (
                                        <img
                                            src={brand.logoUrl}
                                            alt={brand.name}
                                            className="h-10 md:h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                                        />
                                    ) : (
                                        <span className="text-slate-400 hover:text-brand-600 font-semibold text-base md:text-lg whitespace-nowrap transition-colors">
                                            {brand.name}
                                        </span>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style>{`
                .brands-carousel-wrapper {
                    user-select: none;
                }
                
                .brands-carousel-wrapper .swiper-slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </section>
    );
};