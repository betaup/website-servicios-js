import React from 'react';
import { useCountAnimation } from '../hooks/useAnimacionConteo';

interface StatItemProps {
    value: string;
    label: string;
    isMaintenance?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, isMaintenance = false }) => {
    // Extract numeric value for animation
    const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
    const prefix = value.match(/^[^\d]*/)?.[0] || '';
    const suffix = value.match(/[^\d]*$/)?.[0] || '';

    const { count, ref } = useCountAnimation({
        end: numericValue,
        duration: 2000
    });

    const displayValue = `${prefix}${count}${suffix}`;

    return (
        <div ref={ref} className="space-y-3">
            <div
                className={`text-5xl md:text-6xl font-bold ${isMaintenance
                        ? 'text-brand-400 stat-glow'
                        : 'text-brand-400'
                    }`}
            >
                {displayValue}
            </div>
            <div className={`font-medium text-base ${isMaintenance
                    ? 'text-white'
                    : 'text-brand-100'
                }`}>
                {label}
            </div>
        </div>
    );
};

export default StatItem;
