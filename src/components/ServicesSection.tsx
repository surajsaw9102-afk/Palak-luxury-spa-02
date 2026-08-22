import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching recording */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
            Explore Our Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
            A Perfumed Spa Experience For Mind And Body: Renaissance
          </p>
        </div>

        {/* Stacked Service Cards */}
        <div className="space-y-10 sm:space-y-12">
          {spaData.services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-3xl overflow-hidden shadow-md group border border-gray-100 bg-gray-100"
            >
              {/* Service Hero Image */}
              <div className="aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* White Overlay Box (Exactly matching the video) */}
              <div className="p-5 sm:p-6 bg-white border-t border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg sm:text-2xl text-[#1a1a1a] mb-1.5 font-serif">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Dual Pill CTA Buttons */}
                <div className="flex flex-row items-center gap-3 max-w-md">
                  <a
                    href={`tel:${spaData.brand.phone1Raw}`}
                    className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(
                      service.name
                    )}%20at%20Palak%20Luxury%20Spa%20Gandhinagar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
