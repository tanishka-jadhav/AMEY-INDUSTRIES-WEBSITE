"use client";

import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3 mb-10 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-industrial-lightGreenBg text-industrial-green border border-emerald-200/80 uppercase tracking-widest">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-industrial-text tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-industrial-textMuted font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
