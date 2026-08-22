import { SpaService, SpaPackage, SpaBranch, Testimonial, GalleryItem, FAQItem } from '../types';

export interface SpaConfigType {
  brand: {
    name: string;
    tagline: string;
    shortTagline: string;
    description: string;
    establishedYear: string;
    rating: number;
    reviewsCount: string;
    guestCountServed: string;
    certifiedTherapistsCount: string;
    branchesCount: string;
    primaryPhone: string;
    primaryPhoneRaw: string;
    primaryWhatsApp: string;
    primaryEmail: string;
    workingHours: string;
  };
  hero: {
    videoUrl: string;
    alternativeVideos: { title: string; url: string }[];
    posterImage: string;
    badge: string;
    headline: string;
    subheadline: string;
    offerBadge: string;
  };
  trustBadges: { icon: string; title: string; description: string }[];
  services: SpaService[];
  packages: SpaPackage[];
  gallery: GalleryItem[];
  branches: SpaBranch[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}

export const spaConfig: SpaConfigType = {
  brand: {
    name: "Neung Thai Spa",
    tagline: "Authentic Royal Thai Wellness & Luxury Therapy Sanctuary",
    shortTagline: "Royal Thai Wellness & Luxury Sanctuary",
    description: "Immerse yourself in authentic ancient Thai healing, aromatic Balinese deep tissue, revitalizing body scrubs, and opulent Jacuzzi hydrotherapy in private luxury suites.",
    establishedYear: "2016",
    rating: 4.9,
    reviewsCount: "5,400+",
    guestCountServed: "75,000+",
    certifiedTherapistsCount: "120+",
    branchesCount: "14+",
    primaryPhone: "+91 98200 12345",
    primaryPhoneRaw: "+919820012345",
    primaryWhatsApp: "919820012345",
    primaryEmail: "concierge@neungthaispa.in",
    workingHours: "10:00 AM - 10:30 PM (All 7 Days)",
  },

  hero: {
    // High-resolution soothing luxury spa cinematic video loop
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hot-stone-massage-therapy-at-a-spa-41566-large.mp4",
    // Alternative high quality video options the user can easily select or replace
    alternativeVideos: [
      {
        title: "Hot Basalt Stone Therapy",
        url: "https://assets.mixkit.co/videos/preview/mixkit-hot-stone-massage-therapy-at-a-spa-41566-large.mp4",
      },
      {
        title: "Aromatherapy & Herbal Oils",
        url: "https://assets.mixkit.co/videos/preview/mixkit-woman-relaxing-during-a-facial-massage-at-a-spa-41563-large.mp4",
      },
      {
        title: "Traditional Massage Strokes",
        url: "https://assets.mixkit.co/videos/preview/mixkit-masseuse-giving-a-back-massage-to-a-woman-41561-large.mp4"
      }
    ],
    posterImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    badge: "✦ 100% Authentic Royal Thai Certified Therapists",
    headline: "Escape the Chaos. Indulge in Royal Thai Tranquility.",
    subheadline: "Experience the timeless art of traditional Thai massage, soothing warm herbal compresses, and private candlelit Jacuzzi suites crafted for deep rejuvenation.",
    offerBadge: "Special Online Booking: Flat 20% OFF on 90 & 120 Min Sessions",
  },

  trustBadges: [
    {
      icon: "Award",
      title: "100% Certified Therapists",
      description: "Trained directly in authentic Bangkok & Chiang Mai Thai massage lineages"
    },
    {
      icon: "ShieldCheck",
      title: "5-Star Hygiene Standards",
      description: "100% single-use disposable linen, sanitized therapy suites & UV sterilizers"
    },
    {
      icon: "Sparkles",
      title: "Organic Cold-Pressed Oils",
      description: "Pure botanical aromatherapy oils, natural herbal compresses & sea salts"
    },
    {
      icon: "Bath",
      title: "Private VIP Jacuzzi Suites",
      description: "Couples & individual private rooms with attached steam & rainfall showers"
    }
  ],

  services: [
    {
      id: "thai-traditional",
      name: "Traditional Thai Massage",
      thaiName: "Nuad Thai Boran (นวดแผนโบran)",
      tagline: "Ancient passive yoga stretches & rhythmic energy line therapy",
      description: "Performed on a comfortable traditional floor mattress or firm table without oils. Our certified therapists apply rhythmic palm pressure, thumb pressure, and gentle assisted yoga stretching along your body's ten primary energy lines ('Sen') to eliminate chronic tension, increase flexibility, and restore vital energy flow.",
      benefits: [
        "Unblocks deep body stiffness & improves joint mobility",
        "Assisted yoga stretching realigns posture and spine",
        "Stimulates lymphatic circulation & deep cellular oxygenation",
        "Zero oil applied; loose authentic Thai cotton garments provided"
      ],
      durations: [
        { minutes: 60, price: 2199, originalPrice: 2799 },
        { minutes: 90, price: 2999, originalPrice: 3899 },
        { minutes: 120, price: 3899, originalPrice: 4999 }
      ],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
      isPopular: true,
      isSignature: true,
      category: "massage",
      inclusions: ["Authentic Thai Cotton Attire", "Aromatic Foot Cleansing Ritual", "Warm Herbal Tea Welcome & Farewell"]
    },
    {
      id: "balinese-deep-tissue",
      name: "Balinese Deep Tissue Massage",
      thaiName: "Pijat Bali",
      tagline: "Exotic blend of acupressure, gentle stretching & warm aromatic oils",
      description: "A vigorous yet deeply soothing full-body massage combining traditional Indonesian acupressure, rolling palm strokes, and deep muscle kneading using warm sandalwood, lemongrass, and frangipani essential oils to dissolve deep-seated muscular knots and chronic back/shoulder pain.",
      benefits: [
        "Relieves stubborn muscle knots and lower back tightness",
        "Warm organic botanical oils nourish dehydrated skin",
        "Improves blood circulation and relieves chronic fatigue",
        "Balanced pressure customized to your preference (Medium to Firm)"
      ],
      durations: [
        { minutes: 60, price: 2499, originalPrice: 3199 },
        { minutes: 90, price: 3399, originalPrice: 4299 },
        { minutes: 120, price: 4299, originalPrice: 5499 }
      ],
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
      isPopular: true,
      isSignature: false,
      category: "massage",
      inclusions: ["Custom Aromatic Oil Selection", "Warm Towel Compression", "Steam & Rainfall Shower Access"]
    },
    {
      id: "swedish-relaxation",
      name: "Swedish Destress Massage",
      tagline: "Gentle flowing effleurage strokes for complete mental & physical calm",
      description: "The classic European therapy designed for total relaxation. Uses continuous long gliding strokes, light kneading, and friction movements with hypoallergenic lavender and sweet almond oils to stimulate circulation, lower cortisol levels, and ease everyday stress.",
      benefits: [
        "Significantly lowers anxiety, insomnia & stress levels",
        "Enhances blood flow and natural lymph drainage",
        "Gentle, non-painful pressure ideal for first-time spa guests",
        "Leaves you in a profound state of meditative tranquility"
      ],
      durations: [
        { minutes: 60, price: 2199, originalPrice: 2699 },
        { minutes: 90, price: 2999, originalPrice: 3799 },
        { minutes: 120, price: 3799, originalPrice: 4799 }
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
      isPopular: false,
      isSignature: false,
      category: "massage",
      inclusions: ["Lavender Calming Infusion", "Head & Scalp Acupressure", "Hot Shower with Luxury Amenities"]
    },
    {
      id: "four-hand-synchronized",
      name: "Royal Four-Hand Synchronized Massage",
      tagline: "Two certified therapists working in choreographed harmony",
      description: "Our signature royal indulgence. Two master therapists mirror each other's rhythmic movements synchronously across both sides of your body. The dual sensation overloads the conscious mind, inducing an extraordinarily deep state of meditative relaxation and neuromuscular relief.",
      benefits: [
        "Double the therapeutic value in single session duration",
        "Choreographed harmony triggers profound mental release",
        "Simultaneous upper and lower body muscle therapy",
        "Ultimate luxury experience for VIPs and special occasions"
      ],
      durations: [
        { minutes: 60, price: 4199, originalPrice: 5299 },
        { minutes: 90, price: 5699, originalPrice: 6999 }
      ],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
      isPopular: true,
      isSignature: true,
      category: "ritual",
      inclusions: ["Two Certified Senior Therapists", "Private VIP Suite", "Complementary Herbal Steam & Jacuzzi Dip"]
    },
    {
      id: "hot-stone-therapy",
      name: "Volcanic Hot Stone Therapy",
      tagline: "Warming volcanic basalt stones infused with aromatic oils",
      description: "Smooth water-heated natural volcanic basalt stones are strategically placed on key energy points (chakras) along your spine, hands, and feet. Therapists glide heated stones with rhythmic oiled strokes to penetrate deep muscle tissue 4x faster than manual massage alone.",
      benefits: [
        "Deep penetrating heat melts away chronic muscle stiffness",
        "Expands blood vessels to accelerate muscle recovery",
        "Promotes restorative sleep and relieves arthritic aches",
        "Soothing sensory warmth throughout the winter or fatigue days"
      ],
      durations: [
        { minutes: 75, price: 3199, originalPrice: 3999 },
        { minutes: 90, price: 3699, originalPrice: 4699 }
      ],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      isPopular: false,
      isSignature: false,
      category: "massage",
      inclusions: ["Heated Basalt Volcanic Stones", "Jojoba & Rosemary Oil", "Post-Therapy Warm Ginger Tea"]
    },
    {
      id: "jacuzzi-milk-honey-bath",
      name: "Luxury Jacuzzi Milk & Rose Petal Bath",
      tagline: "Private hydrotherapy soak infused with raw organic honey & petals",
      description: "Step into an opulent, warm bubbling hydrotherapy whirlpool tub sprinkled with fresh crimson rose petals, raw mountain honey, and skin-softening almond milk extract. Pulsing water jets massage your lower back, calves, and spine while opening pores and hydrating the skin.",
      benefits: [
        "Warm hydrotherapy jets relieve joint pressure and spinal load",
        "Lactic acid in milk gently exfoliates and softens dull skin",
        "Raw honey locks in deep natural moisture and glow",
        "100% private sanitised suite with ambient candlelight & soothing music"
      ],
      durations: [
        { minutes: 30, price: 1499, originalPrice: 1999 },
        { minutes: 45, price: 1999, originalPrice: 2499 }
      ],
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
      isPopular: true,
      isSignature: true,
      category: "hydro",
      inclusions: ["Private Whirlpool Suite", "Fresh Rose Petals & Pure Almond Milk", "Fresh Fruit Skewer & Herbal Drink"]
    },
    {
      id: "couples-romantic-haven",
      name: "Couples Romantic Wellness Escape",
      tagline: "Side-by-side synchronized therapy in a private VIP couple suite",
      description: "A private shared sanctuary for two. Relax together on adjoining therapy beds as two skilled therapists deliver synchronized full-body massages, followed by a romantic warm Jacuzzi soak with rose petals and sparkling herbal mocktails in candlelight.",
      benefits: [
        "Exclusive access to spacious private couple VIP suite",
        "Shared relaxing experience ideal for anniversaries & birthdays",
        "Customizable massage pressure and oil choices for each partner",
        "Private attached Jacuzzi and rainfall shower"
      ],
      durations: [
        { minutes: 90, price: 5499, originalPrice: 6999 },
        { minutes: 120, price: 6999, originalPrice: 8999 }
      ],
      image: "https://images.unsplash.com/photo-1591343393572-3505b8270d7f?auto=format&fit=crop&w=1000&q=80",
      isPopular: true,
      isSignature: true,
      category: "ritual",
      inclusions: ["Couple Private VIP Suite", "2x Customized 60/80m Massages", "30m Private Rose Jacuzzi Soak", "Celebration Welcome Drink"]
    },
    {
      id: "herbal-body-scrub",
      name: "Thai Herbal & Dead Sea Salt Body Polish",
      tagline: "Gentle natural exfoliation for glowing, velvety skin",
      description: "Infused with turmeric, lemongrass, crushed roasted coffee beans, and Dead Sea minerals. Our therapists apply a gentle circular exfoliating scrub to slough off dead cells, brighten sun-tanned skin, and restore youthful elasticity.",
      benefits: [
        "Removes dead skin layers and unclogs pores",
        "Improves skin tone, texture, and natural glow",
        "Prepares the skin to absorb moisturizing oils more deeply",
        "Leaves skin silky smooth with a revitalizing citrus aroma"
      ],
      durations: [
        { minutes: 45, price: 1799, originalPrice: 2299 },
        { minutes: 60, price: 2299, originalPrice: 2899 }
      ],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      isPopular: false,
      isSignature: false,
      category: "body-scrub",
      inclusions: ["Organic Herbal Scrub Blend", "Warm Steam Infusion", "Hydrating Body Butter Finish"]
    }
  ],

  packages: [
    {
      id: "express-revitalize",
      name: "Express Revitalize Ritual",
      badge: "Quick Destress",
      tagline: "The perfect mid-week reboot for busy professionals",
      totalDurationMins: 60,
      price: 2499,
      originalPrice: 3299,
      description: "A compact yet intensive rejuvenation package designed to release upper body tension, stimulate blood flow, and leave you refreshed in just one hour.",
      breakdown: [
        { title: "Targeted Swedish or Thai Massage", durationMins: 45, description: "Focused back, neck, shoulders and legs tension release." },
        { title: "Eucalyptus Herbal Steam Bath", durationMins: 10, description: "Opens pores and relaxes muscular spasms." },
        { title: "Luxury Rainfall Shower & Dressing", durationMins: 5, description: "Warm shower with organic botanical body wash." }
      ],
      highlights: [
        "Zero downtime, instant energy boost",
        "Targeted back & shoulder relief",
        "Herbal steam bath included",
        "Choice of 3 premium essential oils"
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
      recommendedFor: "Busy work schedules, post-workout soreness, quick unwind"
    },
    {
      id: "signature-zen-indulgence",
      name: "Signature Zen Indulgence",
      badge: "★ Most Popular",
      tagline: "Our bestselling 90-minute complete mind & body transformation",
      totalDurationMins: 90,
      price: 3699,
      originalPrice: 4799,
      description: "The ideal balance of deep muscle therapy, gentle skin exfoliation, and soothing warm hydrotherapy to melt away physical fatigue and mental burnout.",
      breakdown: [
        { title: "Full-Body Balinese or Deep Tissue Massage", durationMins: 60, description: "Comprehensive full body therapeutic treatment." },
        { title: "Organic Coffee / Lemongrass Body Scrub", durationMins: 15, description: "Exfoliates dull skin and boosts lymphatic flow." },
        { title: "Warm Jacuzzi Hydrotherapy Bath", durationMins: 15, description: "Whirlpool jets gently massage tired spine & muscles." }
      ],
      highlights: [
        "Combines deep tissue massage + body polish + Jacuzzi",
        "Includes fresh rose petals and organic essential oils",
        "Private therapy suite with attached shower",
        "Complementary fresh herbal brew & dates"
      ],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      recommendedFor: "Weekend relaxation, complete physical unwinding, stress relief"
    },
    {
      id: "royal-thai-vip-journey",
      name: "Royal Thai VIP Imperial Journey",
      badge: "VIP Luxury",
      tagline: "The ultimate 120-minute royal wellness indulgence",
      totalDurationMins: 120,
      price: 5299,
      originalPrice: 6999,
      description: "An extraordinary 2-hour multi-sensory journey designed after ancient Siamese royal palace rituals. Featuring four-hand synchronized therapy, hot stone compresses, and a private rose-milk Jacuzzi bath.",
      breakdown: [
        { title: "Royal Four-Hand Synchronized Massage", durationMins: 75, description: "Two senior therapists in synchronized rhythm." },
        { title: "Luk Pra Kob Warm Herbal Compress", durationMins: 15, description: "Steamed aromatic herbal poultice applied to pressure points." },
        { title: "Jacuzzi Milk & Honey Petal Bath", durationMins: 20, description: "Relaxing whirlpool immersion with rose petals." },
        { title: "Rain Shower & Herbal Scalp Therapy", durationMins: 10, description: "Head acupressure and luxury shower." }
      ],
      highlights: [
        "Two certified master therapists assigned",
        "Authentic Thai warm herbal compress (*Luk Pra Kob*)",
        "Private VIP Master Suite with Jacuzzi",
        "Fresh fruit platter & premium green tea"
      ],
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
      recommendedFor: "Birthdays, anniversaries, executive gifting, deep healing"
    },
    {
      id: "couples-romantic-haven-package",
      name: "Couples Royal Harmony Haven",
      badge: "For Two",
      tagline: "A shared romantic retreat in our private couples VIP suite",
      totalDurationMins: 120,
      price: 6999,
      originalPrice: 9499,
      description: "Create unforgettable relaxing memories together. Enjoy side-by-side full body therapies followed by a candlelit rose petal Jacuzzi soak with refreshing drinks.",
      breakdown: [
        { title: "Synchronized Couple Massage (for 2 Guests)", durationMins: 75, description: "Customized choice of Swedish, Balinese or Thai." },
        { title: "Private Jacuzzi Milk & Rose Soak (for 2)", durationMins: 30, description: "Private whirlpool bath with rose petals and soft music." },
        { title: "Aroma Steam Bath & Rainfall Shower", durationMins: 15, description: "Eucalyptus steam room session for two." }
      ],
      highlights: [
        "Spacious private couple suite with dual beds & Jacuzzi",
        "Complimentary sparkling fruit coolers & chocolates",
        "Romantic candlelight & ambient Thai music setting",
        "Personalized therapy pressure for each partner"
      ],
      image: "https://images.unsplash.com/photo-1591343393572-3505b8270d7f?auto=format&fit=crop&w=1000&q=80",
      recommendedFor: "Couples, honeymooners, wedding anniversaries, Valentine's gift"
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Royal Jacuzzi Whirlpool Suite",
      category: "jacuzzi",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      description: "Private hydrotherapy whirlpool bath surrounded by candlelit warmth and rose petals."
    },
    {
      id: "gal-2",
      title: "Traditional Thai Therapy Room",
      category: "suites",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      description: "Serene private room with teak finishes, warm amber lighting, and soothing aromatherapy."
    },
    {
      id: "gal-3",
      title: "Volcanic Hot Stone Therapy",
      category: "therapies",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
      description: "Authentic heated volcanic basalt stones used for deep muscular relief."
    },
    {
      id: "gal-4",
      title: "VIP Couples Sanctuary Suite",
      category: "suites",
      image: "https://images.unsplash.com/photo-1591343393572-3505b8270d7f?auto=format&fit=crop&w=1200&q=80",
      description: "Luxurious shared suite designed for side-by-side couple wellness sessions."
    },
    {
      id: "gal-5",
      title: "Organic Cold-Pressed Essential Oils",
      category: "ambiance",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
      description: "100% natural botanical oils including lemongrass, sandalwood, lavender, and eucalyptus."
    },
    {
      id: "gal-6",
      title: "Herbal Compress (Luk Pra Kob)",
      category: "therapies",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
      description: "Traditional steamed medicinal herbs wrapped in unbleached cotton poultices."
    }
  ],

  branches: [
    {
      id: "mumbai-worli",
      city: "Mumbai",
      name: "Worli Seaface Branch",
      area: "Worli, South Mumbai",
      address: "Ground Floor, Imperial Heights, Near Poonam Chambers, Dr. Annie Besant Road, Worli",
      landmark: "Opposite Atria Mall, Worli",
      phone: "+91 98200 11223",
      phoneRaw: "+919820011223",
      whatsapp: "919820011223",
      timings: "10:00 AM - 10:30 PM",
      googleMapsUrl: "https://maps.google.com/?q=Worli+Mumbai+Spa",
      featured: true,
      amenities: ["Private Jacuzzi Suites", "Couples Room", "Steam & Shower", "Valet Parking"]
    },
    {
      id: "mumbai-malad",
      city: "Mumbai",
      name: "Malad West Prime Branch",
      area: "Malad West, Mumbai",
      address: "2nd Floor, Grand Sapphire Tower, Above Starbucks, Link Road, Malad West",
      landmark: "Near Infiniti Mall",
      phone: "+91 98200 44556",
      phoneRaw: "+919820044556",
      whatsapp: "919820044556",
      timings: "10:00 AM - 10:30 PM",
      featured: true,
      googleMapsUrl: "https://maps.google.com/?q=Malad+West+Mumbai+Spa",
      amenities: ["Private Jacuzzi", "4 Therapy Suites", "Herbal Steam", "Dedicated Shower"]
    },
    {
      id: "mumbai-bandra",
      city: "Mumbai",
      name: "Bandra West Luxury Lounge",
      area: "Bandra West, Mumbai",
      address: "3rd Floor, Pali Hill Vista, Waterfield Road, Bandra West",
      landmark: "Near Olive Bar & Kitchen",
      phone: "+91 98200 77889",
      phoneRaw: "+919820077889",
      whatsapp: "919820077889",
      timings: "10:00 AM - 11:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai+Spa",
      amenities: ["VIP Suite", "Four-Hand Therapy", "Jacuzzi Milk Bath", "Lounge"]
    },
    {
      id: "pune-koregaon",
      city: "Pune",
      name: "Koregaon Park Flagship",
      area: "Koregaon Park, Pune",
      address: "Lane No. 7, Meera Nagar, North Main Road, Koregaon Park",
      landmark: "Near German Bakery",
      phone: "+91 98200 33445",
      phoneRaw: "+919820033445",
      whatsapp: "919820033445",
      timings: "10:00 AM - 10:00 PM",
      featured: true,
      googleMapsUrl: "https://maps.google.com/?q=Koregaon+Park+Pune+Spa",
      amenities: ["Outdoor Zen Garden", "Couples Jacuzzi", "Steam Suite", "Complimentary Tea Bar"]
    },
    {
      id: "pune-pulgate",
      city: "Pune",
      name: "Camp & Pulgate Center",
      area: "Camp / Pulgate, Pune",
      address: "1st Floor, Royal Arcade, Solapur Road, Pulgate, Camp",
      landmark: "Near Pulgate Bus Stand",
      phone: "+91 98200 55667",
      phoneRaw: "+919820055667",
      whatsapp: "919820055667",
      timings: "10:00 AM - 10:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=Pulgate+Camp+Pune+Spa",
      amenities: ["Deep Tissue Specialists", "Jacuzzi", "Rainfall Shower"]
    },
    {
      id: "ahmedabad-bodakdev",
      city: "Ahmedabad",
      name: "Bodakdev & SG Highway",
      area: "Bodakdev, Ahmedabad",
      address: "4th Floor, Platinum Plaza, Sindhu Bhavan Road, Bodakdev",
      landmark: "Near Taj Skyline",
      phone: "+91 98200 88990",
      phoneRaw: "+919820088990",
      whatsapp: "919820088990",
      timings: "10:00 AM - 10:00 PM",
      featured: true,
      googleMapsUrl: "https://maps.google.com/?q=Sindhu+Bhavan+Ahmedabad+Spa",
      amenities: ["Single Jacuzzi Rooms", "Couples Suite", "Certified Thai Staff"]
    },
    {
      id: "bangalore-indiranagar",
      city: "Bangalore",
      name: "Indiranagar 100ft Road",
      area: "Indiranagar, Bangalore",
      address: "2nd Floor, Prestige Sanctuary, 100 Feet Road, HAL 2nd Stage, Indiranagar",
      landmark: "Near Toit Brewery",
      phone: "+91 98200 99001",
      phoneRaw: "+919820099001",
      whatsapp: "919820099001",
      timings: "10:00 AM - 10:30 PM",
      featured: true,
      googleMapsUrl: "https://maps.google.com/?q=Indiranagar+Bangalore+Spa",
      amenities: ["Full Hydro Jacuzzi", "Herbal Polish", "VIP Suite", "Valet Parking"]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Vikram Malhotra",
      city: "Mumbai (Worli)",
      rating: 5,
      therapyTaken: "Royal Four-Hand Synchronized Massage",
      review: "Hands down the best Thai spa experience in Mumbai. The four-hand synchronized massage was unbelievable — pure harmony and zero stiffness afterwards. The Jacuzzi milk bath with rose petals in the private suite felt like a 7-star resort in Phuket.",
      date: "Visited 3 days ago",
      verified: true
    },
    {
      id: "test-2",
      name: "Ananya & Rohan Sharma",
      city: "Pune (Koregaon Park)",
      rating: 5,
      therapyTaken: "Couples Royal Harmony Haven (120 Mins)",
      review: "Booked this for our 5th wedding anniversary. The ambiance is so dim, peaceful, and scented with pure lemongrass. Therapists were extremely polite, asked for pressure preferences, and the couples suite was spotless. Highly recommended!",
      date: "Visited 1 week ago",
      verified: true
    },
    {
      id: "test-3",
      name: "Karan Singhania",
      city: "Ahmedabad (Bodakdev)",
      rating: 5,
      therapyTaken: "Traditional Thai Yoga Massage (90 Mins)",
      review: "I had terrible lower back pain from continuous desk work and flights. The assisted stretching and pressure point techniques worked miracles. No oily mess, pure professional Thai therapy. Will be visiting every month.",
      date: "Visited 2 weeks ago",
      verified: true
    },
    {
      id: "test-4",
      name: "Pooja Deshmukh",
      city: "Bangalore (Indiranagar)",
      rating: 5,
      therapyTaken: "Balinese Deep Tissue + Body Polish",
      review: "The hygiene standards are 10/10. Fresh single-use linen, sanitized Jacuzzi, and warm organic oils. The therapist really focused on my shoulder knots without causing sharp pain. Truly worth every rupee.",
      date: "Visited 3 weeks ago",
      verified: true
    }
  ],

  faqs: [
    {
      question: "How do I book an appointment, and is advance booking required?",
      answer: "You can book instantly online through our website booking form, call your nearest branch directly, or click the WhatsApp button for immediate slot confirmation. We strongly recommend booking 2–4 hours in advance on weekends to secure your preferred therapist and private VIP suite."
    },
    {
      question: "What hygiene and sanitation standards are followed?",
      answer: "We follow strict 5-star medical-grade hygiene protocols: 100% single-use disposable bed sheets, pillow covers, and undergarments; UV-sterilized hot stones and utensils; and complete suite sanitization with medical disinfectant after every guest."
    },
    {
      question: "Are your therapists certified in authentic Thai techniques?",
      answer: "Yes. All our therapists hold formal certifications in traditional Thai massage lineages (*Nuad Thai*) from accredited academies, with specialized training in pressure point anatomy, Balinese deep tissue, and hydrotherapy."
    },
    {
      question: "Do you have private couple suites with attached Jacuzzi?",
      answer: "Yes, our flagship branches feature dedicated luxury Couples VIP Suites equipped with dual therapy beds, private whirlpool Jacuzzi tubs, ambient candlelight, attached steam rooms, and rainfall showers."
    },
    {
      question: "What should I wear during the massage therapy?",
      answer: "For Traditional Thai Massage, we provide comfortable, loose authentic Thai cotton garments. For oil-based therapies (Balinese, Swedish, Deep Tissue), we provide disposable undergarments. Your therapist will ensure you are properly draped with clean towels throughout the session."
    },
    {
      question: "Can I customize massage pressure and essential oils?",
      answer: "Absolutely! Before starting your therapy, our therapist will ask your desired pressure (Gentle, Medium, Firm, or Extra Deep) and let you sample our cold-pressed organic oils (Lavender Calming, Lemongrass Energizing, or Sandalwood Soothing)."
    }
  ]
};
