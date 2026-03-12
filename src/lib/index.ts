export const ROUTE_PATHS = {
  HOME: '/',
  PORTFOLIO: '/portfolio',
  SERVICES: '/services',
  PRICING: '/pricing',
  ABOUT: '/about',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  weddingDate: string;
  weddingLocation: string;
  eventType: string;
  message?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialization?: string;
}

export const SERVICES: Service[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    description: 'Capturing every precious moment of your special day with artistic precision and emotional depth.',
    features: ['Candid Photography', 'Traditional Photography', 'Bride & Groom Portraits', 'Family Group Photos'],
    image: '',
    icon: 'Camera',
  },
  {
    id: 'cinematic-films',
    title: 'Cinematic Wedding Films',
    description: 'Transform your wedding into a timeless cinematic masterpiece with 4K quality and storytelling excellence.',
    features: ['4K Cinematic Highlight Films', 'Full Wedding Documentary', 'Drone Coverage', 'Same Day Edit'],
    image: '',
    icon: 'Film',
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Shoots',
    description: 'Celebrate your love story with stunning pre-wedding photography at breathtaking locations.',
    features: ['Concept Based Shoots', 'Outdoor Destination Shoots', 'Save the Date Video', 'Multiple Locations'],
    image: '',
    icon: 'Heart',
  },
  {
    id: 'engagement',
    title: 'Engagement Shoots',
    description: 'Capture the excitement and joy of your engagement with intimate and romantic photography.',
    features: ['Intimate Couple Portraits', 'Location Scouting', 'Styled Sessions', 'Digital Gallery'],
    image: '',
    icon: 'Sparkles',
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings',
    description: 'We travel across India, UAE, and international destinations to document your dream wedding.',
    features: ['India Coverage', 'Dubai & UAE', 'International Travel', 'Multi-Day Coverage'],
    image: '',
    icon: 'Plane',
  },
  {
    id: 'wedding-albums',
    title: 'Wedding Albums',
    description: 'Preserve your memories in exquisite luxury albums crafted with premium materials.',
    features: ['Luxury Wedding Albums', 'Premium Photo Books', 'Custom Design', 'Archival Quality'],
    image: '',
    icon: 'Book',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: '₹1,50,000',
    description: 'Perfect for intimate weddings and smaller celebrations',
    features: [
      'Full Day Photography Coverage',
      'Basic Video Highlights (5-7 min)',
      '500+ Edited Photos',
      'Online Gallery',
      '2 Photographers',
      '1 Videographer',
      'Drone Coverage (2 hours)',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: '₹2,50,000',
    description: 'Our most popular package for complete wedding coverage',
    features: [
      'Full Day Photography & Videography',
      'Cinematic Film (10-15 min)',
      '800+ Edited Photos',
      'Premium Wedding Album (30x40cm)',
      '3 Photographers',
      '2 Videographers',
      'Full Drone Coverage',
      'Pre-Wedding Shoot',
      'Same Day Edit',
    ],
    highlighted: true,
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: '₹4,00,000',
    description: 'Ultimate luxury experience with premium deliverables',
    features: [
      'Multi-Day Coverage (3 days)',
      'Cinematic Documentary (20-30 min)',
      '1200+ Edited Photos',
      'Luxury Album Set (2 albums)',
      'Premium Photo Books (4 copies)',
      '4 Photographers',
      '3 Videographers',
      'Full Drone Coverage',
      'Pre-Wedding Shoot (2 locations)',
      'Engagement Shoot',
      'Save the Date Film',
      'Dedicated Project Manager',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Rahul',
    location: 'Mumbai, India',
    text: 'Teamshadow Weddings captured our wedding beautifully. Every moment, every emotion was preserved perfectly. The cinematic film brought tears to our eyes!',
    rating: 5,
    date: '2026-02-15',
  },
  {
    id: '2',
    name: 'Sarah & Ahmed',
    location: 'Dubai, UAE',
    text: 'We had a destination wedding in Dubai and Teamshadow exceeded all expectations. The team was professional, creative, and captured our love story perfectly.',
    rating: 5,
    date: '2026-01-20',
  },
  {
    id: '3',
    name: 'Anjali & Vikram',
    location: 'Kerala, India',
    text: 'The pre-wedding shoot in Kerala was magical! The team made us feel comfortable and the photos are absolutely stunning. Highly recommend!',
    rating: 5,
    date: '2025-12-10',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top Pre-Wedding Shoot Locations in Kerala',
    excerpt: 'Discover the most breathtaking locations in Kerala for your pre-wedding photography session.',
    content: '',
    image: '',
    author: 'Teamshadow Team',
    date: '2026-03-01',
    category: 'Locations',
    slug: 'top-pre-wedding-locations-kerala',
  },
  {
    id: '2',
    title: 'How to Plan a Cinematic Wedding Shoot',
    excerpt: 'Essential tips and tricks for planning a cinematic wedding photography and videography experience.',
    content: '',
    image: '',
    author: 'Teamshadow Team',
    date: '2026-02-20',
    category: 'Tips',
    slug: 'plan-cinematic-wedding-shoot',
  },
  {
    id: '3',
    title: 'Wedding Photography Tips for Couples',
    excerpt: 'Expert advice on how to look your best and feel comfortable during your wedding photography.',
    content: '',
    image: '',
    author: 'Teamshadow Team',
    date: '2026-02-10',
    category: 'Tips',
    slug: 'wedding-photography-tips-couples',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    role: 'Lead Photographer',
    bio: 'With over 10 years of experience, Arjun specializes in capturing authentic emotions and candid moments.',
    image: '',
    specialization: 'Candid Photography',
  },
  {
    id: '2',
    name: 'Meera Patel',
    role: 'Cinematographer',
    bio: 'Award-winning cinematographer known for creating cinematic wedding films that tell beautiful stories.',
    image: '',
    specialization: 'Cinematic Films',
  },
  {
    id: '3',
    name: 'Rohan Kumar',
    role: 'Drone Specialist',
    bio: 'Expert in aerial cinematography, bringing unique perspectives to wedding coverage.',
    image: '',
    specialization: 'Drone Coverage',
  },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'couple', label: 'Couple Shoots' },
  { id: 'destination', label: 'Destination Weddings' },
  { id: 'engagement', label: 'Engagement' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/teamshadowweddings',
  whatsapp: 'https://wa.me/919876543210',
  email: 'hello@teamshadowweddings.com',
  phone: '+91 98765 43210',
} as const;

export const COMPANY_INFO = {
  name: 'TEAMSHADOW WEDDINGS',
  tagline: 'Capturing Love Stories That Last Forever',
  description: 'Teamshadow Weddings is a creative wedding photography and cinematography team capturing timeless memories through cinematic storytelling.',
  location: 'Mumbai, India',
  copyright: '© 2026 Teamshadow Weddings. All rights reserved.',
} as const;
