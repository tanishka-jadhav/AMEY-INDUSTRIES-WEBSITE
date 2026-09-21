"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut, MessageSquare, Phone, Send, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout, enquiries } = useAuth();
  const { openQuoteModal } = useQuoteModal();

  if (!user) {
    return (
      <div className="py-20 px-4 text-center space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 bg-industrial-lightGreenBg text-industrial-green rounded-full flex items-center justify-center mx-auto">
          <User className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-industrial-text">Customer Account Portal</h1>
        <p className="text-xs text-industrial-textMuted">Please sign in to view your profile and quotation requests.</p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center px-6 py-3 bg-industrial-green text-white font-bold text-sm rounded-xl"
        >
          Sign In Now
        </Link>
      </div>
    );
  }

  // Filter user's enquiries matching email or phone
  const myEnquiries = enquiries.filter(
    (e) =>
      (e.email && e.email.toLowerCase() === user.email.toLowerCase()) ||
      (user.phone && e.phone.includes(user.phone))
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 text-left">
      {/* Profile Banner */}
      <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-8 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-industrial-green text-white font-black text-2xl flex items-center justify-center shadow-subtle">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-extrabold text-industrial-text">{user.name}</h1>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-industrial-lightGreenBg text-industrial-green px-2.5 py-0.5 rounded-full border border-emerald-200">
                {user.role === "admin" ? "Admin" : "Verified Client"}
              </span>
            </div>
            <p className="text-xs text-industrial-textMuted mt-0.5">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {user.role === "admin" && (
            <Link
              href="/admin"
              className="px-4 py-2.5 rounded-xl bg-industrial-green text-white font-bold text-xs shadow-xs hover:bg-industrial-greenDark transition-colors flex items-center"
            >
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              Open Admin Portal
            </Link>
          )}

          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="px-4 py-2.5 rounded-xl bg-industrial-mutedBg hover:bg-industrial-border text-industrial-text font-bold text-xs border border-industrial-border transition-colors flex items-center"
          >
            <LogOut className="w-4 h-4 mr-1.5 text-industrial-steel" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => openQuoteModal()}
          className="p-5 bg-white border border-industrial-border rounded-2xl shadow-subtle hover:border-industrial-green transition-all text-left space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-industrial-lightGreenBg text-industrial-green flex items-center justify-center font-bold">
            <Send className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-industrial-text text-base group-hover:text-industrial-green transition-colors">
            Request Quotation
          </h3>
          <p className="text-xs text-industrial-textMuted">Submit custom requirements or equipment quantities.</p>
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-white border border-industrial-border rounded-2xl shadow-subtle hover:border-emerald-500 transition-all text-left space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-industrial-text text-base group-hover:text-[#25D366] transition-colors">
            WhatsApp Direct
          </h3>
          <p className="text-xs text-industrial-textMuted">Chat directly with Prasad Suresh Jadhav.</p>
        </a>

        <a
          href={getPhoneUrl()}
          className="p-5 bg-white border border-industrial-border rounded-2xl shadow-subtle hover:border-industrial-green transition-all text-left space-y-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-industrial-mutedBg text-industrial-green flex items-center justify-center font-bold">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-industrial-text text-base group-hover:text-industrial-green transition-colors">
            Direct Phone Call
          </h3>
          <p className="text-xs text-industrial-textMuted">+91 9850573181 • Nashik Factory</p>
        </a>
      </div>

      {/* Submitted Enquiries Activity */}
      <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-card">
        <div className="flex items-center justify-between border-b border-industrial-border pb-4">
          <div>
            <h3 className="text-xl font-extrabold text-industrial-text">Your Submitted Enquiries</h3>
            <p className="text-xs text-industrial-textMuted mt-0.5">Track your quote requests and specifications.</p>
          </div>
          <span className="font-mono text-xs text-industrial-green font-bold bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
            {myEnquiries.length} Enquiries
          </span>
        </div>

        {myEnquiries.length === 0 ? (
          <div className="py-12 text-center space-y-3 bg-industrial-bg rounded-2xl border border-dashed border-industrial-border">
            <Clock className="w-8 h-8 text-industrial-steel mx-auto" />
            <p className="text-sm font-semibold text-industrial-text">No previous enquiries recorded for this account.</p>
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center text-xs font-bold text-industrial-green hover:underline"
            >
              <span>Submit Your First Quote Request</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {myEnquiries.map((enq) => (
              <div
                key={enq.id}
                className="p-5 rounded-2xl bg-industrial-bg border border-industrial-border space-y-3 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono font-bold text-industrial-green bg-white px-2.5 py-1 rounded border border-industrial-border">
                      {enq.id}
                    </span>
                    <span className="font-bold text-industrial-text text-sm">{enq.requirementType}</span>
                    {enq.product && <span className="text-industrial-textMuted">• {enq.product}</span>}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] ${
                      enq.status === "New"
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : enq.status === "Contacted"
                        ? "bg-amber-100 text-amber-700 border border-amber-200"
                        : enq.status === "Quote Sent"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {enq.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-industrial-textMuted border-t border-industrial-border/60 pt-2">
                  <div>Location: <strong className="text-industrial-text">{enq.city}</strong></div>
                  <div>Quantity: <strong className="text-industrial-text">{enq.quantity || "1"}</strong></div>
                  <div>Date: <strong className="text-industrial-text">{new Date(enq.createdAt).toLocaleDateString()}</strong></div>
                </div>

                {enq.message && (
                  <p className="p-3 bg-white rounded-xl border border-industrial-border text-industrial-text leading-relaxed">
                    "{enq.message}"
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
