import { CaseStudyItem } from "@/types";

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cs-1",
    slug: "cambridge-education",
    clientName: "Cambridge Education",
    industry: "Educational Institutions",
    title: "Admissions Recruitment Architecture & High-ROAS Funnels",
    tagline: "Scaling student enrollments through performance marketing and bespoke landing funnels.",
    summary: "Re-engineered Cambridge Education's student acquisition pipeline by pairing direct-response Meta/Google ad campaigns with a high-speed custom enrollment engine.",
    challenge: "High student drop-off rates on legacy multi-step application forms and fragmented lead allocation across regional counselors.",
    strategy: "Implemented a streamlined single-focus conversion funnel with instant WhatsApp consultation triggers and automated CRM lead distribution.",
    results: [
      "+54% Student Application Conversion Rate",
      "3.4× Increase in Qualified Admissions Enquiries",
      "Sub-1.2s Average Page Load Speed Across Mobile Devices",
      "Automated Lead Delivery to Regional Counselors in < 5 Seconds"
    ],
    primaryMetric: {
      label: "Enrollment Growth",
      value: "+54%"
    },
    liveUrl: "https://www.cambridgeeducation.in",
    featured: true,
    colorHex: "#d97706",
    tags: ["Performance Marketing", "Funnel Design", "Meta Ads", "EdTech"]
  },
  {
    id: "cs-2",
    slug: "gostudy-edu",
    clientName: "GoStudy Edu",
    industry: "Overseas Education Consultancy",
    title: "Sub-Second Global University Search & Lead Engine",
    tagline: "High-performance Next.js consultancy hub connecting students with overseas universities.",
    summary: "Built an ultra-fast study-abroad directory allowing students to match courses, estimate tuition costs, and book video counseling sessions dynamically.",
    challenge: "Legacy database queries caused 4+ second delays when searching overseas university options, causing lead attrition.",
    strategy: "Architected a server-side pre-rendered Next.js directory with instant client-side filtering and automated lead routing.",
    results: [
      "4.8× Return on Ad Spend (ROAS) on Meta Marketing",
      "99/100 Mobile Performance Score on Google Lighthouse",
      "+142% Increase in Overseas Consultation Bookings",
      "Sub-800ms Search Query Latency"
    ],
    primaryMetric: {
      label: "ROAS Return",
      value: "4.8×"
    },
    liveUrl: "https://www.gostudyedu.in",
    featured: true,
    colorHex: "#10b981",
    tags: ["Next.js App Router", "SEO Optimization", "Consulting", "Lead Gen"]
  },
  {
    id: "cs-3",
    slug: "campus-disha",
    clientName: "Campus Disha",
    industry: "Career Counseling & Software",
    title: "Unified Student ERP & Multi-Institutional Growth Engine",
    tagline: "Custom Enterprise Resource Planning system integrating 100+ college partners with live lead tracking.",
    summary: "Replaced spreadsheet-based operations with a custom, secure cloud ERP platform that handles student inquiries, counseling logs, and university payouts in real time.",
    challenge: "Manual spreadsheet management led to delayed follow-ups, lost leads, and administrative friction between counseling staff.",
    strategy: "Engineered a centralized React/Next.js dashboard backed by a secure relational database with role-based access control.",
    results: [
      "+84% Increase in Operational Staff Productivity",
      "Zero Lost Leads in Peak Admission Cycles",
      "100% Real-Time Tracking Across 100+ University Partners",
      "Integrated Live Chat & Instant WhatsApp Follow-Ups"
    ],
    primaryMetric: {
      label: "Operational Efficiency",
      value: "+84%"
    },
    liveUrl: "https://www.campusdisha.in",
    featured: true,
    colorHex: "#3b82f6",
    tags: ["Custom Software", "ERP System", "Workflow Automation", "Enterprise"]
  },
  {
    id: "cs-4",
    slug: "aura-fintech",
    clientName: "Aura Wealth Solutions",
    industry: "FinTech & Corporate Finance",
    title: "Luxury Brand Identity & High-Net-Worth Acquisition",
    tagline: "Repositioning a wealth manager to capture ultra-high-net-worth enterprise clients.",
    summary: "Created a bespoke luxury minimal visual identity, brand guidelines, and high-trust digital platform.",
    challenge: "Outdated visual identity failed to convey security and executive prestige to institutional investors.",
    strategy: "Developed a minimalist obsidian and gold brand design language, accompanied by authoritative corporate content.",
    results: [
      "+48% Lift in Institutional Brand Trust Metrics",
      "₹14Cr+ Assets Under Management Onboarded Post-Launch",
      "Consistently High Conversion Rates on Cold Pitch Decks"
    ],
    primaryMetric: {
      label: "Brand Trust Lift",
      value: "+48%"
    },
    featured: false,
    colorHex: "#8b5cf6",
    tags: ["Brand Strategy", "Luxury UI/UX", "Corporate Identity"]
  }
];
