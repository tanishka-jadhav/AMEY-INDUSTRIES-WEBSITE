"use client";

import React from "react";
import { MessageSquare, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function FloatingCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* Floating WhatsApp Button (Visible on sm+ viewports so it doesn't overlap mobile sticky bar) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end space-y-3 group">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-elevated transition-all transform hover:scale-105 active:scale-95 group"
          title="Chat with AMEY INDUSTRIES"
          aria-label="WhatsApp Direct Enquiry"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageSquare className="w-6 h-6 fill-white/20" />
          
          {/* Tooltip hint on hover */}
          <span className="absolute right-16 top-2.5 hidden md:group-hover:flex items-center whitespace-nowrap bg-industrial-text text-white text-xs font-semibold py-1.5 px-3 rounded-lg border border-industrial-border shadow-card">
            Chat with AMEY INDUSTRIES
          </span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Fixed bottom bar on small viewports < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-industrial-border p-2.5 grid grid-cols-2 gap-2.5 shadow-elevated">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-extrabold rounded-xl active:scale-95 transition-transform min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4 mr-1.5 fill-white/20" />
          WhatsApp Direct
        </a>
        <button
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center py-3 bg-industrial-green hover:bg-industrial-greenDark text-white text-xs font-extrabold rounded-xl shadow-xs active:scale-95 transition-transform min-h-[44px]"
        >
          <Send className="w-3.5 h-3.5 mr-1.5" />
          Get Quote
        </button>
      </div>
    </>
  );
}

