import React from 'react';
import { X, Check, Clock, Sparkles, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
import { SpaService, SpaBranch } from '../types';
import { spaConfig } from '../data/spaConfig';

interface ServiceDetailModalProps {
  service: SpaService | null;
  onClose: () => void;
  onOpenBooking: (serviceId: string, branchId?: string, duration?: number) => void;
  selectedBranch: SpaBranch;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking,
  selectedBranch,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#141619] border border-[#d4af37]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-[#141619]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            {service.thaiName && (
              <span className="text-xs text-[#d4af37] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#d4af37]/30 font-medium inline-block mb-1">
                {service.thaiName}
              </span>
            )}
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
              {service.name}
            </h3>
            <p className="text-xs text-[#c4bfae] italic mt-0.5">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
              Therapy Overview & Technique
            </h4>
            <p className="text-xs sm:text-sm text-[#cac5b8] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
              Key Health & Wellness Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#ded9cb] bg-[#1a1d22] p-2.5 rounded-xl border border-[#2b2e36]">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2.5">
              Complimentary Inclusions
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.inclusions.map((inc, i) => (
                <span
                  key={i}
                  className="bg-[#1e2126] text-[#e0dbce] text-xs px-3 py-1.5 rounded-lg border border-[#333742] flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>{inc}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Duration & Pricing Options */}
          <div className="bg-[#101214] border border-[#272a32] p-5 rounded-2xl">
            <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
              Available Durations & Pricing
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {service.durations.map((d) => (
                <div
                  key={d.minutes}
                  className="bg-[#17191d] border border-[#323640] p-3 rounded-xl text-center"
                >
                  <div className="flex items-center justify-center gap-1 text-xs text-[#a09a8d] mb-1">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{d.minutes} Minutes</span>
                  </div>
                  <div className="font-serif-luxury text-xl font-bold text-[#f5ecd0]">
                    ₹{d.price}
                  </div>
                  {d.originalPrice && (
                    <span className="text-[10px] text-[#787265] line-through">
                      ₹{d.originalPrice}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hygiene Guarantee strip */}
          <div className="flex items-center gap-2 text-[11px] text-[#8e897d] bg-[#181a1e] p-3 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>100% single-use disposable linens, sanitized private suite & organic essential oils included.</span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(service.id, selectedBranch.id, service.durations[0].minutes);
              }}
              className="bg-gradient-to-r from-[#d4af37] to-[#aa8022] hover:from-[#e5c250] hover:to-[#be922c] text-[#0c0d0e] font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Therapy</span>
            </button>

            <a
              href={`https://wa.me/${selectedBranch.whatsapp || spaConfig.brand.primaryWhatsApp}?text=${encodeURIComponent(
                `Hi, I have a question about ${service.name} at your ${selectedBranch.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#128C7E]/20 hover:bg-[#128C7E]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
