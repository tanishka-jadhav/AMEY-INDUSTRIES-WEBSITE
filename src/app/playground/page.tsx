"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function PlaygroundPage() {
  const { openQuoteModal } = useQuoteModal();
  const playgroundProducts = PRODUCTS.filter((p) => p.category === "playground");

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Category Hero */}
      <div className="bg-white border border-industrial-border rounded-3xl p-8 sm:p-12 shadow-card space-y-4 relative overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
          AMEY INDUSTRIES Vertical
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-industrial-text">
          Outdoor Playground Equipment
        </h1>
        <p className="text-base text-industrial-textMuted leading-relaxed max-w-3xl">
          Safety-oriented outdoor play equipment for schools, housing societies, public parks, and recreational zones. Designed for long outdoor lifespan with rounded edges and heavy metal frames.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={() => openQuoteModal("", "Playground Equipment")}
            className="px-6 py-3 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle"
          >
            Request Playground Quote
          </button>
        </div>
      </div>

      {/* Focus Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <ShieldCheck className="w-5 h-5 text-industrial-green mr-2" />
            Safety First Construction
          </h4>
          <p className="text-xs text-industrial-textMuted">Smooth welds, guarded steps, and anti-pinch safety pivot mechanisms.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <Sparkles className="w-5 h-5 text-industrial-green mr-2" />
            Vibrant Weather Coating
          </h4>
          <p className="text-xs text-industrial-textMuted">Outdoor polyurethane powder finish resistant to sun UV fading and rain.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <Heart className="w-5 h-5 text-industrial-green mr-2" />
            Age-Appropriate Design
          </h4>
          <p className="text-xs text-industrial-textMuted">Customized step heights and grip dimensions for children outdoor activity.</p>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="space-y-6">
        <SectionHeader
          title="Playground Equipment Catalog"
          subtitle="Explore our manufactured slides, swing sets, seesaws, and multi-play stations."
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {playgroundProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Lead Form */}
      <div className="max-w-4xl mx-auto pt-8">
        <EnquiryForm initialRequirement="Playground Equipment" title="Request Playground Equipment Quotation" />
      </div>
    </div>
  );
}
