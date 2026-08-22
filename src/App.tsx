import React from 'react';
import { spaData } from './data/spaData';
import { Header } from './components/Header';
import { HeroVideoSection } from './components/HeroVideoSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LeadModal } from './components/LeadModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans antialiased selection:bg-[#7B113A]/20 selection:text-[#7B113A]">
      {/* 1. Header with Exact Lotus Logo & Menu */}
      <Header />

      {/* 2. Hero Video Section: "Best Spa In C.G. Road" */}
      <HeroVideoSection />

      {/* 3. About Section: "A Peaceful Wellness Experience Designed Around You" */}
      <AboutSection />

      {/* 4. Explore Our Services (Stacked with Call Now & WhatsApp) */}
      <ServicesSection />

      {/* 5. Neung Thai Spa Gallery (01 to 09 Numbered Grid with Lightbox) */}
      <GallerySection />

      {/* 6. How It Works: "Your Wellness Journey, Simplified" (3-step timeline + staff collage) */}
      <HowItWorksSection />

      {/* 7. Special Offers: "Exclusive Spa Deals" (Couples, All Services, Membership) */}
      <SpecialOffersSection />

      {/* 8. FAQ Accordion: "Still have questions?" */}
      <FAQSection />

      {/* 9. Client Reviews: "What Our Clients Say" (5 Maroon Stars Carousel) */}
      <TestimonialsSection />

      {/* 10. Location & Map: "Visit Neung Thai Spa" (Shop 101 Iscon Avenue, CG Road) */}
      <LocationMapSection />

      {/* 11. SEO Keyword Cloud & 4-Column Footer */}
      <Footer />

      {/* 12. Floating Bottom-Right Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* 13. Automatic Booking / Lead Generation Popup */}
      <LeadModal />
    </div>
  );
}
