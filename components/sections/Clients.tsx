import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CLIENTS } from '../../constants';

export const ClientsSection: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        pauseOnHover: true,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2, // móvil → 2 visibles
                }
            }
        ]
    };

    return (
        <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <p className="text-slate-500 font-medium mb-12 uppercase tracking-widest text-sm text-center">
                    Empresas que confían en nosotros
                </p>

                <div className="clients-carousel-wrapper">
                    <Slider {...settings}>
                        {CLIENTS.map(client => (
                            <div key={client.id}>
                                <div className="flex items-center justify-center h-24 transition-all duration-300 hover:scale-110">
                                    <div className="bg-slate-50 px-4 md:px-8 py-4 md:py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full">
                                        <div className="flex items-center gap-3 text-slate-400 hover:text-brand-600 transition-colors">
                                            <span className="w-4 h-4 rounded-full bg-brand-200"></span>
                                            <span className="text-base md:text-xl font-bold whitespace-nowrap">
                                                {client.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style>{`
                .clients-carousel-wrapper .slick-slider {
                    user-select: none;
                }

                /* MOBILE FIRST */
                .clients-carousel-wrapper .slick-list {
                    margin: 0 -2px !important;
                }
                .clients-carousel-wrapper .slick-slide > div {
                    padding: 0 2px !important;
                }

                /* Tablet & Desktop */
                @media (min-width: 640px) {
                    .clients-carousel-wrapper .slick-list {
                        margin: 0 -12px !important;
                    }
                    .clients-carousel-wrapper .slick-slide > div {
                        padding: 0 12px !important;
                    }
                }

                .clients-carousel-wrapper .slick-slide {
                    display: flex !important;
                    height: auto;
                }

                .clients-carousel-wrapper .slick-slide > div {
                    width: 100% !important;
                    display: flex !important;
                }
            `}</style>
        </section>
    );
};
