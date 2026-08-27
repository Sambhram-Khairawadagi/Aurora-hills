"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  Settings,
  Activity,
  Download,
  Search,
  Filter,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Car,
  TrendingUp,
  Lock,
  LogOut,
  RefreshCw,
  Eye,
  Edit,
  Save,
  Trash2,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Lead, SiteVisit, LeadStatus, SiteSettings } from "@/lib/types";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"leads" | "visits" | "settings" | "analytics">("leads");

  // Data States
  const [leads, setLeads] = useState<Lead[]>([]);
  const [siteVisits, setSiteVisits] = useState<SiteVisit[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [leadNotes, setLeadNotes] = useState("");

  const [showAddLead, setShowAddLead] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({ name: "", phone: "", email: "", requirement: "", source: "Manual Entry" });

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  // Settings form states
  const [settingsForm, setSettingsForm] = useState<Partial<SiteSettings>>({});
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Check auth session on mount by attempting to fetch data
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("aurora_admin_token", "authenticated_aurora_2026");
        setIsAuthenticated(true);
        fetchDashboardData();
      } else {
        setAuthError(data.error || "Invalid administrator credentials");
      }
    } catch {
      setAuthError("Network error. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("aurora_admin_token");
    setIsAuthenticated(false);
    setPassword("");
  };

  const fetchDashboardData = async () => {
    setIsLoadingData(true);
    try {
      const [leadsRes, visitsRes, statsRes, settingsRes] = await Promise.all([
        fetch("/api/admin/leads"),
        fetch("/api/admin/site-visits"),
        fetch("/api/admin/stats"),
        fetch("/api/admin/settings")
      ]);

      if (leadsRes.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      setIsAuthenticated(true);

      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData.leads || (Array.isArray(leadsData) ? leadsData : []));
      }

      if (visitsRes.ok) {
        const visitsData = await visitsRes.json();
        setSiteVisits(visitsData.visits || (Array.isArray(visitsData) ? visitsData : []));
      }

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData.stats || statsData);
      }

      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        const s = settingsData.settings || settingsData;
        setSettings(s);
        setSettingsForm(s);
      }
    } catch (err) {
      console.error("Failed to load admin data", err);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        if (selectedLead?.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleSaveNotes = async (leadId: string) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: leadNotes })
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, notes: leadNotes } : l))
        );
        if (selectedLead?.id === leadId) {
          setSelectedLead((prev) => (prev ? { ...prev, notes: leadNotes } : null));
        }
        setIsEditingNotes(false);
      }
    } catch (err) {
      console.error("Failed to save notes", err);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead? This action cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
      }
    } catch (err) {
      console.error("Failed to delete lead", err);
    }
  };

  const handleAddManualLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeadForm)
      });
      if (res.ok) {
        const added = await res.json();
        setLeads([added, ...leads]);
        setShowAddLead(false);
        setNewLeadForm({ name: "", phone: "", email: "", requirement: "", source: "Manual Entry" });
      }
    } catch (err) {
      console.error("Failed to add manual lead", err);
    }
  };

  const handleDeleteVisit = async (visitId: string) => {
    if (!confirm("Are you sure you want to delete this site visit?")) return;
    try {
      const res = await fetch(`/api/admin/site-visits/${visitId}`, { method: "DELETE" });
      if (res.ok) {
        setSiteVisits((prev) => prev.filter((v) => v.id !== visitId));
      }
    } catch (err) {
      console.error("Failed to delete visit", err);
    }
  };

  const handleVisitStatusChange = async (visitId: string, newStatus: SiteVisit["status"]) => {
    try {
      const res = await fetch(`/api/admin/site-visits/${visitId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setSiteVisits((prev) =>
          prev.map((v) => (v.id === visitId ? ({ ...v, status: newStatus } as SiteVisit) : v))
        );
      }
    } catch (err) {
      console.error("Failed to update visit status", err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settingsForm)
      });

      if (res.ok) {
        const updated = await res.json();
        setSettings(updated);
        setSettingsSaved(true);
        setTimeout(() => setSettingsSaved(false), 3000);
      }
    } catch (err) {
      console.error("Failed to update settings", err);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (lead.phone || "").includes(searchQuery) ||
      (lead.email?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (lead.requirement?.toLowerCase() || "").includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * leadsPerPage,
    currentPage * leadsPerPage
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-900/60 text-blue-300 border-blue-700";
      case "Contacted":
        return "bg-purple-900/60 text-purple-300 border-purple-700";
      case "Follow-up":
        return "bg-amber-900/60 text-amber-300 border-amber-700";
      case "Site Visit":
        return "bg-emerald-900/60 text-emerald-300 border-emerald-700";
      case "Interested":
        return "bg-gold-900/60 text-gold-300 border-gold-700";
      case "Converted":
        return "bg-green-900/60 text-green-300 border-green-700";
      case "Not Interested":
        return "bg-gray-800 text-gray-400 border-gray-700";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-forest-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-forest-900 border border-forest-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-400">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
              The Aurora Hills
            </h1>
            <p className="text-forest-300 text-sm mt-1">
              Admin & Lead Management Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                Administrator PIN / Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password (e.g. admin123 or aurora2026)"
                className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-3 text-white placeholder-forest-500 focus:outline-none focus:border-gold-500 transition-colors"
                required
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-xs">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {authLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Access Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-forest-800/80 text-center">
            <p className="text-xs text-forest-400">
              Authorized access only. All actions are logged.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-1 text-gold-400 hover:underline text-xs mt-3"
            >
              &larr; Return to Public Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest-950 text-white font-sans">
      {/* Admin Header */}
      <header className="bg-forest-900/80 backdrop-blur-md border-b border-forest-800 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-bold font-serif">
              AH
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-none">
                The Aurora Hills
              </h1>
              <span className="text-[11px] text-forest-300">
                CRM & Management Portal
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchDashboardData}
            disabled={isLoadingData}
            className="p-2 rounded-xl bg-forest-800 hover:bg-forest-700 text-forest-200 hover:text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${isLoadingData ? "animate-spin" : ""}`} />
          </button>
          <a
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-forest-200 hover:text-white text-xs font-medium transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Live Site
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-800/80 text-red-300 text-xs font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-forest-300 font-semibold uppercase tracking-wider">
                Total Enquiries
              </span>
              <Users className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {stats?.totalLeads ?? leads.length}
            </div>
            <div className="text-xs text-forest-400 mt-1">
              Active CRM Records
            </div>
          </div>

          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-forest-300 font-semibold uppercase tracking-wider">
                Site Visits
              </span>
              <Calendar className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-300">
              {stats?.totalSiteVisits ?? siteVisits.length}
            </div>
            <div className="text-xs text-forest-400 mt-1">
              Scheduled Tours
            </div>
          </div>

          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-forest-300 font-semibold uppercase tracking-wider">
                Conversion Pipeline
              </span>
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-300">
              {stats?.highInterestLeads ?? leads.filter((l) => l.status === "Site Visit" || l.status === "Interested" || l.status === "Converted").length}
            </div>
            <div className="text-xs text-forest-400 mt-1">
              High Intent Prospects
            </div>
          </div>

          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-forest-300 font-semibold uppercase tracking-wider">
                Starting Price
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-bold">
                Live
              </span>
            </div>
            <div className="text-2xl font-bold text-gold-400 truncate">
              {settings?.starting_price || "₹35.99 Lakhs"}
            </div>
            <div className="text-xs text-forest-400 mt-1">
              HDUDA / NA-KJP Approved
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-forest-800 gap-2 sm:gap-4 overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm border-b-2 whitespace-nowrap transition-all ${
              activeTab === "leads"
                ? "border-gold-500 text-gold-400"
                : "border-transparent text-forest-300 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            Enquiry Leads ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab("visits")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm border-b-2 whitespace-nowrap transition-all ${
              activeTab === "visits"
                ? "border-gold-500 text-gold-400"
                : "border-transparent text-forest-300 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" />
            Site Visits ({siteVisits.length})
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm border-b-2 whitespace-nowrap transition-all ${
              activeTab === "settings"
                ? "border-gold-500 text-gold-400"
                : "border-transparent text-forest-300 hover:text-white"
            }`}
          >
            <Settings className="w-4 h-4" />
            Project Settings
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm border-b-2 whitespace-nowrap transition-all ${
              activeTab === "analytics"
                ? "border-gold-500 text-gold-400"
                : "border-transparent text-forest-300 hover:text-white"
            }`}
          >
            <Activity className="w-4 h-4" />
            Campaigns & Traffic
          </button>
        </div>

        {/* TAB 1: LEADS MANAGEMENT */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              <div className="flex flex-1 gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, phone, email, or plot size..."
                    className="w-full pl-10 pr-4 py-2.5 bg-forest-900/60 border border-forest-800 rounded-xl text-white placeholder-forest-500 text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="relative w-44">
                  <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-forest-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-forest-900/60 border border-forest-800 rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 appearance-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Interested">Interested</option>
                    <option value="Converted">Converted</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-forest-400 pointer-events-none" />
                </div>
              </div>

              <a
                href="/api/admin/export"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-forest-800 hover:bg-forest-700 text-gold-400 font-semibold rounded-xl text-sm transition-colors border border-forest-700"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </a>

              <button
                onClick={() => setShowAddLead(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-forest-950 font-semibold rounded-xl text-sm transition-colors shadow-lg"
              >
                + Add Lead
              </button>
            </div>

            {/* Leads Table */}
            <div className="bg-forest-900/60 border border-forest-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-forest-950/80 border-b border-forest-800 text-xs font-semibold uppercase tracking-wider text-forest-300">
                    <tr>
                      <th className="py-3.5 px-4">Contact</th>
                      <th className="py-3.5 px-4">Requirement / Plot</th>
                      <th className="py-3.5 px-4">Purpose</th>
                      <th className="py-3.5 px-4">Source / Campaign</th>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest-800/60">
                    {paginatedLeads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-forest-400">
                          No leads match your current search and filter criteria.
                        </td>
                      </tr>
                    ) : (
                      paginatedLeads.map((lead) => (
                        <tr
                          key={lead.id}
                          className="hover:bg-forest-800/40 transition-colors"
                        >
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-white">{lead.name}</div>
                            <div className="flex items-center gap-2 text-xs text-forest-300 mt-0.5">
                              <a
                                href={`tel:${lead.phone}`}
                                className="flex items-center gap-1 hover:text-gold-400"
                              >
                                <Phone className="w-3 h-3 text-gold-400" />
                                {lead.phone}
                              </a>
                              {lead.email && (
                                <a
                                  href={`mailto:${lead.email}`}
                                  className="flex items-center gap-1 hover:text-gold-400"
                                >
                                  <Mail className="w-3 h-3 text-forest-400" />
                                  {lead.email}
                                </a>
                              )}
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="text-white font-medium">
                              {lead.requirement || "General Inquiry"}
                            </span>
                            {lead.message && (
                              <p className="text-xs text-forest-400 truncate max-w-xs mt-0.5">
                                &ldquo;{lead.message}&rdquo;
                              </p>
                            )}
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="text-xs text-forest-300">
                              {lead.purpose || "Not Specified"}
                            </span>
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="text-xs text-forest-200">
                              {lead.source || "Website"}
                            </span>
                            {lead.utm_campaign && (
                              <span className="block text-[10px] text-forest-400 font-mono">
                                {lead.utm_campaign}
                              </span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-xs text-forest-300 whitespace-nowrap">
                            {lead.created_at
                              ? new Date(lead.created_at).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })
                              : "N/A"}
                          </td>

                          <td className="py-3.5 px-4">
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                handleStatusChange(lead.id, e.target.value as LeadStatus)
                              }
                              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border appearance-none cursor-pointer focus:outline-none ${getStatusBadge(
                                lead.status
                              )}`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Follow-up">Follow-up</option>
                              <option value="Site Visit">Site Visit</option>
                              <option value="Interested">Interested</option>
                              <option value="Converted">Converted</option>
                              <option value="Not Interested">Not Interested</option>
                            </select>
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  setSelectedLead(lead);
                                  setLeadNotes(lead.notes || "");
                                  setIsEditingNotes(false);
                                }}
                                className="p-1.5 rounded-lg bg-forest-800 hover:bg-forest-700 text-forest-300 hover:text-white transition-colors"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-transparent hover:border-red-800 text-red-300 hover:text-white transition-colors"
                                title="Delete Lead"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-4">
                <span className="text-xs text-forest-400">
                  Showing {(currentPage - 1) * leadsPerPage + 1} to{" "}
                  {Math.min(currentPage * leadsPerPage, filteredLeads.length)} of{" "}
                  {filteredLeads.length} leads
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-700 text-forest-300 disabled:opacity-50 text-xs font-semibold"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-700 text-forest-300 disabled:opacity-50 text-xs font-semibold"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SITE VISITS */}
        {activeTab === "visits" && (
          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-forest-950/80 border-b border-forest-800 text-xs font-semibold uppercase tracking-wider text-forest-300">
                  <tr>
                    <th className="py-3.5 px-4">Visitor</th>
                    <th className="py-3.5 px-4">Date & Time</th>
                    <th className="py-3.5 px-4">Guests</th>
                    <th className="py-3.5 px-4">Transport Support</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Special Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-800/60">
                  {siteVisits.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-forest-400">
                        No site visit appointments booked yet.
                      </td>
                    </tr>
                  ) : (
                    siteVisits.map((visit) => (
                      <tr key={visit.id} className="hover:bg-forest-800/40 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{visit.name}</div>
                          <div className="flex items-center gap-2 text-xs text-forest-300 mt-0.5">
                            <a href={`tel:${visit.phone}`} className="flex items-center gap-1 hover:text-gold-400">
                              <Phone className="w-3 h-3 text-gold-400" />
                              {visit.phone}
                            </a>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-medium text-white flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gold-400" />
                            {visit.preferred_date}
                          </div>
                          <div className="text-xs text-forest-300 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-forest-400" />
                            {visit.preferred_time}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-white font-medium">
                          {visit.visitors} Person(s)
                        </td>

                        <td className="py-3.5 px-4">
                          {visit.transport_required === "Yes" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-semibold">
                              <Car className="w-3 h-3" /> Pickup Requested
                            </span>
                          ) : (
                            <span className="text-xs text-forest-400">Own Vehicle</span>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          <select
                            value={visit.status}
                            onChange={(e) => handleVisitStatusChange(visit.id, e.target.value as SiteVisit["status"])}
                            className="text-xs font-semibold px-2 py-1 rounded-lg bg-forest-900/60 border border-forest-700 text-forest-200 cursor-pointer focus:outline-none"
                          >
                            <option value="Scheduled">Scheduled</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>

                        <td className="py-3.5 px-4 text-xs text-forest-300 max-w-xs truncate">
                          <div className="flex items-center justify-between">
                            <span>{visit.message || "None"}</span>
                            <button
                              onClick={() => handleDeleteVisit(visit.id)}
                              className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-transparent hover:border-red-800 text-red-300 hover:text-white transition-colors ml-2"
                              title="Delete Visit"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECT SETTINGS */}
        {activeTab === "settings" && (
          <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-6 max-w-3xl">
            <h2 className="text-lg font-bold text-white mb-1">
              Dynamic Live Content Settings
            </h2>
            <p className="text-xs text-forest-400 mb-6">
              Update promotional starting price, banner announcement, and primary contact phone numbers dynamically.
            </p>

            <form onSubmit={handleSaveSettings} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                  Promotional Starting Price
                </label>
                <input
                  type="text"
                  value={settingsForm.starting_price || ""}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, starting_price: e.target.value })
                  }
                  className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500"
                  placeholder="e.g. ₹35.99 Lakhs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                  Top Announcement Strip Text
                </label>
                <input
                  type="text"
                  value={settingsForm.announcement_text || ""}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, announcement_text: e.target.value })
                  }
                  className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                    Primary Phone Number
                  </label>
                  <input
                    type="text"
                    value={settingsForm.primary_phone || ""}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, primary_phone: e.target.value })
                    }
                    className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                    Primary WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp_number || ""}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, whatsapp_number: e.target.value })
                    }
                    className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-300 mb-2">
                  Village & Location Legal Details
                </label>
                <input
                  type="text"
                  value={settingsForm.village_details || ""}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, village_details: e.target.value })
                  }
                  className="w-full bg-forest-950 border border-forest-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold-500"
                />
              </div>

              {settingsSaved && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-700 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Settings updated and applied live to the website!
                </div>
              )}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold rounded-xl shadow-lg transition-all"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: ANALYTICS & TRAFFIC */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold-400" />
                Lead Sources Breakdown
              </h2>
              <div className="space-y-3">
                {Object.entries(
                  leads.reduce((acc: Record<string, number>, lead) => {
                    const src = lead.source || "Website Direct";
                    acc[src] = (acc[src] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([source, count]) => (
                  <div key={source} className="flex items-center justify-between text-sm py-2 border-b border-forest-800/60">
                    <span className="text-forest-200">{source}</span>
                    <span className="font-bold text-white bg-forest-800 px-2 py-0.5 rounded-md">
                      {count} Leads
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-forest-900/60 border border-forest-800 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Key Approvals Status
              </h2>
              <div className="space-y-3">
                {[
                  { name: "NA-KJP Approved", status: "Verified & Certified", color: "text-emerald-400" },
                  { name: "HDUDA Approved", status: "Hubli-Dharwad Urban Dev Authority", color: "text-emerald-400" },
                  { name: "Bank Loans Approved", status: "SBI, HDFC, ICICI, Canara, Axis, IDFC First", color: "text-emerald-400" },
                  { name: "Property Tax Updated", status: "Current Fiscal Cleared", color: "text-emerald-400" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm py-2 border-b border-forest-800/60">
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-forest-400">{item.status}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Lead Modal */}
      {showAddLead && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-forest-900 border border-forest-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-forest-800 pb-3">
              <h3 className="text-lg font-bold text-white">Add New Lead</h3>
              <button onClick={() => setShowAddLead(false)} className="text-forest-400 hover:text-white">&times;</button>
            </div>
            <form onSubmit={handleAddManualLead} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-forest-300 mb-1">Name</label>
                <input required type="text" value={newLeadForm.name} onChange={e => setNewLeadForm({...newLeadForm, name: e.target.value})} className="w-full bg-forest-950 border border-forest-800 rounded-xl px-3 py-2 text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-300 mb-1">Phone</label>
                <input required type="text" value={newLeadForm.phone} onChange={e => setNewLeadForm({...newLeadForm, phone: e.target.value})} className="w-full bg-forest-950 border border-forest-800 rounded-xl px-3 py-2 text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-300 mb-1">Email</label>
                <input type="email" value={newLeadForm.email} onChange={e => setNewLeadForm({...newLeadForm, email: e.target.value})} className="w-full bg-forest-950 border border-forest-800 rounded-xl px-3 py-2 text-white text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-forest-300 mb-1">Requirement</label>
                <input type="text" placeholder="e.g. 30x40 Plot" value={newLeadForm.requirement} onChange={e => setNewLeadForm({...newLeadForm, requirement: e.target.value})} className="w-full bg-forest-950 border border-forest-800 rounded-xl px-3 py-2 text-white text-sm" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowAddLead(false)} className="px-4 py-2 rounded-xl text-xs font-semibold text-forest-300">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl text-xs font-bold bg-gold-500 hover:bg-gold-600 text-forest-950">Add Lead</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lead Details & Notes Drawer Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-forest-900 border border-forest-800 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-forest-800 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedLead.name}</h3>
                <span className="text-xs text-forest-400">ID: {selectedLead.id}</span>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-forest-400 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-forest-950 p-3 rounded-xl border border-forest-800/80">
                <span className="text-forest-400 block mb-1">Phone Number</span>
                <a href={`tel:${selectedLead.phone}`} className="font-bold text-gold-400 text-sm">
                  {selectedLead.phone}
                </a>
              </div>
              <div className="bg-forest-950 p-3 rounded-xl border border-forest-800/80">
                <span className="text-forest-400 block mb-1">Email Address</span>
                <span className="font-semibold text-white break-all">
                  {selectedLead.email || "Not Provided"}
                </span>
              </div>
              <div className="bg-forest-950 p-3 rounded-xl border border-forest-800/80">
                <span className="text-forest-400 block mb-1">Plot Requirement</span>
                <span className="font-semibold text-white">
                  {selectedLead.requirement || "Not Specified"}
                </span>
              </div>
              <div className="bg-forest-950 p-3 rounded-xl border border-forest-800/80">
                <span className="text-forest-400 block mb-1">Purpose</span>
                <span className="font-semibold text-white">
                  {selectedLead.purpose || "Not Specified"}
                </span>
              </div>
            </div>

            {selectedLead.message && (
              <div className="bg-forest-950 p-3 rounded-xl border border-forest-800/80 text-xs">
                <span className="text-forest-400 block mb-1 font-semibold">User Message:</span>
                <p className="text-forest-200">{selectedLead.message}</p>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-forest-300">
                  Follow-up Notes & Status History:
                </label>
              </div>
              <textarea
                value={leadNotes}
                onChange={(e) => setLeadNotes(e.target.value)}
                rows={3}
                className="w-full bg-forest-950 border border-forest-800 rounded-xl p-3 text-xs text-white placeholder-forest-500 focus:outline-none focus:border-gold-500"
                placeholder="Add notes from customer call, visit timing, price negotiation..."
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-forest-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => handleSaveNotes(selectedLead.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gold-500 hover:bg-gold-600 text-forest-950"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
