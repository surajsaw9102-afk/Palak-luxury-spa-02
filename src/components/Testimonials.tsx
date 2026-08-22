import React from 'react';
import { Star, ShieldCheck, Sparkles, Quote } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#101214] border-y border-[#252830] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#17191d] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-4">
            Loved by 75,000+ Rejuvenated Souls
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-[#d4af37]">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
              ))}
            </div>
            <span className="font-bold text-white text-base">4.9 / 5.0</span>
            <span className="text-[#969184]">({spaConfig.brand.reviewsCount} Real Ratings)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {spaConfig.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#15171a] border border-[#2c2f37] hover:border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7d786d]">{test.date}</span>
                </div>

                {/* Therapy Tag */}
                <div className="inline-block bg-[#1f2228] text-[#d4af37] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#d4af37]/20 mb-4">
                  Therapy: {test.therapyTaken}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#c8c2b5] leading-relaxed italic mb-6">
                  "{test.review}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#22252c]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#24211a] to-[#121316] border border-[#d4af37]/40 flex items-center justify-center font-serif-luxury font-bold text-[#d4af37]">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-base font-bold text-[#f5f2eb]">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-[#8e897e]">{test.city}</p>
                  </div>
                </div>

                {test.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Guest</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
