"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const links = [
  { name: "Home",        href: "#home" },
  { name: "About",       href: "#about" },
  { name: "Services",    href: "#services" },
  { name: "Portfolio",   href: "#portfolio" },
  { name: "Contact",     href: "#contact" },
];

// Beautiful custom inline SVG logo mark
function LogoIcon() {
  return (
    <svg className="w-8 h-8 text-brand-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V8L12 15L20 8V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V12" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClick, playHover } = useSound();

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
          scrolled ? "bg-white/80 backdrop-blur-md shadow-lg shadow-black/5 border-b border-neutral-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

          {/* Logo Brand Link */}
          <a 
            href="#home" 
            onClick={playClick}
            onMouseEnter={playHover}
            className="flex items-center gap-2.5 group select-none cursor-pointer"
          >
            <div className="p-1 rounded-xl bg-orange-50 group-hover:scale-110 transition-transform duration-300">
              <LogoIcon />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-brand-black">
                IMM<span className="text-brand-orange">NAVEED</span>
              </span>
              <span className="text-[8.5px] font-black text-neutral-400 uppercase tracking-widest mt-0.5">
                Digital Growth Agency
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.name}
                href={l.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className="text-sm font-bold text-neutral-600 hover:text-brand-orange transition-colors duration-200"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://wa.me/919018636473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="text-sm font-black text-neutral-600 hover:text-[#25D366] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 bg-brand-black hover:bg-brand-orange text-white text-sm font-black px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-neutral-900/10 hover:shadow-orange-500/20"
            >
              Free Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            aria-label="Menu"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-black hover:scale-105 transition-transform"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              playClick();
              setOpen(false);
            }}
          />
          {/* Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 h-20 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <LogoIcon />
                <span className="text-lg font-black text-brand-black">
                  IMM<span className="text-brand-orange">NAVEED</span>
                </span>
              </div>
              <button 
                onClick={() => {
                  playClick();
                  setOpen(false);
                }} 
                className="p-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-5 py-8 space-y-1 overflow-y-auto">
              {links.map((l, i) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => {
                    playClick();
                    setOpen(false);
                  }}
                  onMouseEnter={playHover}
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-base font-bold text-neutral-700 hover:bg-orange-50 hover:text-brand-orange transition-all group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {l.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>

            <div className="px-6 pb-10 space-y-3">
              <a
                href="#contact"
                onClick={() => {
                  playClick();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-black text-sm py-4.5 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-center gap-2 w-full bg-neutral-100 text-brand-black font-black text-sm py-4.5 rounded-2xl hover:bg-neutral-200 transition-colors"
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
