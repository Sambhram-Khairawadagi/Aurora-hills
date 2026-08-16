export interface AmenityItem {
  id: string;
  name: string;
  category: "Wellness" | "Sports" | "Family" | "Community" | "Leisure" | "Convenience" | "Security & Infrastructure";
  description: string;
  iconName: string;
  badge?: string;
}

export const AMENITIES_DATA: AmenityItem[] = [
  // Wellness
  {
    id: "amenity-1",
    name: "Yoga & Meditation Zone",
    category: "Wellness",
    description: "Dedicated tranquil green open spaces designed for morning yoga, breathwork, and meditation.",
    iconName: "Flower2",
    badge: "Lifestyle"
  },
  {
    id: "amenity-2",
    name: "Sunset Walking & Yoga Park",
    category: "Wellness",
    description: "Serene elevated walking zones and yoga terraces overlooking panoramic sunset views of the hills.",
    iconName: "SunMedium",
    badge: "Scenic"
  },
  {
    id: "amenity-3",
    name: "Dedicated Walking Footpaths",
    category: "Wellness",
    description: "Paved, tree-lined walking pathways separated from vehicular lanes for uninterrupted morning walks.",
    iconName: "Footprints",
  },
  {
    id: "amenity-4",
    name: "Exclusive Cycling Track",
    category: "Wellness",
    description: "Smooth, continuous asphalt cycling circuits running through scenic landscaped surroundings.",
    iconName: "Bike",
  },
  {
    id: "amenity-5",
    name: "World Class Gymnasium",
    category: "Wellness",
    description: "Fully equipped state-of-the-art indoor fitness center with modern cardio and strength equipment.",
    iconName: "Dumbbell",
    badge: "Clubhouse"
  },

  // Sports
  {
    id: "amenity-6",
    name: "Tennis Court",
    category: "Sports",
    description: "All-weather synthetic surface tennis court with night floodlights and spectator seating.",
    iconName: "Trophy",
  },
  {
    id: "amenity-7",
    name: "Pickleball Court",
    category: "Sports",
    description: "Modern tournament-dimension pickleball courts for fast-paced social and competitive games.",
    iconName: "Activity",
    badge: "Trending"
  },
  {
    id: "amenity-8",
    name: "Cricket Practice Arena",
    category: "Sports",
    description: "Dedicated netted practice pitches and open turf for cricket enthusiasts of all ages.",
    iconName: "Flame",
  },
  {
    id: "amenity-9",
    name: "Futsal Court",
    category: "Sports",
    description: "Enclosed mini-football synthetic turf arena designed for energetic community matches.",
    iconName: "CircleDot",
  },

  // Family & Community
  {
    id: "amenity-10",
    name: "Temple for Spiritual Well-being",
    category: "Community",
    description: "A consecrated, beautifully crafted serene temple space for prayer, peace, and spiritual reflection.",
    iconName: "Landmark",
    badge: "Spiritual"
  },
  {
    id: "amenity-11",
    name: "Amphitheatre for Community Events",
    category: "Community",
    description: "Open-air stepped amphitheatre for cultural gatherings, festivals, movie screenings, and social events.",
    iconName: "Sparkles",
  },
  {
    id: "amenity-12",
    name: "Children\'s Play Area",
    category: "Family",
    description: "Safe, rubberized flooring playground with modern slides, swings, and climbing frames for kids.",
    iconName: "Smile",
    badge: "Safe"
  },
  {
    id: "amenity-13",
    name: "Dedicated Dog Park",
    category: "Family",
    description: "Enclosed pet exercise zone with agility obstacles and safe running lawns for furry companions.",
    iconName: "HeartHandshake",
    badge: "Pet Friendly"
  },
  {
    id: "amenity-14",
    name: "Landscaped Parks & Open Spaces",
    category: "Family",
    description: "Themed botanical pockets, flowering avenue trees, manicured lawns, and shaded sitting gazebos.",
    iconName: "Trees",
  },

  // Leisure & Club
  {
    id: "amenity-15",
    name: "Exclusive Clubhouse Membership",
    category: "Leisure",
    description: "Architecturally distinguished clubhouse featuring lounge, home theatre, billiards, and banquets.",
    iconName: "Crown",
    badge: "Exclusive"
  },
  {
    id: "amenity-16",
    name: "Infinity Swimming Pool",
    category: "Leisure",
    description: "Resort-style infinity edge pool overlooking green hills with dedicated kids pool and sun loungers.",
    iconName: "Waves",
  },
  {
    id: "amenity-17",
    name: "Panoramic Sunset Views",
    category: "Leisure",
    description: "Thoughtfully elevated vantage points capturing unobstructed views of the surrounding Dharwad ridgeline.",
    iconName: "Compass",
  },
  {
    id: "amenity-18",
    name: "Multi-Cuisine Restaurant",
    category: "Leisure",
    description: "Fine dining restaurant and family dining spaces serving fresh local and global cuisines.",
    iconName: "Utensils",
  },
  {
    id: "amenity-19",
    name: "Lodging & Boarding Services",
    category: "Leisure",
    description: "Luxury guest accommodation suites within the township for visiting family, friends, and patrons.",
    iconName: "Hotel",
  },

  // Convenience & Infrastructure
  {
    id: "amenity-20",
    name: "Coffee Shop & Retail Stores",
    category: "Convenience",
    description: "Charming neighborhood cafe and daily convenience retail stores for essential groceries and snacks.",
    iconName: "Coffee",
  },
  {
    id: "amenity-21",
    name: "1.5 Lakh Litres Overhead Water Tank",
    category: "Security & Infrastructure",
    description: "Heavy capacity elevated reservoir ensuring 24x7 pressurized potable water supply to all plots.",
    iconName: "Droplet",
    badge: "Essential"
  },
  {
    id: "amenity-22",
    name: "Underground Infrastructure",
    category: "Security & Infrastructure",
    description: "Concealed underground electricity cabling, high-speed fiber ducts, and storm drainage networks.",
    iconName: "Cable",
  },
  {
    id: "amenity-23",
    name: "CCTV Security & Gated Entry",
    category: "Security & Infrastructure",
    description: "Grand security arch with 24x7 manned security, boom barriers, and HD CCTV surveillance network.",
    iconName: "ShieldCheck",
    badge: "24x7 Safe"
  },
  {
    id: "amenity-24",
    name: "Centralized HTP & Eco-Friendly Design",
    category: "Security & Infrastructure",
    description: "Scientifically planned centralized layout with eco-friendly waste management and rainwater harvesting.",
    iconName: "Leaf",
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
    description: "Pre-approved plot loans available from leading nationalized & private banks.",
    highlight: "Up to 80% Financing"
  },
  {
    id: "tax",
    title: "PROPERTY TAX",
    subtitle: "UPDATED",
    description: "All municipal property taxes fully assessed and updated.",
    highlight: "Ready For Registration"
  }
];

export const WHY_AURORA_HILLS = [
  {
    icon: "MapPin",
    title: "Strategic Location",
    description: "Situated in the heart of Dharwad along National Highway NH-4 with fast access to Hubli-Dharwad Twin Smart City."
  },
  {
    icon: "LayoutGrid",
    title: "Planned Community",
    description: "Wide planned roads, centralized HTP layout, demarcated plots, lush landscaped parks, and underground utilities."
  },
  {
    icon: "TreePine",
    title: "Green Surroundings",
    description: "Nestled amidst natural hill backdrops, palm plantations, panoramic sunset views, and fresh unpolluted air."
  },
  {
    icon: "Sparkles",
    title: "Lifestyle Amenities",
    description: "Clubhouse membership, infinity swimming pool, tennis & pickleball courts, temple, pet park, and multi-cuisine dining."
  },
  {
    icon: "Navigation",
    title: "Seamless Connectivity",
    description: "15�20 minutes to Hubli-Dharwad Twin City, approx 20 km / 20 mins to Hubli Airport, and quick access to Dharwad Railway Station."
  },
  {
    icon: "TrendingUp",
    title: "High Investment Potential",
    description: "Fast-developing Smart City growth corridor ideal for both building your dream luxury villa and high-yield capital appreciation."
  }
];

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    stat: "1.5 Lakh Litres",
    title: "Overhead Water Tank",
    description: "Dedicated overhead water reservoir providing uninterrupted, pressurized 24x7 water distribution to every plot."
  },
  {
    stat: "Underground",
    title: "Planned Utilities Network",
    description: "Zero dangling wires. Concealed underground electrical cabling, communication ducts, and efficient stormwater drainage."
  },
  {
    stat: "Eco-Friendly",
    title: "Sustainable & Green Planning",
    description: "Centralized HTP layout planning with rainwater harvesting systems, dense tree planting, and low environmental footprint."
  },
  {
    stat: "Wide Asphalt",
    title: "Well-Planned Internal Roads",
    description: "Wide internal roads with pedestrian footpaths, street lighting, and dedicated turning radius for effortless access."
  },
  {
    stat: "Dedicated",
    title: "Walking & Cycling Track",
    description: "Exclusive green tracks for morning jogs, cycling, and evening strolls completely segregated from vehicular roads."
  },
  {
    stat: "NH-4 Proximity",
    title: "Strategic Highway Access",
    description: "Direct seamless access to National Highway 4, connecting Dharwad, Belagavi, Hubli, and Bengaluru corridors."
  }
];

export const CONNECTIVITY_HIGHLIGHTS = [
  {
    title: "NH-4 Highway Corridor",
    time: "Direct Access",
    distance: "Adjacent",
    description: "Immediate connectivity to National Highway 4 for rapid intercity transit."
  },
  {
    title: "Hubli-Dharwad Twin City",
    time: "15�20 Mins",
    distance: "Central Core",
    description: "Effortless commute to commercial hubs, IT parks, and medical centers."
  },
  {
    title: "Hubli Airport (Domestic)",
    time: "Approx. 20 Mins",
    distance: "~20 km",
    description: "Fast transit for frequent flyers with regular flights to Bengaluru, Mumbai, Delhi, etc."
  },
  {
    title: "Dharwad Railway Station",
    time: "10�15 Mins",
    distance: "Close Proximity",
    description: "Direct connection to major South Western Railway express lines."
  },
  {
    title: "KSRTC Bus Stands & Transit",
    time: "Quick Access",
    distance: "City Network",
    description: "Well-serviced by local and state transport connecting key educational institutes."
  }
];

export const CONTACT_NUMBERS = [
  "9019765265",
  "7019165265",
  "9880166275",
  "9242508288"
];

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
