export interface AmenityItem {
  id: string;
  name: string;
  category: "Wellness" | "Sports" | "Family" | "Community" | "Leisure" | "Convenience" | "Security & Infrastructure";
  description: string;
  iconName: string;
  badge?: string;
  image: string;
}

export const AMENITIES_DATA: AmenityItem[] = [
  // Wellness
  {
    id: "amenity-1",
    name: "Yoga & Meditation Green Lawns",
    category: "Wellness",
    description: "Tranquil open green spaces designed for morning yoga, breathwork, and meditation amidst hill breeze.",
    iconName: "Flower2",
    badge: "Wellness",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-2",
    name: "Sunset Walking & Vantage Park",
    category: "Wellness",
    description: "Serene elevated walking zones and vantage terraces overlooking panoramic sunset views of Dharwad hills.",
    iconName: "SunMedium",
    badge: "Sunset View",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-3",
    name: "Tree-Lined Paved Footpaths",
    category: "Wellness",
    description: "Paved, avenue-lined walking pathways completely separated from vehicular lanes for uninterrupted morning walks.",
    iconName: "Footprints",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-4",
    name: "Exclusive Cycling Track",
    category: "Wellness",
    description: "Smooth, continuous asphalt cycling circuits running through scenic landscaped hill surroundings.",
    iconName: "Bike",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-5",
    name: "World-Class Gymnasium",
    category: "Wellness",
    description: "Fully equipped state-of-the-art indoor fitness center with modern cardio and strength equipment.",
    iconName: "Dumbbell",
    badge: "Clubhouse",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },

  // Sports
  {
    id: "amenity-6",
    name: "Championship Tennis Court",
    category: "Sports",
    description: "All-weather synthetic surface tennis court with night floodlights and spectator seating.",
    iconName: "Trophy",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-7",
    name: "Tournament Pickleball Court",
    category: "Sports",
    description: "Modern tournament-dimension pickleball courts for fast-paced social and competitive games.",
    iconName: "Activity",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-8",
    name: "Cricket Practice Arena",
    category: "Sports",
    description: "Dedicated netted practice pitches and open turf for cricket enthusiasts of all ages.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-9",
    name: "Futsal Turf Arena",
    category: "Sports",
    description: "Enclosed mini-football synthetic turf arena designed for energetic community matches.",
    iconName: "CircleDot",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
  },

  // Family & Community
  {
    id: "amenity-10",
    name: "Temple for Spiritual Peace",
    category: "Community",
    description: "A consecrated, beautifully crafted serene temple space for prayer, peace, and spiritual reflection.",
    iconName: "Landmark",
    badge: "Spiritual",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-11",
    name: "Open-Air Amphitheatre",
    category: "Community",
    description: "Stepped green amphitheatre for cultural gatherings, festivals, music evenings, and community events.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-12",
    name: "Children's Adventure Play Park",
    category: "Family",
    description: "Safe rubberized flooring playground with modern slides, swings, and climbing structures for kids.",
    iconName: "Smile",
    badge: "Kids Safe",
    image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-13",
    name: "Dedicated Pet Park & Agility Lawn",
    category: "Family",
    description: "Enclosed pet exercise zone with agility hurdles and safe running lawns for furry family companions.",
    iconName: "HeartHandshake",
    badge: "Pet Friendly",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-14",
    name: "Botanical Parks & Gazebos",
    category: "Family",
    description: "Themed botanical pockets, flowering avenue trees, manicured lawns, and shaded sitting gazebos.",
    iconName: "Trees",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },

  // Leisure & Club
  {
    id: "amenity-15",
    name: "Grand Clubhouse Membership",
    category: "Leisure",
    description: "Distinguished luxury clubhouse featuring banquet hall, indoor games, lounge, and business suites.",
    iconName: "Crown",
    badge: "Clubhouse",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-16",
    name: "Infinity Edge Swimming Pool",
    category: "Leisure",
    description: "Resort-style infinity edge pool overlooking green hills with dedicated kids pool and sun deck loungers.",
    iconName: "Waves",
    badge: "Resort Style",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-17",
    name: "Multi-Cuisine Family Restaurant",
    category: "Leisure",
    description: "Fine dining restaurant and cafe serving fresh local, North & South Indian, and continental cuisines.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-18",
    name: "Luxury Guest Suites (Lodging)",
    category: "Leisure",
    description: "Premium guest accommodation suites within the township for visiting family, friends, and patrons.",
    iconName: "Hotel",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
  },

  // Convenience & Infrastructure
  {
    id: "amenity-19",
    name: "Coffee Shop & Daily Convenience",
    category: "Convenience",
    description: "Charming neighborhood cafe and daily convenience supermarket for daily essentials and snacks.",
    iconName: "Coffee",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-20",
    name: "1.5 Lakh Litres Overhead Water Reservoir",
    category: "Security & Infrastructure",
    description: "Heavy capacity elevated reservoir ensuring 24x7 pressurized potable water supply to all plots.",
    iconName: "Droplet",
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-21",
    name: "Underground Power & Fiber Cabling",
    category: "Security & Infrastructure",
    description: "Concealed underground electricity cabling, high-speed fiber ducts, and storm drainage networks.",
    iconName: "Cable",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "amenity-22",
    name: "24x7 CCTV & Gated Security Arch",
    category: "Security & Infrastructure",
    description: "Grand security gateway with 24x7 manned security, boom barriers, and HD CCTV surveillance network.",
    iconName: "ShieldCheck",
    badge: "24x7 Safe",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
  },
];

export const APPROVAL_CARDS = [
  {
    id: "na-kjp",
    title: "NA-KJP",
    subtitle: "APPROVED",
    description: "Clear non-agricultural conversion and KJP layout approval.",
    highlight: "100% Legal Clearance"
  },
  {
    id: "hduda",
    title: "HDUDA",
    subtitle: "APPROVED",
    description: "Approved by Hubli-Dharwad Urban Development Authority.",
    highlight: "Government Sanctioned"
  },
  {
    id: "loans",
    title: "BANK LOANS",
    subtitle: "APPROVED",
    description: "Pre-approved plot loans available from SBI, HDFC, ICICI & leading nationalized banks.",
    highlight: "Up to 80% Financing"
  },
  {
    id: "tax",
    title: "PROPERTY TAX",
    subtitle: "UPDATED",
    description: "All municipal property taxes fully assessed, cleared and updated.",
    highlight: "Ready For Registration"
  }
];

export const HIGHLIGHT_BADGES = [
  {
    title: "Scenic Sunset View Point",
    subtitle: "Karnatak University Ridge",
    desc: "Unobstructed hill horizon and personal sunset viewing deck.",
    icon: "Sun"
  },
  {
    title: "Pure Greenery & Fresh Air",
    subtitle: "Natural Micro-Climate",
    desc: "Lush botanical plantations with 0% urban pollution.",
    icon: "Trees"
  },
  {
    title: "Near Top Schools & Colleges",
    subtitle: "Education Hub Dharwad",
    desc: "Minutes from Karnatak University, SDM, KIMS & International Schools.",
    icon: "GraduationCap"
  },
  {
    title: "Close to Malls & Shopping",
    subtitle: "Retail & Entertainment",
    desc: "Fast access to Urban Oasis Mall, City Center, D-Mart & commercial hubs.",
    icon: "ShoppingBag"
  }
];

export const WHY_AURORA_HILLS = [
  {
    icon: "MapPin",
    title: "Strategic Prime Location",
    description: "On NH-4 highway in Dharwad City with fast access to the Hubli-Dharwad Twin Smart City corridor."
  },
  {
    icon: "Trees",
    title: "Greenery & Fresh Hill Air",
    description: "Natural hill backdrops, palm plantations, panoramic sunset views, and pollution-free air."
  },
  {
    icon: "GraduationCap",
    title: "Premier Education & Healthcare",
    description: "Minutes from Karnatak University, SDM College, Podar International School, and KIMS Hospital."
  },
  {
    icon: "Sparkles",
    title: "20+ Lifestyle Amenities",
    description: "Clubhouse, infinity pool, tennis & pickleball courts, temple, dog park, and multi-cuisine restaurant."
  }
];

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    stat: "1.5 Lakh Litres",
    title: "Overhead Water Tank",
    description: "Elevated reservoir ensuring 24x7 pressurized water distribution to every plot."
  },
  {
    stat: "Underground",
    title: "Planned Utilities Network",
    description: "Concealed electrical cabling, communication ducts, and efficient stormwater drainage."
  },
  {
    stat: "Eco-Friendly",
    title: "Sustainable & Green Planning",
    description: "Rainwater harvesting systems, dense tree planting, and low environmental footprint."
  },
  {
    stat: "30ft & 40ft",
    title: "Wide Asphalt Internal Roads",
    description: "Paved asphalt roads with pedestrian footpaths and avenue street lighting."
  },
  {
    stat: "Dedicated",
    title: "Walking & Cycling Track",
    description: "Green tracks for morning jogs and cycling, segregated from vehicular roads."
  },
  {
    stat: "NH-4 Proximity",
    title: "Direct Highway Access",
    description: "Seamless access to NH-4, connecting Dharwad, Belagavi, Hubli, and Bengaluru."
  }
];

export const CONNECTIVITY_CATEGORIES = {
  education: [
    { name: "Karnatak University Dharwad", time: "5 Mins", distance: "3 km" },
    { name: "SDM Medical & Dental College", time: "10 Mins", distance: "6 km" },
    { name: "Podar International School", time: "8 Mins", distance: "5 km" },
    { name: "KIMS & Engineering Colleges", time: "18 Mins", distance: "14 km" },
  ],
  shopping: [
    { name: "Urban Oasis Mall", time: "18 Mins", distance: "15 km" },
    { name: "City Center Dharwad", time: "10 Mins", distance: "7 km" },
    { name: "D-Mart Supermarket", time: "7 Mins", distance: "4.5 km" },
    { name: "Dharwad Market & Commercial Core", time: "12 Mins", distance: "8 km" },
  ],
  transit: [
    { name: "NH-4 Highway Bypass", time: "1 Min", distance: "Adjacent" },
    { name: "Dharwad Railway Station", time: "10 Mins", distance: "7 km" },
    { name: "Hubli-Dharwad Twin City Center", time: "15–20 Mins", distance: "12 km" },
    { name: "Hubli Airport (Flights to BLR/BOM/DEL)", time: "20 Mins", distance: "~20 km" },
  ],
  nature: [
    { name: "Sunset View Point & Hill Deck", time: "2 Mins", distance: "At Site" },
    { name: "Sadhankeri Lake Garden", time: "8 Mins", distance: "5 km" },
    { name: "Kelgeri Lake Promenade", time: "10 Mins", distance: "6.5 km" },
  ]
};

export const CONTACT_NUMBERS = [
  "9019765265",
  "7019165265",
  "9880166275",
  "9242508288"
];

export const WHATSAPP_NUMBER = "919019765265";
export const EMAIL_ADDRESS = "sales@theaurorahills.com";

export const PARTNERS_INFO = {
  propertyBasket: {
    name: "PROPERTY BASKET",
    tagline: "Carry the Reality",
    poweredBy: "Powered by SAMSO",
    role: "Project Marketing Partner",
    description: "Property Basket brings trusted real-estate marketing advisory, transparent property transactions, and end-to-end buyer assistance for The Aurora Hills.",
    logo: "/images/property-basket-logo.png"
  },
  reachmaxx: {
    name: "REACHMAXX",
    tagline: "Idea Rules the World",
    role: "Brand & Creative Partner",
    description: "Reachmaxx crafts distinctive real-estate brand positioning, media design, and communication strategies.",
    logo: "/images/reachmax-logo.png"
  }
};
