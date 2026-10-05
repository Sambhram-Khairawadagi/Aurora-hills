import type { Metadata } from "next";
import { Outfit, Inter, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-kannada",
});


export const metadata: Metadata = {
  title: "Plots in Dharwad & Hubli | HDUDA Approved Residential Plots for Sale | The Aurora Hills",
  description:
    "Looking for plots in Dharwad & Hubli? The Aurora Hills offers 30x40, 30x50 & 40x60 HDUDA & NA-KJP approved residential villa plots starting ₹42 Lakhs near NH-4 Highway with 20+ luxury amenities. View layout plan & book a free site visit today!",
  keywords: [
    // Core Local Real Estate Searches
    "plots in Dharwad",
    "dharwad plots",
    "plots in Hubli",
    "plots in Hubli Dharwad",
    "hubli dharwad plots",
    "property in Dharwad",
    "property in Hubli",
    "real estate in Dharwad",
    "real estate in Hubli",
    "real estate Hubli Dharwad",
    "residential plots Dharwad",
    "residential plots in Dharwad",
    "residential plots Hubli",
    "plots for sale in Dharwad",
    "plots for sale in Hubli",
    "land for sale in Dharwad",
    "land for sale in Hubli",
    "sites in Dharwad for sale",
    "sites in Hubli for sale",
    "sites in Dharwad",
    "sites in Hubli",
    "gated community plots Dharwad",
    "gated community plots Hubli",
    "villa plots in Dharwad",
    "luxury plots Dharwad",
    "commercial plots Dharwad",
    "investment property Dharwad",
    // Legal & Approvals
    "HDUDA approved plots in Dharwad",
    "HDUDA plots Dharwad",
    "NA plots for sale in Dharwad",
    "NA KJP approved plots Dharwad",
    "RERA approved plots Dharwad",
    "clear title plots Dharwad",
    // Local Micro-Markets & Landmarks
    "plots near Karnatak University Dharwad",
    "plots near NH-4 highway Dharwad",
    "plots near Kelgeri Dharwad",
    "plots near Kelgerri Dharwad",
    "plots near Sunset Viewpoint Dharwad",
    "plots near Vidyagiri Dharwad",
    "plots near Sattur Dharwad",
    "plots near Navanagar Hubli",
    "plots near Rayapur Dharwad",
    "plots near SDM College Dharwad",
    "plots near IIT Dharwad",
    "plots near Hubli Airport",
    // Brand Searches
    "The Aurora Hills",
    "The Aurora Hills Dharwad",
    "Aurora Hills plots",
    "Sai Smruti Developers Dharwad",
    "Property Basket Dharwad"
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
        "telephone": "+91-9019765265",
        "priceRange": "₹42,00,000 - ₹1,20,00,000",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Bank Loan, Cheque, Bank Transfer, NEFT/RTGS",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9019765265",
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
          "priceValidUntil": "2026-12-31"
        }
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
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
      <body className={`${inter.variable} ${outfit.variable} ${kannada.variable} font-sans antialiased selection:bg-gold-500 selection:text-forest-950`}>
        {children}
      </body>
    </html>
  );
}

