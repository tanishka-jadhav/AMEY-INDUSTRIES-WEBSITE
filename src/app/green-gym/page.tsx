"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import EnquiryForm from "@/components/EnquiryForm";
import GreenGymShowcase from "@/components/GreenGymShowcase";
import { PRODUCTS } from "@/data/products";
import { CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function GreenGymPage() {
  const { openQuoteModal } = useQuoteModal();
  const greenGymProducts = PRODUCTS.filter((p) => p.category === "green-gym");

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Hero with Background Visual */}
      <div className="relative rounded-3xl p-8 sm:p-12 shadow-card text-left space-y-4 overflow-hidden bg-industrial-charcoal text-white">
        <Image
          src="/images/green-gym/hero_green_gym_ai_background.jpg"
          alt="Outdoor Green Gym Equipment Installation"
          fill
          priority
          className="object-cover object-center opacity-35 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-charcoal via-industrial-charcoal/80 to-transparent z-0" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-industrial-freshGreen bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            AMEY INDUSTRIES • NASHIK
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Green Gym & Outdoor Fitness Equipment
          </h1>
          <p className="text-base text-industrial-mutedBg leading-relaxed font-normal">
            Outdoor fitness stations engineered for public parks, housing societies, institutions, and municipal gardens across Maharashtra. Manufactured with heavy-duty galvanized steel tubing and weather-resistant protective coatings.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openQuoteModal("", "Green Gym")}
              className="px-6 py-3.5 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle transition-all"
            >
              Request Green Gym Quotation
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <CheckCircle2 className="w-5 h-5 text-industrial-green mr-2" />
            Low Impact Exercise
          </h4>
          <p className="text-xs text-industrial-textMuted">Uses natural bodyweight for joint-friendly cardiovascular health.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <CheckCircle2 className="w-5 h-5 text-industrial-green mr-2" />
            Zero Electricity Required
          </h4>
          <p className="text-xs text-industrial-textMuted">Purely mechanical outdoor fitness units with low maintenance requirements.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-industrial-border space-y-2 shadow-subtle">
          <h4 className="text-base font-bold text-industrial-text flex items-center">
            <CheckCircle2 className="w-5 h-5 text-industrial-green mr-2" />
            All-Weather Durability
          </h4>
          <p className="text-xs text-industrial-textMuted">Multi-layer anti-rust primer & protective outdoor powder coat finish.</p>
        </div>
      </div>

      {/* Interactive Showcase */}
      <GreenGymShowcase />

      {/* Products Grid */}
      <div className="space-y-6">
        <SectionHeader
          title="Green Gym Equipment Catalog"
          subtitle="Select any product below to view detailed specifications or request a custom quotation."
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {greenGymProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Lead Form */}
      <div className="max-w-4xl mx-auto pt-8">
        <EnquiryForm initialRequirement="Green Gym" title="Request Green Gym Quotation" />
      </div>
    </div>
  );
}
