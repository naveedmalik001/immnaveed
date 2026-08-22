"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

const links = [
  { name: "Home",         href: "/" },
  { name: "Services",     href: "/services" },
  { name: "Portfolio",    href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process",      href: "/process" },
  { name: "About",        href: "/about" },
  { name: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#041E42]/95 backdrop-blur-md border-b border-slate-800/60 shadow-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#14B8C4] hover:bg-white/5 transition-all duration-200"
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
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#14B8C4] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#14B8C4]" />
              <span>+91 9018636473</span>
            </a>

            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="btn-teal"
            >
              <span>Talk to Consultant</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => { playClick(); setOpen(!open); }}
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-[#041E42] border-l border-slate-700/60 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-slate-700/60">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-slate-300 hover:text-white transition-colors"
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
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-100 hover:text-[#14B8C4] hover:bg-white/5 transition-colors rounded-xl"
                >
                  <span>{l.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#14B8C4] opacity-70" />
                </Link>
              ))}
            </nav>

            <div className="space-y-3 pt-5 border-t border-slate-700/60">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-orange w-full text-center text-sm font-semibold"
              >
                Schedule Strategy Session
              </Link>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center text-sm font-semibold"
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
