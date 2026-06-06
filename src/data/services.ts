import {
  MessageCircleHeart,
  Radar,
  MessageCircle,
  Megaphone,
  MonitorSmartphone,
  CreditCard,
  Server,
  Fingerprint,
  Rocket
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
    title: "Social Media Management",
    slug: "social-media-management",
    category: "Marketing",
    seoTitle: "Professional Social Media Management Agency | IMMNAVEED",
    seoDescription: "Expert social media management to build brand authority, engage your community, and drive organic growth across all platforms.",
    shortDescription: "Strategic content, community engagement, and brand authority building.",
    content: "We don't just post content; we build digital communities. Our social media management service is designed to create a consistent, engaging, and authentic voice for your brand across platforms like Instagram, LinkedIn, and Facebook. We handle everything from strategy and content creation to daily engagement and performance analytics. By humanizing your brand and focusing on real interactions, we turn followers into loyal customers.",
    features: ["Custom Content Strategy", "Daily Posting & Story Management", "Community Engagement", "Monthly Analytics & Reporting", "Influencer Outreach"],
    benefits: ["Build brand loyalty and trust", "Increase organic reach and visibility", "Save time and resources", "Establish industry authority"],
    icon: MessageCircleHeart,
    color: "text-violet-600 bg-violet-100",
    heroImage: "/images/services/social-media.jpg"
  },
  {
    id: "s2",
    title: "Meta Ads Marketing",
    slug: "meta-ads-marketing",
    category: "Advertising",
    seoTitle: "High-ROI Meta Ads Marketing Services | Facebook & Instagram Ads",
    seoDescription: "Scale your revenue with data-driven Meta (Facebook & Instagram) ad campaigns tailored for maximum ROAS and business growth.",
    shortDescription: "High-converting Facebook & Instagram ad campaigns focused on ROI.",
    content: "Stop wasting money on ineffective ads. Our Meta Ads marketing relies on deep audience research, compelling creative assets, and rigorous A/B testing to find what truly resonates with your target market. We build full-funnel strategies—from top-of-funnel brand awareness to bottom-of-funnel direct response—ensuring every rupee spent is optimized for Return on Ad Spend (ROAS).",
    features: ["Audience Segmentation & Targeting", "Creative A/B Testing", "Pixel Setup & Conversion Tracking", "Retargeting Campaigns", "Continuous Bid Optimization"],
    benefits: ["Lower Cost Per Acquisition (CPA)", "Predictable and scalable revenue", "Hyper-targeted local and global reach", "Data-driven creative decisions"],
    icon: Radar,
    color: "text-orange-600 bg-orange-100",
    heroImage: "/images/services/meta-ads.jpg"
  },
  {
    id: "s3",
    title: "WhatsApp Marketing",
    slug: "whatsapp-marketing",
    category: "Marketing",
    seoTitle: "WhatsApp Marketing & Automation Services | IMMNAVEED",
    seoDescription: "Direct, high-conversion communication. Leverage WhatsApp marketing for personalized customer engagement, instant support, and automated sales.",
    shortDescription: "Direct, personalized engagement and automated sales through WhatsApp.",
    content: "With open rates exceeding 90%, WhatsApp is the most direct channel to your customers. We design WhatsApp marketing strategies that feel personal, not spammy. From setting up WhatsApp Business API to crafting automated workflows, broadcast campaigns, and personalized customer support flows, we help you close deals faster and build stronger one-on-one relationships with your audience.",
    features: ["WhatsApp API Integration", "Automated Chatbots & Workflows", "Personalized Broadcasts", "Customer Support Setup", "CRM Integration"],
    benefits: ["Unmatched open and response rates", "Faster sales cycles", "Enhanced customer support", "Direct and personal communication"],
    icon: MessageCircle,
    color: "text-green-600 bg-green-100",
    heroImage: "/images/services/whatsapp-marketing.jpg"
  },
  {
    id: "s4",
    title: "Google Ads",
    slug: "google-ads",
    category: "Advertising",
    seoTitle: "Google Ads Management Agency | Search, Display & YouTube Ads",
    seoDescription: "Capture high-intent traffic with expertly managed Google Ads campaigns. Search, Display, and YouTube strategies designed for lead generation and sales.",
    shortDescription: "Capture high-intent search traffic with optimized PPC campaigns.",
    content: "Be there when your customers are actively searching for your services. Our Google Ads management covers Search, Display, Performance Max, and YouTube campaigns. We focus on high-intent keywords, compelling ad copy, and optimized landing pages to ensure you capture the right traffic. Our continuous optimization process minimizes wasted spend and maximizes your conversion rates.",
    features: ["Keyword Research & Intent Mapping", "Search, Display & YouTube Campaigns", "Performance Max Setup", "Landing Page Optimization", "Negative Keyword Management"],
    benefits: ["Immediate visibility for key searches", "High-quality, intent-driven leads", "Complete control over daily budget", "Measurable and transparent results"],
    icon: Megaphone,
    color: "text-sky-600 bg-sky-100",
    heroImage: "/images/services/google-ads.jpg"
  },
  {
    id: "s5",
    title: "Website Development",
    slug: "website-development",
    category: "Development",
    seoTitle: "Industry-Specific Website Development | Fast, SEO-Optimized Next.js Sites",
    seoDescription: "Custom, high-performance website development tailored to your industry. We build fast, scalable, and beautifully designed Next.js web applications.",
    shortDescription: "High-performance, beautifully designed Next.js sites tailored to your industry.",
    content: "Your website is your digital storefront. We build lightning-fast, highly secure, and SEO-optimized websites using Next.js and modern web technologies. We don't believe in one-size-fits-all; we tailor the user experience and design specifically to your industry—whether you're in real estate, healthcare, e-commerce, or corporate services. Our websites are designed to convert visitors into leads while providing a seamless, human-centric user experience.",
    features: ["Custom Next.js & React Development", "Industry-Specific UX/UI Design", "Technical SEO Optimization", "Mobile-First Responsiveness", "CMS Integration"],
    benefits: ["Superior page load speeds", "Higher search engine rankings", "Increased conversion rates", "Scalable architecture for future growth"],
    icon: MonitorSmartphone,
    color: "text-cyan-600 bg-cyan-100",
    heroImage: "/images/services/web-dev.jpg"
  },
  {
    id: "s6",
    title: "Billing Softwares",
    slug: "billing-softwares",
    category: "Software",
    seoTitle: "Custom Billing Software Solutions | Secure & Automated Invoicing",
    seoDescription: "Streamline your financial operations with custom billing software. Secure, automated invoicing, payment tracking, and robust reporting.",
    shortDescription: "Streamline your finances with custom, automated invoicing solutions.",
    content: "Manual billing processes lead to errors and delayed payments. We develop custom billing software that automates invoicing, tracks payments, manages subscriptions, and integrates seamlessly with your existing accounting tools. Designed with a clean, intuitive interface, our billing solutions ensure your financial operations run smoothly, securely, and without friction.",
    features: ["Automated Invoicing & Reminders", "Subscription & Recurring Billing", "Payment Gateway Integration", "Financial Reporting & Analytics", "Tax Calculation Automation"],
    benefits: ["Reduce administrative overhead", "Eliminate manual errors", "Improve cash flow with faster payments", "Secure financial data management"],
    icon: CreditCard,
    color: "text-rose-600 bg-rose-100",
    heroImage: "/images/services/billing.jpg"
  },
  {
    id: "s7",
    title: "ERP Development",
    slug: "erp-development",
    category: "Software",
    seoTitle: "Custom ERP Development Services | Enterprise Resource Planning",
    seoDescription: "Unify your business operations with custom ERP development. Tailored solutions for inventory, HR, CRM, and supply chain management.",
    shortDescription: "Unify your operations with custom Enterprise Resource Planning systems.",
    content: "Off-the-shelf ERPs are often bloated and difficult to use. We build custom Enterprise Resource Planning (ERP) systems specifically tailored to your unique operational workflows. By unifying your inventory, human resources, CRM, and supply chain into one intuitive, centralized dashboard, we help you break down silos, improve data visibility, and drive operational efficiency across your entire organization.",
    features: ["Custom Module Development (HR, CRM, Inventory)", "Centralized Data Dashboard", "Real-time Analytics", "Workflow Automation", "Third-party API Integrations"],
    benefits: ["Streamlined business processes", "Improved inter-departmental communication", "Data-driven decision making", "Highly scalable and adaptable system"],
    icon: Server,
    color: "text-slate-600 bg-slate-100",
    heroImage: "/images/services/erp.jpg"
  },
  {
    id: "s8",
    title: "Brand Development",
    slug: "brand-development",
    category: "Design",
    seoTitle: "Corporate Brand Development & Identity Design | IMMNAVEED",
    seoDescription: "Craft a memorable and authoritative brand identity. Comprehensive brand development including logo design, visual systems, and brand strategy.",
    shortDescription: "Crafting memorable, authoritative brand identities and visual systems.",
    content: "A brand is more than just a logo; it's how people feel about your business. Our brand development service dives deep into your core values, market positioning, and audience psychology. We craft cohesive visual languages—including logos, typography, color palettes, and brand guidelines—that resonate on a human level, building immediate trust and standing out in crowded markets.",
    features: ["Comprehensive Brand Strategy", "Logo & Visual Identity Design", "Brand Guidelines & Rulebooks", "Tone of Voice Development", "Marketing Collateral Design"],
    benefits: ["Stand out from competitors", "Build immediate trust and credibility", "Consistent messaging across all channels", "Increase perceived value"],
    icon: Fingerprint,
    color: "text-brand-orange bg-orange-100",
    heroImage: "/images/services/branding.jpg"
  },
  {
    id: "s9",
    title: "Startup Friendly",
    slug: "startup-friendly",
    category: "Consulting",
    seoTitle: "Startup Consulting & Growth Services | From 0 to 1",
    seoDescription: "Tailored growth strategies, pitch decks, and MVP development for early-stage startups. We help founders navigate the 0-to-1 journey successfully.",
    shortDescription: "Tailored growth strategies, pitch decks, and consulting for early-stage founders.",
    content: "We understand the unique challenges of the 0-to-1 journey. Our startup-friendly services offer flexible, high-impact consulting and execution. Whether you need to validate product-market fit, design a compelling investor pitch deck, build an MVP, or launch your initial go-to-market strategy, we act as your dedicated growth partners, helping you scale efficiently without unnecessary overhead.",
    features: ["Product-Market Fit Validation", "Investor Pitch Deck Design", "Go-To-Market Strategy", "MVP Web Development", "Lean Growth Marketing"],
    benefits: ["Cost-effective scaling", "Expert guidance for early-stage challenges", "Faster time to market", "Investor-ready presentation"],
    icon: Rocket,
    color: "text-amber-600 bg-amber-100",
    heroImage: "/images/services/startup.jpg"
  }
];

export function getServiceBySlug(slug: string): ServiceDetails | undefined {
  return servicesData.find(s => s.slug === slug);
}
