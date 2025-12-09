import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BRANDS } from '../../constants';

export const BrandsSection: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-2xl md:text-3xl font-bold text-slate-800 mb-12">
                    Especialistas en las mejores marcas
                </h3>

                <div className="brands-carousel-wrapper">
                    <Slider {...settings}>
                        {BRANDS.map(brand => (
                            <div key={brand.id}>
                                <div className="flex items-center justify-center h-24 transition-all duration-300 hover:scale-110">
                                    {brand.logoUrl ? (
                                        <img
                                            src={brand.logoUrl}
                                            alt={brand.name}
                                            className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                        />
                                    ) : (
                                        <span className="text-slate-400 hover:text-brand-600 font-semibold text-lg whitespace-nowrap transition-colors">
                                            {brand.name}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style>{`
        .brands-carousel-wrapper .slick-slider {
          user-select: none;
        }
        
        .brands-carousel-wrapper .slick-list {
          margin: 0 -12px;
        }
        
        .brands-carousel-wrapper .slick-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        
        .brands-carousel-wrapper .slick-slide:hover {
          opacity: 1;
        }
        
        .brands-carousel-wrapper .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
        </section>
    );
};
