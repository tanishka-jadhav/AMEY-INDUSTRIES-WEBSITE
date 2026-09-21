"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS, getEmailUrl, getWhatsAppUrl } from "@/data/company";
import { MapPin, Mail, MessageSquare, ShieldCheck, Send } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ContactPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Page Header */}
      <SectionHeader
        badge="Direct Contact & Quotations"
        title="Contact AMEY INDUSTRIES"
        subtitle="Connect directly with Mr. Prasad Suresh Jadhav for Green Gym equipment, playground setups, and custom industrial fabrication."
      />

      {/* Main Grid: Contact Info Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Business Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-card">
            <h3 className="text-xl font-extrabold text-industrial-text border-b border-industrial-border pb-3">
              Factory & Business Information
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-industrial-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-industrial-text block font-bold">Location</strong>
                  <span className="text-industrial-textMuted leading-relaxed block mt-0.5">
                    {COMPANY_DETAILS.address}
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-industrial-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-industrial-text block font-bold">Proprietor</strong>
                  <span className="text-industrial-textMuted">{COMPANY_DETAILS.owner}</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-industrial-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-industrial-text block font-bold">Email Address</strong>
                  <a href={getEmailUrl()} className="text-industrial-textMuted hover:text-industrial-green underline text-sm block mt-0.5">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <MessageSquare className="w-5 h-5 text-industrial-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-industrial-text block font-bold">WhatsApp Fast Connect</strong>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-industrial-green hover:underline font-bold text-sm block mt-0.5"
                  >
                    Open WhatsApp Chat Direct
                  </a>
                </div>
              </li>
            </ul>

            {/* Quick Trigger Buttons */}
            <div className="pt-4 border-t border-industrial-border grid grid-cols-2 gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => openQuoteModal()}
                className="py-3.5 px-4 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-xs flex items-center justify-center space-x-2 min-h-[44px]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Lead Form */}
        <div className="lg:col-span-7">
          <EnquiryForm
            title="Send Direct Message / Request Quote"
            subtitle="Fill in your project details below. We reply promptly with product specifications and official quotation."
          />
        </div>
      </div>
    </div>
  );
}
