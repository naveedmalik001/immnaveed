"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

const links = [
  { name: "Capabilities", href: "/services" },
  { name: "Case Process", href: "/#process" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Sectors",      href: "/industries" },
  { name: "Founder",      href: "/about" },
  { name: "Contact",      href: "/contact" },
];

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
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* 1. Left Brand Logo */}
          <div className="flex items-center gap-8">
            <Logo />
          </div>

          {/* 2. Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
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

          {/* 3. Far Right Primary Action Buttons (Right-aligned CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919018636473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-black uppercase tracking-widest transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle (Far Right on Mobile) */}
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-white hover:border-amber-500/50"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => {
              playClick();
              setOpen(false);
            }}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-zinc-800 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <Logo onClick={() => setOpen(false)} />
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

            <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => {
                    playClick();
                    setOpen(false);
                  }}
                  className="block px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-300 hover:bg-zinc-900 hover:text-amber-400 transition-colors"
                >
                  {l.name}
                </Link>
              ))}
            </nav>

            {/* Right-Aligned Mobile CTAs */}
            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <Link
                href="/contact"
                onClick={() => {
                  playClick();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-800 text-emerald-400 font-black text-xs uppercase tracking-widest py-3.5 rounded-xl border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
