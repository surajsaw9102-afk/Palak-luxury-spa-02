import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { SpaBranch } from '../types';
import { spaConfig } from '../data/spaConfig';

interface FloatingMobileCTAProps {
  onOpenBooking: () => void;
  selectedBranch: SpaBranch;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({
  onOpenBooking,
  selectedBranch,
}) => {
  return (
    <div
      id="floating-mobile-cta"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0d0e]/95 backdrop-blur-xl border-t border-[#292c33] p-3 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2">
        {/* Call CTA */}
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${selectedBranch.phoneRaw || spaConfig.brand.primaryPhoneRaw}`}
          className="flex-1 bg-[#181a1e] hover:bg-[#22252b] text-[#f5ecd0] border border-[#373b45] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={`https://wa.me/${selectedBranch.whatsapp || spaConfig.brand.primaryWhatsApp}?text=${encodeURIComponent(
            `Hi, I would like to book a therapy slot at ${selectedBranch.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#128C7E]/20 hover:bg-[#128C7E]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now Main Action */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onOpenBooking}
          className="flex-[1.5] bg-gradient-to-r from-[#d4af37] to-[#aa8022] active:scale-95 text-[#0c0d0e] font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>
      </div>
    </div>
  );
};
