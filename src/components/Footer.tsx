"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useSound } from "@/hooks/useSound";

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

// Inline custom logo matching Navbar
function LogoIcon() {
  return (
    <svg className="w-8 h-8 text-brand-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V8L12 15L20 8V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  { name: "Home",       href: "#home"      },
  { name: "About",      href: "#about"     },
  { name: "Services",   href: "#services"  },
  { name: "Portfolio",  href: "#portfolio" },
  { name: "Contact",    href: "#contact"   },
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
  const { playClick, playHover } = useSound();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-brand-black text-white relative overflow-hidden font-sans border-t border-neutral-900">

      {/* Top CTA banner */}
      <div className="border-b border-white/5 bg-gradient-to-r from-neutral-950 to-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2.5">Ready to Scale?</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Let&apos;s Build Your Growth<br />
                <span className="text-brand-orange">Engine Today.</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-black text-sm px-7 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-orange-900/40"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-bold text-sm px-7 py-4 rounded-full hover:bg-white/5 transition-all duration-300 hover:border-white/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">

          {/* Brand col */}
          <div className="sm:col-span-2">
            <a 
              href="#home" 
              onClick={playClick}
              className="inline-flex items-center gap-2.5 mb-6 select-none"
            >
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-white">
                  IMM<span className="text-brand-orange">NAVEED</span>
                </span>
                <span className="text-[8.5px] font-black text-neutral-500 uppercase tracking-widest mt-1">
                  Digital Growth Agency
                </span>
              </div>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 max-w-sm">
              We engineer premium brand strategies, high-ROAS advertising funnels, and lightning-fast Next.js platforms that help companies scale.
            </p>
            <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-6">
              Strategy That Connects. Branding That Lasts.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              {[
                { icon: InstagramIcon, href: "https://instagram.com/immnaveed", label: "Instagram" },
                { icon: LinkedinIcon,  href: "https://linkedin.com",            label: "LinkedIn"  },
                { icon: MessageCircle, href: "https://wa.me/919018636473",      label: "WhatsApp"  },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-neutral-500 hover:border-brand-orange hover:text-brand-orange hover:bg-white/5 transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-5">Sitemap</h4>
            <ul className="space-y-3.5">
              {nav.map(l => (
                <li key={l.name}>
                  <a 
                    href={l.href} 
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-xs text-neutral-400 hover:text-brand-orange transition-colors font-semibold"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3.5">
              {svcs.map(s => (
                <li key={s.slug}>
                  <a 
                    href={`/services/${s.slug}`} 
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-xs text-neutral-400 hover:text-brand-orange transition-colors font-semibold"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3.5">
              <a 
                href="mailto:business@immnaveed.in" 
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-brand-orange transition-colors font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" /> business@immnaveed.in
              </a>
              <a 
                href="tel:+919018636473" 
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-brand-orange transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" /> +91 9018636473
              </a>
              <p className="text-xs text-neutral-500 font-semibold">India · Remote Worldwide</p>
              <p className="text-xs text-neutral-500 font-semibold">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="text-[10px] text-neutral-600 font-semibold text-center sm:text-left tracking-wide">
            © {year} IMMNAVEED. All rights reserved. Made for high-growth brands.
          </p>
          <button
            onClick={() => {
              playClick();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 hover:border-brand-orange hover:text-brand-orange hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative watermark */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center overflow-hidden h-14 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[8rem] font-black text-white leading-none whitespace-nowrap tracking-tighter">IMMNAVEED</span>
      </div>
    </footer>
  );
}
