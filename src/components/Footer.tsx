import React from 'react';
import { Instagram, Phone, Mail, Clock, MapPin, Share2 } from 'lucide-react';
import { spaData } from '../data/spaData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 pb-24 sm:pb-12 text-[#333]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* SEO Keywords Tag Cloud matching the exact grey card in recording */}
        <div className="bg-[#b3b3b3]/20 text-[#555] p-6 rounded-3xl text-[11px] sm:text-xs leading-relaxed text-center mb-12 border border-gray-200">
          <p>
            © {spaData.seoKeywords.join(', ')}
          </p>
        </div>

        {/* Brand Information & Social Icons */}
        <div className="mb-10 text-left">
          <h3 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-2">
            {spaData.brand.name}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl mb-4">
            {spaData.brand.tagline} — Premium luxury spa and 24/7 wellness experience at Kudasan, Gandhinagar. Enjoy luxury massage therapies, Jacuzzi baths, peaceful ambience, professional care, and complete rejuvenation.
          </p>

          {/* Social Circle Icons matching video */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#E1306C] text-white flex items-center justify-center shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="w-9 h-9 rounded-full bg-[#BD081C] text-white flex items-center justify-center shadow-xs font-bold text-xs"
            >
              P
            </a>
            <a
              href={`https://wa.me/${spaData.brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs font-bold text-xs"
            >
              💬
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-xs font-bold text-xs"
            >
              🐦
            </a>
          </div>
        </div>

        {/* 4 Column Footer Links matching video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 text-xs">
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#home" className="hover:text-[#7B113A]">Home</a></li>
              <li><a href="#about" className="hover:text-[#7B113A]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#7B113A]">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#7B113A]">Gallery</a></li>
              <li><a href="#offers" className="hover:text-[#7B113A]">Offers</a></li>
              <li><a href="#contact" className="hover:text-[#7B113A]">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-3">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>Jacuzzi Massage In Gandhinagar</li>
              <li>Four Hand Massage In Gandhinagar</li>
              <li>Thai Massage In Gandhinagar</li>
              <li>Deep Tissue Massage In Gandhinagar</li>
              <li>Hot Oil Massage In Gandhinagar</li>
              <li>Swedish Massage In Gandhinagar</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-3">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7B113A] shrink-0 mt-0.5" />
                <span>{spaData.brand.address}</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-gray-800">
                <Phone className="w-4 h-4 text-[#7B113A] shrink-0" />
                <a href={`tel:${spaData.brand.phone1Raw}`}>{spaData.brand.phone1}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7B113A] shrink-0" />
                <a href={`mailto:${spaData.brand.email}`} className="hover:text-[#7B113A] truncate">
                  {spaData.brand.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7B113A] shrink-0" />
                <span>{spaData.brand.timings}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {spaData.brand.name}. All Rights Reserved.</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Luxury Meets Relaxation</p>
        </div>

      </div>
    </footer>
  );
};
