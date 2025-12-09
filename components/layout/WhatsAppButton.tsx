import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export const WhatsAppButton: React.FC = () => {
    return (
        <>
            <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group whatsapp-float"
                aria-label="Contactar por WhatsApp"
            >
                <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
                <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ¡Escríbenos!
                </span>
            </a>
            <style>{`
        .whatsapp-float {
          animation: whatsapp-pulse 2.5s ease-in-out infinite;
        }
        
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          50% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
        </>
    );
};
