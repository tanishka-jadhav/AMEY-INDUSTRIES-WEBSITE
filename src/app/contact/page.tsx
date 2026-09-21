"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_DETAILS, getPhoneUrl, getEmailUrl, getWhatsAppUrl, getGoogleMapsUrl } from "@/data/company";
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, Navigation, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_DETAILS.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Page Header */}
      <SectionHeader
        badge="Direct Contact & Factory Location"
        title="Contact AMEY INDUSTRIES"
        subtitle="Visit our manufacturing facility or speak directly with Mr. Prasad Suresh Jadhav for Green Gym equipment, playground setups, and custom industrial fabrication in Nashik."
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
                  <strong className="text-industrial-text block font-bold">Factory Address</strong>
                  <span className="text-industrial-textMuted leading-relaxed block mt-0.5">
                    {COMPANY_DETAILS.address}
                  </span>
                  <a
                    href={getGoogleMapsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-industrial-green hover:underline mt-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
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
                <Phone className="w-5 h-5 text-industrial-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-industrial-text block font-bold">Phone Number</strong>
                  <a href={getPhoneUrl()} className="text-industrial-green hover:underline font-bold text-base block mt-0.5">
                    {COMPANY_DETAILS.phone}
                  </a>
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
                  <strong className="text-industrial-text block font-bold">WhatsApp Direct</strong>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-industrial-green hover:underline font-bold text-sm block mt-0.5"
                  >
                    Open WhatsApp Chat (+91 9850573181)
                  </a>
                </div>
              </li>
            </ul>

            {/* Quick Trigger Buttons */}
            <div className="pt-4 border-t border-industrial-border grid grid-cols-2 gap-3">
              <a
                href={getPhoneUrl()}
                className="py-3 px-4 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg text-industrial-text font-bold text-xs border border-industrial-border flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-industrial-green" />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Google Maps Location & Navigation Card */}
          <div className="bg-white border border-industrial-border rounded-3xl p-6 space-y-4 shadow-subtle">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-industrial-text uppercase tracking-wider flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-industrial-green" />
                Google Maps Location
              </h4>
              <span className="text-[11px] font-mono text-industrial-green font-semibold bg-industrial-lightGreenBg px-2 py-0.5 rounded">
                NASHIK, MH
              </span>
            </div>

            {/* Interactive Map Embed */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-industrial-border relative bg-industrial-mutedBg shadow-inner-soft">
              <iframe
                title="AMEY INDUSTRIES Nashik Google Maps Location"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Direct Google Maps Navigation CTA Button */}
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Navigate Directly in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>
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
