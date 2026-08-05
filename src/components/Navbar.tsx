"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

const links = [
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
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
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </nav>

          {/* Right-aligned CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919018636473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-emerald-400 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full transition-all shadow-md shadow-amber-500/10"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              playClick();
              setOpen(!open);
            }}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg border border-zinc-800 bg-zinc-900 text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-zinc-950 border-l border-zinc-800 flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="py-6 space-y-2 flex-1">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-300 hover:bg-zinc-900 hover:text-amber-400"
                >
                  {l.name}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-black font-black text-xs uppercase tracking-widest py-3 rounded-xl shadow-md"
              >
                Book Strategy Call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-zinc-900 border border-zinc-800 text-emerald-400 font-bold text-xs uppercase tracking-widest py-3 rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
