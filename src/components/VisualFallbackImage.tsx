"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Wrench, Shield, Dumbbell, Camera } from "lucide-react";

interface VisualFallbackImageProps {
  src: string;
  alt: string;
  category?: string;
  className?: string;
  aspectRatio?: string;
}

export default function VisualFallbackImage({
  src,
  alt,
  category = "Outdoor Fitness Equipment",
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-[4/3]",
}: VisualFallbackImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`relative ${aspectRatio} w-full bg-gradient-to-br from-industrial-mutedBg via-white to-industrial-lightGreenBg border border-industrial-border flex flex-col justify-between p-6 overflow-hidden group`}>
        <div className="absolute inset-0 opacity-40 bg-industrial-grid-light pointer-events-none" />

        {/* Top badge */}
        <div className="flex justify-between items-center z-10">
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-industrial-green bg-white px-2.5 py-1 rounded-md border border-industrial-border shadow-xs">
            {category}
          </span>
          <span className="text-[10px] font-bold text-industrial-textMuted uppercase tracking-widest">
            AMEY INDUSTRIES
          </span>
        </div>

        {/* Center Graphic */}
        <div className="my-auto text-center py-4 z-10 flex flex-col items-center justify-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-white border border-industrial-border text-industrial-green flex items-center justify-center shadow-subtle group-hover:scale-105 transition-transform">
            {category.toLowerCase().includes("play") ? (
              <Shield className="w-7 h-7" />
            ) : category.toLowerCase().includes("fabrication") ? (
              <Wrench className="w-7 h-7" />
            ) : (
              <Dumbbell className="w-7 h-7" />
            )}
          </div>
          <div>
            <h4 className="text-base font-extrabold text-industrial-text group-hover:text-industrial-green transition-colors">
              {alt}
            </h4>
            <p className="text-xs text-industrial-textMuted mt-1">Manufacturing & Installation • Nashik, MH</p>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="text-center z-10 pt-2 border-t border-industrial-border flex items-center justify-between text-[11px] text-industrial-textMuted">
          <span className="flex items-center font-semibold text-industrial-text">
            <Camera className="w-3.5 h-3.5 mr-1 text-industrial-green" />
            Real Product Photo Placeholder
          </span>
          <span className="text-industrial-green font-bold">Nashik, MH</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={className}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
