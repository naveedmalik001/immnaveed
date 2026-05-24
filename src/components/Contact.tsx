"use client";

import { useState } from "react";
import { Mail, Phone, Send, MessageSquare, ArrowRight, MapPin, Clock, CheckCircle2 } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const contacts = [
  { icon: Mail,          label: "Email Us",       value: "business@immnaveed.in",    href: "mailto:business@immnaveed.in", color: "text-brand-orange", bg: "bg-orange-100", isLink: true },
  { icon: Phone,         label: "Call Directly",  value: "+91 7006113317",           href: "tel:+917006113317",           color: "text-blue-600",    bg: "bg-blue-100",   isLink: true },
  { icon: InstagramIcon, label: "Instagram",      value: "@immnaveed",               href: "https://instagram.com/immnaveed", color: "text-rose-500", bg: "bg-rose-100", isLink: true },
  { icon: MapPin,        label: "Location",       value: "India · Remote Worldwide", href: "#",                           color: "text-emerald-600", bg: "bg-emerald-100", isLink: false },
  { icon: Clock,         label: "Response Time",  value: "Within 24 hours",          href: "#",                           color: "text-amber-600",   bg: "bg-amber-100",  isLink: false },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", service:"Branding & Identity", budget:"₹10,000 – ₹25,000", message:"" });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setForm({ name:"", email:"", service:"Branding & Identity", budget:"₹10,000 – ₹25,000", message:"" });
    }, 5000);
  };

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">Start a Conversation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight mb-3">
          Let&apos;s Build Your<br />
          <span className="text-gradient">Growth System Together.</span>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mb-6 sm:mb-10 leading-relaxed">
          Fill out the brief below and we&apos;ll reply within 24 hours with a custom growth plan tailored to your business.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Form */}
          <div className="lg:col-span-7 bg-brand-gray border border-neutral-100 rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-sm font-black text-brand-black">Project Brief</h3>
                <p className="text-[10px] text-neutral-400 font-medium">Free · No commitment</p>
              </div>
            </div>

            {done ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-14 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h4 className="text-base sm:text-lg font-black text-brand-black mb-2">Brief Sent! 🎉</h4>
                <p className="text-xs sm:text-sm text-neutral-500">We&apos;ll reply within 24 hours with your custom growth plan.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">Your Name *</label>
                    <input
                      id="c-name" type="text" required
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Vikram Sharma"
                      className="w-full bg-white border border-neutral-200 focus:border-brand-orange focus:outline-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-brand-black placeholder:text-neutral-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">Business Email *</label>
                    <input
                      id="c-email" type="email" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="name@company.com"
                      className="w-full bg-white border border-neutral-200 focus:border-brand-orange focus:outline-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-brand-black placeholder:text-neutral-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="c-svc" className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">Service Needed</label>
                    <select
                      id="c-svc"
                      value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full bg-white border border-neutral-200 focus:border-brand-orange focus:outline-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-brand-black transition-colors cursor-pointer"
                    >
                      {["Branding & Identity","Performance Marketing","Meta Ads","Website Development","ERP Development","Social Media Management","Business Strategy","Full Growth Package"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-bud" className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">Monthly Budget (INR)</label>
                    <select
                      id="c-bud"
                      value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}
                      className="w-full bg-white border border-neutral-200 focus:border-brand-orange focus:outline-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-brand-black transition-colors cursor-pointer"
                    >
                      {["₹10,000 – ₹25,000","₹25,000 – ₹50,000","₹50,000 – ₹1,00,000","₹1,00,000 – ₹2,50,000","₹2,50,000 – ₹5,00,000","₹5,00,000+"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-msg" className="block text-[10px] font-black text-neutral-400 uppercase tracking-wider mb-1.5 sm:mb-2">Project Details *</label>
                  <textarea
                    id="c-msg" required rows={3}
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your brand, current challenges, and scaling goals..."
                    className="w-full bg-white border border-neutral-200 focus:border-brand-orange focus:outline-none px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium text-brand-black placeholder:text-neutral-400 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-sm py-3.5 sm:py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 group cursor-pointer"
                >
                  Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right info */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            {/* Contact cards */}
            {contacts.map(c => {
              const Icon = c.icon;
              return c.isLink ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 sm:gap-4 bg-white border border-neutral-100 rounded-xl p-3 sm:p-4 hover:border-brand-orange/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg} flex items-center justify-center ${c.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-neutral-400 uppercase tracking-wider">{c.label}</p>
                    <p className="text-xs sm:text-sm font-black text-brand-black group-hover:text-brand-orange transition-colors mt-0.5 truncate">
                      {c.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex items-center gap-3 sm:gap-4 bg-white border border-neutral-100 rounded-xl p-3 sm:p-4 group"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg} flex items-center justify-center ${c.color} flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-black text-neutral-400 uppercase tracking-wider">{c.label}</p>
                    <p className="text-xs sm:text-sm font-black text-brand-black mt-0.5 truncate">
                      {c.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <div className="bg-brand-black rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none -translate-y-8 translate-x-8" />
              <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-brand-orange mb-2.5 sm:mb-3 relative z-10" />
              <h4 className="text-sm sm:text-base font-black text-white mb-1.5 relative z-10">Need Quick Reply?</h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed mb-4 sm:mb-5 relative z-10">
                Skip the form — chat directly with our lead growth strategist on WhatsApp. Replies within 1 hour.
              </p>
              <a
                href="https://wa.me/917006113317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-orange-600 transition-colors relative z-10 shadow-lg shadow-orange-900/30"
              >
                Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
