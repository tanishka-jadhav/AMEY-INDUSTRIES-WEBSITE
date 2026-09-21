"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS, getPhoneUrl, getEmailUrl, getWhatsAppUrl } from "@/data/company";

export default function TopBanner() {
  return (
    <div className="bg-industrial-lightGreenBg/80 text-industrial-textMuted text-xs py-2 px-4 border-b border-industrial-border hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left: Location & Owner */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-industrial-textMuted font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-green" />
            {COMPANY_DETAILS.location}
          </span>
          <span className="text-industrial-border">|</span>
          <span className="text-industrial-textMuted">
            Proprietor: <strong className="text-industrial-text font-semibold">{COMPANY_DETAILS.owner}</strong>
          </span>
        </div>

        {/* Right: Direct Contact Links */}
        <div className="flex items-center space-x-6">
          <a
            href={getPhoneUrl()}
            className="flex items-center hover:text-industrial-green font-semibold transition-colors"
            title="Call AMEY INDUSTRIES"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-industrial-green" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <a
            href={getEmailUrl()}
            className="flex items-center hover:text-industrial-green font-medium transition-colors"
            title="Email AMEY INDUSTRIES"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5 text-industrial-green" />
            <span>{COMPANY_DETAILS.email}</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-industrial-green hover:text-industrial-greenDark font-bold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-industrial-green" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
