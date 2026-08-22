import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const LeadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds to match recording behavior
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem('lead_popup_shown');
      if (!shown) {
        setIsOpen(true);
        sessionStorage.setItem('lead_popup_shown', 'true');
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl relative border border-gray-100 animate-in zoom-in-95 duration-200">
        
        {/* Close Button on Top-Right */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Hostess / Spa Banner Image */}
        <div className="h-64 w-full relative overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
            alt="Palak Luxury Spa Hostess"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content Body */}
        <div className="p-6 text-center">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-5 leading-snug">
            Book Your Relaxation Session
          </h3>

          {/* Side-by-side Action Buttons matching recording */}
          <div className="flex flex-row items-center justify-center gap-2.5 mb-4">
            <a
              href={`tel:${spaData.brand.phone1Raw}`}
              className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] text-white font-bold text-xs py-3 px-3 rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20saw%20your%20website%20and%20want%20to%20book%20a%20relaxation%20session.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3 px-3 rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="text-[11px] text-gray-500 font-medium tracking-wide">
            Open Today • Professional Therapists • Premium Service
          </p>
        </div>

      </div>
    </div>
  );
};
