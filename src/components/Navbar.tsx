"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Home",        href: "#home" },
  { name: "About",       href: "#about" },
  { name: "Services",    href: "#services" },
  { name: "Portfolio",   href: "#portfolio" },
  { name: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-brand-black">
              IMM<span className="text-brand-orange">NAVEED</span>
            </span>
            <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-widest mt-0.5">
              Digital Growth Agency
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm font-semibold text-neutral-600 hover:text-brand-orange transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917006113317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-neutral-600 hover:text-brand-orange transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
            >
              Free Call <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-black"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 h-16 border-b border-neutral-100">
              <span className="text-lg font-black text-brand-black">
                IMM<span className="text-brand-orange">NAVEED</span>
              </span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-neutral-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {links.map((l, i) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-neutral-700 hover:bg-orange-50 hover:text-brand-orange transition-colors group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {l.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>

            <div className="px-4 pb-8 space-y-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold text-sm py-4 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917006113317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-neutral-100 text-brand-black font-bold text-sm py-4 rounded-2xl hover:bg-neutral-200 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
