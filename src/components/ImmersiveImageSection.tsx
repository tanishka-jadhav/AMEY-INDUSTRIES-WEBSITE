import React from "react";
import Image from "next/image";

interface ImmersiveImageSectionProps {
  bgImageUrl: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  overlayOpacity?: "light" | "medium" | "dark";
  minHeight?: string;
  className?: string;
}

export default function ImmersiveImageSection({
  bgImageUrl,
  alt,
  eyebrow,
  title,
  description,
  children,
  overlayOpacity = "medium",
  minHeight = "min-h-[500px]",
  className = "",
}: ImmersiveImageSectionProps) {
  const overlayClass = {
    light: "bg-gradient-to-r from-industrial-charcoal/70 via-industrial-charcoal/50 to-transparent",
    medium: "bg-gradient-to-r from-industrial-charcoal/85 via-industrial-charcoal/65 to-industrial-charcoal/30",
    dark: "bg-industrial-charcoal/80",
  }[overlayOpacity];

  return (
    <section className={`relative w-full overflow-hidden flex items-center ${minHeight} ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt={alt}
          fill
          className="object-cover object-center filter brightness-90 transition-transform duration-1000 scale-105 hover:scale-100"
          sizes="100vw"
          priority={false}
        />
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayClass}`} />
        
        {/* Subtle engineering line grid on overlay */}
        <div className="absolute inset-0 bg-industrial-grid opacity-15 pointer-events-none" />
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white w-full">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-green/80 backdrop-blur-sm text-white text-xs font-mono tracking-widest uppercase mb-4 border-l-2 border-white">
              <span>{eyebrow}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-industrial-mutedBg leading-relaxed mb-8">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
