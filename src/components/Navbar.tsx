"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const links = [
  { name: "Services",     href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Industries",   href: "/industries" },
  { name: "Process",      href: "/process" },
  { name: "About",        href: "/about" },
  { name: "Contact",      href: "/contact" },
];

function BrandMark() {
  return (
    <svg className="w-7 h-7 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V8L12 15L20 8V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4V12" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={playClick}
            onMouseEnter={playHover}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/50 transition-all">
              <BrandMark />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-white">
                IMM<span className="text-amber-500">NAVEED</span>
              </span>
              <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mt-0.5">
                Digital Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919018636473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="text-xs font-black uppercase tracking-widest text-zinc-300 hover:text-[#25D366] transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all shadow-lg shadow-amber-500/15"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => {
              playClick();
              setOpen(false);
            }}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <BrandMark />
                <span className="text-base font-black text-white">
                  IMM<span className="text-amber-500">NAVEED</span>
                </span>
              </div>
              <button
                onClick={() => {
                  playClick();
                  setOpen(false);
                }}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-8 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => {
                    playClick();
                    setOpen(false);
                  }}
                  className="block px-4 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest text-zinc-300 hover:bg-zinc-900 hover:text-amber-400 transition-colors"
                >
                  {l.name}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <Link
                href="/contact"
                onClick={() => {
                  playClick();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-amber-500/20"
              >
                Book Strategy Call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl border border-zinc-800"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
