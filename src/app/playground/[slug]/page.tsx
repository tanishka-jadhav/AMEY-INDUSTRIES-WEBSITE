"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Phone, MessageSquare, Send, MapPin } from "lucide-react";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";
import VisualFallbackImage from "@/components/VisualFallbackImage";
import EnquiryForm from "@/components/EnquiryForm";
import ProductCard from "@/components/ProductCard";

export default function PlaygroundProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { openQuoteModal } = useQuoteModal();
  const product = getProductBySlug(params.slug);

  if (!product || product.category !== "playground") {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.image);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === "playground" && p.id !== product.id
  ).slice(0, 3);

  const whatsappMsg = `Hello AMEY INDUSTRIES, I am interested in ${product.name}. Please share playground details and quotation.`;

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-left">
      <div>
        <Link
          href="/playground"
          className="inline-flex items-center text-xs font-bold text-industrial-textMuted hover:text-industrial-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to Playground Equipment Catalog</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="rounded-3xl overflow-hidden border border-industrial-border shadow-card bg-white">
            <VisualFallbackImage
              src={activeImage}
              alt={product.name}
              category={product.categoryName}
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {product.gallery && product.gallery.length > 1 && (
            <div className="flex space-x-3">
              {product.gallery.map((imgSrc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(imgSrc)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border ${
                    activeImage === imgSrc ? "border-industrial-green ring-2 ring-emerald-200" : "border-industrial-border"
                  }`}
                >
                  <VisualFallbackImage src={imgSrc} alt="" aspectRatio="aspect-square" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
              {product.categoryName}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-industrial-text mt-3">{product.name}</h1>
            <p className="text-industrial-textMuted text-sm mt-3 leading-relaxed">{product.fullDescription}</p>
          </div>

          {product.features && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider">Safety & Build Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start text-xs text-industrial-text bg-white p-2.5 rounded-lg border border-industrial-border">
                    <Check className="w-4 h-4 text-industrial-green mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.suitableLocations && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-green" />
                Suitable Environments
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.suitableLocations.map((loc, i) => (
                  <span key={i} className="text-xs text-industrial-text bg-white px-3 py-1 rounded-md border border-industrial-border">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-industrial-border space-y-3">
            <button
              onClick={() => openQuoteModal(product.name, product.categoryName)}
              className="w-full py-4 px-6 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle hover:shadow-card transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Quote for {product.name}</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={getPhoneUrl()}
                className="py-3 px-4 rounded-xl bg-white hover:bg-industrial-mutedBg text-industrial-text font-bold text-xs border border-industrial-border flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-industrial-green" />
                <span>Call Directly</span>
              </a>
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Specs</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto pt-8">
        <EnquiryForm
          initialProduct={product.name}
          initialRequirement="Playground Equipment"
          title={`Enquire About ${product.name}`}
        />
      </div>

      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-industrial-border">
          <h3 className="text-2xl font-bold text-industrial-text">Other Playground Equipment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
