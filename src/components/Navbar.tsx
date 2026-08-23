"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Film } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

const links = [
  { name: "Home",                  href: "/" },
  { name: "Services",              href: "/services" },
  { name: "Reels & Videos",        href: "/portfolio" },
  { name: "Case Studies",          href: "/case-studies" },
  { name: "About",                 href: "/about" },
  { name: "Contact",               href: "/contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sans ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/80 backdrop-blur-xs border-b border-slate-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#0F172A] hover:text-[#0E8A94] hover:bg-slate-100 transition-all duration-150"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+919018636473"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#0E8A94] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0E8A94]" />
              <span>+91 9018636473</span>
            </a>

            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="btn-orange text-xs py-2.5 px-4 rounded-xl"
            >
              <span>Get Consultation</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => { playClick(); setOpen(!open); }}
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-xl text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden font-sans">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white border-l border-slate-200 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-slate-500 hover:text-[#0F172A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-6 space-y-1 flex-1">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-bold text-[#0F172A] hover:text-[#0E8A94] hover:bg-slate-50 transition-colors rounded-xl"
                >
                  <span>{l.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0E8A94] opacity-70" />
                </Link>
              ))}
            </nav>

            <div className="space-y-3 pt-5 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-orange w-full text-center text-sm font-bold"
              >
                Schedule Growth Consultation
              </Link>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center text-sm font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Counsel</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
