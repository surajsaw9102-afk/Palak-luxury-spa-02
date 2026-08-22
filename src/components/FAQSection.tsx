import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Prompt matching video */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-1">
            Still have questions?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            We're happy to help on WhatsApp or by phone.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 max-w-sm mx-auto mb-10">
            <a
              href={`tel:${spaData.brand.phone1Raw}`}
              className="flex-1 bg-[#7B113A] hover:bg-[#630b2c] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%20Palak%20Luxury%20Spa%2C%20I%20have%20a%20question.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {spaData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm text-gray-800">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
