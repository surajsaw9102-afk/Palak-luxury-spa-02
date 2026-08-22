import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#7B113A]"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {spaData.howItWorks.tagline}
            </span>
            <span className="w-6 h-[1.5px] bg-[#7B113A]"></span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2">
            {spaData.howItWorks.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {spaData.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Connected Process */}
        <div className="relative mb-12 sm:mb-14">
          <div className="space-y-6 sm:space-y-8">
            {spaData.howItWorks.steps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 sm:gap-6 bg-[#f8f9fa] border border-gray-100 p-5 sm:p-6 rounded-2xl"
              >
                {/* Number Circle Badge in Green/Maroon border */}
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-[#7B113A]/30 bg-white flex items-center justify-center shrink-0 font-serif font-bold text-[#7B113A] text-sm sm:text-base shadow-xs">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#1a1a1a] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Call & WhatsApp Buttons */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 max-w-md mb-12">
          <a
            href={`tel:${spaData.brand.phone1Raw}`}
            className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%20Palak%20Luxury%20Spa%2C%20I%20want%20to%20schedule%20a%20massage%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Staff Collage at Bottom of Section */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          <div className="col-span-12 rounded-3xl overflow-hidden shadow-md aspect-[16/10] sm:aspect-[21/9] bg-gray-100">
            <img
              src={spaData.howItWorks.staffImages[0]}
              alt="Palak Luxury Spa Staff"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-gray-100">
            <img
              src={spaData.howItWorks.staffImages[1]}
              alt="Palak Luxury Spa Therapists"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-6 rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-gray-100">
            <img
              src={spaData.howItWorks.staffImages[2]}
              alt="Palak Luxury Spa Hospitality"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
