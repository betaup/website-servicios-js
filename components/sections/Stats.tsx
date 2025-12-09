import React from 'react';
import { STATS } from '../../constants';
import StatItem from '../ui/StatItem';

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
