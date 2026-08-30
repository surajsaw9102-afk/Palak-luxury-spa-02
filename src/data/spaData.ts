export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  number: string;
  image: string;
  caption: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  discount: string;
  phones: string[];
  bannerImage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  avatarLetter: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const spaData = {
  brand: {
    name: "PALAK LUXURY SPA",
    tagline: "Relax. Rejuvenate. Renew.",
    city: "GANDHINAGAR",
    state: "Gujarat",
    locationHeading: "Best Luxury Spa In Gandhinagar",
    phone1: "+91 91995 61258",
    phone2: "+91 91995 61258",
    phone1Raw: "+919199561258",
    phone2Raw: "+919199561258",
    whatsapp: "919199561258",
    email: "palakluxuryspa@gmail.com",
    timings: "Open 24 hours, all days",
    pinCode: "382419",
    address: "Shop-26, KANAM RESIDENCY-2, Reliance Cross Rd, Kudasan, Gandhinagar, Gujarat 382419, near Radhe Square, Gandhinagar, Gujarat 382421",
    shortAddress: "Shop-26, KANAM RESIDENCY-2, Reliance Cross Rd, Kudasan, Gandhinagar - 382419",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Shop-26%2C%20KANAM%20RESIDENCY-2%2C%20Reliance%20Cross%20Rd%2C%20Kudasan%2C%20Gandhinagar%2C%20Gujarat%20382419&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  
  hero: {
    videoUrl: "https://videotourl.com/videos/1787366801378-696ec701-fdbc-448d-a675-c5ddf74eac79.mp4",
    posterImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    subtitle: "Welcome to Palak Luxury Spa Gandhinagar",
  },

  about: {
    tagline: "ABOUT PALAK LUXURY SPA",
    title: "A Peaceful Wellness Experience Designed Around You",
    description: "Palak Luxury Spa is a premier wellness sanctuary located at Kudasan, Gandhinagar. We believe that true relaxation is both an art and a science - combining skilled therapeutic techniques with a serene, thoughtfully designed luxury environment.",
    features: [
      {
        num: "01",
        title: "Expert Therapists",
        description: "Certified professionals with deep knowledge of therapeutic techniques"
      },
      {
        num: "02",
        title: "Pristine Rooms",
        description: "Meticulously cleaned and prepared before every session"
      },
      {
        num: "03",
        title: "Your Comfort First",
        description: "Every session is tailored to your pressure and comfort preferences"
      }
    ],
    collage: {
      img1: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      img2: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      img3: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80"
    }
  },

  services: [
    {
      id: "jacuzzi-massage",
      name: "Jacuzzi Massage",
      description: "Relax in warm swirling water that eases tension and soothes tired muscles.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "deep-tissue-massage",
      name: "Deep Tissue Massage",
      description: "Firm, focused pressure that targets deep muscle knots and chronic tension.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "thai-massage",
      name: "Thai Massage",
      description: "Traditional stretching and acupressure technique to restore energy and flexibility.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "swedish-massage",
      name: "Swedish Massage",
      description: "Gentle, flowing strokes designed to relax the body and improve circulation.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hot-oil-massage",
      name: "Hot Oil Massage",
      description: "Warm aromatic oils combined with smooth strokes to melt away stress.",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "body-massage",
      name: "Body Massage",
      description: "A full body treatment that relieves fatigue and leaves you feeling renewed.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
  ],

  gallery: [
    {
      id: "g1",
      number: "01",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
      caption: "VIP Treatment Room with Ambient Lighting"
    },
    {
      id: "g2",
      number: "02",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      caption: "Luxury Lounge & Consultation Area"
    },
    {
      id: "g3",
      number: "03",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      caption: "Warm Wooden Corridors & Private Cabins"
    },
    {
      id: "g4",
      number: "04",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      caption: "Swan-folded Linens & Aromatic Setup"
    },
    {
      id: "g5",
      number: "05",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      caption: "Deep Tissue & Therapeutic Massage Suite"
    },
    {
      id: "g6",
      number: "06",
      image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=80",
      caption: "Blue Halo Illuminated Therapy Suite"
    },
    {
      id: "g7",
      number: "07",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      caption: "Herbal Oil Body Massage & Warm Bed"
    },
    {
      id: "g8",
      number: "08",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      caption: "Aromatherapy & Facial Glow Treatment"
    },
    {
      id: "g9",
      number: "09",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      caption: "Palak Luxury Spa Jacuzzi Suite"
    },
    {
      id: "g10",
      number: "10",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      caption: "Relaxing Herbal Foot Spa & Clean Towels"
    },
    {
      id: "g11",
      number: "11",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      caption: "Professional Therapist Consultation"
    },
    {
      id: "g12",
      number: "12",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      caption: "Calm Ambience & Organic Essence Oils"
    },
    {
      id: "g13",
      number: "13",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "Warm Greeting & Private Suite Service"
    },
    {
      id: "g14",
      number: "14",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      caption: "Luxury Lounge & Soft Music Area"
    }
  ],

  howItWorks: {
    tagline: "HOW IT WORKS",
    title: "Your Wellness Journey, Simplified",
    subtitle: "From discovery to deep relaxation in three effortless steps.",
    steps: [
      {
        num: "01",
        title: "Choose Your Massage",
        description: "Browse our carefully curated services and select the therapy that speaks to your body's needs today."
      },
      {
        num: "02",
        title: "Book a Convenient Time",
        description: "WhatsApp or call us - we respond quickly and confirm your appointment in minutes."
      },
      {
        num: "03",
        title: "Arrive, Relax & Restore",
        description: "Walk in, breathe out. Your therapist is ready and your private room is prepared."
      }
    ],
    staffImages: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80"
    ]
  },

  offers: [
    {
      id: "o1",
      title: "COUPLES MASSAGE",
      discount: "20% OFF",
      phones: ["9199561258"],
      bannerImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "o2",
      title: "ALL SERVICES",
      discount: "20% OFF",
      phones: ["9199561258"],
      bannerImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "o3",
      title: "MEMBERSHIP PLAN",
      discount: "25% OFF",
      phones: ["9199561258"],
      bannerImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80"
    }
  ],

  faqs: [
    {
      question: "How do I book an appointment at Palak Luxury Spa?",
      answer: "You can easily book by clicking our 'Call Now' or 'WhatsApp' button. Our reception team confirms your slot instantly."
    },
    {
      question: "What are your opening hours?",
      answer: "We are open 24 hours, all days (Monday - Sunday)."
    },
    {
      question: "How long is each massage session?",
      answer: "Our standard sessions range from 60 minutes to 90 minutes and 120 minutes depending on your preference."
    },
    {
      question: "What massage services do you offer?",
      answer: "We offer authentic Thai Massage, Jacuzzi Hydrotherapy, Deep Tissue Massage, Swedish Relaxation, Hot Oil Massage, and specialized Full Body Massage."
    },
    {
      question: "Can I request my preferred pressure level?",
      answer: "Yes, absolutely. You can specify soft, medium, or deep tissue pressure to your therapist before the session begins."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "Walk-ins are welcome 24 hours based on room availability, but we strongly recommend booking in advance on WhatsApp or Call to avoid waiting."
    },
    {
      question: "Where exactly is Palak Luxury Spa located?",
      answer: "Shop-26, KANAM RESIDENCY-2, Reliance Cross Rd, Kudasan, Gandhinagar, Gujarat 382419, near Radhe Square."
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Priya Verma",
      avatarLetter: "P",
      verified: true,
      text: "Beautiful interiors, hygienic rooms, relaxing ambience and professional therapists. I will definitely visit again with my family and friends."
    },
    {
      id: "t2",
      name: "Amit Singh",
      avatarLetter: "A",
      verified: true,
      text: "Excellent Deep Tissue Massage. The staff is polite, the rooms are very clean and the overall experience was beyond my expectations."
    },
    {
      id: "t3",
      name: "Neha Gupta",
      avatarLetter: "N",
      verified: true,
      text: "The atmosphere is peaceful and luxurious. Every treatment is done professionally and I felt completely refreshed after my visit."
    }
  ],

  seoKeywords: [
    "Palak Luxury Spa Gandhinagar",
    "Reserved By Palak Luxury Spa",
    "Massage In Gandhinagar",
    "Massage Center In Kudasan",
    "Massage Parlour In Gandhinagar",
    "Body Massage Center In Kudasan",
    "Massage Spa In Gandhinagar",
    "Massage Service In Reliance Cross Rd",
    "Spa Near Me Gandhinagar",
    "Massage Near Me Kudasan",
    "Full Massage Service In Gandhinagar",
    "Couples Massage In Gandhinagar",
    "Four Hand Massage In Gandhinagar",
    "Deep Tissue Massage In Gandhinagar",
    "Chocolate Massage In Gandhinagar",
    "Balinese Massage In Gandhinagar",
    "Swedish Massage In Gandhinagar",
    "Thai Massage In Gandhinagar",
    "Hot Stone Massage In Gandhinagar",
    "Jacuzzi Milk Bath In Gandhinagar",
    "Oil Massage In Gandhinagar",
    "Signature Massage In Gandhinagar",
    "Back Massage In Kudasan Gandhinagar"
  ]
};
