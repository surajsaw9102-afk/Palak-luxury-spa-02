import React, { useState } from 'react';
import { Sparkles, Clock, Check, Calendar, MessageCircle, ChevronRight, Info } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';
import { SpaService, SpaBranch } from '../types';

interface SignatureServicesProps {
  onOpenBooking: (serviceId?: string, branchId?: string, duration?: number) => void;
  onViewServiceDetails: (service: SpaService) => void;
  selectedBranch: SpaBranch;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({
  onOpenBooking,
  onViewServiceDetails,
  selectedBranch,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // Store selected duration index per service
  const [selectedDurations, setSelectedDurations] = useState<{ [serviceId: string]: number }>({});

  const categories = [
    { id: 'all', label: 'All Therapies' },
    { id: 'massage', label: 'Massage Therapies' },
    { id: 'hydro', label: 'Jacuzzi & Hydro' },
    { id: 'ritual', label: 'Royal VIP Rituals' },
    { id: 'body-scrub', label: 'Body Scrubs & Polish' },
  ];

  const filteredServices = activeCategory === 'all'
    ? spaConfig.services
    : spaConfig.services.filter((s) => s.category === activeCategory);

  const getActiveDuration = (service: SpaService) => {
    const selectedIndex = selectedDurations[service.id] || 0;
    return service.durations[selectedIndex] || service.durations[0];
  };

  const handleDurationSelect = (serviceId: string, index: number) => {
    setSelectedDurations((prev) => ({ ...prev, [serviceId]: index }));
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#17191d] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Authentic Wellness</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-4">
            Signature Royal Therapies
          </h2>
          <p className="text-sm sm:text-base text-[#aca596] leading-relaxed">
            Every therapy is performed in complete privacy by certified therapists using warm organic botanical oils, soothing pressure techniques, and ancient herbal compresses.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c0d0e] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-[#15171a] hover:bg-[#1f2227] text-[#b5af9f] border border-[#2b2e35]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const activeDuration = getActiveDuration(service);
            const savings = activeDuration.originalPrice
              ? activeDuration.originalPrice - activeDuration.price
              : 0;

            return (
              <div
                key={service.id}
                className="bg-[#141619] border border-[#26282e] hover:border-[#d4af37]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col group"
              >
                {/* Image Header with Badges */}
                <div className="relative h-56 overflow-hidden bg-[#1f2227]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-black/40" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {service.isSignature && (
                      <span className="bg-[#d4af37] text-black text-[10px] font-extrabold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md">
                        Signature Royal
                      </span>
                    )}
                    {service.isPopular && !service.isSignature && (
                      <span className="bg-[#2a2d34] text-[#f5ecd0] border border-[#d4af37]/40 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        ★ Most Booked
                      </span>
                    )}
                  </div>

                  {/* Thai Original Name */}
                  {service.thaiName && (
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#f3e5ab] font-medium border border-white/10">
                      {service.thaiName}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Title & Tagline */}
                    <div className="mb-3">
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#fbf8f2] group-hover:text-[#d4af37] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#a39d8f] italic mt-0.5">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#b8b3a5] line-clamp-3 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-1.5 mb-5">
                      {service.benefits.slice(0, 2).map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-2 text-[11px] text-[#d6d2c4]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration Selector & Pricing Section */}
                  <div className="pt-4 border-t border-[#22252c]">
                    
                    <div className="flex items-center justify-between text-[11px] text-[#918c7f] mb-2 font-medium">
                      <span>Select Duration:</span>
                      {savings > 0 && (
                        <span className="text-[#25D366] font-semibold">
                          Save ₹{savings}
                        </span>
                      )}
                    </div>

                    {/* Duration Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 mb-4">
                      {service.durations.map((d, dIdx) => {
                        const isSelected = (selectedDurations[service.id] || 0) === dIdx;
                        return (
                          <button
                            key={d.minutes}
                            onClick={() => handleDurationSelect(service.id, dIdx)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex flex-col items-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#d4af37] text-black shadow-md'
                                : 'bg-[#1c1f24] hover:bg-[#272b32] text-[#c2bdb0] border border-[#2d313b]'
                            }`}
                          >
                            <span className="text-[11px]">{d.minutes} Mins</span>
                            <span className="text-[10px] font-bold">₹{d.price}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Price Display & Actions */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif-luxury text-2xl font-bold text-[#f5ecd0]">
                            ₹{activeDuration.price}
                          </span>
                          {activeDuration.originalPrice && (
                            <span className="text-xs text-[#7d776a] line-through">
                              ₹{activeDuration.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#8e897d]">
                          Inclusive of all taxes & linen
                        </span>
                      </div>

                      <button
                        onClick={() => onViewServiceDetails(service)}
                        className="text-[11px] text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1 font-medium underline-offset-4 hover:underline"
                        title="View Full Inclusions"
                      >
                        <Info className="w-3 h-3" />
                        <span>Details</span>
                      </button>
                    </div>

                    {/* Action Buttons: Book Now & WhatsApp */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`book-service-${service.id}`}
                        onClick={() => onOpenBooking(service.id, selectedBranch.id, activeDuration.minutes)}
                        className="bg-gradient-to-r from-[#d4af37] to-[#aa8022] hover:from-[#e5c250] hover:to-[#be922c] text-[#0c0d0e] font-bold text-xs py-2.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </button>

                      <a
                        id={`whatsapp-service-${service.id}`}
                        href={`https://wa.me/${selectedBranch.whatsapp || spaConfig.brand.primaryWhatsApp}?text=${encodeURIComponent(
                          `Hi, I want to book ${service.name} (${activeDuration.minutes} Mins @ ₹${activeDuration.price}) at your ${selectedBranch.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#128C7E]/20 hover:bg-[#128C7E]/30 text-[#25D366] border border-[#25D366]/30 font-semibold text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire</span>
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
