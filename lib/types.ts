export type LeadStatus =
  | "New"
  | "Contacted"
  | "Follow-up"
  | "Site Visit"
  | "Interested"
  | "Converted"
  | "Not Interested";

export type PurposeType = "Build a Home" | "Investment" | "Both" | "Not Specified";
export type ContactMethod = "Phone" | "WhatsApp" | "Email";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  requirement?: string; // plot size
  purpose?: PurposeType;
  preferred_contact?: ContactMethod;
  message?: string;
  status: LeadStatus;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  device?: string;
  ip?: string;
  created_at: string;
  updated_at: string;
  notes?: string;
}

export interface SiteVisit {
  id: string;
  lead_id?: string;
  name: string;
  phone: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  visitors: number;
  transport_required: "Yes" | "No";
  status: "Scheduled" | "Confirmed" | "Completed" | "Rescheduled" | "Cancelled";
  message?: string;
  source?: string;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  event_name: string;
  metadata?: Record<string, any>;
  timestamp: string;
  ip?: string;
  user_agent?: string;
}

export interface SiteSettings {
  starting_price: string;
  phone_numbers: string[];
  primary_phone: string;
  whatsapp_number: string;
  announcement_text: string;
  hero_title: string;
  hero_subtitle: string;
  project_location: string;
  village_details: string;
  approvals: string[];
  brochure_url: string;
}
