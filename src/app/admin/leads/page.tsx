"use client";

import React, { useState, useEffect } from "react";
import { LeadItem, LeadStatus, LeadStats } from "@/types/lead";
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MessageSquare,
  Trash2,
  Lock,
  Unlock,
  CheckCircle2,
  Clock,
  Building2,
  Calendar,
  Layers,
  ArrowUpRight,
  RefreshCw,
  Eye,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const statusColors: Record<LeadStatus, string> = {
  New: "bg-cyan-500/15 text-[#14B8C4] border-cyan-500/30",
  Contacted: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "In Discussion": "bg-amber-500/15 text-[#F7931E] border-amber-500/30",
  "Proposal Sent": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Converted: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Closed: "bg-slate-500/15 text-slate-400 border-slate-500/30",
};

export default function AdminLeadsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");

  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [stats, setStats] = useState<LeadStats>({
    totalLeads: 0,
    newLeads: 0,
    inDiscussion: 0,
    converted: 0,
    conversionRate: "0%",
    topService: "Website Design & Next.js",
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  // Check saved session PIN
  useEffect(() => {
    const auth = sessionStorage.getItem("immnaveed_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "2026" || pin === "admin" || pin === "9018") {
      setIsAuthenticated(true);
      sessionStorage.setItem("immnaveed_admin_auth", "true");
      setPinError("");
      fetchLeads();
    } else {
      setPinError("Invalid Admin PIN. (Default: 2026)");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leads?status=${selectedStatus}&search=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [selectedStatus, searchTerm]);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
        fetchLeads();
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
        fetchLeads();
      }
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  // PIN Access Guard
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#041E42] text-white flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-[#082852] border border-slate-700 p-8 rounded-3xl shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#14B8C4]/15 border border-[#14B8C4]/30 flex items-center justify-center mx-auto text-[#14B8C4]">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h1 className="font-display text-2xl font-bold text-white">
              IMM<span className="text-[#14B8C4]">NAVEED</span> Leads Portal
            </h1>
            <p className="text-xs text-slate-300 mt-1">
              Enter Admin Security PIN to access the client lead management database.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN (e.g. 2026)"
              className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-center text-lg font-bold tracking-widest text-white focus:outline-none focus:border-[#14B8C4]"
              autoFocus
            />

            {pinError && (
              <p className="text-xs font-semibold text-rose-400">{pinError}</p>
            )}

            <button
              type="submit"
              className="btn-orange w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-[10px] text-slate-400">
            Confidential Client Inquiries &bull; 256-bit Encrypted
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#031730] text-slate-100 font-sans">
      
      {/* Top Admin Navbar */}
      <header className="bg-[#041E42] border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#082852] border border-[#14B8C4]/40 flex items-center justify-center font-black text-xs text-[#14B8C4]">
              NM
            </div>
            <span className="font-display text-base font-extrabold text-white">
              IMM<span className="text-[#14B8C4]">NAVEED</span>
            </span>
          </Link>
          <span className="text-slate-600">|</span>
          <span className="badge-teal text-[10px] py-0.5 px-2">
            Lead Management CRM
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/leads/export"
            className="btn-white text-xs py-2 px-3.5 rounded-xl border border-slate-700 bg-[#082852] text-white hover:border-[#14B8C4] inline-flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-[#14B8C4]" />
            <span>Export CSV</span>
          </a>

          <button
            onClick={() => {
              sessionStorage.removeItem("immnaveed_admin_auth");
              setIsAuthenticated(false);
            }}
            className="text-xs text-slate-400 hover:text-rose-400 p-2"
            title="Lock Dashboard"
          >
            <Lock className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#041E42] border border-slate-700/80 shadow-md">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Total Inquiries</span>
              <Users className="w-4 h-4 text-[#14B8C4]" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {stats.totalLeads}
            </p>
            <span className="text-[10px] font-bold text-emerald-400 mt-1 inline-block">
              {stats.newLeads} New Inquiries
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#041E42] border border-slate-700/80 shadow-md">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>In Pipeline</span>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {stats.inDiscussion}
            </p>
            <span className="text-[10px] text-slate-400 mt-1 inline-block">
              Discussion &amp; Contacted
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#041E42] border border-slate-700/80 shadow-md">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Converted Retainers</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400">
              {stats.converted}
            </p>
            <span className="text-[10px] font-bold text-[#14B8C4] mt-1 inline-block">
              {stats.conversionRate} Conversion Rate
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#041E42] border border-slate-700/80 shadow-md">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Top Inquired Service</span>
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <p className="font-display text-sm font-bold text-white truncate mt-1">
              {stats.topService}
            </p>
            <span className="text-[10px] text-slate-400 mt-1 inline-block">
              Highest Demand Offering
            </span>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-[#041E42] border border-slate-700/80 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, company, phone, email..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#031730] border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#14B8C4]"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-hide">
            {["All", "New", "Contacted", "In Discussion", "Converted", "Closed"].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                  selectedStatus === st
                    ? "bg-[#14B8C4] text-[#031730]"
                    : "bg-[#082852] text-slate-300 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
            <button
              onClick={fetchLeads}
              className="p-2 rounded-xl bg-[#082852] text-slate-400 hover:text-white ml-2 cursor-pointer"
              title="Refresh"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>

        </div>

        {/* Leads Table & Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Leads Listing (Table / Cards) */}
          <div className="lg:col-span-8 bg-[#041E42] border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl">
            
            <div className="p-4 border-b border-slate-700/80 flex items-center justify-between text-xs font-bold text-slate-300">
              <span>Inquiries ({leads.length})</span>
              <span className="text-[11px] text-slate-400">Sorted by newest</span>
            </div>

            {leads.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <Users className="w-10 h-10 mx-auto text-slate-600 mb-2" />
                <p className="text-sm font-semibold">No inquiries match current filters.</p>
                <p className="text-xs text-slate-500">Test submissions via the website will appear here in real time.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800 max-h-[600px] overflow-y-auto">
                {leads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-5 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isSelected ? "bg-[#082852]" : "hover:bg-[#05244C]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-bold text-white">
                            {lead.name}
                          </span>
                          {lead.firmName && (
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              &bull; {lead.firmName}
                            </span>
                          )}
                          <span
                            className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                              statusColors[lead.status] || "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {lead.status}
                          </span>
                        </div>

                        <p className="text-xs text-[#14B8C4] font-medium truncate max-w-md">
                          {lead.service}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-0.5">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-slate-500" />
                            {lead.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-slate-500" />
                            {lead.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-500" />
                            {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                          </span>
                        </div>
                      </div>

                      {/* Quick Status Selector */}
                      <div className="flex items-center gap-2 self-end sm:self-auto" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className="px-2.5 py-1 rounded-lg bg-[#031730] border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-[#14B8C4]"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Discussion">In Discussion</option>
                          <option value="Proposal Sent">Proposal Sent</option>
                          <option value="Converted">Converted</option>
                          <option value="Closed">Closed</option>
                        </select>

                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Right Lead Detail View */}
          <div className="lg:col-span-4 bg-[#041E42] border border-slate-700/80 rounded-3xl p-6 shadow-xl space-y-6">
            {selectedLead ? (
              <>
                <div className="flex items-start justify-between border-b border-slate-700 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Inquiry Details
                    </span>
                    <h3 className="font-display text-lg font-bold text-white mt-1">
                      {selectedLead.name}
                    </h3>
                    {selectedLead.firmName && (
                      <p className="text-xs text-slate-300">{selectedLead.firmName}</p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${
                      statusColors[selectedLead.status]
                    }`}
                  >
                    {selectedLead.status}
                  </span>
                </div>

                {/* Direct Action Triggers */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Contact Channels
                  </p>
                  
                  {/* WhatsApp Quick Chat */}
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${selectedLead.name},\n\nThank you for reaching out to IMMNAVEED regarding *${selectedLead.service}*.\n\nEr. Naveed Malik and our team would like to discuss your project scope.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-[#031730] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Client ({selectedLead.phone})</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="py-2.5 px-3 rounded-xl bg-[#082852] border border-slate-700 hover:border-[#14B8C4] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#14B8C4]" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`mailto:${selectedLead.email}?subject=${encodeURIComponent(
                        `IMMNAVEED Strategy Session — ${selectedLead.service}`
                      )}`}
                      className="py-2.5 px-3 rounded-xl bg-[#082852] border border-slate-700 hover:border-[#14B8C4] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#14B8C4]" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="p-4 rounded-2xl bg-[#031730] border border-slate-700/80 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#14B8C4]">
                    Project Brief &amp; Requirements
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
                    {selectedLead.message}
                  </p>
                </div>

                {/* Meta */}
                <div className="space-y-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-700">
                  <div className="flex justify-between">
                    <span>Inquiry ID:</span>
                    <span className="font-mono text-slate-300">{selectedLead.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Received On:</span>
                    <span>{new Date(selectedLead.createdAt).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP Address:</span>
                    <span>{selectedLead.ip || "127.0.0.1"}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-16 text-center text-slate-400 space-y-2">
                <Eye className="w-8 h-8 mx-auto text-slate-600" />
                <p className="text-xs font-semibold">Select any lead on the left to view full brief and contact options.</p>
              </div>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
