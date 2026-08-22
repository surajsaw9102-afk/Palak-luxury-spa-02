import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { spaData } from '../data/spaData';

export const GallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // We show 9 in the outer grid to maintain the exact aesthetic layout
  const displayedGallery = spaData.gallery.slice(0, 9);
  // Full collection for modal exploration
  const allGallery = spaData.gallery;

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % allGallery.length;
    });
  }, [allGallery.length]);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + allGallery.length) % allGallery.length;
    });
  }, [allGallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, nextImage, prevImage]);

  // Handle Touch Gestures for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Image
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Image
      prevImage();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const currentItem = activeIndex !== null ? allGallery[activeIndex] : null;

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

        {/* Gallery Grid (9 images layout matching recording) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
          {displayedGallery.map((item, idx) => {
            const isFirst = idx === 0;
            const isWide = idx === 3 || idx === 6;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
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
          <span>Tap any image to view &amp; swipe through all photos</span>
        </p>

      </div>

      {/* Interactive Swipeable Lightbox Modal */}
      {currentItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 select-none"
          onClick={() => setActiveIndex(null)}
        >
          {/* Top Bar with Counter & Close */}
          <div
            className="flex items-center justify-between w-full max-w-4xl mx-auto py-2 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="bg-[#7B113A] text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                {String(activeIndex + 1).padStart(2, '0')} / {String(allGallery.length).padStart(2, '0')}
              </span>
              <span className="text-gray-400 text-xs hidden sm:inline">
                Swipe left/right or use arrows
              </span>
            </div>

            <button
              onClick={() => setActiveIndex(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Visual Stage with Left/Right Arrows & Touch Handlers */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-4xl w-full mx-auto my-auto py-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-1 sm:left-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#7B113A] text-white flex items-center justify-center shadow-lg transition-colors border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-1 sm:right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#7B113A] text-white flex items-center justify-center shadow-lg transition-colors border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <div className="w-full flex flex-col items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 max-h-[62vh] sm:max-h-[70vh] flex items-center justify-center">
                <img
                  key={currentItem.id}
                  src={currentItem.image}
                  alt={currentItem.caption}
                  className="w-full h-auto max-h-[62vh] sm:max-h-[70vh] object-contain mx-auto transition-all duration-300"
                />
              </div>

              {/* Caption & Info */}
              <div className="mt-3 text-center px-4">
                <p className="text-white text-xs sm:text-sm font-medium drop-shadow-sm">
                  {currentItem.caption}
                </p>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
                  Palak Luxury Spa • Kudasan, Gandhinagar
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnails Strip for Quick Tap Switching */}
          <div
            className="w-full max-w-4xl mx-auto pt-2 pb-1 overflow-x-auto no-scrollbar flex items-center justify-center gap-1.5 sm:gap-2 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {allGallery.map((thumb, tIdx) => (
              <button
                key={thumb.id}
                onClick={() => setActiveIndex(tIdx)}
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeIndex === tIdx
                    ? 'border-[#D4AF37] scale-105 shadow-md brightness-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={thumb.image}
                  alt={thumb.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </section>
  );
};
