import React from 'react';
import { MapPin } from 'lucide-react';
import { spaData } from '../data/spaData';

export const LocationMapSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block bg-pink-50 text-[#7B113A] text-[10px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest border border-pink-100 mb-2">
            FIND US
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">
            Visit Palak Luxury Spa
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            Conveniently located at Kudasan, Gandhinagar, for a luxurious 24/7 spa and wellness experience.
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-5 sm:p-6 mb-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-pink-100/80 text-[#7B113A] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a]">
              {spaData.brand.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-1">
              {spaData.brand.address}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-[#7B113A] font-semibold">
              <span className="bg-white border border-pink-100 px-2.5 py-0.5 rounded-full">
                🕒 {spaData.brand.timings}
              </span>
              <span className="bg-white border border-pink-100 px-2.5 py-0.5 rounded-full">
                📞 {spaData.brand.phone1}
              </span>
            </div>
          </div>
        </div>

        {/* Embedded Google Maps Box */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 h-80 sm:h-96 w-full relative">
          <iframe
            title="Palak Luxury Spa Gandhinagar Location"
            src="https://maps.google.com/maps?q=Shop-26%2C%20KANAM%20RESIDENCY-2%2C%20Reliance%20Cross%20Rd%2C%20Kudasan%2C%20Gandhinagar%2C%20Gujarat%20382419&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};
