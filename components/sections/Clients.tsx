import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CLIENTS } from '../../constants';

export const ClientsSection: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        pauseOnHover: true,
        speed: 800,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                        {CLIENTS.map((client) => (
                            <div key={client.id}>
                                <div className="flex items-center justify-center h-24 transition-all duration-300 hover:scale-110">
                                    <div className="bg-slate-50 px-8 py-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 text-slate-400 hover:text-brand-600 transition-colors">
                                            <span className="w-4 h-4 rounded-full bg-brand-200"></span>
                                            <span className="text-lg md:text-xl font-bold whitespace-nowrap">{client.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <style>{`
        /* Default tablet/desktop spacing */
        .clients-carousel-wrapper .slick-list {
          margin: 0 -12px;
        }
        .clients-carousel-wrapper .slick-slide > div {
          padding: 0 12px;
        }

        /* Mobile specific adjustments to maximize space */
        @media (max-width: 640px) {
          .clients-carousel-wrapper .slick-list {
            margin: 0 -6px;
          }
          .clients-carousel-wrapper .slick-slide > div {
            padding: 0 6px;
          }
        }
        
        .clients-carousel-wrapper .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        
        .clients-carousel-wrapper .slick-slide {
          height: auto;
          display: flex !important;
          flex-direction: column;
          justify-content: center;
        }
        
        .clients-carousel-wrapper .slick-slide > div {
          width: 100%;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .clients-carousel-wrapper .slick-slide > div > div {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
        </section>
    );
};
