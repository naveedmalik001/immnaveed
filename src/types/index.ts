export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "Strategy" | "Engineering" | "Performance" | "Design" | "Consulting" | "Branding" | "Video Production" | "Post Production" | "Analytics" | "Event Production" | string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  impactMetrics: string[];
  idealFor: string[];
  techStack?: string[];
  iconName: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  tagline: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: string[];
  primaryMetric: {
    label: string;
    value: string;
  };
  liveUrl?: string;
  featured: boolean;
  colorHex: string;
  tags: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keyChallenges: string[];
  ourSolutions: string[];
  growthStats: string;
  iconName: string;
}

export interface ProcessStage {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
  companyIndustry: string;
  quote: string;
  metricAchieved: string;
  avatarUrl?: string;
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  company: string;
  industry: string;
  serviceNeeded: string;
  estimatedBudget: string;
  projectBrief: string;
}
