"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";
import VisualFallbackImage from "@/components/VisualFallbackImage";
import { COMPANY_DETAILS, getPhoneUrl, getWhatsAppUrl } from "@/data/company";
import { ShieldCheck, Phone, MessageSquare, CheckCircle2, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Hero Banner */}
      <div className="bg-white border border-industrial-border rounded-3xl p-8 sm:p-12 shadow-card space-y-4 relative overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
          About AMEY INDUSTRIES
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-industrial-text">
          Practical Engineering & Outdoor Fitness Manufacturing in Nashik
        </h1>
        <p className="text-base text-industrial-textMuted leading-relaxed max-w-3xl">
          Founded and led by Mr. Prasad Suresh Jadhav, AMEY INDUSTRIES is dedicated to manufacturing robust Green Gym outdoor fitness equipment, playground solutions, and custom industrial metal structures.
        </p>
      </div>

      {/* Main Story & Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <SectionHeader
            badge="Our Business Story"
            title="Built for Outdoor Lifespan & Community Value"
            centered={false}
          />
          <p className="text-industrial-textMuted text-sm leading-relaxed">
            <strong className="text-industrial-text font-semibold">AMEY INDUSTRIES</strong> operates out of Nashik, Maharashtra, specializing in high-durability outdoor equipment engineered specifically to withstand weather exposure, daily public usage, and physical wear.
          </p>
          <p className="text-industrial-textMuted text-sm leading-relaxed">
            Under the leadership of owner <strong className="text-industrial-green font-semibold">Mr. Prasad Suresh Jadhav</strong>, our manufacturing process combines heavy-gauge steel pipe selection, precision welding, multi-stage anti-corrosion primer application, and high-temperature outdoor powder coating.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-industrial-border shadow-subtle">
              <span className="text-industrial-textMuted block font-medium">Proprietor:</span>
              <strong className="text-industrial-text font-bold text-sm">{COMPANY_DETAILS.owner}</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-industrial-border shadow-subtle">
              <span className="text-industrial-textMuted block font-medium">Facility Location:</span>
              <strong className="text-industrial-text font-bold text-sm">{COMPANY_DETAILS.location}</strong>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden border border-industrial-border shadow-card bg-white p-2">
            <VisualFallbackImage
              src="/images/about/amey-industries-facility.jpg"
              alt="AMEY INDUSTRIES Nashik Manufacturing Base"
              category="Manufacturing Base"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="p-8 rounded-3xl bg-white border border-industrial-border shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-extrabold text-industrial-text">Direct Enquiry & Consultation</h3>
          <p className="text-xs text-industrial-textMuted">Contact Mr. Prasad Suresh Jadhav directly to discuss equipment specifications or request a quotation.</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={getPhoneUrl()}
            className="px-5 py-3 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg text-industrial-text font-bold text-xs border border-industrial-border flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-industrial-green" />
            <span>{COMPANY_DETAILS.phone}</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Lead Form */}
      <div className="max-w-4xl mx-auto pt-4">
        <EnquiryForm title="Send Us Your Project Enquiry" />
      </div>
    </div>
  );
}
