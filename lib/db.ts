import fs from "fs";
import path from "path";
import os from "os";
import { Lead, LeadStatus, SiteVisit, AnalyticsEvent, SiteSettings } from "./types";

// Determine data directory (support /tmp fallback on serverless if needed)
const DATA_DIR = path.join(process.cwd(), "data");
const TMP_DATA_DIR = path.join(os.tmpdir(), "aurora_hills_data");

const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const VISITS_FILE = path.join(DATA_DIR, "site_visits.json");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

// In-memory runtime cache for serverless resiliency
const memoryStore: {
  leads?: Lead[];
  visits?: SiteVisit[];
  events?: AnalyticsEvent[];
  settings?: SiteSettings;
} = {};

function ensureDir(dirPath: string) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  } catch (e) {
    // Ignore directory creation failure on read-only environments
  }
}

function readJSON<T>(filePath: string, fallback: T, memoryKey: keyof typeof memoryStore): T {
  if (memoryStore[memoryKey]) {
    return memoryStore[memoryKey] as unknown as T;
  }

  ensureDir(DATA_DIR);
  if (!fs.existsSync(filePath)) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2), "utf-8");
    } catch {
      // Read-only filesystem, use memory fallback
    }
    (memoryStore as any)[memoryKey] = fallback;
    return fallback;
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as T;
    (memoryStore as any)[memoryKey] = data;
    return data;
  } catch {
    (memoryStore as any)[memoryKey] = fallback;
    return fallback;
  }
}

function writeJSON<T>(filePath: string, data: T, memoryKey: keyof typeof memoryStore): void {
  (memoryStore as any)[memoryKey] = data;
  try {
    ensureDir(DATA_DIR);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    // If process.cwd() is read-only (e.g. Netlify/Vercel serverless), try /tmp fallback
    try {
      ensureDir(TMP_DATA_DIR);
      const tmpFile = path.join(TMP_DATA_DIR, path.basename(filePath));
      fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), "utf-8");
    } catch {
      // In-memory cache is already updated
    }
  }
}

const defaultSettings: SiteSettings = {
  starting_price: "₹35.99 Lakhs",
  phone_numbers: ["9019765265", "7019165265", "9880166275", "9242508288"],
  primary_phone: "9019765265",
  whatsapp_number: "9019765265",
  announcement_text: "Hosa Lifestyle, Hosa Dharwad – Pre-Launch Exclusive Plot Opportunities Open",
  hero_title: "LIVE CLOSER TO NATURE. INVEST IN TOMORROW.",
  hero_subtitle: "A premium, thoughtfully planned plotted community in Dharwad, designed around lifestyle, connectivity, greenery and long-term value.",
  project_location: "Mansur & Sanna Somapura, Dharwad, Karnataka (Near NH-4 Highway)",
  village_details: "ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ (Village: Mansur + Sanna Somapura, Taluka: Dharwad)",
  approvals: ["NA-KJP Approved", "HDUDA Approved", "Bank Loans Approved", "Property Tax Updated"],
  brochure_url: "/brochure/the-aurora-hills-brochure.pdf",
};

const initialLeads: Lead[] = [
  {
    id: "lead-1001",
    name: "Ramesh Patil",
    phone: "9845012345",
    email: "ramesh.patil@example.com",
    requirement: "1500 sq.ft (30x50)",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "Interested in east-facing plot near the clubhouse.",
    status: "Site Visit",
    source: "Website Hero Form",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "dharwad_plots_launch",
    device: "Mobile",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    notes: "Site visit scheduled for upcoming Sunday 11 AM."
  },
  {
    id: "lead-1002",
    name: "Dr. Ananya Kulkarni",
    phone: "9448198765",
    email: "ananya.k@example.com",
    requirement: "2400 sq.ft (40x60)",
    purpose: "Both",
    preferred_contact: "WhatsApp",
    message: "Looking for corner plot with green view.",
    status: "Interested",
    source: "Master Plan Modal",
    utm_source: "facebook",
    utm_medium: "social",
    utm_campaign: "aurora_lifestyle",
    device: "Desktop",
    created_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 1).toISOString(),
    notes: "Shared layout map on WhatsApp. Follow up on Tuesday."
  },
  {
    id: "lead-1003",
    name: "Vinay Desai",
    phone: "9980554321",
    email: "vinay.desai@example.com",
    requirement: "1200 sq.ft (30x40)",
    purpose: "Investment",
    preferred_contact: "Phone",
    message: "Need starting price and bank loan approval details.",
    status: "Contacted",
    source: "Pricing Section",
    utm_source: "direct",
    device: "Mobile",
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: "Briefed about SBI/HDFC approval and NH-4 connectivity."
  }
];

const initialVisits: SiteVisit[] = [
  {
    id: "visit-2001",
    lead_id: "lead-1001",
    name: "Ramesh Patil",
    phone: "9845012345",
    email: "ramesh.patil@example.com",
    preferred_date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    preferred_time: "11:00 AM",
    visitors: 3,
    transport_required: "Yes",
    status: "Confirmed",
    message: "Pickup from Dharwad CBT bus stand requested.",
    source: "Site Visit Form",
    created_at: new Date(Date.now() - 86400000).toISOString()
  }
];

export const db = {
  getLeads(): Lead[] {
    return readJSON<Lead[]>(LEADS_FILE, initialLeads, "leads");
  },

  createLead(data: Omit<Lead, "id" | "created_at" | "updated_at" | "status"> & { status?: LeadStatus }): Lead {
    const leads = [...this.getLeads()];
    const newLead: Lead = {
      ...data,
      id: "lead-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      status: data.status || "New",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    leads.unshift(newLead);
    writeJSON(LEADS_FILE, leads, "leads");
    return newLead;
  },

  updateLead(id: string, updates: Partial<Lead>): Lead | null {
    const leads = [...this.getLeads()];
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return null;
    leads[index] = {
      ...leads[index],
      ...updates,
      updated_at: new Date().toISOString()
    };
    writeJSON(LEADS_FILE, leads, "leads");
    return leads[index];
  },

  deleteLead(id: string): boolean {
    const leads = this.getLeads();
    const filtered = leads.filter(l => l.id !== id);
    if (filtered.length === leads.length) return false;
    writeJSON(LEADS_FILE, filtered, "leads");
    return true;
  },

  getSiteVisits(): SiteVisit[] {
    return readJSON<SiteVisit[]>(VISITS_FILE, initialVisits, "visits");
  },

  createSiteVisit(data: Omit<SiteVisit, "id" | "created_at" | "status"> & { status?: SiteVisit["status"] }): SiteVisit {
    const visits = [...this.getSiteVisits()];
    const newVisit: SiteVisit = {
      ...data,
      id: "visit-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      status: data.status || "Scheduled",
      created_at: new Date().toISOString()
    };
    visits.unshift(newVisit);
    writeJSON(VISITS_FILE, visits, "visits");
    return newVisit;
  },

  updateSiteVisit(id: string, updates: Partial<SiteVisit>): SiteVisit | null {
    const visits = [...this.getSiteVisits()];
    const index = visits.findIndex(v => v.id === id);
    if (index === -1) return null;
    visits[index] = { ...visits[index], ...updates };
    writeJSON(VISITS_FILE, visits, "visits");
    return visits[index];
  },

  logEvent(eventName: string, metadata?: Record<string, any>, ip?: string, userAgent?: string): void {
    const events = [...readJSON<AnalyticsEvent[]>(EVENTS_FILE, [], "events")];
    events.unshift({
      id: "evt-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      event_name: eventName,
      metadata,
      ip,
      user_agent: userAgent,
      timestamp: new Date().toISOString()
    });
    if (events.length > 1000) events.length = 1000;
    writeJSON(EVENTS_FILE, events, "events");
  },

  getEvents(): AnalyticsEvent[] {
    return readJSON<AnalyticsEvent[]>(EVENTS_FILE, [], "events");
  },

  getSettings(): SiteSettings {
    return readJSON<SiteSettings>(SETTINGS_FILE, defaultSettings, "settings");
  },

  updateSettings(updates: Partial<SiteSettings>): SiteSettings {
    const current = this.getSettings();
    const merged = { ...current, ...updates };
    writeJSON(SETTINGS_FILE, merged, "settings");
    return merged;
  }
};
