import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { spaConfig } from '../data/spaConfig';
import { GalleryItem } from '../types';

export const AmbianceGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Ambiance' },
    { id: 'suites', label: 'Private Suites' },
    { id: 'jacuzzi', label: 'Jacuzzi & Baths' },
    { id: 'therapies', label: 'Therapies' },
    { id: 'ambiance', label: 'Aromatherapy & Decor' },
  ];

  const filteredItems = activeCategory === 'all'
    ? spaConfig.gallery
    : spaConfig.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-widest bg-[#17191d] px-3.5 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5-Star World-Class Sanctuary</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8f5ee] mb-4">
            Suites & Ambiance Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#aca596] leading-relaxed">
            Step into an oasis of calm. Our private suites feature warm acoustic insulation, soothing dim lighting, fresh aroma diffusers, and luxury Jacuzzi tubs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'bg-[#15171a] hover:bg-[#1f2227] text-[#b5af9f] border border-[#2b2e35]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-[#26282e] hover:border-[#d4af37]/60 bg-[#141619] transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#d4af37]" />
              </div>

              {/* Text Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold bg-[#1a1c21]/90 px-2 py-0.5 rounded border border-[#d4af37]/30 inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-[#f5f2eb] leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#b0aba0] mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-xl border border-white/10 shadow-2xl mb-4"
            />
            <div className="text-center">
              <h4 className="font-serif-luxury text-2xl font-bold text-[#f5ecd0]">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-sm text-[#b8b3a5] mt-1 max-w-xl mx-auto">
                {filteredItems[lightboxIndex].description}
              </p>
              <p className="text-xs text-[#807a6f] mt-2">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
