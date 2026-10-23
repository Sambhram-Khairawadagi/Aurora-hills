import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { GoogleTag } from "@/components/GoogleTag";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const vintage = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vintage",
  weight: ["400", "500", "600", "700"],
});

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-kannada",
});


export const metadata: Metadata = {
  title: "Plots in Dharwad | Residential Villa Plots in Hubli Dharwad | The Aurora Hills",
  description:
    "Buy HDUDA & NA-KJP approved residential plots in Dharwad starting ₹42 Lakhs. 30x40, 30x50 & 40x60 villa plots near NH-4, Karnatak University & Sunset Viewpoint. Bank loans by SBI, HDFC, ICICI. Book free site visit today! Call +91 89701 98701.",
  keywords: [
    // ─── HIGHEST VOLUME: Core Local Intent ───
    "plots in Dharwad",
    "plots in Hubli",
    "dharwad plots",
    "hubli plots",
    "plots in Hubli Dharwad",
    "hubli dharwad plots",
    "plots for sale in Dharwad",
    "plots for sale in Hubli",
    "residential plots in Dharwad",
    "residential plots in Hubli",
    "land for sale in Dharwad",
    "land for sale in Hubli",
    "sites for sale in Dharwad",
    "sites in Dharwad",
    "sites in Hubli",
    // ─── NEAR ME & VOICE SEARCH ───
    "plots near me Dharwad",
    "residential plots near me Hubli",
    "buy plot in Dharwad",
    "buy plot in Hubli",
    "best plots in Dharwad",
    "best plots in Hubli",
    "plot buy in Dharwad",
    "plots available in Dharwad",
    "new plots in Dharwad",
    // ─── PRICE-BASED SEARCHES ───
    "plots under 50 lakhs Dharwad",
    "affordable plots in Dharwad",
    "cheap plots in Dharwad",
    "budget plots in Dharwad",
    "30x40 site in Dharwad",
    "30x50 site in Dharwad",
    "40x60 site in Dharwad",
    "1200 sqft plot Dharwad",
    "1500 sqft plot Dharwad",
    "2400 sqft plot Dharwad",
    // ─── PROPERTY TYPE ───
    "villa plots in Dharwad",
    "gated community plots Dharwad",
    "gated community plots Hubli",
    "residential layout Dharwad",
    "luxury plots Dharwad",
    "premium villa plots Dharwad",
    "plotted development Dharwad",
    "township plots Dharwad",
    "investment plots Dharwad",
    "property in Dharwad",
    "property in Hubli",
    "real estate in Dharwad",
    "real estate in Hubli",
    // ─── LEGAL & APPROVALS (HIGH TRUST QUERIES) ───
    "HDUDA approved plots in Dharwad",
    "HDUDA approved residential plots Dharwad",
    "NA KJP approved plots Dharwad",
    "NA approved plots Dharwad",
    "HDUDA layout Dharwad",
    "sanctioned layout Dharwad",
    "approved plots near Kelgeri",
    "clear title plots Dharwad",
    "registered plots Dharwad",
    "SBI approved plots Dharwad",
    "HDFC approved plots Dharwad",
    // ─── MICRO-MARKET HYPERLOCAL ───
    "plots near Karnatak University Dharwad",
    "plots near NH-4 Dharwad",
    "plots near NH-48 Dharwad",
    "plots near Kelgeri Dharwad",
    "plots near Kelgerri Dharwad",
    "plots in Kelgeri",
    "plots near Sunset Viewpoint Dharwad",
    "Sunset Viewpoint Dharwad plots",
    "plots near Vidyagiri Dharwad",
    "plots in Vidyagiri",
    "plots near Sattur Dharwad",
    "plots near Navanagar Hubli",
    "plots near Rayapur Dharwad",
    "plots near SDM College Dharwad",
    "plots near IIT Dharwad",
    "plots near Hubli Airport",
    "plots near Sedam Road Dharwad",
    "plots near Unkal Hubli",
    "plots near Gokul Road Hubli",
    "plots in Keshwapur Hubli",
    // ─── LONG-TAIL QUESTION QUERIES ───
    "best place to buy plot in Dharwad",
    "how to buy plot in Dharwad",
    "where to buy plot in Dharwad",
    "HDUDA approved plots with bank loan Dharwad",
    "plots with bank loan Dharwad",
    "plots with SBI loan Dharwad",
    "plot loan Dharwad",
    "plot with amenities Dharwad",
    // ─── BRAND SEARCHES ───
    "The Aurora Hills",
    "The Aurora Hills Dharwad",
    "Aurora Hills plots",
    "Sai Smruti Developers Dharwad",
    "Property Basket Dharwad",
    "aurora hills kelgeri dharwad",
  ],
  authors: [{ name: "The Aurora Hills & Property Basket" }],
  creator: "Property Basket",
  publisher: "The Aurora Hills",
  metadataBase: new URL("https://theaurorahills.com"),
  alternates: {
    canonical: "https://theaurorahills.com",
  },
  openGraph: {
    title: "Plots in Dharwad & Hubli | HDUDA Approved Residential Plots for Sale",
    description:
      "HDUDA & NA-KJP approved luxury residential villa plots in Dharwad & Hubli starting from ₹42 Lakhs. Gated township near NH-4 Highway with 20+ lifestyle amenities, clubhouse & scenic hill views.",
    url: "https://theaurorahills.com",
    siteName: "The Aurora Hills",
    images: [
      {
        url: "/images/hero-layout-sunset.png",
        width: 1200,
        height: 630,
        alt: "The Aurora Hills Dharwad - HDUDA Approved Residential Plots for Sale in Hubli Dharwad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plots in Dharwad & Hubli | The Aurora Hills Gated Community",
    description:
      "HDUDA & NA approved residential villa plots in Dharwad starting ₹42 Lakhs near NH-4 Highway. Bank loans pre-approved by SBI, HDFC, ICICI.",
    images: ["/images/hero-layout-sunset.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Dharwad, Hubli-Dharwad, Karnataka, India",
    "geo.position": "15.4589;74.9902",
    "ICBM": "15.4589, 74.9902",
    "rating": "General",
    "revisit-after": "3 days",
    "language": "English",
    "distribution": "global",
    "classification": "Real Estate, Residential Plots, Property for Sale",
    "category": "Residential Plots Dharwad",
    "coverage": "Dharwad, Hubli, Karnataka, India",
    "target": "all",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": "https://theaurorahills.com/#place",
        "name": "The Aurora Hills",
        "description": "HDUDA-approved premium plotted township sanctuary in Dharwad City, Karnataka, India.",
        "url": "https://theaurorahills.com",
        "hasMap": "https://maps.app.goo.gl/3EnF93gjmTueXy667",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sunset Viewpoint, Near Karnatak University, Off NH-4 Highway",
          "addressLocality": "Dharwad",
          "addressRegion": "Karnataka",
          "postalCode": "580001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "15.4589",
          "longitude": "74.9902"
        },
        "photo": "https://theaurorahills.com/images/hero-layout-sunset.png"
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://theaurorahills.com/#organization",
        "name": "The Aurora Hills - Real Estate & Residential Plots Dharwad",
        "legalName": "The Aurora Hills Plotted Township",
        "url": "https://theaurorahills.com",
        "logo": "https://theaurorahills.com/images/aurora-hills-logo.png",
        "image": "https://theaurorahills.com/images/hero-layout-sunset.png",
        "telephone": "+91-8970198701",
        "priceRange": "₹42,00,000 - ₹1,20,00,000",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Bank Loan, Cheque, Bank Transfer, NEFT/RTGS",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8970198701",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Kannada", "Hindi"]
        },
        "areaServed": [
          { "@type": "City", "name": "Dharwad" },
          { "@type": "City", "name": "Hubli" },
          { "@type": "AdministrativeArea", "name": "Hubli-Dharwad Twin City" },
          { "@type": "Place", "name": "Navanagar" },
          { "@type": "Place", "name": "Vidyagiri" },
          { "@type": "Place", "name": "Sattur" },
          { "@type": "Place", "name": "Rayapur" },
          { "@type": "Place", "name": "Kelgeri" },
          { "@type": "AdministrativeArea", "name": "Karnataka" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:30",
            "closes": "19:30"
          }
        ],
        "hasMap": "https://maps.app.goo.gl/3EnF93gjmTueXy667",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Property Basket",
          "alternateName": "Powered by SAMSO"
        }
      },
      {
        "@type": "SingleFamilyResidence",
        "@id": "https://theaurorahills.com/#property",
        "name": "Residential Villa Plots at The Aurora Hills Dharwad",
        "description": "Ready-for-registration HDUDA & NA-KJP approved residential plots starting from ₹42 Lakhs with 20+ lifestyle amenities in Dharwad near NH-4 Highway.",
        "url": "https://theaurorahills.com",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "4200000",
          "highPrice": "12000000",
          "priceCurrency": "INR",
          "offerCount": "100+",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-03-31"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://theaurorahills.com/#localbusiness",
        "name": "The Aurora Hills - Residential Plots in Dharwad",
        "alternateName": ["Aurora Hills Dharwad", "The Aurora Hills Kelgeri"],
        "description": "HDUDA & NA-KJP approved premium residential villa plots in Dharwad starting ₹42 Lakhs. 30x40, 30x50 & 40x60 sites with 20+ amenities near NH-4, Karnatak University & Sunset Viewpoint.",
        "url": "https://theaurorahills.com",
        "telephone": "+91-8970198701",
        "email": "info@theaurorahills.com",
        "image": [
          "https://theaurorahills.com/images/aurora-hills-real-site-daylight.jpg",
          "https://theaurorahills.com/images/hero-layout-sunset.png",
          "https://theaurorahills.com/images/aurora-hills-logo.png"
        ],
        "logo": "https://theaurorahills.com/images/aurora-hills-logo.png",
        "priceRange": "₹42 Lakhs - ₹1.2 Crores",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Bank Transfer, Cheque, Home Loan, NEFT, RTGS",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sunset Viewpoint, Near Karnatak University, Off NH-4 Highway, Kelgeri",
          "addressLocality": "Dharwad",
          "addressRegion": "Karnataka",
          "postalCode": "580001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "15.4589",
          "longitude": "74.9902"
        },
        "hasMap": "https://maps.app.goo.gl/3EnF93gjmTueXy667",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "08:30",
            "closes": "19:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Suresh Patil" },
            "datePublished": "2026-09-15",
            "reviewBody": "Best plots in Dharwad! HDUDA approved with clear title. The location near Karnatak University and NH-4 is excellent. Booked my 30x40 plot and very satisfied with the site development progress."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Kavitha Desai" },
            "datePublished": "2026-10-01",
            "reviewBody": "Wonderful gated community plots near Sunset Viewpoint Dharwad. 40ft wide asphalt roads, underground power lines, and beautiful landscape. SBI loan was approved easily. Highly recommend The Aurora Hills!"
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Nagraj Kulkarni" },
            "datePublished": "2026-10-10",
            "reviewBody": "Was searching for plots in Hubli Dharwad and found The Aurora Hills. Great price, clean title, HDUDA approved. The team is very professional and the site location in Kelgeri is premium."
          }
        ],
        "serviceArea": [
          { "@type": "City", "name": "Dharwad" },
          { "@type": "City", "name": "Hubli" },
          { "@type": "Place", "name": "Kelgeri, Dharwad" },
          { "@type": "Place", "name": "Vidyagiri, Dharwad" },
          { "@type": "Place", "name": "Sattur, Dharwad" },
          { "@type": "Place", "name": "Navanagar, Hubli" }
        ],
        "disambiguatingDescription": "The Aurora Hills is an 18-acre HDUDA and NA-KJP approved gated plotted community offering residential villa plots near Sunset Viewpoint, Kelgeri, Dharwad, Karnataka.",
        "knowsAbout": [
          "HDUDA Approved Plots",
          "Residential Villa Plots in Dharwad",
          "Plots in Hubli Dharwad",
          "Sites for Sale in Dharwad",
          "NA KJP Sanctioned Land Karnataka",
          "Plots near Sunset Viewpoint Dharwad",
          "30x40 Plots Dharwad",
          "30x50 Plots Dharwad",
          "40x60 Plots Dharwad",
          "SBI Approved Plots Dharwad",
          "Gated Community Layouts Dharwad",
          "Villa Construction in Dharwad"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Residential Villa Plots Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Executive Villa Plot (30x40)",
              "description": "1,200 sq.ft residential plot ideal for 3BHK villa with 1 KG Assured Silver festive offer.",
              "price": "4200000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Premium Villa Plot (30x50)",
              "description": "1,500 sq.ft residential plot ideal for 3-4BHK duplex villa with 1.5 KG Assured Silver festive offer.",
              "price": "5250000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Presidential Estate Plot (40x60)",
              "description": "2,400 sq.ft signature villa plot with 50 Grams 22K Assured Gold festive offer.",
              "price": "8400000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "sameAs": [
          "https://maps.app.goo.gl/3EnF93gjmTueXy667"
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://theaurorahills.com/#plotslist",
        "name": "Available Residential Plots in Dharwad – The Aurora Hills",
        "description": "HDUDA & NA-KJP approved residential villa plot sizes available in Dharwad, Karnataka.",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "30x40 Residential Plot (1,200 sq.ft) – Dharwad",
            "description": "HDUDA & NA-KJP approved 30x40 villa site in Dharwad starting ₹42 Lakhs. Bank loans available.",
            "url": "https://theaurorahills.com/#layout"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "30x50 Residential Plot (1,500 sq.ft) – Dharwad",
            "description": "HDUDA & NA-KJP approved 30x50 villa site in Dharwad starting ₹52.5 Lakhs. SBI/HDFC loans available.",
            "url": "https://theaurorahills.com/#layout"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "40x60 Residential Plot (2,400 sq.ft) – Dharwad",
            "description": "HDUDA & NA-KJP approved 40x60 luxury villa plot in Dharwad starting ₹84 Lakhs. Festive scheme: 50g Gold gift.",
            "url": "https://theaurorahills.com/#layout"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://theaurorahills.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average price of land and residential plots in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average price of residential land and plots in Dharwad typically ranges between ₹2,000 to ₹4,000 per sq.ft depending on location, HDUDA approval status, and amenities. At The Aurora Hills (Kelgerri, adjacent to Karnatak University & NH-4), premium HDUDA & NA-KJP sanctioned villa plots start at ₹42 Lakhs (approx. ₹3,500/sq.ft) under our pre-launch advantage with pre-approved bank loans up to 80%."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price of a 30x40 and 30x50 site in Hubballi-Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard 30x40 site (1,200 sq.ft) in Dharwad costs between ₹38 Lakhs to ₹48 Lakhs, while a 30x50 site (1,500 sq.ft) averages ₹48 Lakhs to ₹65 Lakhs. At The Aurora Hills, 30x40 plots start from ₹42 Lakhs*, 30x50 plots start from ₹52.5 Lakhs*, and 40x60 plots (2,400 sq.ft) start from ₹84 Lakhs*, complete with all township infrastructure and festive booking rewards."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best area to live and buy plots in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kelgerri / Sunset Viewpoint, Vidyagiri, and Sattur near Karnatak University and NH-4 Highway are widely regarded as the best residential areas in Dharwad. Kelgerri offers pristine hill serenity, zero pollution, easy access to Dharwad Railway Station, and swift commuting to Hubli via the 6-lane NH-48 and BRTS corridor, making it the most preferred destination for families and luxury villa builders."
            }
          },
          {
            "@type": "Question",
            "name": "Are plots at The Aurora Hills Dharwad HDUDA and NA approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, The Aurora Hills is fully NA-KJP and HDUDA sanctioned with 100% clear marketable titles. Every plot comes with clean marketable titles, approved blueprints, and pre-approved home loan options from top national banks including SBI, HDFC, ICICI, and IDFC First Bank."
            }
          },
          {
            "@type": "Question",
            "name": "Where is The Aurora Hills located in Dharwad and how far is it from Hubli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Aurora Hills is located at Sunset Viewpoint near Karnatak University in Dharwad City, directly accessible from the 6-lane NH-4 Highway. It is 5 minutes from Karnatak University, 10 minutes from Dharwad Railway Station, and just 15 to 20 minutes from the Hubli-Dharwad Twin City commercial center and Hubli Airport via the high-speed corridor."
            }
          },
          {
            "@type": "Question",
            "name": "Can I avail a home or plot loan for buying property at The Aurora Hills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, leading financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, and IDFC First Bank have verified and approved The Aurora Hills for hassle-free home and land loans."
            }
          },
          {
            "@type": "Question",
            "name": "What amenities are provided in this gated community in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Aurora Hills offers 20+ lifestyle amenities including a modern clubhouse, swimming pool, championship tennis court, pickleball court, cricket net arena, futsal turf, children's park, temple, tree-lined avenues, 30ft & 40ft wide asphalt roads, underground utilities, 1.5 lakh litre overhead water tank, and 24/7 round-the-clock security."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Hubli-Dharwad considered the best location for real estate and plot investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hubli-Dharwad is the economic and educational nerve center of North Karnataka, home to premier institutions like IIT Dharwad, IIIT, Karnatak University, and the industrial FMCG hub. With rapid infrastructure expansion via the BRTS corridor, 6-lane NH-48, and airport flights, property here yields consistently high capital appreciation."
            }
          },
          {
            "@type": "Question",
            "name": "Can people staying in Hubli buy plots in Dharwad? How to reach The Aurora Hills from Hubli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many plot owners at The Aurora Hills are Hubli residents. The project is just 15-20 minutes from Hubli city centre via the 6-lane NH-48 / NH-4 highway. Easily accessible from Unkal, Navanagar, Gokul Road, or Keshwapur. Free site visit pickups from Hubli are arranged every weekend by calling +91 89701 98701."
            }
          },
          {
            "@type": "Question",
            "name": "What is the expected return and capital appreciation on plots in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Residential plots in prime Dharwad localities like Kelgeri and Vidyagiri have appreciated by 18-25% annually due to infrastructure growth, IIT Dharwad development, and the NH-48 corridor. At The Aurora Hills, with HDUDA sanction and physical infrastructure completed, buyers see strong capital gains."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required to buy a plot in Dharwad? Is registration easy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To buy a plot in Dharwad, buyers need: Aadhar Card, PAN Card, passport photos, and income proof (if availing bank loan). At The Aurora Hills, the legal team assists with end-to-end documentation from agreement to registered sale deed execution at the Dharwad Sub-Registrar Office."
            }
          },
          {
            "@type": "Question",
            "name": "What is the current development status of The Aurora Hills in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As of October 2026, The Aurora Hills has completed 40ft & 30ft asphalt avenues, paver sidewalks, 1.5 Lakh Litre overhead water tank, underground power cabling with feeder pillars, boundary fencing, entrance arch, and landscaped medians with 100+ plots booked."
            }
          },
          {
            "@type": "Question",
            "name": "How does The Aurora Hills compare with other plots for sale in Dharwad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike unapproved agricultural layouts in Dharwad, The Aurora Hills is a fully HDUDA & NA-KJP sanctioned township near Sunset Viewpoint with completed on-site roads, water, power, 20+ amenities, bank approvals from SBI/HDFC/ICICI, and festive gold/silver gifts."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any special offers or discounts on plots in Dharwad during Dasara Deepawali 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Book during the Dasara & Deepawali Festive Scheme and receive: 50 Grams 22K Gold with a 40x60 plot (₹84L+), 1.5 KG 925 Silver with a 30x50 plot (₹52.5L+), and 1 KG 925 Silver with a 30x40 plot (₹42L+), delivered on registration."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://theaurorahills.com/#howto-buy-plot",
        "name": "How to Buy and Register a Residential Plot in Dharwad",
        "description": "Step-by-step legal and registration guide to purchase an HDUDA approved residential villa plot in Dharwad, Karnataka.",
        "totalTime": "P7D",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Book a Free Site Inspection",
            "text": "Visit the site at Sunset Viewpoint, Kelgeri, Dharwad to inspect 40ft & 30ft asphalt roads, water reservoir, and demarcated stone markers. Call +91 89701 98701 for free pickup.",
            "url": "https://theaurorahills.com/plots-in-dharwad"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Select Plot Size & Review Approvals",
            "text": "Choose from 30x40, 30x50, or 40x60 plot configurations and review certified HDUDA sanction orders and NA-KJP approval documents.",
            "url": "https://theaurorahills.com/#layout"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Reserve Plot with Token Booking",
            "text": "Lock in your plot number, pre-launch price, and festive gold or silver scheme benefit with an initial booking token.",
            "url": "https://theaurorahills.com/plots-in-dharwad"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Avail Pre-Approved Bank Loan",
            "text": "Submit standard KYC documents to partner banks (SBI, HDFC, ICICI, or IDFC First) for fast loan sanction up to 80% LTV.",
            "url": "https://theaurorahills.com/#faq"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Execute Registered Sale Deed",
            "text": "Complete registration at the Dharwad Sub-Registrar Office for immediate clear-title legal ownership and possession.",
            "url": "https://theaurorahills.com/plots-in-dharwad"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://theaurorahills.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://theaurorahills.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Plots in Dharwad & Hubli",
            "item": "https://theaurorahills.com/#layout"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Amenities & Master Plan",
            "item": "https://theaurorahills.com/#amenities"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Location & Connectivity",
            "item": "https://theaurorahills.com/#location"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Real Estate FAQ",
            "item": "https://theaurorahills.com/#faq"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://theaurorahills.com/#website",
        "url": "https://theaurorahills.com",
        "name": "The Aurora Hills - Plots in Dharwad & Hubli",
        "description": "Premier HDUDA approved residential plots and real estate township in Dharwad and Hubli.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://theaurorahills.com/#webpage",
        "url": "https://theaurorahills.com",
        "name": "Plots in Dharwad | Residential Villa Plots Hubli Dharwad | The Aurora Hills",
        "isPartOf": {
          "@id": "https://theaurorahills.com/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "#aeo-direct-answer",
            ".aeo-answer-capsule",
            "#faq"
          ]
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16689411973" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16689411973');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* LLM & Generative Engine Discovery Standards */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="The Aurora Hills LLM Knowledge Factsheet" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="The Aurora Hills Comprehensive LLM Knowledge Base" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Dharwad, Hubli-Dharwad, Karnataka, India" />
        <meta name="geo.position" content="15.4589;74.9902" />
        <meta name="ICBM" content="15.4589, 74.9902" />
        <meta name="city" content="Dharwad" />
        <meta name="state" content="Karnataka" />
        <meta name="country" content="India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${vintage.variable} ${kannada.variable} font-sans antialiased selection:bg-gold-500 selection:text-forest-950`}>
        <GoogleTag />
        {children}
      </body>
    </html>
  );
}

