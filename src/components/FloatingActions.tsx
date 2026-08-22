import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3">
      
      {/* Call Button (Maroon) */}
      <a
        href={`tel:${spaData.brand.phone1Raw}`}
        aria-label="Call Palak Luxury Spa"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#7B113A] hover:bg-[#620c2c] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white/40"
      >
        <Phone className="w-5 h-5 fill-white" />
      </a>

      {/* WhatsApp Button (Green) */}
      <a
        href={`https://wa.me/${spaData.brand.whatsapp}?text=Hello%20Palak%20Luxury%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white/40 animate-pulse"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

    </div>
  );
};
