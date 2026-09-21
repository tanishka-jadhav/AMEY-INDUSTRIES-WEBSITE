"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Send, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import VisualFallbackImage from "./VisualFallbackImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuoteModal } = useQuoteModal();
  const detailLink = `/${product.category}/${product.slug}`;

  return (
    <div className="group relative bg-white border border-industrial-border hover:border-industrial-green/40 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Visual Image Header */}
      <Link href={detailLink} className="block relative overflow-hidden bg-industrial-mutedBg">
        <VisualFallbackImage
          src={product.image}
          alt={product.name}
          category={product.categoryName}
          aspectRatio="aspect-[16/10]"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-industrial-green text-[11px] font-bold px-3 py-1 rounded-md border border-industrial-border shadow-xs uppercase tracking-wider">
          {product.categoryName}
        </span>
        {product.modelNo && (
          <span className="absolute top-3 right-3 bg-industrial-dark text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-neutral-700 shadow-xs">
            {product.modelNo}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <Link href={detailLink} className="block group-hover:text-industrial-green transition-colors">
            <h3 className="text-xl font-bold text-industrial-text tracking-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-industrial-textMuted line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Feature Pills */}
          {product.features && product.features.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {product.features.slice(0, 2).map((feat, i) => (
                <span
                  key={i}
                  className="inline-flex items-center text-[11px] text-industrial-textMuted bg-industrial-bg px-2.5 py-1 rounded-md border border-industrial-border"
                >
                  <Check className="w-3 h-3 text-industrial-green mr-1 shrink-0" />
                  <span className="truncate max-w-[190px]">{feat}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Buttons Action Bar */}
        <div className="pt-3 border-t border-industrial-border grid grid-cols-2 gap-2">
          <Link
            href={detailLink}
            className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg text-industrial-text text-xs font-semibold border border-industrial-border transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 text-industrial-textMuted group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => openQuoteModal(product.name, product.categoryName)}
            className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white text-xs font-bold shadow-xs transition-all"
          >
            <Send className="w-3.5 h-3.5 mr-1.5" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
}
