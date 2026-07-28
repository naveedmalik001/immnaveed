import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "svc-1",
    slug: "brand-strategy",
    title: "Brand Strategy & Positioning",
    category: "Strategy",
    shortDescription: "Crafting authoritative market positioning, brand identity rulebooks, and competitive moats.",
    fullDescription: "A brand is not just a logo; it is the emotional and commercial premium your market is willing to pay. We audit your competitive landscape, articulate your core value proposition, and design an undeniable visual & linguistic identity that establishes long-term market leadership.",
    deliverables: ["Brand Architecture & Guidelines", "Visual Identity & Logo System", "Tone of Voice Rulebook", "Competitor & Market positioning Matrix"],
    impactMetrics: ["3× Higher Perceived Brand Value", "Immediate Increase in Customer Trust", "Unified Messaging Across Channels"],
    idealFor: ["Corporate Businesses", "Real Estate Developers", "Hospitals", "High-Growth Startups"],
    iconName: "ShieldCheck"
  },
  {
    id: "svc-2",
    slug: "business-consulting",
    title: "Business Growth Consulting",
    category: "Consulting",
    shortDescription: "Executive guidance to remove operational bottlenecks, optimize revenue models, and scale predictably.",
    fullDescription: "Led by Er. Naveed Malik, our growth consulting service examines your business model, customer acquisition costs (CAC), and sales funnels. We engineer systematic strategies to increase unit economics and maximize long-term client retention.",
    deliverables: ["Sales & Funnel Audit", "CAC to LTV Optimization Roadmap", "Pricing Model Restructuring", "Executive Strategy Workshops"],
    impactMetrics: ["Reduced Customer Acquisition Cost", "Predictable Monthly Revenue Funnels", "Streamlined Commercial Operations"],
    idealFor: ["Founders & C-Suite Executives", "SMEs", "Consultancies"],
    iconName: "TrendingUp"
  },
  {
    id: "svc-3",
    slug: "performance-marketing",
    title: "Meta & Google Performance Marketing",
    category: "Performance",
    shortDescription: "Data-driven ad campaigns structured for maximum ROAS, qualified leads, and measurable revenue.",
    fullDescription: "Stop gambling with ad spend. We build hyper-targeted, full-funnel advertising campaigns on Meta (Facebook & Instagram) and Google Search/YouTube. Through continuous A/B creative testing, intent targeting, and conversion tracking, every rupee spent is optimized for Return on Ad Spend.",
    deliverables: ["Full-Funnel Ad Campaign Architecture", "Creative A/B Copywriting & Assets", "Pixel & Conversion API Integration", "Weekly ROAS & Attribution Reports"],
    impactMetrics: ["Average 4.2× ROAS Across Clients", "-35% Lower Cost Per Acquisition", "High-Intent Inbound Lead Flow"],
    idealFor: ["Educational Institutions", "Hotels & Resorts", "Hospitals", "Real Estate Projects"],
    iconName: "Target"
  },
  {
    id: "svc-4",
    slug: "website-development",
    title: "Next.js 15 Web Engineering",
    category: "Engineering",
    shortDescription: "Bespoke, lightning-fast web applications built on Next.js 15 App Router with 95+ Lighthouse scores.",
    fullDescription: "We engineer zero-compromise digital storefronts. Utilizing Next.js 15, TypeScript, and Tailwind CSS, we build scalable platforms that load in under 1 second, rank supreme on search engines, and convert anonymous traffic into committed bookings.",
    deliverables: ["Next.js 15 App Router Development", "Mobile-First Responsive Layouts", "Sub-1s Page Load Optimization", "Headless CMS Integration"],
    impactMetrics: ["95+ Google Lighthouse Scores", "+50% Increase in Web Conversions", "Sub-second LCP Performance"],
    idealFor: ["Enterprise Corporations", "Startups", "Hospitality", "EdTech"],
    iconName: "Code2"
  },
  {
    id: "svc-5",
    slug: "custom-software",
    title: "Custom ERP & Software Systems",
    category: "Engineering",
    shortDescription: "Tailored enterprise software, student management systems, and operational dashboards.",
    fullDescription: "Off-the-shelf software rarely fits non-standard workflows. We build custom web software, billing portals, and ERP dashboards tailored precisely to your operational requirements, freeing your team from manual overhead.",
    deliverables: ["Custom Module Architecture (CRM, ERP, Billing)", "Secure Cloud Infrastructure", "Role-Based Access Controls", "Third-Party API Integrations"],
    impactMetrics: ["+80% Internal Operational Efficiency", "Zero Manual Data Entry Errors", "Real-Time Executive Analytics"],
    idealFor: ["Hospitals", "Educational Institutions", "Logistics & Construction"],
    iconName: "Server"
  },
  {
    id: "svc-6",
    slug: "seo-optimization",
    title: "Technical & Authority SEO",
    category: "Strategy",
    shortDescription: "Commanding organic search dominance for high-intent keywords across search engines.",
    fullDescription: "Capture buyers at the exact moment they are looking for solutions. Our SEO strategy combines technical site architecture, JSON-LD schema markup, page speed optimization, and strategic content creation to secure top rank positions for commercial keywords.",
    deliverables: ["Technical SEO Infrastructure Audit", "Schema / Structured Data Implementation", "Keyword Intent Mapping", "Authority Backlink Strategy"],
    impactMetrics: ["Consistent Organic Lead Growth", "#1 Ranking for Key Commercial Terms", "Long-Term Free Search Traffic"],
    idealFor: ["Hospitals", "Real Estate", "Educational Institutions", "Hotels"],
    iconName: "Search"
  },
  {
    id: "svc-7",
    slug: "social-media-marketing",
    title: "Social Media Authority Management",
    category: "Performance",
    shortDescription: "Elevating brand prestige and building active digital communities across Instagram and LinkedIn.",
    fullDescription: "We curate a sleek, consistent, and authoritative social presence for your brand. From visual grid aesthetic curation to community engagement strategies, we turn casual viewers into loyal brand advocates.",
    deliverables: ["Monthly Content Calendars", "High-Engagement Graphic & Video Assets", "Community Management & DMs", "Audience Analytics"],
    impactMetrics: ["Organic Reach Multiplication", "Higher Community Engagement Rate", "Prestige Brand Image"],
    idealFor: ["Personal Brands", "Luxury Hotels", "Corporate Enterprises"],
    iconName: "Share2"
  },
  {
    id: "svc-8",
    slug: "content-production",
    title: "Executive Content Production",
    category: "Design",
    shortDescription: "Persuasive copywriting, thought leadership articles, and enterprise pitch decks.",
    fullDescription: "Content is the voice of your business. We write executive-level copy for landing pages, whitepapers, investor decks, and email newsletters that resonates with high-ticket decision makers.",
    deliverables: ["Landing Page Copywriting", "Corporate Pitch Decks", "Thought Leadership Articles", "Email Sequence Campaigns"],
    impactMetrics: ["Higher Reading Time & Engagement", "Increased Offer Conversion Rate", "Clear Value Articulation"],
    idealFor: ["Startups", "Corporate Businesses", "Consultants"],
    iconName: "FileText"
  },
  {
    id: "svc-9",
    slug: "video-production",
    title: "High-Impact Video Production",
    category: "Design",
    shortDescription: "Cinematic short-form reels, corporate brand videos, and testimonial showcases.",
    fullDescription: "Video is the fastest medium to build human trust. We plan, script, edit, and produce high-converting short-form reels (Instagram/YouTube Shorts) and executive brand documentary films.",
    deliverables: ["Cinematic Scriptwriting", "Short-Form Reel Editing", "Subtitles & Kinetic Animation", "Corporate Overview Films"],
    impactMetrics: ["Millions of Organic Views", "Instant Emotional Connection", "3× Higher Engagement"],
    idealFor: ["Personal Brands", "Educational Institutions", "Real Estate", "Hotels"],
    iconName: "Video"
  },
  {
    id: "svc-10",
    slug: "graphic-design",
    title: "Graphic & Collateral Design",
    category: "Design",
    shortDescription: "Luxury marketing assets, brochures, signage, and corporate collateral.",
    fullDescription: "Maintain visual perfection across every touchpoint. We craft print and digital collateral—including corporate brochures, event displays, social graphics, and sales decks.",
    deliverables: ["Digital & Print Marketing Assets", "Corporate Presentation Templates", "Event Display Graphics", "Brochures & Catalogs"],
    impactMetrics: ["Consistent Visual Aesthetics", "Professional Sales Presentations"],
    idealFor: ["Real Estate", "Healthcare", "Corporate Businesses"],
    iconName: "Palette"
  },
  {
    id: "svc-11",
    slug: "ui-ux-design",
    title: "Luxury UI/UX Product Design",
    category: "Design",
    shortDescription: "User-centric interface design, wireframing, and interactive design systems in Figma.",
    fullDescription: "Before writing code, we design intuitive, elegant user interfaces. We map complex user journeys into friction-free web experiences that guide visitors naturally toward conversion.",
    deliverables: ["Figma Wireframes & Interactive Prototypes", "Design System & UI Components", "User Journey Mapping", "Usability Testing"],
    impactMetrics: ["Eliminated User Friction", "Seamless Mobile Usability", "Higher Task Completion"],
    idealFor: ["SaaS Startups", "E-Commerce", "Web Applications"],
    iconName: "Layout"
  },
  {
    id: "svc-12",
    slug: "marketing-automation",
    title: "Marketing Automation & CRM Systems",
    category: "Performance",
    shortDescription: "Automated lead capture, instant WhatsApp routing, and email nurture workflows.",
    fullDescription: "Never let a prospective client wait. We automate lead responses using WhatsApp API, automated email follow-ups, and CRM workflows to nurture prospects 24/7.",
    deliverables: ["WhatsApp API Workflows", "Automated Lead Routing Scripts", "Email Drip Campaigns", "CRM Integration (HubSpot, Zoho, Custom)"],
    impactMetrics: ["< 1-Minute Lead Response Time", "Increased Sales Pipeline Velocity", "Zero Missed Opportunities"],
    idealFor: ["Educational Institutions", "Hospitals", "Real Estate Developers"],
    iconName: "Zap"
  },
  {
    id: "svc-13",
    slug: "ai-integration",
    title: "AI Integration & Smart Workflow Architecture",
    category: "Engineering",
    shortDescription: "Integrating LLMs, custom chatbots, and automated AI data processing into your business.",
    fullDescription: "Leverage cutting-edge artificial intelligence to transform customer support and internal workflows. We integrate custom AI assistants, automated data extraction engines, and smart dynamic workflows.",
    deliverables: ["Custom AI Chatbot Deployment", "LLM API Integrations", "Automated Content Processing", "AI-Powered Customer Support"],
    impactMetrics: ["24/7 Customer Query Resolution", "Drastic Reduction in Manual Support Effort", "Modern Brand Advantage"],
    idealFor: ["Startups", "Enterprise Organizations", "Customer Support Hubs"],
    iconName: "Cpu"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
