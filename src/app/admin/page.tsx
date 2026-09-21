"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { COMPANY_DETAILS, getWhatsAppUrl } from "@/data/company";
import {
  ShieldCheck,
  Users,
  Search,
  MessageSquare,
  Phone,
  Download,
  Trash2,
  Lock,
  Building2,
  CheckCircle2,
  Clock,
  Filter,
  ArrowRight,
  LogOut,
} from "lucide-react";

export default function AdminPage() {
  const { user, login, logout, enquiries, updateEnquiryStatus, deleteEnquiry } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // If not logged in as admin, show clean Admin Login screen
  if (!user || user.role !== "admin") {
    const handleQuickAdminLogin = () => {
      login("psj.smil@gmail.com", "admin123");
    };

    return (
      <div className="py-20 px-4 max-w-lg mx-auto text-left">
        <div className="bg-white border border-industrial-border rounded-3xl p-8 sm:p-10 shadow-elevated space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-industrial-green text-white rounded-2xl flex items-center justify-center mx-auto shadow-subtle">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <h1 className="text-2xl font-black text-industrial-charcoal">AMEY INDUSTRIES Admin Portal</h1>
            <p className="text-xs text-industrial-textMuted max-w-xs mx-auto">
              Owner Lead Management System • Prasad Suresh Jadhav
            </p>
          </div>

          <div className="p-4 bg-industrial-lightGreenBg border border-emerald-200 rounded-2xl text-xs space-y-2">
            <div className="font-bold text-industrial-green flex items-center">
              <Building2 className="w-4 h-4 mr-1.5" />
              Owner Quick Access
            </div>
            <p className="text-industrial-textMuted leading-relaxed">
              Click below to log in as <strong>Mr. Prasad Suresh Jadhav</strong> and manage all customer quotations.
            </p>
            <button
              onClick={handleQuickAdminLogin}
              className="w-full py-3 px-4 bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Log In as Prasad Suresh Jadhav</span>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-industrial-textMuted">
            Or sign in via standard{" "}
            <Link href="/login" className="text-industrial-green font-bold hover:underline">
              Login Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Filter enquiries based on search, category, and status
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.product && item.product.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      categoryFilter === "all" || item.requirementType.toLowerCase() === categoryFilter.toLowerCase();

    const matchesStatus = statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate Metrics
  const totalLeads = enquiries.length;
  const newLeads = enquiries.filter((e) => e.status === "New").length;
  const greenGymLeads = enquiries.filter((e) => e.requirementType === "Green Gym").length;
  const playgroundLeads = enquiries.filter((e) => e.requirementType === "Playground Equipment").length;
  const fabLeads = enquiries.filter((e) => e.requirementType === "Industrial Fabrication").length;

  // Export CSV Helper
  const exportToCSV = () => {
    const headers = ["Enquiry ID,Name,Phone,Email,City,Category,Product,Quantity,Message,Status,Date"];
    const rows = enquiries.map((e) =>
      [
        e.id,
        `"${e.name}"`,
        `"${e.phone}"`,
        `"${e.email || ""}"`,
        `"${e.city}"`,
        `"${e.requirementType}"`,
        `"${e.product || ""}"`,
        `"${e.quantity || ""}"`,
        `"${(e.message || "").replace(/"/g, '""')}"`,
        e.status,
        new Date(e.createdAt).toLocaleString(),
      ].join(",")
    );

    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AMEY_INDUSTRIES_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 text-left">
      {/* Admin Header */}
      <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-industrial-green text-white font-black text-2xl flex items-center justify-center shadow-subtle">
            AI
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-extrabold text-industrial-text">AMEY INDUSTRIES Admin Portal</h1>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-industrial-green px-2.5 py-0.5 rounded-full border border-emerald-300">
                Owner Dashboard
              </span>
            </div>
            <p className="text-xs text-industrial-textMuted mt-0.5">
              Welcome back, <strong className="text-industrial-text">{COMPANY_DETAILS.owner}</strong> • Nashik, MH
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={exportToCSV}
            className="px-4 py-2.5 rounded-xl bg-industrial-lightGreenBg hover:bg-emerald-100 text-industrial-green font-bold text-xs border border-emerald-200 transition-colors flex items-center"
          >
            <Download className="w-4 h-4 mr-1.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={logout}
            className="px-4 py-2.5 rounded-xl bg-industrial-mutedBg hover:bg-industrial-border text-industrial-text font-bold text-xs border border-industrial-border transition-colors flex items-center"
          >
            <LogOut className="w-4 h-4 mr-1.5 text-industrial-steel" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="bg-white border border-industrial-border p-4 rounded-2xl shadow-subtle space-y-1">
          <span className="text-[11px] font-bold text-industrial-textMuted uppercase tracking-wider">Total Enquiries</span>
          <p className="text-3xl font-black text-industrial-text">{totalLeads}</p>
        </div>
        <div className="bg-white border border-industrial-border p-4 rounded-2xl shadow-subtle space-y-1">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            New Pending
          </span>
          <p className="text-3xl font-black text-blue-600">{newLeads}</p>
        </div>
        <div className="bg-white border border-industrial-border p-4 rounded-2xl shadow-subtle space-y-1">
          <span className="text-[11px] font-bold text-industrial-green uppercase tracking-wider">Green Gym</span>
          <p className="text-3xl font-black text-industrial-green">{greenGymLeads}</p>
        </div>
        <div className="bg-white border border-industrial-border p-4 rounded-2xl shadow-subtle space-y-1">
          <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Playground</span>
          <p className="text-3xl font-black text-amber-600">{playgroundLeads}</p>
        </div>
        <div className="bg-white border border-industrial-border p-4 rounded-2xl shadow-subtle space-y-1 col-span-2 sm:col-span-1">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">Fabrication</span>
          <p className="text-3xl font-black text-purple-600">{fabLeads}</p>
        </div>
      </div>

      {/* Enquiries Lead Table Container */}
      <div className="bg-white border border-industrial-border rounded-3xl p-6 space-y-6 shadow-card">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-industrial-border pb-6">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search by customer name, phone, city, or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-industrial-bg border border-industrial-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green"
            />
            <Search className="w-4 h-4 text-industrial-steel absolute left-3.5 top-3" />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center space-x-1.5">
              <Filter className="w-3.5 h-3.5 text-industrial-steel" />
              <span className="font-bold text-industrial-textMuted">Category:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-industrial-bg border border-industrial-border rounded-lg px-2.5 py-1.5 font-semibold text-industrial-text focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="Green Gym">Green Gym</option>
                <option value="Playground Equipment">Playground</option>
                <option value="Industrial Fabrication">Fabrication</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-industrial-textMuted">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-industrial-bg border border-industrial-border rounded-lg px-2.5 py-1.5 font-semibold text-industrial-text focus:outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quote Sent">Quote Sent</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lead Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-industrial-border text-[11px] font-bold uppercase tracking-wider text-industrial-textMuted bg-industrial-bg/50">
                <th className="p-3">ID / Date</th>
                <th className="p-3">Customer Info</th>
                <th className="p-3">Category & Product</th>
                <th className="p-3">Location & Qty</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Quick Contact Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-industrial-border text-xs">
              {filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-industrial-textMuted font-medium">
                    No enquiries found matching your search filters.
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((item) => {
                  const replyMsg = `Hello ${item.name}, thank you for reaching out to AMEY INDUSTRIES regarding your ${item.requirementType}${item.product ? ` (${item.product})` : ""} requirement. I am Prasad Suresh Jadhav. Let's discuss your specifications and quotation.`;
                  const whatsappUrl = `https://wa.me/${item.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(replyMsg)}`;

                  return (
                    <tr key={item.id} className="hover:bg-industrial-mutedBg/40 transition-colors">
                      <td className="p-3">
                        <span className="font-mono font-bold text-industrial-green block">{item.id}</span>
                        <span className="text-[11px] text-industrial-textMuted">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </td>

                      <td className="p-3">
                        <strong className="text-industrial-text text-sm block font-bold">{item.name}</strong>
                        <span className="text-industrial-textMuted block font-mono text-[11px]">{item.phone}</span>
                        {item.email && <span className="text-industrial-textMuted block text-[11px]">{item.email}</span>}
                      </td>

                      <td className="p-3">
                        <span className="font-bold text-industrial-text block">{item.requirementType}</span>
                        {item.product && <span className="text-industrial-green font-medium block">{item.product}</span>}
                        {item.message && (
                          <p className="text-[11px] text-industrial-textMuted italic max-w-xs truncate mt-0.5">
                            "{item.message}"
                          </p>
                        )}
                      </td>

                      <td className="p-3">
                        <span className="font-bold text-industrial-text block">{item.city}</span>
                        <span className="text-industrial-textMuted block text-[11px]">Qty: {item.quantity || "1"}</span>
                      </td>

                      <td className="p-3">
                        <select
                          value={item.status}
                          onChange={(e) => updateEnquiryStatus(item.id, e.target.value as any)}
                          className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border focus:outline-none cursor-pointer ${
                            item.status === "New"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : item.status === "Contacted"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : item.status === "Quote Sent"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Quote Sent">Quote Sent</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>

                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg transition-transform active:scale-95 shadow-xs"
                            title="Reply via WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                          </a>

                          <a
                            href={`tel:${item.phone.replace(/[^0-9+]/g, "")}`}
                            className="p-2 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-green rounded-lg border border-industrial-border transition-transform active:scale-95"
                            title="Call Customer"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => deleteEnquiry(item.id)}
                            className="p-2 bg-white hover:bg-red-50 text-industrial-steel hover:text-red-600 rounded-lg border border-industrial-border transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
