import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Asymmetrical 3-Image Collage from Recording */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-12 sm:mb-16 items-center">
          
          {/* Left Top Card */}
          <div className="col-span-5 sm:col-span-4 space-y-3 sm:space-y-4">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[3/4] bg-gray-200">
              <img
                src={spaData.about.collage.img1}
                alt="Therapist at Palak Luxury Spa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/3] bg-gray-200">
              <img
                src={spaData.about.collage.img3}
                alt="Luxury Ambience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Main Big Card */}
          <div className="col-span-7 sm:col-span-8">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg aspect-[3/4] sm:aspect-[4/4] bg-gray-200">
              <img
                src={spaData.about.collage.img2}
                alt="Palak Luxury Spa Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#7B113A]"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {spaData.about.tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#7B113A]"></span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
            {spaData.about.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            {spaData.about.description}
          </p>
        </div>

        {/* 3 Numbered Feature Cards */}
        <div className="space-y-3.5 mb-10">
          {spaData.about.features.map((feature) => (
            <div
              key={feature.num}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-4 hover:border-gray-200 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 font-serif font-bold text-[#7B113A] text-sm sm:text-base">
                {feature.num}
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#1a1a1a] mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Call & WhatsApp CTAs */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 max-w-md">
          <a
            href={`tel:${spaData.brand.phone1Raw}`}
            className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Palak%20Luxury%20Spa%20Gandhinagar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
