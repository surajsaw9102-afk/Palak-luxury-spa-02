import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { spaData, GalleryImage } from '../data/spaData';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#7B113A]"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              OUR GALLERY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">
            Palak Luxury Spa Gallery
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
            Explore our luxurious spa interiors, premium treatment rooms, relaxing ambience, and professional wellness experience.
          </p>
        </div>

        {/* Gallery Grid (9 images layout as in recording) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
          {spaData.gallery.map((item, idx) => {
            // Big image for first item to match visual flow
            const isFirst = idx === 0;
            const isWide = idx === 3 || idx === 6;

            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm bg-gray-200 ${
                  isFirst ? 'col-span-2 sm:col-span-2 aspect-[16/10]' : isWide ? 'col-span-2 sm:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Number Badge (01, 02, 03...) on top-left */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {item.number}
                </div>

                {/* Expand Icon on bottom-right */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md group-hover:bg-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 mt-2">
          <Maximize2 className="w-3 h-3" />
          <span>Tap any image to view</span>
        </p>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.caption}
                className="w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="p-4 bg-gray-900 text-white text-center text-xs sm:text-sm">
                <span className="font-bold text-[#d4af37] mr-2">{activeImage.number}</span>
                <span>{activeImage.caption}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
