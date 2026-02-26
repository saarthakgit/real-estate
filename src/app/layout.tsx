import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import PromoBar from "../components/promobar";

// Configure all weights under a single font family
const zalandoSans = localFont({
  src: [
    {
      path: './fonts/ZalandoSansSemiExpanded-ExtraLight.ttf',
      // weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Light.ttf',
      // weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Regular.ttf',
      // weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Medium.ttf',
      // weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-SemiBold.ttf',
      // weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Bold.ttf',
      // weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-ExtraBold.ttf',
      // weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/ZalandoSansSemiExpanded-Black.ttf',
      // weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-zalando',
});


export const metadata: Metadata = {
  // 1. Base URL for resolving all relative image links (Fixes the "localhost" warning)
  metadataBase: new URL('https://platinumirish.in'), 

    alternates: {
    canonical: '/',
  },
  // 2. Precise Title for High-Intent Search
  title: "Irish Platinum | Save ₹25.5 Lacs* | Luxury 3/4 BHK in Sector 10, Greater Noida West",
  
  // 3. AI-Snippet Optimized Description
  description: "Save up to ₹25.5 Lacs*. Official project details for Irish Platinum, Sector 10. Download Official brochure , Floor Plans and Payment Plans , Direct Booking. Low-density 3 BHK & 4 BHK apartments in Greater Noida West. Mivan construction, 5 mins from Metro, & RERA approved (UPRERAPRJ503189). Starting ₹1.63 Cr*.",
  
  // 4. Cleaned & De-duplicated Keywords
  keywords: [
    "Irish Platinum Sector 10",
    "Irish Platinum Noida Extension",
    "Irish Platinum price list download",
    "Irish Platinum layout",
    "3 BHK in Noida Extension",
    "4 BHK Luxury Apartments Greater Noida West",
    "Property in Greater Noida West",
    "Flats near Jewar Airport",
    "Ace Hanei",
    "Mivan Construction Projects Noida",
    "Irish Group new project",
    "RERA UPRERAPRJ503189",
    "Luxury flats in Noida",
    "Property near metro station noida extension",
    "best property in noida extension",
    "property for investment in noida extension",
    "irish project",
    "irish group project",
    "irish group new project",
    "platinum irish",
    "irish platinum society",
    "irish official website",
    "irish platinum official website",
    "irish platinum official"
  ],

  // 5. Open Graph (WhatsApp/Telegram/LinkedIn)
  openGraph: {
    title: "Irish Platinum | The Treasure Chest of Living",
    description: "Premium 3/4 BHK residences in Sector 10. Mivan Tech & Low Density. Download Price List.",
    url: "https://platinumirish.in", 
    siteName: "Irish Platinum",
    images: [
      {
        url: "/og-image.png", // Make sure this is a 1200x630px building render in your public folder
        width: 1200,
        height: 630,
        alt: "Irish Platinum Luxury Apartments Sector 10",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // 6. Twitter Card (X) - Consolidated and Fixed
  twitter: {
    card: "summary_large_image",
    title: "Irish Platinum | 3 & 4 BHK Luxury",
    description: "Low density, Mivan construction, 5 mins from Metro. Check availability now.",
    creator: "@heyisomer", // Credits you
    images: ["/og-image.png"], // Shows the building (High CTR), not a profile pic
  },

  // 7. Bot Indexing Rules - Consolidated
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
  body { 
    font-family: var(--font-zalando) !important;
    zoom : 0.9
  }
`}</style>
      </head>
      <body className={`${zalandoSans.variable} antialiased`}>
        <PromoBar/>
        {/* ENHANCED JSON-LD SCHEMA FOR AI SEARCH */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Irish Platinum",
              "description": "Luxury 3 & 4 BHK apartments with Mivan construction in Sector 10.",
              "image": "https://www.platinumirish.in/image.png", // Verify this URL is valid
              "brand": {
                "@type": "Organization",
                "name": "Irish Group"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "16300000", 
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/PreOrder",
                "url": "https://www.platinumirish.in"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 10",
                "addressLocality": "Greater Noida West / Noida Extension",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201306",
                "addressCountry": "IN"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Mivan Construction", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "5 Mins from Metro", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Low Density", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "RERA Approved", "value": true }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}