export type LeadStatus = "New" | "Contacted" | "In Discussion" | "Proposal Sent" | "Converted" | "Closed";

export interface LeadItem {
  id: string;
  name: string;
  firmName?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: LeadStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  sourceUrl?: string;
  ip?: string;
}

export interface LeadStats {
  totalLeads: number;
  newLeads: number;
  inDiscussion: number;
  converted: number;
  conversionRate: string;
  topService: string;
}
