import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../../constants';

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
