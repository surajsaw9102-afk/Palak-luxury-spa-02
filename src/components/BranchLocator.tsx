import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Calendar, Sparkles, Check } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';
import { SpaBranch } from '../types';

interface BranchLocatorProps {
  onOpenBooking: (serviceId?: string, branchId?: string) => void;
  selectedBranch: SpaBranch;
  onSelectBranch: (branch: SpaBranch) => void;
}

export const BranchLocator: React.FC<BranchLocatorProps> = ({
  onOpenBooking,
  selectedBranch,
  onSelectBranch,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const cities = ['all', ...Array.from(new Set(spaConfig.branches.map((b) => b.city)))];

  const filteredBranches = selectedCity === 'all'
    ? spaConfig.branches
    : spaConfig.branches.filter((b) => b.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <section id="branches" className="py-20 sm:py-28 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#17191d] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Your Sanctuary</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-4">
            Our Luxury Spa Locations
          </h2>
          <p className="text-sm sm:text-base text-[#aca596] leading-relaxed">
            Conveniently located in prime commercial and residential hubs across major metropolitan cities. Walk-ins and pre-booked appointments welcome.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all capitalize cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#d4af37] text-black shadow-lg font-bold'
                  : 'bg-[#15171a] hover:bg-[#1f2227] text-[#b5af9f] border border-[#2b2e35]'
              }`}
            >
              {city === 'all' ? 'All Locations' : city}
            </button>
          ))}
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => {
            const isCurrentlySelected = selectedBranch.id === branch.id;

            return (
              <div
                key={branch.id}
                className={`bg-[#141619] border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative ${
                  isCurrentlySelected
                    ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-[#17191d]'
                    : 'border-[#26282e] hover:border-[#d4af37]/50'
                }`}
              >
                {/* Active / Featured Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#1f2228] text-[#d4af37] border border-[#d4af37]/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {branch.city}
                  </span>
                  {isCurrentlySelected ? (
                    <span className="text-[11px] bg-[#d4af37] text-black font-extrabold px-2.5 py-0.5 rounded-md">
                      Selected Center
                    </span>
                  ) : (
                    <button
                      onClick={() => onSelectBranch(branch)}
                      className="text-[11px] text-[#a09a8d] hover:text-[#d4af37] underline transition-colors cursor-pointer"
                    >
                      Set as My Center
                    </button>
                  )}
                </div>

                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f5f2eb] mb-2">
                    {branch.name}
                  </h3>

                  {/* Address */}
                  <p className="text-xs text-[#b8b3a6] leading-relaxed mb-2">
                    {branch.address}
                  </p>

                  <p className="text-[11px] text-[#8a8579] italic mb-4">
                    Landmark: {branch.landmark}
                  </p>

                  {/* Timings */}
                  <div className="flex items-center gap-2 text-xs text-[#cfcac0] mb-4 bg-[#101214] p-2.5 rounded-xl border border-[#22252c]">
                    <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Open Daily: {branch.timings}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {branch.amenities.map((amenity, aIdx) => (
                      <span
                        key={aIdx}
                        className="bg-[#1a1c20] text-[#c2bdb2] text-[10px] px-2 py-1 rounded-md border border-[#2b2e36]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Branch CTAs */}
                <div className="pt-4 border-t border-[#23262d] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${branch.phoneRaw}`}
                      className="bg-[#1b1e23] hover:bg-[#252830] text-[#e8e4da] border border-[#333742] text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Direct Call</span>
                    </a>

                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(
                        `Hi ${branch.name}, I want to check availability for an appointment today.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#128C7E]/20 hover:bg-[#128C7E]/30 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#181a1e] hover:bg-[#21242a] text-[#b0aba0] border border-[#2b2e35] text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Get Route</span>
                    </a>

                    <button
                      onClick={() => {
                        onSelectBranch(branch);
                        onOpenBooking(undefined, branch.id);
                      }}
                      className="bg-[#d4af37] hover:bg-[#e2bd44] text-black text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-md cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Here</span>
                    </button>
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
