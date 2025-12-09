import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useCountAnimation } from '../../hooks/useCountAnimation';

interface StatItemProps {
    value: string;
    label: string;
    suffix?: string;
    delay?: number;
    isMaintenance?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
    value,
    label,
    suffix: propSuffix,
    delay = 0,
    isMaintenance = false
}) => {
    // Extraer solo los números del valor para la animación
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;

    // Detectar prefijo (+) y sufijo (%) automáticamente si no se proveen
    const prefix = value.startsWith('+') ? '+' : '';
    const suffix = propSuffix || (value.includes('%') ? '%' : '');

    const { count, ref } = useCountAnimation({
        end: numericValue,
        duration: 2500, // Un poco más lento para mejor efecto
        startOnView: true
    });

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-col items-center justify-center transition-all duration-500 relative ${isMaintenance
                    ? 'p-8 rounded-2xl bg-brand-600/90 text-white scale-110 shadow-[0_0_40px_rgba(37,99,235,0.4)] z-10 border border-brand-400/50'
                    : 'p-4 text-brand-100 hover:text-white transform hover:scale-105'
                }`}
        >
            {/* Efecto de brillo de fondo solo para el destacado */}
            {isMaintenance && (
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-sky-400/20 mix-blend-overlay"></div>
            )}

            <div className={`font-bold mb-2 flex items-baseline relative z-10 leading-none ${isMaintenance
                    ? 'text-5xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                    : 'text-4xl md:text-5xl opacity-80'
                }`}>
                <span className={isMaintenance ? "stat-glow" : ""}>
                    {prefix}{count}{suffix}
                </span>
            </div>

            <p className={`font-medium text-center uppercase tracking-widest text-xs md:text-sm relative z-10 ${isMaintenance ? 'text-brand-100 mt-2' : 'text-slate-300/80 mt-1'
                }`}>
                {label}
            </p>
        </div>
    );
};

export default StatItem;
