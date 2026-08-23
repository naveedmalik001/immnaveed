import {
  TrendingUp,
  Target,
  Palette,
  Video,
  Film,
  BarChart3,
  Camera,
} from "lucide-react";

export type ServiceDetails = {
  id: string;
  title: string;
  slug: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  content: string;
  features: string[];
  benefits: string[];
  icon: any;
  color: string;
  heroImage: string;
};

export const servicesData: ServiceDetails[] = [
  {
    id: "s1",
    title: "Business Growth & Strategy Consultation",
    slug: "business-growth-consulting",
    category: "Consultation",
    seoTitle: "Business Growth & Strategy Consultation | IMMNAVEED",
    seoDescription: "Strategic business consultation with Er. Naveed Malik to audit acquisition bottlenecks, optimize unit economics, and formulate actionable scaling roadmaps.",
    shortDescription: "Strategic 1-on-1 business advisory, sales funnel audit, and predictable scaling roadmaps.",
    content: "We partner directly with founders and business leaders to eliminate operational bottlenecks, restructure offer pricing, and build high-converting sales funnels. Led by Er. Naveed Malik, our consultations focus on actionable unit economics and scalable revenue architecture.",
    features: [
      "1-on-1 Executive Growth Audit",
      "Sales Funnel & Conversion Leakage Review",
      "Offer Packaging & Pricing Optimization",
      "Quarterly Commercial Scaling Blueprint",
      "Direct Founder Strategy Sessions"
    ],
    benefits: [
      "Clarity on high-leverage growth opportunities",
      "Optimized Customer Acquisition Cost (CAC)",
      "Predictable pipeline and sales conversion",
      "Direct access to principal growth strategist"
    ],
    icon: TrendingUp,
    color: "text-[#0E8A94] bg-[#14B8C4]/15",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s2",
    title: "Social Media Marketing (Meta & Google Ads)",
    slug: "social-media-marketing",
    category: "Paid Advertising",
    seoTitle: "Performance Social Media Marketing & Ads | Meta & Google Ads",
    seoDescription: "High-ROAS Meta (Facebook/Instagram) and Google Ads campaigns engineered for direct customer acquisition and verified ROI.",
    shortDescription: "High-ROAS Meta & Google ad campaigns engineered for maximum return on ad spend.",
    content: "We design and manage full-funnel performance advertising across Meta (Instagram, Facebook) and Google Search. Utilizing strict multi-touch attribution, creative hook variations, and conversion API tracking, we turn ad budgets into measurable revenue.",
    features: [
      "Full-Funnel Meta & Google Ads Architecture",
      "High-Converting Ad Copy & Creative Variations",
      "Conversion API & Pixel Server-Side Setup",
      "Targeted Retargeting & Lookalike Audiences",
      "Weekly Transparent ROAS Analytics"
    ],
    benefits: [
      "Lower Cost Per Acquisition (CPA)",
      "Predictable and scalable monthly inbound leads",
      "Hyper-targeted local and national reach",
      "4.8× Average verified client ROAS"
    ],
    icon: Target,
    color: "text-[#F7931E] bg-[#F7931E]/15",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s3",
    title: "Graphic Designing & Content Creation",
    slug: "graphic-design-content-creation",
    category: "Branding & Creative",
    seoTitle: "Professional Graphic Designing & Social Media Content Creation",
    seoDescription: "Elevate your brand authority with bespoke graphic designs, social media post templates, logos, and promotional visuals.",
    shortDescription: "Bespoke brand graphics, logos, promotional banners, and social media template systems.",
    content: "Stop using generic templates that look amateur. Our design team crafts custom visual identity systems, promotional banners, packaging, and cohesive Instagram post carousels that command instant trust and engagement.",
    features: [
      "Custom Logo & Brand Identity Kits",
      "Social Media Post & Story Design Systems",
      "Promotional Banners, Brochures & Print Collateral",
      "Brand Typography & Color Palette Rulebooks",
      "High-Resolution Vector & Figma Source Files"
    ],
    benefits: [
      "Instant brand credibility and premium perception",
      "Consistent visual identity across all touchpoints",
      "Increased organic saves, shares, and engagement",
      "Fast turnaround on marketing campaign assets"
    ],
    icon: Palette,
    color: "text-purple-600 bg-purple-100",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s4",
    title: "Video Shoots & Reel Production",
    slug: "video-shoots-reel-production",
    category: "Video Production",
    seoTitle: "Professional Video Shoots & Reel Production Services | IMMNAVEED",
    seoDescription: "On-location 4K corporate video shoots, viral social media reels, product promos, and event coverage.",
    shortDescription: "On-location 4K video shoots for corporate films, brand promos, events, and viral vertical reels.",
    content: "From concept storyboard to on-location multi-camera filming, we produce stunning 4K video content tailored for both vertical mobile screens (Instagram Reels, Shorts) and cinematic wide-screen brand documentaries.",
    features: [
      "4K Cinema Camera & Drone Aerial Footage",
      "Scriptwriting & Storyboard Concept Development",
      "Professional Studio & On-Location Lighting Setup",
      "Lavalier & Boom Mic Studio Audio Recording",
      "Vertical Viral Reels & Wide-Format Production"
    ],
    benefits: [
      "Higher engagement and retention on social feeds",
      "Professional visual proof of your business operations",
      "Versatile assets for website, ads, and organic reels",
      "Complete end-to-end shoot coordination"
    ],
    icon: Video,
    color: "text-blue-600 bg-blue-100",
    heroImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s5",
    title: "Video Editing & Post-Production",
    slug: "video-editing-post-production",
    category: "Post Production",
    seoTitle: "Expert Video Editing & Reel Post-Production Services",
    seoDescription: "Cinematic color grading, pacing, dynamic motion graphics, sound design, and viral subtitle editing.",
    shortDescription: "High-retention video editing, color grading, sound design, and motion graphics for reels & ads.",
    content: "Turn raw footage into polished, high-converting video masterpieces. Our editors specialize in kinetic typography, pacing, color correction, Foley sound design, and viral short-form retention hacks.",
    features: [
      "Cinematic Color Grading & Exposure Correction",
      "Dynamic Kinetic Subtitles & Lower Thirds",
      "Beat-Synced Transitions & Motion Graphics",
      "Multi-Track Sound Design & Audio Noise Removal",
      "Optimized Aspect Ratios (9:16 Reels, 16:9 Landscape)"
    ],
    benefits: [
      "Boosted watch time and viral reach on social platforms",
      "Crisp, broadcast-quality audio and visuals",
      "Fast revision cycles and multiple hook cuts",
      "Optimized export presets for every platform"
    ],
    icon: Film,
    color: "text-rose-600 bg-rose-100",
    heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s6",
    title: "Data Analysis & Business Intelligence",
    slug: "data-analysis-business-intelligence",
    category: "Analytics & Data",
    seoTitle: "Professional Data Analysis & Business Intelligence Services",
    seoDescription: "Transform raw customer and campaign data into clear executive dashboards, funnel metrics, and actionable growth insights.",
    shortDescription: "Custom analytics dashboards, CAC-to-LTV attribution models, and data-driven business insights.",
    content: "Make decisions with 100% confidence. We analyze your customer acquisition funnel, Google Analytics 4, CRM logs, and sales databases to identify leakage points, customer lifetime value (LTV), and revenue forecasting models.",
    features: [
      "Custom Looker Studio & PowerBI Dashboards",
      "Google Analytics 4 (GA4) & Tag Manager Audit",
      "Customer Acquisition Cost (CAC) vs LTV Models",
      "Churn Analysis & Sales Funnel Drop-off Mapping",
      "Monthly Executive Business Intelligence Reports"
    ],
    benefits: [
      "Clear visibility into real ROI on every marketing rupee",
      "Uncover hidden revenue leaks and customer trends",
      "Data-backed budget allocation for growth",
      "Automated real-time reporting dashboards"
    ],
    icon: BarChart3,
    color: "text-emerald-600 bg-emerald-100",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "s7",
    title: "Wedding Shoots & In-House Event Production",
    slug: "wedding-shoots-event-production",
    category: "Event Production",
    seoTitle: "Luxury Wedding Shoots & In-House Event Production | IMMNAVEED",
    seoDescription: "Cinematic wedding films, pre-wedding photography, and corporate event production powered by our in-house media team.",
    shortDescription: "Cinematic wedding films, drone coverage, and corporate event media powered by our in-house team.",
    content: "We boast our very own in-house media production crew equipped with state-of-the-art 4K cinema cameras, aerial drones, and gimbal stabilizers to capture luxury weddings, cultural celebrations, and corporate galas with cinematic elegance.",
    features: [
      "In-House Dedicated Media Production Crew",
      "Cinematic 4K Wedding Teasers & Full-Length Films",
      "Drone Aerial Cinematography & Candid Photography",
      "Traditional & Contemporary Pre-Wedding Concepts",
      "Same-Day Edit Reels & Premium Photo Albums"
    ],
    benefits: [
      "Direct in-house team coordination with zero third-party markups",
      "Breathtaking color-graded cinematic storytelling",
      "High-speed delivery of social-ready celebration reels",
      "Unforgettable capture of life's most precious milestones"
    ],
    icon: Camera,
    color: "text-[#F7931E] bg-[#F7931E]/15",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
];

export function getServiceBySlug(slug: string): ServiceDetails | undefined {
  return servicesData.find((s) => s.slug === slug);
}
