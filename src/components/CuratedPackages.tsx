import React from 'react';
import { Sparkles, Clock, Check, Calendar, MessageCircle, Heart, Star } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';
import { SpaBranch } from '../types';

interface CuratedPackagesProps {
  onOpenBooking: (serviceId?: string, branchId?: string, duration?: number) => void;
  selectedBranch: SpaBranch;
}

export const CuratedPackages: React.FC<CuratedPackagesProps> = ({
  onOpenBooking,
  selectedBranch,
}) => {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#111316] border-y border-[#252830] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#1a1c21] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>All-Inclusive Value Rituals</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-4">
            Curated Luxury Spa Packages
          </h2>
          <p className="text-sm sm:text-base text-[#aca596] leading-relaxed">
            Multi-stage journeys combining authentic full-body massages, organic body scrubs, private warm Jacuzzi hydrotherapy, and herbal steam baths.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {spaConfig.packages.map((pkg) => {
            const savings = pkg.originalPrice - pkg.price;
            const savingsPercentage = Math.round((savings / pkg.originalPrice) * 100);

            return (
              <div
                key={pkg.id}
                className="bg-[#16181c] border border-[#2e323b] hover:border-[#d4af37]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col group relative"
              >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#d4af37] to-[#aa8022] text-black text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                {/* Hero Photo with Gradient */}
                <div className="relative h-64 overflow-hidden bg-[#1f2227]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16181c] via-[#16181c]/60 to-transparent" />
                  
                  {/* Duration Pill */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <span className="bg-black/75 backdrop-blur-md border border-[#d4af37]/40 text-[#f5ecd0] text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{pkg.totalDurationMins} Minutes Full Session</span>
                    </span>
                    <span className="bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold px-2.5 py-1 rounded-lg">
                      {savingsPercentage}% OFF
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#fbf8f2] group-hover:text-[#d4af37] transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#b8b3a5] mt-1">
                        {pkg.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#9f9a8d] leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Timeline Breakdown / Inclusions */}
                    <div className="mb-6 bg-[#101214] border border-[#272a32] rounded-2xl p-4">
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                        Treatment Breakdown ({pkg.totalDurationMins} Mins)
                      </p>
                      <div className="space-y-3">
                        {pkg.breakdown.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3 text-xs">
                            <div className="w-6 h-6 rounded-full bg-[#1c1f24] border border-[#343944] text-[#d4af37] font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5">
                              {sIdx + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-[#f0ecdf] font-semibold">
                                <span>{step.title}</span>
                                <span className="text-[11px] text-[#d4af37]">{step.durationMins}m</span>
                              </div>
                              <p className="text-[11px] text-[#8e897d] mt-0.5">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {pkg.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-[#cfcac0]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA footer */}
                  <div className="pt-6 border-t border-[#262932]">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-serif-luxury text-3xl font-bold text-[#f5ecd0]">
                            ₹{pkg.price}
                          </span>
                          <span className="text-sm text-[#7a7467] line-through">
                            ₹{pkg.originalPrice}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#25D366] font-medium">
                          Total Savings: ₹{savings}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#8e897d] block">Recommended For:</span>
                        <span className="text-xs text-[#d1ccc0] font-medium">{pkg.recommendedFor.split(',')[0]}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        id={`book-package-${pkg.id}`}
                        onClick={() => onOpenBooking(pkg.id, selectedBranch.id, pkg.totalDurationMins)}
                        className="bg-gradient-to-r from-[#d4af37] via-[#e5c250] to-[#b38827] hover:from-[#e0bc42] hover:to-[#c69a31] text-[#0c0d0e] font-bold text-xs sm:text-sm py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Package</span>
                      </button>

                      <a
                        id={`whatsapp-package-${pkg.id}`}
                        href={`https://wa.me/${selectedBranch.whatsapp || spaConfig.brand.primaryWhatsApp}?text=${encodeURIComponent(
                          `Hi, I am interested in booking the "${pkg.name}" (${pkg.totalDurationMins} Mins @ ₹${pkg.price}) at ${selectedBranch.name}. Please confirm availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#128C7E]/20 hover:bg-[#128C7E]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs sm:text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
