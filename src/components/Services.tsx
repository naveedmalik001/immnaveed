"use client";

import { useState } from "react";
import {
  Fingerprint, Map, Palette, Crown, Clapperboard, Flame,
  Feather, CalendarDays, Crosshair, Rocket, Megaphone,
  MessageCircleHeart, LineChart, Radar, Mail, MonitorSmartphone, Server,
  X, ArrowRight, Sparkles
} from "lucide-react";

const services = [
  // --- Brand & Design ---
  {
    id: 1, cat: "brand",
    icon: Fingerprint, color: "bg-orange-100 text-brand-orange",
    name: "Brand Identity System",
    short: "Complete visual language for your business.",
    full: "We craft your entire brand identity — logotype, colour palette, typography, icon sets, and brand voice guidelines. Every detail is designed to communicate authority and trust from the very first impression across all media.",
    tags: ["Logo Design", "Style Guide", "Colour System", "Brand Voice"],
    badge: "Most Popular",
  },
  {
    id: 2, cat: "brand",
    icon: Map, color: "bg-blue-100 text-blue-600",
    name: "Brand Strategy",
    short: "Market positioning & audience mapping.",
    full: "Strategic brand positioning that defines your market differentiation, target psychographics, competitive advantages, and long-term brand narrative. We research deeply before we design anything.",
    tags: ["Competitor Audit", "Positioning Map", "Tone of Voice", "GTM Strategy"],
    badge: "",
  },
  {
    id: 3, cat: "brand",
    icon: Palette, color: "bg-purple-100 text-purple-600",
    name: "Graphic Design",
    short: "Creatives, collateral & visual systems.",
    full: "Professional design for social media creatives, pitch decks, marketing materials, print collateral, and comprehensive creative asset kits. Pixel-perfect output for every platform.",
    tags: ["Social Creatives", "Pitch Decks", "Print Collateral", "Illustration"],
    badge: "",
  },
  {
    id: 4, cat: "brand",
    icon: Crown, color: "bg-rose-100 text-rose-600",
    name: "Logo Design",
    short: "Timeless vector mark for your business.",
    full: "Unique, scalable vector logos with multiple concept rounds. We deliver all formats — SVG, PNG, PDF — along with clear usage guidelines so your mark always looks perfect.",
    tags: ["3 Concept Rounds", "All Formats", "Brand Mark", "Favicon"],
    badge: "Signature",
  },
  {
    id: 5, cat: "brand",
    icon: Clapperboard, color: "bg-amber-100 text-amber-600",
    name: "Video Editing",
    short: "Cinematic brand films & ad content.",
    full: "Professional video editing including colour grading, motion graphics, audio design, and cinematic finishing. We turn raw footage into powerful brand stories and high-converting ad creatives.",
    tags: ["Colour Grading", "Motion Graphics", "Brand Films", "Ad Creative"],
    badge: "",
  },
  {
    id: 6, cat: "brand",
    icon: Flame, color: "bg-emerald-100 text-emerald-600",
    name: "Reels & Short-Form",
    short: "Scroll-stopping content for social virality.",
    full: "Scroll-stopping reels with fast hooks, kinetic typography, trending transitions, and platform-optimised formats. Designed to maximise watch time, shares, and organic reach on Instagram & YouTube.",
    tags: ["Hook Scripts", "Kinetic Text", "Trending Formats", "Platform Opt."],
    badge: "Viral Scale",
  },
  {
    id: 7, cat: "brand",
    icon: Feather, color: "bg-indigo-100 text-indigo-600",
    name: "Content Creation",
    short: "Copy, scripts, newsletters & templates.",
    full: "Strategic content across copywriting, scripting, newsletters, blog posts, and social captions — all engineered to convert readers into qualified leads and paying customers.",
    tags: ["Copywriting", "Scripts", "Newsletters", "Blog Content"],
    badge: "",
  },
  {
    id: 8, cat: "brand",
    icon: CalendarDays, color: "bg-teal-100 text-teal-600",
    name: "Content Management",
    short: "Multi-platform calendars & scheduling.",
    full: "End-to-end content operations: strategy, design, scheduling, publishing, and community management across Instagram, LinkedIn, and YouTube — keeping your brand consistently present.",
    tags: ["Content Calendar", "Scheduling", "Community Mgmt", "Analytics"],
    badge: "",
  },

  // --- Growth & Ads ---
  {
    id: 9, cat: "growth",
    icon: Crosshair, color: "bg-brand-orange/15 text-brand-orange",
    name: "Business Strategy",
    short: "Operating models & scaling roadmaps.",
    full: "Strategic consulting for revenue model optimisation, market expansion planning, and operational efficiency improvement. We assess your entire business model and build a data-backed scaling roadmap.",
    tags: ["Revenue Models", "Market Expansion", "GTM Plan", "Scaling Roadmap"],
    badge: "High Impact",
  },
  {
    id: 10, cat: "growth",
    icon: Rocket, color: "bg-green-100 text-green-600",
    name: "Performance Marketing",
    short: "Full-funnel paid campaigns built on ROAS.",
    full: "Full-funnel performance campaigns with hyper-targeted audience segmentation, creative testing frameworks, and real-time bid optimisation. Every rupee tracked to actual revenue outcomes.",
    tags: ["Meta Campaigns", "A/B Testing", "Bid Optimisation", "Attribution"],
    badge: "ROI Focused",
  },
  {
    id: 11, cat: "growth",
    icon: Megaphone, color: "bg-sky-100 text-sky-600",
    name: "Digital Marketing",
    short: "Multi-channel organic & paid growth.",
    full: "Integrated digital strategy covering SEO, paid media, email marketing, and social advertising — creating a comprehensive online presence that captures market share across every touchpoint.",
    tags: ["SEO", "Email Marketing", "Paid Social", "Analytics"],
    badge: "",
  },
  {
    id: 12, cat: "growth",
    icon: MessageCircleHeart, color: "bg-violet-100 text-violet-600",
    name: "Social Media Management",
    short: "Channels, community & brand authority.",
    full: "Complete social media management: content planning, design, daily publishing, audience engagement, and monthly performance reports — building your brand authority systematically.",
    tags: ["Content Planning", "Daily Posting", "Engagement", "Monthly Reports"],
    badge: "",
  },
  {
    id: 13, cat: "growth",
    icon: LineChart, color: "bg-fuchsia-100 text-fuchsia-600",
    name: "Startup Consulting",
    short: "PMF advice, pitch decks & scale plans.",
    full: "Hands-on consulting for early-stage startups: product-market fit validation, investor pitch deck preparation, go-to-market strategy, and growth dynamics for your first 0-to-1 journey.",
    tags: ["PMF Analysis", "Pitch Decks", "Fundraising", "Scale Playbook"],
    badge: "Founder Desk",
  },
  {
    id: 14, cat: "growth",
    icon: Radar, color: "bg-orange-100 text-orange-600",
    name: "Meta Ads Management",
    short: "Facebook & Instagram funnels that convert.",
    full: "Expert Meta Ads management — audience research, creative development, funnel architecture, pixel setup, and ongoing campaign optimisation for maximum ROAS and minimum cost-per-lead.",
    tags: ["Audience Research", "Creative Testing", "Funnel Build", "ROAS Scale"],
    badge: "Paid Ads",
  },
  {
    id: 15, cat: "growth",
    icon: Mail, color: "bg-pink-100 text-pink-600",
    name: "Lead Generation",
    short: "Landing pages & funnels for qualified leads.",
    full: "Complete lead generation systems: landing page design, lead magnet creation, CRM integration, and automated follow-up sequences — delivering a steady stream of qualified prospects.",
    tags: ["Landing Pages", "Lead Magnets", "CRM Setup", "Automation"],
    badge: "",
  },

  // --- Tech & Dev ---
  {
    id: 16, cat: "tech",
    icon: MonitorSmartphone, color: "bg-cyan-100 text-cyan-600",
    name: "Website Development",
    short: "Fast Next.js sites, portals & landing pages.",
    full: "Production-grade websites built with Next.js, TypeScript, and Tailwind CSS. Fully responsive, SEO-optimised, and performance-tuned for Core Web Vitals — scoring 95+ on PageSpeed Insights.",
    tags: ["Next.js 14+", "TypeScript", "SEO Optimised", "Core Web Vitals"],
    badge: "Next.js",
  },
  {
    id: 17, cat: "tech",
    icon: Server, color: "bg-slate-100 text-slate-600",
    name: "ERP Development",
    short: "Custom dashboards, panels & automation.",
    full: "Bespoke enterprise resource planning systems and business automation dashboards built to your exact workflow requirements — inventory, CRM, HR, billing, and more on one unified platform.",
    tags: ["Custom Dashboards", "Workflow Automation", "Role Management", "API Integration"],
    badge: "Enterprise",
  },
];

const cats = [
  { id: "all",    label: "All Services" },
  { id: "brand",  label: "Brand & Design" },
  { id: "growth", label: "Growth & Ads" },
  { id: "tech",   label: "Tech & Dev" },
];

export default function Services() {
  const [cat, setCat]     = useState("all");
  const [detail, setDetail] = useState<typeof services[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = cat === "all" ? services : services.filter(s => s.cat === cat);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="services" className="section-pad bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label + heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
            Corporate Capabilities
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight">
            Every Service You Need<br />
            <span className="text-gradient">to Scale Your Business.</span>
          </h2>
          <p className="text-sm text-neutral-500 max-w-xs sm:text-right">
            17 proven capabilities. One unified growth pipeline.
          </p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
          {cats.map(c => (
            <button
              key={c.id}
              onClick={() => { setCat(c.id); setShowAll(false); }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                cat === c.id
                  ? "bg-brand-black text-white shadow-md"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              {c.label}
              {c.id !== "all" && (
                <span className={`ml-1.5 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                  cat === c.id ? "bg-white/20" : "bg-neutral-100"
                }`}>
                  {services.filter(s => s.cat === c.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {displayed.map(s => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setDetail(s)}
                className="text-left bg-white border border-neutral-100 rounded-2xl p-4 sm:p-5 card-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  {s.badge && (
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-orange-50 text-brand-orange border border-orange-100 px-2 sm:px-2.5 py-1 rounded-full">
                      {s.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-[15px] font-black text-brand-black mb-1 sm:mb-1.5 group-hover:text-brand-orange transition-colors">
                  {s.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed mb-3 sm:mb-4">
                  {s.short}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                  {s.tags.slice(0, 3).map(t => (
                    <span key={t} className="text-[9px] sm:text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-brand-orange group-hover:gap-2 transition-all">
                  <Sparkles className="w-3 h-3" /> Learn more
                </div>
              </button>
            );
          })}
        </div>

        {/* View more */}
        {filtered.length > 6 && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border-2 border-brand-black text-brand-black font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-brand-black hover:text-white transition-all duration-200 cursor-pointer"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Services`}
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDetail(null)}
          />
          {/* Sheet (full-width on mobile, centred card on sm+) */}
          <div className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Orange top bar */}
            <div className="h-1 bg-brand-orange" />

            <div className="p-5 sm:p-8 max-h-[85vh] overflow-y-auto">
              {/* Drag handle (mobile) */}
              <div className="sm:hidden w-10 h-1 bg-neutral-300 rounded-full mx-auto mb-4" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${detail.color} flex items-center justify-center flex-shrink-0`}>
                    <detail.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-orange uppercase tracking-wider">
                      {detail.cat === "brand" ? "Brand & Design" : detail.cat === "growth" ? "Growth & Ads" : "Tech & Dev"}
                    </p>
                    <h3 className="text-base sm:text-lg font-black text-brand-black leading-tight">{detail.name}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setDetail(null)}
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-500 flex-shrink-0 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full description */}
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">{detail.full}</p>

              {/* All tags */}
              <div className="mb-6">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-3">What&apos;s Included</p>
                <div className="grid grid-cols-2 gap-2">
                  {detail.tags.map(t => (
                    <div key={t} className="flex items-center gap-2 bg-neutral-50 rounded-xl px-3 py-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span className="text-xs font-semibold text-neutral-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setDetail(null)}
                className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold text-sm py-3.5 sm:py-4 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                Inquire About This Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
