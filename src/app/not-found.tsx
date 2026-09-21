import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Phone, MessageSquare } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-industrial-bg text-center">
      <div className="max-w-xl mx-auto space-y-6 bg-white border border-industrial-border p-8 sm:p-12 rounded-3xl shadow-card">
        {/* Badge & Icon */}
        <div className="w-16 h-16 bg-industrial-lightGreenBg border border-emerald-200 text-industrial-green rounded-full flex items-center justify-center mx-auto shadow-subtle">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="inline-block text-xs font-mono font-bold tracking-widest text-industrial-green uppercase bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
          Error 404 — Page Not Found
        </span>

        {/* Headline requested by prompt */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-industrial-charcoal tracking-tight">
          Looks like this equipment isn't here.
        </h1>

        <p className="text-sm sm:text-base text-industrial-textMuted leading-relaxed max-w-md mx-auto">
          The page or product specification you are looking for has been moved, renamed, or is currently unavailable.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-industrial-green hover:bg-industrial-greenDark text-white font-bold text-sm rounded-xl shadow-subtle transition-all flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back Home</span>
          </Link>

          <Link
            href="/green-gym"
            className="w-full sm:w-auto px-6 py-3 bg-industrial-surface hover:bg-industrial-mutedBg text-industrial-charcoal font-bold text-sm rounded-xl border border-industrial-border transition-colors flex items-center justify-center"
          >
            <span>Explore Green Gym</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-industrial-surface hover:bg-industrial-mutedBg text-industrial-charcoal font-bold text-sm rounded-xl border border-industrial-border transition-colors flex items-center justify-center"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Direct Contact Support */}
        <div className="pt-6 border-t border-industrial-border/80 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-industrial-textMuted">
          <a
            href={getWhatsAppUrl("Hello AMEY INDUSTRIES, I encountered a missing page on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-industrial-green hover:underline font-bold"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1" />
            <span>WhatsApp Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
