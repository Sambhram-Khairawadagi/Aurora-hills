import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Aurora Hills | Premium Plots in Dharwad | Hosa Lifestyle",
  description:
    "Explore The Aurora Hills, Hosa Lifestyle, Hosa Dharwad –� a thoughtfully planned plotted community with lifestyle amenities, green surroundings, modern infrastructure and strategic connectivity near NH-4.",
  keywords: [
    "The Aurora Hills",
    "Aurora Hills Dharwad",
    "Aurora Hills Hosa Dharwad",
    "Hosa Lifestyle Dharwad",
    "plots in Dharwad",
    "residential plots Dharwad",
    "premium plots Dharwad",
    "plotted development Dharwad",
    "property in Dharwad",
    "plots near Hubli Dharwad",
    "investment property Dharwad",
    "Property Basket",
    "Reachmaxx"
  ],
  authors: [{ name: "Property Basket & The Aurora Hills" }],
  creator: "Property Basket",
  publisher: "The Aurora Hills",
  metadataBase: new URL("https://theaurorahills.in"),
  alternates: {
    canonical: "https://theaurorahills.in",
  },
  openGraph: {
    title: "The Aurora Hills | Premium Plots in Dharwad | Hosa Lifestyle",
    description:
      "A premium, thoughtfully planned plotted community in Dharwad, designed around lifestyle, connectivity, greenery and long-term value. Starting from ₹35.99 Lakhs.",
    url: "https://theaurorahills.in",
    siteName: "The Aurora Hills",
    images: [
      {
        url: "/images/hero-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "The Aurora Hills Dharwad Plotted Development Aerial View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aurora Hills | Premium Plots in Dharwad | Hosa Lifestyle",
    description:
      "A lifestyle upgrade in Dharwad. NA-KJP & HDUDA approved residential plots near NH-4 Highway starting from ₹35.99 Lakhs.",
    images: ["/images/hero-aerial.jpg"],
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
        "@id": "https://theaurorahills.in/#place",
        "name": "The Aurora Hills",
        "description": "Premium plotted development township in Dharwad City, Karnataka.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dharwad",
          "addressRegion": "Karnataka",
          "postalCode": "580001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "15.4589",
          "longitude": "75.0078"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://theaurorahills.in/#organization",
        "name": "The Aurora Hills - Marketed by Property Basket",
        "url": "https://theaurorahills.in",
        "logo": "https://theaurorahills.in/images/aurora-hills-logo.png",
        "telephone": "+91-9019765265",
        "priceRange": "?35,99,000+",
        "areaServed": "Hubli-Dharwad Twin City",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Property Basket",
          "alternateName": "Powered by SAMSO"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://theaurorahills.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Master Plan",
            "item": "https://theaurorahills.in/#master-plan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Amenities",
            "item": "https://theaurorahills.in/#amenities"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-gold-500 selection:text-forest-950">
        {children}
      </body>
    </html>
  );
}
