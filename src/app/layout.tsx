import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#041E42",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.immnaveed.in"),
  title: {
    default: "IMMNAVEED | Digital Growth Agency & Media Production — Er. Naveed Malik",
    template: "%s | IMMNAVEED",
  },
  description: "Premier digital growth agency & media production house by Er. Naveed Malik. High-speed Next.js websites, custom ERP software, Meta/Google ads, graphic branding, in-house 4K video shoots/reels, and wedding cinematography.",
  keywords: [
    "IMMNAVEED",
    "Er Naveed Malik",
    "Website Development India",
    "Next.js Development Agency",
    "Custom ERP Software",
    "School Management ERP",
    "Hospital Clinic Software",
    "Digital Growth Agency India",
    "Meta Ads Marketing Agency",
    "Google Ads Management",
    "Graphic Designing Agency",
    "Corporate Video Shoots",
    "Instagram Reels Production",
    "Video Editing Agency",
    "Wedding Cinematography India",
    "Data Analysis Business Intelligence"
  ],
  authors: [{ name: "Er. Naveed Malik", url: "https://www.immnaveed.in" }],
  creator: "Er. Naveed Malik",
  publisher: "IMMNAVEED",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IMMNAVEED",
  },
  alternates: {
    canonical: "https://www.immnaveed.in",
  },
  openGraph: {
    title: "IMMNAVEED | Next.js Web & ERP Engineering, Media Production & Growth Agency",
    description: "We engineer sub-1s Next.js websites, custom ERPs for education & hospitals, high-ROAS Meta/Google ads, graphic design, and in-house 4K video shoots/reels.",
    url: "https://www.immnaveed.in",
    siteName: "IMMNAVEED",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "IMMNAVEED Digital Growth & Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMMNAVEED | Web & ERP Engineering, Media Production & Growth Agency",
    description: "Next.js Web Apps, Custom ERPs, Meta Ads, Graphic Design, and In-House 4K Video Shoots.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.immnaveed.in/#organization",
      "name": "IMMNAVEED",
      "url": "https://www.immnaveed.in",
      "logo": "https://www.immnaveed.in/icon.svg",
      "sameAs": [
        "https://www.instagram.com/immnaveed",
        "https://www.linkedin.com/in/naveedshowkatmalik"
      ],
      "founder": {
        "@type": "Person",
        "name": "Er. Naveed Malik",
        "jobTitle": "Principal Growth Strategist & Software Architect",
        "url": "https://www.immnaveed.in/about"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919018636473",
        "contactType": "customer support",
        "areaServed": ["IN", "AE", "US", "GB"],
        "availableLanguage": ["English", "Hindi", "Urdu"]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.immnaveed.in/#service",
      "name": "IMMNAVEED Digital Growth & Media Agency",
      "url": "https://www.immnaveed.in",
      "telephone": "+919018636473",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Corporate Capabilities",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Next.js Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software & ERP Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Growth Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing (Meta & Google Ads)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Designing & Content Creation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Shoots & Reel Production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Editing & Post-Production" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analysis & Business Intelligence" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Shoots & In-House Event Production" } }
        ]
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="theme-color" content="#041E42" />
        <meta name="msapplication-navbutton-color" content="#041E42" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-[#0F172A] antialiased min-h-screen selection:bg-[#14B8C4] selection:text-[#031730]">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
