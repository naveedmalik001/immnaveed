import { IndustryItem } from "@/types";

export const industriesData: IndustryItem[] = [
  {
    id: "ind-1",
    slug: "educational-institutions",
    title: "Educational Institutions & Colleges",
    subtitle: "High-Volume Student Admissions & Direct Digital Recruitment Systems",
    description: "In the competitive higher education landscape, traditional marketing fails. We engineer custom enrollment funnels, automated WhatsApp counseling workflows, and targeted Meta/Google ad campaigns that increase qualified admissions enquiries while lowering acquisition costs.",
    keyChallenges: [
      "High drop-off rate on generic application forms",
      "Delayed counselor follow-ups leading to missed student enrollments",
      "Wasted ad spend on low-intent target audiences"
    ],
    ourSolutions: [
      "Sub-1s mobile admission portals with instant WhatsApp integration",
      "Automated counselor routing and lead allocation CRM dashboards",
      "Hyper-targeted regional Meta & Google Search marketing campaigns"
    ],
    growthStats: "+54% Average Admission Conversion",
    iconName: "GraduationCap"
  },
  {
    id: "ind-2",
    slug: "healthcare-hospitals",
    title: "Hospitals & Healthcare Facilities",
    subtitle: "Patient Acquisition, Reputation Management & Appointment Systems",
    description: "Healthcare marketing requires deep trust and absolute precision. We build HIPAA/MCI-compliant patient acquisition funnels, local search dominance systems, and high-trust digital assets that position your doctors and hospital as regional leaders.",
    keyChallenges: [
      "Low visibility for high-value specialty procedures",
      "Unoptimized Google Business profiles losing local patient searches",
      "Friction in digital appointment booking"
    ],
    ourSolutions: [
      "High-intent search campaigns for specialized procedures & treatments",
      "Local SEO dominance strategy to capture emergency & clinic searches",
      "Streamlined digital appointment booking and reminder integrations"
    ],
    growthStats: "3.8× Increase in Appointment Inquiries",
    iconName: "Stethoscope"
  },
  {
    id: "ind-3",
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    subtitle: "Luxury Property Launches & High-Net-Worth Lead Funnels",
    description: "Selling real estate requires emotional resonance and immediate credibility. We design luxury digital brochures, dynamic site walkthrough portals, and target ultra-high-net-worth buyers through sophisticated ad funnels.",
    keyChallenges: [
      "Inflated lead costs and unverified contact details from general ads",
      "Slow loading image-heavy property pages causing high bounce rates",
      "Weak digital collateral for luxury property launches"
    ],
    ourSolutions: [
      "Interactive 3D & video property presentation portals built on Next.js 15",
      "Verified lead qualification funnels filtering serious investors",
      "Bespoke luxury brand identity & digital brochure assets"
    ],
    growthStats: "4.5× ROAS on Luxury Property Launches",
    iconName: "Building2"
  },
  {
    id: "ind-4",
    slug: "hotels-hospitality",
    title: "Hotels & Luxury Hospitality",
    subtitle: "Direct Room Booking Engines & Prestige Brand Experience",
    description: "Bypass high OTA commission fees by building a direct digital booking channel. We create cinematic hotel platforms, targeted seasonal campaigns, and prestige branding that converts website visitors into direct guests.",
    keyChallenges: [
      "High reliance on third-party OTAs taking 18–25% commission fees",
      "Uninspired digital presence failing to showcase resort luxury",
      "Poor direct booking conversion rates"
    ],
    ourSolutions: [
      "Direct Next.js booking portals with zero commission fees",
      "Cinematic video & visual storytelling showcasing rooms & amenities",
      "Targeted retargeting campaigns capturing high-intent travelers"
    ],
    growthStats: "-28% Commission Loss via Direct Bookings",
    iconName: "Hotel"
  },
  {
    id: "ind-5",
    slug: "startups-sme",
    title: "Startups & Enterprise SaaS",
    subtitle: "0-to-1 Product Positioning, Pitch Architecture & Growth",
    description: "For founders seeking product-market fit or preparing for investment rounds. We act as your growth partners—refining your value proposition, building your MVP front-end, and crafting pitch decks that win funding.",
    keyChallenges: [
      "Unclear market positioning making investor pitches weak",
      "Slow development timelines delaying market entry",
      "High Customer Acquisition Cost (CAC) during initial launch"
    ],
    ourSolutions: [
      "Executive Brand Strategy & Investor Pitch Deck Architecture",
      "Rapid Next.js 15 MVP web app engineering",
      "Data-backed performance marketing experiments to validate positioning"
    ],
    growthStats: "100% Client Investment Pitch Readiness",
    iconName: "Rocket"
  }
];

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return industriesData.find((i) => i.slug === slug);
}
