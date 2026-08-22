import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400","500","600","700","800","900"],
});

export const viewport: Viewport = {
  themeColor: "#0B1E36",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "IMMNAVEED | Premium Digital Growth Agency — Brand Strategy & Performance Marketing India",
  description: "IMMNAVEED is India's premier digital growth agency. We specialise in brand strategy, Meta performance marketing, Next.js development, and startup consulting. Book your free strategy call today.",
  keywords: [
    "IMMNAVEED","Digital Growth Agency India","Brand Strategy India",
    "Performance Marketing India","Meta Ads India","Next.js Development India",
    "Business Consulting India","Startup Growth","ERP Development",
    "Social Media Management India","Lead Generation India","Logo Design India",
  ],
  authors: [{ name: "IMMNAVEED", url: "https://www.immnaveed.in" }],
  metadataBase: new URL("https://www.immnaveed.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "IMMNAVEED | Premium Digital Growth Agency",
    description: "Strategy That Connects. Branding That Lasts. We build performance campaigns, brand designs, and fast Next.js products.",
    url: "https://www.immnaveed.in",
    siteName: "IMMNAVEED Growth Agency",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMMNAVEED | Digital Growth Agency",
    description: "Premium brand strategy, performance marketing & Next.js development. 342% avg growth. Book your free strategy call.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#081627] text-white antialiased min-h-screen">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
