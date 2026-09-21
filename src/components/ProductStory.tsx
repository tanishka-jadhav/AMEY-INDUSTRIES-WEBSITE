"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import TechnicalGraphic from "./TechnicalGraphic";

interface ProductStoryProps {
  products: Product[];
}

export default function ProductStory({ products }: ProductStoryProps) {
  const { openQuoteModal } = useQuoteModal();
  const [activeIdx, setActiveIdx] = useState(0);

  const featured = products.slice(0, 8);
  const currentProduct = featured[activeIdx] || featured[0];

  if (!currentProduct) return null;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-industrial-bg relative border-y border-industrial-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-industrial-border">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-industrial-green uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-industrial-green"></span>
              <span>FEATURED GREEN GYM EQUIPMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-industrial-charcoal tracking-tight">
              Outdoor fitness, built for active spaces.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-industrial-textMuted max-w-md">
            Heavy-duty, weather-resistant outdoor gym equipment designed and manufactured by AMEY INDUSTRIES for public parks, housing societies, and municipal installations.
          </p>
        </div>

        {/* Product Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* MOBILE CAROUSEL CONTROLS (< 1024px) */}
          <div className="lg:hidden flex items-center justify-between bg-white border border-industrial-border p-3 rounded-xl shadow-subtle mb-2">
            <button
              onClick={handlePrev}
              className="p-3 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-charcoal rounded-lg font-bold min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-5 h-5 text-industrial-green" />
            </button>

            <div className="text-center px-2">
              <span className="font-mono text-xs font-bold text-industrial-green">
                0{activeIdx + 1} / 0{featured.length}
              </span>
              <p className="text-xs font-bold text-industrial-charcoal truncate max-w-[180px]">
                {currentProduct.name}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-charcoal rounded-lg font-bold min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Next Product"
            >
              <ChevronRight className="w-5 h-5 text-industrial-green" />
            </button>
          </div>

          {/* LEFT: Interactive Product Navigation Rail (Desktop Only: lg:col-span-4) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between space-y-2">
            <div className="space-y-2">
              {featured.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-4 rounded transition-all duration-300 flex items-center justify-between border min-h-[44px] ${
                      isActive
                        ? "bg-white border-industrial-green shadow-md text-industrial-charcoal"
                        : "bg-industrial-surface/50 border-industrial-border/60 hover:bg-white text-industrial-textMuted hover:text-industrial-charcoal"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded ${
                          isActive
                            ? "bg-industrial-lightGreenBg text-industrial-green font-bold"
                            : "bg-industrial-mutedBg text-industrial-steel"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-industrial-green translate-x-1" : "text-industrial-steel opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/green-gym"
                className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-industrial-surface border border-industrial-border hover:border-industrial-green text-industrial-green font-semibold text-sm rounded transition-all min-h-[44px]"
              >
                <span>View Full Equipment Catalogue ({products.length} Products)</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT / MAIN: Featured Product Stage (Large Hero Image + Story Details) */}
          <div className="lg:col-span-8 bg-white border border-industrial-border rounded-xl shadow-subtle p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Stage Counter & Spec Tag */}
            <div className="flex justify-between items-center pb-4 border-b border-industrial-border/60 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-industrial-steel tracking-widest uppercase">
                  PRODUCT STORY
                </span>
                <span className="text-industrial-border">|</span>
                <span className="font-mono text-xs font-semibold text-industrial-green uppercase">
                  {currentProduct.category}
                </span>
              </div>
              <div className="font-mono text-xs text-industrial-textMuted bg-industrial-mutedBg px-3 py-1 rounded">
                <span className="text-industrial-green font-bold">0{activeIdx + 1}</span> / 0{featured.length}
              </div>
            </div>

            {/* Product Media Display */}
            <div className="relative w-full h-[260px] sm:h-[380px] mb-6 sm:mb-8 bg-industrial-mutedBg/50 rounded-lg overflow-hidden flex items-center justify-center group">
              <Image
                key={currentProduct.id}
                src={currentProduct.primaryImage || currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-contain p-4 transition-all duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute top-3 right-3 pointer-events-none">
                <TechnicalGraphic variant="crosshair" />
              </div>

              {/* Mobile Swipe / Arrow overlay controls on image */}
              <button
                onClick={handlePrev}
                className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-industrial-border shadow-md flex items-center justify-center text-industrial-charcoal active:scale-95 transition-transform"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-industrial-green" />
              </button>
              <button
                onClick={handleNext}
                className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-industrial-border shadow-md flex items-center justify-center text-industrial-charcoal active:scale-95 transition-transform"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-industrial-green" />
              </button>
            </div>

            {/* Product Info & Actions */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-industrial-charcoal mb-2 sm:mb-3">
                {currentProduct.name}
              </h3>
              
              <p className="text-industrial-textMuted text-sm sm:text-base leading-relaxed mb-6">
                {currentProduct.shortDescription}
              </p>

              {/* Key Features/Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 sm:mb-8">
                <div className="flex items-center text-xs text-industrial-text font-medium bg-industrial-mutedBg/60 px-3 py-2.5 rounded border border-industrial-border/50">
                  <CheckCircle2 className="w-4 h-4 text-industrial-green mr-2 flex-shrink-0" />
                  <span>Application: {currentProduct.applications?.[0] || "Public Parks & Active Spaces"}</span>
                </div>
                <div className="flex items-center text-xs text-industrial-text font-medium bg-industrial-mutedBg/60 px-3 py-2.5 rounded border border-industrial-border/50">
                  <CheckCircle2 className="w-4 h-4 text-industrial-green mr-2 flex-shrink-0" />
                  <span>Heavy-Duty All Weather Galvanized Build</span>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-industrial-border/60">
                <button
                  onClick={() => openQuoteModal(currentProduct.name)}
                  className="px-6 py-3.5 bg-industrial-green hover:bg-industrial-greenDark text-white font-semibold text-sm rounded-lg shadow-sm transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Request Quote for {currentProduct.name}
                </button>
                
                <Link
                  href={`/green-gym/${currentProduct.slug}`}
                  className="px-6 py-3.5 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-charcoal font-semibold text-sm rounded-lg transition-colors flex items-center justify-center min-h-[44px]"
                >
                  <span>Full Product Specs</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* View Catalogue Link for Mobile */}
        <div className="mt-6 lg:hidden">
          <Link
            href="/green-gym"
            className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-white border border-industrial-border hover:border-industrial-green text-industrial-green font-semibold text-sm rounded-xl shadow-subtle min-h-[44px]"
          >
            <span>View Full Equipment Catalogue ({products.length} Products)</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}

