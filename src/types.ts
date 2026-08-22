export interface ServiceDurationOption {
  minutes: number;
  price: number;
  originalPrice?: number;
}

export interface SpaService {
  id: string;
  name: string;
  thaiName?: string;
  tagline: string;
  description: string;
  benefits: string[];
  durations: ServiceDurationOption[];
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
  category: 'massage' | 'hydro' | 'ritual' | 'body-scrub';
  inclusions: string[];
}

export interface SpaPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  totalDurationMins: number;
  price: number;
  originalPrice: number;
  description: string;
  breakdown: {
    title: string;
    durationMins: number;
    description: string;
  }[];
  highlights: string[];
  image: string;
  recommendedFor: string;
}

export interface SpaBranch {
  id: string;
  city: string;
  name: string;
  area: string;
  address: string;
  landmark: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  timings: string;
  googleMapsUrl: string;
  featured?: boolean;
  amenities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  therapyTaken: string;
  date: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suites' | 'jacuzzi' | 'therapies' | 'ambiance';
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  serviceId: string;
  durationMinutes: number;
  packageId?: string;
  branchId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email?: string;
  guestsCount: number;
  specialRequests?: string;
}
