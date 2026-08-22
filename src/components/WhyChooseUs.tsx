import React from 'react';
import { Sparkles, Shield, UserCheck, Droplet, HeartHandshake, CheckCircle } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#d4af37]" />,
      title: "Master Certified Therapists",
      description: "Our therapists undergo rigorous anatomical and pressure-point training in Bangkok and Bali before attending to guests."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#d4af37]" />,
      title: "100% Medical-Grade Hygiene",
      description: "Single-use disposable sheets, sterilized towels, and thorough suite sanitization with hospital-grade disinfectant after every appointment."
    },
    {
      icon: <Droplet className="w-6 h-6 text-[#d4af37]" />,
      title: "Pure Cold-Pressed Organic Oils",
      description: "Hypoallergenic botanical oils free from synthetic mineral oil, parabens, and artificial fragrances for radiant skin nourishment."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#d4af37]" />,
      title: "Customized Pressure & Comfort",
      description: "We tailor every minute to your exact comfort — from gentle lymphatic flow to deep trigger point relief and personalized ambient lighting."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#111316] border-b border-[#252830] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Spa Interior"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Metric Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#16181c]/95 backdrop-blur-xl border border-[#d4af37]/60 rounded-2xl p-5 shadow-2xl max-w-[260px]">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="font-serif-luxury text-2xl font-bold text-[#f5ecd0]">10+ Years</span>
              </div>
              <p className="text-xs text-[#a09a8c]">
                Of authentic royal wellness & over 75,000+ refreshed guests across India.
              </p>
            </div>
          </div>

          {/* Right Column: Key Differentiators */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#1a1c21] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Neung Thai Spa</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-6 leading-tight">
              An Authentic Royal Escape, <br />
              <span className="gold-gradient-text">Crafted Without Compromise.</span>
            </h2>

            <p className="text-sm text-[#b2aca0] leading-relaxed mb-8">
              At Neung Thai, we treat massage as sacred healing. From the soothing aroma of steamed lemongrass to warm volcanic stones and private whirlpool suites, every detail is orchestrated for profound tranquility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <div key={index} className="bg-[#15171a] border border-[#2b2e35] p-5 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#1f2227] flex items-center justify-center mb-3">
                    {point.icon}
                  </div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#f0ecdf] mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#9c9689] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
