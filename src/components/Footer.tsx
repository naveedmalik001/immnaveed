"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const nav = [
  { name: "Home",       href: "/"        },
  { name: "About",      href: "/about"       },
  { name: "Services",   href: "/services"    },
  { name: "Portfolio",  href: "/portfolio"   },
  { name: "Contact",    href: "/contact"     },
];

const svcs = [
  { name: "Corporate Branding", slug: "brand-development" },
  { name: "Meta Ads Scaling", slug: "meta-ads-marketing" },
  { name: "Website Development", slug: "website-development" },
  { name: "ERP Systems", slug: "erp-development" },
  { name: "Social Media Mgmt", slug: "social-media-management" },
  { name: "Startup Consulting", slug: "startup-friendly" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-brand-black text-white relative overflow-hidden">

      {/* Top CTA banner */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
            <div>
              <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2">Ready to Scale?</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                Let&apos;s Build Your Growth<br />
                <span className="text-brand-orange">Engine Today.</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/30"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917006113317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold text-sm px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10 sm:mb-12">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="inline-flex flex-col mb-4 sm:mb-5">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                IMM<span className="text-brand-orange">NAVEED</span>
              </span>
              <span className="text-[8.5px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                Digital Growth Agency
              </span>
            </a>
            <p className="text-xs text-neutral-500 leading-relaxed mb-4 sm:mb-5 max-w-xs">
              We engineer brand strategies, performance ad systems, and Next.js digital platforms that help businesses capture real scale online.
            </p>
            <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-4 sm:mb-5">
              Strategy That Connects. Branding That Lasts.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { icon: InstagramIcon, href: "https://instagram.com/immnaveed", label: "Instagram" },
                { icon: LinkedinIcon,  href: "https://linkedin.com",            label: "LinkedIn"  },
                { icon: MessageCircle, href: "https://wa.me/917006113317",      label: "WhatsApp"  },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl border border-white/10 flex items-center justify-center text-neutral-500 hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[9px] font-black text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4">Sitemap</h4>
            <ul className="space-y-2.5">
              {nav.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-xs text-neutral-500 hover:text-brand-orange transition-colors font-medium">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[9px] font-black text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2.5">
              {svcs.map(s => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="text-xs text-neutral-500 hover:text-brand-orange transition-colors font-medium">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-[9px] font-black text-neutral-500 uppercase tracking-widest mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2.5 sm:space-y-3">
              <a href="mailto:business@immnaveed.in" className="flex items-center gap-2 text-xs text-neutral-500 hover:text-brand-orange transition-colors font-medium">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" /> business@immnaveed.in
              </a>
              <a href="tel:+917006113317" className="flex items-center gap-2 text-xs text-neutral-500 hover:text-brand-orange transition-colors font-medium">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" /> +91 7006113317
              </a>
              <p className="text-xs text-neutral-500 font-medium">India · Remote Worldwide</p>
              <p className="text-xs text-neutral-500 font-medium">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-[10px] text-neutral-600 font-medium text-center sm:text-left">
            © {year} IMMNAVEED. All rights reserved. Made for high-growth brands.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative watermark */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center overflow-hidden h-10 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[6rem] font-black text-white leading-none whitespace-nowrap">IMMNAVEED</span>
      </div>
    </footer>
  );
}
