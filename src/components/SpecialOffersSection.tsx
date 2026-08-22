import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const SpecialOffersSection: React.FC = () => {
  return (
    <section id="offers" className="py-14 sm:py-20 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block bg-pink-50 text-[#7B113A] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-pink-100 mb-2">
            SPECIAL OFFERS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            Exclusive Spa Deals
          </h2>
        </div>

        {/* 3 Special Offer Vertical Cards matching video */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {spaData.offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col relative"
            >
              {/* Main Banner Visual */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={offer.bannerImage}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Vertical "SPECIAL OFFER" Ribbon on Left */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-[#7B113A] text-white flex items-center justify-center">
                  <span className="transform -rotate-90 whitespace-nowrap text-xs sm:text-sm font-black tracking-[0.2em] uppercase">
                    SPECIAL OFFER
                  </span>
                </div>

                {/* Starburst / Discount Badge on Right */}
                <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-[#7B113A] leading-none">
                    {offer.discount}
                  </span>
                </div>

                {/* Offer Title Overlay at Bottom */}
                <div className="absolute left-16 sm:left-20 bottom-4 text-white drop-shadow-md">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold uppercase tracking-wider text-white">
                    {offer.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-200 mt-0.5">
                    {offer.phones.join(' | ')}
                  </p>
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="p-4 bg-white flex flex-row items-center gap-3 border-t border-gray-100">
                <a
                  href={`tel:${spaData.brand.phone1Raw}`}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold text-xs sm:text-sm py-2.5 rounded-full flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7B113A]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20want%20to%20avail%20the%20${encodeURIComponent(
                    offer.title
                  )}%20(${encodeURIComponent(offer.discount)})%20offer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-2.5 rounded-full flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small Dual Image Banner after offers */}
        <div className="mt-10 max-w-md mx-auto grid grid-cols-12 gap-3">
          <div className="col-span-8 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
              alt="Palak Luxury Spa Care"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-4 rounded-2xl overflow-hidden aspect-square self-end bg-gray-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&q=80"
              alt="Palak Luxury Spa Details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
