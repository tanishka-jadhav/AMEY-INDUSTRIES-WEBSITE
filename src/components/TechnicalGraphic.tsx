import React from "react";

interface TechnicalGraphicProps {
  variant?: "ruler" | "grid" | "crosshair" | "dimension" | "angleMark";
  className?: string;
}

export default function TechnicalGraphic({
  variant = "ruler",
  className = "",
}: TechnicalGraphicProps) {
  if (variant === "ruler") {
    return (
      <div className={`flex items-center space-x-1 font-mono text-[10px] text-industrial-steel/60 select-none ${className}`}>
        <span>01</span>
        <span className="h-[1px] w-6 bg-industrial-steel/30 inline-block"></span>
        <span className="w-1.5 h-1.5 border border-industrial-green/50 rounded-full inline-block"></span>
        <span className="h-[1px] w-12 bg-industrial-steel/30 inline-block"></span>
        <span>AMEY-FAB-NASHIK</span>
      </div>
    );
  }

  if (variant === "crosshair") {
    return (
      <svg
        className={`w-6 h-6 text-industrial-green/40 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="9" strokeDasharray="2 2" />
        <line x1="12" y1="0" x2="12" y2="24" />
        <line x1="0" y1="12" x2="24" y2="12" />
      </svg>
    );
  }

  if (variant === "dimension") {
    return (
      <div className={`flex items-center text-[10px] font-mono tracking-widest text-industrial-steel/70 ${className}`}>
        <span className="text-industrial-green font-bold">|&lt;</span>
        <div className="h-[1px] bg-industrial-steel/30 flex-grow mx-1 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px]">HEAVY DUTY STEEL</span>
        </div>
        <span className="text-industrial-green font-bold">&gt;|</span>
      </div>
    );
  }

  if (variant === "angleMark") {
    return (
      <svg
        className={`w-12 h-12 text-industrial-green/30 ${className}`}
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M 4,4 L 44,4 L 44,44" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <circle cx="44" cy="4" r="2" fill="currentColor" />
        <circle cx="44" cy="44" r="2" fill="currentColor" />
        <line x1="44" y1="4" x2="24" y2="24" strokeDasharray="2 2" />
      </svg>
    );
  }

  return (
    <div className={`bg-industrial-grid-dense border border-industrial-border/60 rounded p-2 ${className}`}>
      <div className="flex justify-between items-center text-[9px] font-mono text-industrial-steel">
        <span>[SPEC-STRUCTURAL]</span>
        <span>NAS-MH-IN</span>
      </div>
    </div>
  );
}
