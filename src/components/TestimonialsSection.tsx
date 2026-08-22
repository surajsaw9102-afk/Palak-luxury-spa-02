import React, { useState, useEffect } from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spaData.testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = spaData.testimonials[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#f8f9fa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block bg-pink-50 text-[#7B113A] text-[10px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest border border-pink-100 mb-2">
            CLIENT REVIEWS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            Every guest deserves a memorable wellness experience. Here's what our happy clients say after visiting Palak Luxury Spa.
          </p>
        </div>

        {/* Review Card matching video layout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 relative min-h-[220px] flex flex-col justify-between">
          
          <div>
            {/* 5 Stars in Maroon + Quote mark */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-[#7B113A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif text-5xl text-gray-200 leading-none">“</span>
            </div>

            {/* Review Body */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
              "{current.text}"
            </p>
          </div>

          {/* User Details */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#7B113A] text-white font-bold flex items-center justify-center text-sm font-serif">
              {current.avatarLetter}
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#1a1a1a]">
                {current.name}
              </h4>
              <div className="flex items-center gap-1 text-[11px] text-green-600 font-medium">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Customer</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {spaData.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#7B113A]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
