import React from 'react';
import { Award, ShieldCheck, Sparkles, Bath } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';

export const TrustBadges: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#d4af37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#d4af37]" />;
      case 'Bath':
        return <Bath className="w-7 h-7 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#d4af37]" />;
    }
  };

  return (
    <section id="trust-pillars" className="py-12 sm:py-16 bg-[#101214] border-y border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Uncompromising Standards of Hospitality
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f2eb] mt-1">
            The Royal Neung Thai Promise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaConfig.trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#15171a] border border-[#2c2f37] hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1d2025] border border-[#373b45] flex items-center justify-center mb-5 group-hover:border-[#d4af37]/60 group-hover:bg-[#24211a] transition-all">
                {getIcon(badge.icon)}
              </div>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#f0ecdf] mb-2 group-hover:text-[#d4af37] transition-colors">
                {badge.title}
              </h3>
              <p className="text-xs text-[#a09a8c] leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
