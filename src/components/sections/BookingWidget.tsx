"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function BookingWidget() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Educational Institutions",
    service: "Brand Strategy & Positioning",
    budget: "₹50,000 – ₹1,00,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { playClick, playHover } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);

    // Pre-fill WhatsApp message text for immediate client convenience
    const waText = encodeURIComponent(
      `Hello Er. Naveed Malik,\n\nI would like to request a strategy consultation for my business.\n\n*Name:* ${form.name}\n*Company:* ${form.company}\n*Industry:* ${form.industry}\n*Service:* ${form.service}\n*Budget:* ${form.budget}\n*Project Details:* ${form.message}`
    );
    const waUrl = `https://wa.me/919018636473?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Strategy Consultation"
          title="Engineered for Founders Ready to"
          gradientTitle="Scale Efficiently."
          subtitle="Schedule a consultation directly with Er. Naveed Malik. We audit your growth levers and formulate a execution roadmap."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          {/* Main Form */}
          <div className="lg:col-span-8 luxury-card rounded-3xl p-6 sm:p-10 border border-zinc-800/80">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Consultation Request Transmitted!</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  Connecting you directly to WhatsApp for instant priority routing...
                </p>
                <a
                  href={`https://wa.me/919018636473`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 text-black font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Open WhatsApp Directly <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={playHover}
                      placeholder="Vikram Sharma"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={playHover}
                      placeholder="name@company.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onFocus={playHover}
                      placeholder="Cambridge Education / Enterprise"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Target Industry
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      onFocus={playHover}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
                    >
                      {[
                        "Educational Institutions",
                        "Healthcare & Hospitals",
                        "Real Estate & Construction",
                        "Hotels & Luxury Hospitality",
                        "Startups & Enterprise SaaS",
                        "Government & Corporate",
                      ].map((item) => (
                        <option key={item} value={item} className="bg-zinc-900 text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Primary Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      onFocus={playHover}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
                    >
                      {[
                        "Brand Strategy & Positioning",
                        "Business Growth Consulting",
                        "Meta & Google Performance Marketing",
                        "Next.js 15 Web Engineering",
                        "Custom ERP & Software Systems",
                        "Full Growth Architecture Package",
                      ].map((item) => (
                        <option key={item} value={item} className="bg-zinc-900 text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      onFocus={playHover}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
                    >
                      {[
                        "₹25,000 – ₹50,000",
                        "₹50,000 – ₹1,00,000",
                        "₹1,00,000 – ₹2,50,000",
                        "₹2,50,000 – ₹5,00,000",
                        "₹5,00,000+",
                      ].map((item) => (
                        <option key={item} value={item} className="bg-zinc-900 text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={playHover}
                    placeholder="Tell us about your brand, current roadblocks, and target growth targets..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Request Consultation Brief <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Information Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800/80">
              <MessageSquare className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-base font-black text-white mb-2">Direct WhatsApp Routing</h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Need an immediate response? Chat directly with Er. Naveed Malik on WhatsApp.
              </p>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-md"
              >
                Chat on WhatsApp (+91 9018636473)
              </a>
            </div>

            <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">Strict Confidentiality</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                All client discussions and business data are protected under mutual non-disclosure standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
