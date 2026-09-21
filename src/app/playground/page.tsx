"use client";

import React from "react";
import Image from "next/image";
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
      {/* Category Hero with Playground Background Visual */}
      <div className="relative rounded-3xl p-8 sm:p-12 shadow-card space-y-4 overflow-hidden bg-industrial-charcoal text-white">
        <Image
          src="/images/playground/multi-play-combination-station.jpg"
          alt="Outdoor Playground Equipment Installation"
          fill
          priority
          className="object-cover object-center opacity-30 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-charcoal via-industrial-charcoal/85 to-transparent z-0" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-industrial-freshGreen bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            AMEY INDUSTRIES • PLAYGROUND DIVISION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Outdoor Playground Equipment
          </h1>
          <p className="text-base text-industrial-mutedBg leading-relaxed font-normal">
            Safety-oriented outdoor play equipment for schools, housing societies, public parks, and recreational zones. Designed for high outdoor durability with rounded edges, heavy steel frames, and vibrant weather coatings.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openQuoteModal("", "Playground Equipment")}
              className="px-6 py-3.5 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle transition-all"
            >
              Request Playground Quote
            </button>
          </div>
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
