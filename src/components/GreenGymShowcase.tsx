"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Send, Check } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import VisualFallbackImage from "./VisualFallbackImage";

export default function GreenGymShowcase() {
  const { openQuoteModal } = useQuoteModal();
  const greenGymProducts = PRODUCTS.filter((p) => p.category === "green-gym");
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeProduct = greenGymProducts[currentIndex] || greenGymProducts[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? greenGymProducts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === greenGymProducts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-10 shadow-card space-y-8 text-left">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-industrial-border pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
            Interactive Equipment Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-industrial-text mt-2 tracking-tight">
            Green Gym & Outdoor Fitness Equipment
          </h2>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-mono font-bold text-industrial-textMuted">
            0{currentIndex + 1} / 0{greenGymProducts.length}
          </span>
          <div className="flex space-x-1.5">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg border border-industrial-border text-industrial-text transition-colors"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg border border-industrial-border text-industrial-text transition-colors"
              aria-label="Next Product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Large Real Visual Frame */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-2xl overflow-hidden border border-industrial-border shadow-subtle bg-industrial-mutedBg group">
            <VisualFallbackImage
              src={activeProduct.image}
              alt={activeProduct.name}
              category={activeProduct.modelNo || activeProduct.categoryName}
              aspectRatio="aspect-[4/3]"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Active Product Details & Selector Tabs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tabs Selector */}
          <div className="flex flex-wrap gap-2">
            {greenGymProducts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentIndex === idx
                    ? "bg-industrial-green text-white shadow-xs"
                    : "bg-industrial-bg text-industrial-textMuted hover:bg-industrial-mutedBg border border-industrial-border"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-industrial-green bg-industrial-lightGreenBg px-2.5 py-0.5 rounded border border-emerald-200">
                {activeProduct.modelNo}
              </span>
              <span className="text-xs text-industrial-textMuted font-semibold">AMEY INDUSTRIES • Nashik</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-industrial-text">
              {activeProduct.name}
            </h3>
            <p className="text-sm text-industrial-textMuted leading-relaxed">
              {activeProduct.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          {activeProduct.features && (
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider">
                Specifications & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeProduct.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-start text-xs text-industrial-text bg-industrial-bg p-2.5 rounded-lg border border-industrial-border">
                    <Check className="w-3.5 h-3.5 text-industrial-green mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="pt-4 border-t border-industrial-border flex flex-wrap gap-3">
            <button
              onClick={() => openQuoteModal(activeProduct.name, activeProduct.categoryName)}
              className="px-6 py-3 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-xs shadow-subtle transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Quote for {activeProduct.name}</span>
            </button>

            <Link
              href={`/green-gym/${activeProduct.slug}`}
              className="px-5 py-3 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg text-industrial-text text-xs font-bold border border-industrial-border transition-colors flex items-center"
            >
              <span>Full Specifications</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
