// Mock data for Style n Arts salon website

export const salonInfo = {
  name: "Style n Arts",
  tagline: "Women's hair, Beauty and Makeup",
  location: "HSR Layout, Bengaluru, Karnataka",
  phone: "+91 77607 11425",
  rating: 4.9,
  totalReviews: 1700,
  yearsInBusiness: 7,
  email: "info@stylenarts.com",
  hours: "10:00 AM - 8:00 PM (All Days)",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Style+n+Arts+HSR+Layout+Bengaluru"
};

export const services = [
  {
    id: 1,
    category: "Hair Services",
    icon: "Scissors",
    description: "Expert hair cutting, styling, coloring and treatments",
    items: ["Hair Cutting & Styling", "Hair Coloring & Highlights", "Hair Spa & Treatments", "Keratin & Smoothening", "Hair Extensions"]
  },
  {
    id: 2,
    category: "Makeup",
    icon: "Sparkles",
    description: "Professional makeup for all occasions",
    items: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush Makeup", "Engagement Makeup"]
  },
  {
    id: 3,
    category: "Skincare",
    icon: "Heart",
    description: "Rejuvenating facials and skin treatments",
    items: ["Classic Facials", "Gold Facial", "Diamond Facial", "Cleanup Services", "Anti-Aging Treatments"]
  },
  {
    id: 4,
    category: "Beauty Services",
    icon: "Star",
    description: "Complete beauty and grooming services",
    items: ["Threading & Waxing", "Manicure & Pedicure", "Nail Art", "Mehendi", "Eyelash Extensions"]
  },
  {
    id: 5,
    category: "Pre-Bridal Packages",
    icon: "Crown",
    description: "Comprehensive bridal preparation packages",
    items: ["1 Month Package", "3 Month Package", "6 Month Package", "Customized Packages", "Bridal Consultation"]
  },
  {
    id: 6,
    category: "Special Treatments",
    icon: "Gem",
    description: "Premium specialized beauty treatments",
    items: ["Body Polishing", "Tan Removal", "De-Tan Treatment", "Body Spa", "Aromatherapy"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing experience! The bridal makeup was absolutely stunning and lasted throughout my wedding day. The team is so professional and caring.",
    service: "Bridal Makeup"
  },
  {
    id: 2,
    name: "Anita Reddy",
    rating: 5,
    text: "I've been coming here for 3 years now. Best salon in HSR Layout! The hair treatments are exceptional and the staff is always friendly and welcoming.",
    service: "Hair Spa"
  },
  {
    id: 3,
    name: "Meera Krishnan",
    rating: 5,
    text: "The pre-bridal package transformed my skin completely. I looked radiant on my wedding day! Highly recommend their services to all brides-to-be.",
    service: "Pre-Bridal Package"
  },
  {
    id: 4,
    name: "Divya Patel",
    rating: 5,
    text: "Professional, hygienic, and the results are always perfect. The manicure and pedicure services are my monthly ritual now. Love this place!",
    service: "Mani-Pedi"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Professional makeup application",
    category: "makeup"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    alt: "Hair styling service",
    category: "hair"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    alt: "Bridal makeup look",
    category: "makeup"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Salon interior",
    category: "salon"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    alt: "Manicure service",
    category: "beauty"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
    alt: "Facial treatment",
    category: "skincare"
  }
];

export const socialLinks = [
  { platform: "Instagram", url: "#", icon: "Instagram" },
  { platform: "Facebook", url: "#", icon: "Facebook" },
  { platform: "WhatsApp", url: "https://wa.me/917760711425", icon: "MessageCircle" }
];