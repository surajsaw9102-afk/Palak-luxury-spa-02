import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const HeroVideoSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[72vh] sm:h-[80vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={spaData.hero.posterImage}
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source
          src={spaData.hero.videoUrl}
          type="video/mp4"
        />
        {/* Fallback to image if video cannot play */}
        <img
          src={spaData.hero.posterImage}
          alt="Palak Luxury Spa Gandhinagar"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Dark Ambient Overlay exactly like in recording */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-3xl px-4 sm:px-6 flex flex-col items-center">
        
        {/* Title: "Best Luxury Spa In Gandhinagar" */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide mb-8 drop-shadow-md">
          {spaData.brand.locationHeading}
        </h1>

        {/* Dual Pill CTA Buttons matching recording */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md">
          
          {/* Call Now Pill Button (Maroon) */}
          <a
            href={`tel:${spaData.brand.phone1Raw}`}
            className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Pill Button (Green) */}
          <a
            href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20want%20to%20inquire%20about%20spa%20services%20at%20Palak%20Luxury%20Spa%20Gandhinagar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

        </div>

      </div>

    </section>
  );
};
