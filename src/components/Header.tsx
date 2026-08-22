import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { spaData } from '../data/spaData';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Offers', href: '#offers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* Luxury AI Logo Emblem */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 relative">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#7B113A]"
                fill="none"
              >
                <defs>
                  <linearGradient id="spaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#F3E5AB" />
                    <stop offset="100%" stopColor="#AA771C" />
                  </linearGradient>
                  <linearGradient id="spaMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8E1442" />
                    <stop offset="100%" stopColor="#5E0927" />
                  </linearGradient>
                </defs>
                {/* Outer Golden Ring */}
                <circle cx="50" cy="50" r="46" stroke="url(#spaGold)" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="50" cy="50" r="42" stroke="#7B113A" strokeWidth="1" opacity="0.4" />
                
                {/* Central Royal Lotus Petals */}
                <path d="M50 18 C45 32, 38 48, 50 68 C62 48, 55 32, 50 18 Z" fill="url(#spaMaroon)" />
                <path d="M50 36 C38 42, 22 52, 28 68 C38 72, 46 62, 50 56 Z" fill="url(#spaGold)" opacity="0.9" />
                <path d="M50 36 C62 42, 78 52, 72 68 C62 72, 54 62, 50 56 Z" fill="url(#spaGold)" opacity="0.9" />
                <path d="M50 50 C32 55, 14 62, 16 74 C28 79, 42 70, 48 64 Z" fill="url(#spaMaroon)" opacity="0.8" />
                <path d="M50 50 C68 55, 86 62, 84 74 C72 79, 58 70, 52 64 Z" fill="url(#spaMaroon)" opacity="0.8" />
                <circle cx="50" cy="74" r="3" fill="url(#spaGold)" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-[#1a1a1a] leading-none uppercase">
                {spaData.brand.name}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#7B113A] font-semibold uppercase">
                  {spaData.brand.city}
                </span>
                <span className="text-[9px] text-gray-400 font-medium hidden sm:inline">•</span>
                <span className="text-[9px] text-amber-700 font-medium hidden sm:inline tracking-wider">
                  {spaData.brand.tagline}
                </span>
              </div>
            </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#7B113A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action / Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${spaData.brand.phone1Raw}`}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#7B113A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:bg-[#620c2c] transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-semibold text-gray-800 hover:text-[#7B113A] py-1 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 grid grid-cols-2 gap-3">
            <a
              href={`tel:${spaData.brand.phone1Raw}`}
              className="bg-[#7B113A] text-white text-xs font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${spaData.brand.whatsapp}?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Palak%20Luxury%20Spa%20Gandhinagar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
