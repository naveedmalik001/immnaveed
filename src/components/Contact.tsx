"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, MessageSquare, ArrowRight, MapPin, Clock, CheckCircle2, Lock } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const contacts = [
  { icon: Mail,          label: "Email Direct",   value: "business@immnaveed.in",    href: "mailto:business@immnaveed.in", isLink: true },
  { icon: Phone,         label: "Call Directly",  value: "+91 9018636473",           href: "tel:+919018636473",           isLink: true },
  { icon: InstagramIcon, label: "Instagram",      value: "@immnaveed",               href: "https://instagram.com/immnaveed", isLink: true },
  { icon: MapPin,        label: "Headquarters",   value: "Srinagar, J&K · Worldwide", href: "#",                           isLink: false },
  { icon: Clock,         label: "Guaranteed Reply", value: "Within 24 business hours", href: "#",                           isLink: false },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"Brand Strategy & Positioning", message:"" });
  const [done, setDone] = useState(false);
  const { playClick, playHover } = useSound();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setDone(true);
    const waText = encodeURIComponent(
      `Hello Er. Naveed Malik,\n\nI would like to discuss a project.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Service:* ${form.service}\n*Message:* ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919018636473?text=${waText}`, "_blank");
      setDone(false);
      setForm({ name:"", email:"", phone:"", service:"Brand Strategy & Positioning", message:"" });
    }, 1500);
  };

  return (
    <section id="contact" className="section-pad bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint font-sans border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Start a Conversation"
          title="Let's Build Your"
          gradientTitle="Growth System Together."
          subtitle="Fill out the project brief below to schedule a direct strategy consultation with Er. Naveed Malik."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">

          {/* Form */}
          <div className="lg:col-span-7 bg-[#05244C]/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#14B8C4]/15 border border-[#14B8C4]/30 rounded-xl flex items-center justify-center flex-shrink-0 text-[#14B8C4]">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">Project Scope &amp; Discovery</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Free Consultation · Confidential</p>
              </div>
            </div>

            {done ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2">Brief Transmitted Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300">Redirecting to WhatsApp for direct priority scheduling with Er. Naveed Malik.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Your Name *</label>
                    <input
                      id="c-name" type="text" required
                      value={form.name} 
                      onChange={e => setForm({...form, name: e.target.value})}
                      onFocus={playHover}
                      placeholder="Vikram Sharma"
                      className="input-cambridge"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Business Email *</label>
                    <input
                      id="c-email" type="email" required
                      value={form.email} 
                      onChange={e => setForm({...form, email: e.target.value})}
                      onFocus={playHover}
                      placeholder="name@company.com"
                      className="input-cambridge"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-phone" className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Phone / WhatsApp</label>
                    <input
                      id="c-phone" type="text"
                      value={form.phone} 
                      onChange={e => setForm({...form, phone: e.target.value})}
                      onFocus={playHover}
                      placeholder="+91 98765 43210"
                      className="input-cambridge"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-service" className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Core Service Needed</label>
                    <select
                      id="c-service"
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      onFocus={playHover}
                      className="input-cambridge cursor-pointer"
                    >
                      <option value="Brand Strategy & Positioning" className="bg-[#031730] text-white">Brand Strategy &amp; Positioning</option>
                      <option value="Meta & Google Performance Ads" className="bg-[#031730] text-white">Meta &amp; Google Performance Ads</option>
                      <option value="Next.js 15 Web Engineering" className="bg-[#031730] text-white">Next.js 15 Web Engineering</option>
                      <option value="Executive Growth Consulting" className="bg-[#031730] text-white">Executive Growth Consulting</option>
                      <option value="Complete Agency Retainer" className="bg-[#031730] text-white">Complete Agency Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Project Brief &amp; Goals *</label>
                  <textarea
                    id="c-msg" required rows={4}
                    value={form.message} 
                    onChange={e => setForm({...form, message: e.target.value})}
                    onFocus={playHover}
                    placeholder="Tell us about your brand goals, target timeline, or current acquisition challenges..."
                    className="input-cambridge resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-[#14B8C4]" />
                    <span>256-bit Encrypted &amp; Confidential</span>
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="btn-orange text-sm w-full sm:w-auto"
                  >
                    <span>Request Strategy Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#082852]/90 border border-slate-700/80 shadow-xl space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Direct Communication Channels</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly through our official corporate touchpoints. We prioritize direct founder communication.
              </p>

              <div className="space-y-3 pt-2">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="p-3.5 rounded-2xl bg-[#031730] border border-slate-700/80 flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#14B8C4]/15 text-[#14B8C4] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{c.label}</p>
                        {c.isLink ? (
                          <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-[#14B8C4] transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-xs font-bold text-white">{c.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#031730] border border-slate-700/80 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Need immediate response?</p>
                <p className="text-[10px] text-slate-400">Direct WhatsApp line open</p>
              </div>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-2 px-3.5 rounded-xl"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
