"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import { COMPANY_DETAILS, getPhoneUrl, getEmailUrl, getWhatsAppUrl, getGoogleMapsUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-[#142217] text-slate-200 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-emerald-950 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center space-x-3 group inline-block">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white font-black text-xl flex items-center justify-center shadow-sm">
              AI
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                AMEY INDUSTRIES
              </span>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Nashik, Maharashtra
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md font-normal">
            Nashik manufacturer and supplier of Outdoor Green Gym Equipment, Playground Equipment, and Custom Industrial Fabrication for public parks, housing societies, institutions, and commercial projects across Maharashtra.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              <span>Get Project Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
            <button
              onClick={() => openQuoteModal("", "Catalogue Request")}
              className="inline-flex items-center px-4 py-2.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-slate-200 text-xs font-semibold border border-emerald-800 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>Request Product Catalogue</span>
            </button>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 border-b border-emerald-900 pb-2">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/green-gym" className="hover:text-emerald-400 transition-colors">
                Green Gym Equipment
              </Link>
            </li>
            <li>
              <Link href="/playground" className="hover:text-emerald-400 transition-colors">
                Playground Equipment
              </Link>
            </li>
            <li>
              <Link href="/industrial-fabrication" className="hover:text-emerald-400 transition-colors">
                Industrial Fabrication
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-emerald-400 transition-colors">
                Executed Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors">
                About AMEY INDUSTRIES
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Contact & Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact & Location */}
        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 border-b border-emerald-900 pb-2">
            Direct Contact & Location
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-200">{COMPANY_DETAILS.address}</span>
              </div>
            </li>
            <li className="flex items-center space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Proprietor: {COMPANY_DETAILS.owner}</span>
            </li>
            <li>
              <a href={getEmailUrl()} className="flex items-center space-x-2.5 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-emerald-400 hover:text-white transition-colors font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp Fast Enquiry</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Local SEO Tagline */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-emerald-950 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4 relative z-10">
        <p>© 2026 AMEY INDUSTRIES. All rights reserved. Nashik, Maharashtra, India.</p>
        <p className="text-[11px] text-slate-400">
          Green Gym Manufacturer Nashik • Playground Equipment • Custom Industrial Fabrication
        </p>
      </div>
    </footer>
  );
}
