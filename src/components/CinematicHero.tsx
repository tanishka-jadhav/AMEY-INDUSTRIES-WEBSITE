"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import TechnicalGraphic from "./TechnicalGraphic";

interface CinematicHeroProps {
  heroImageUrl?: string;
  videoUrl?: string;
}

export default function CinematicHero({
  heroImageUrl = "/images/green-gym/hero_green_gym_ai_background.jpg",
  videoUrl,
}: CinematicHeroProps) {
  const { openQuoteModal } = useQuoteModal();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      setIsVideoPlaying(true);
    }
  }, [videoUrl]);

  return (
    <section className="relative w-full h-[80vh] min-h-[580px] max-h-[850px] overflow-hidden bg-industrial-charcoal text-white flex items-center">
      {/* Hero Media Layer */}
      <div className="absolute inset-0 z-0">
        {isVideoPlaying && videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImageUrl}
            className="w-full h-full object-cover object-center filter brightness-90"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={heroImageUrl}
              alt="AMEY INDUSTRIES Green Gym Installation in Nashik"
              fill
              priority
              quality={90}
              className="object-cover object-center transform scale-105 animate-[kenburns_20s_infinite_alternate]"
              sizes="100vw"
            />
          </div>
        )}

        {/* Sophisticated Gradient Overlay (Darkens slightly on left for typography readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-charcoal/90 via-industrial-charcoal/65 to-industrial-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal via-transparent to-industrial-charcoal/40" />
        
        {/* Subtle Industrial Grid Lines Overlay */}
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      </div>

      {/* Hero Text & Actions */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-16">
        <div className="max-w-3xl">
          {/* Eyebrow & Technical Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs font-mono tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-industrial-freshGreen animate-pulse"></span>
            <span className="text-white font-medium">OUTDOOR FITNESS • PLAYGROUND • FABRICATION</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Built for <br />
            <span className="text-industrial-lightGreenBg font-extrabold underline decoration-industrial-green/60 underline-offset-8">
              Real Spaces.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-industrial-mutedBg font-normal leading-relaxed mb-8 max-w-2xl">
            Outdoor fitness equipment, playground solutions and custom industrial fabrication engineered and manufactured by{" "}
            <strong className="text-white font-semibold">AMEY INDUSTRIES, Nashik</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
            <Link
              href="/green-gym"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-industrial-green hover:bg-industrial-greenDark text-white font-medium text-base rounded shadow-lg transition-all duration-200 group"
            >
              <span>EXPLORE GREEN GYM</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-industrial-charcoal hover:bg-industrial-mutedBg font-semibold text-base rounded shadow-md transition-colors"
            >
              GET A QUOTE
            </button>

            <a
              href="https://wa.me/919850573181?text=Hello%20AMEY%20INDUSTRIES%2C%20I%20am%20interested%20in%20your%20outdoor%20fitness%20and%20playground%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#1EBE57] text-white font-medium text-sm rounded shadow transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Badge Bar */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-industrial-freshGreen" />
              <span>Direct Manufacturer in Nashik</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-industrial-freshGreen"></span>
              <span>All Weather Galvanized Steel</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-industrial-freshGreen" />
              <span>+91 9850573181</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Corner Accent */}
      <div className="absolute bottom-4 right-6 hidden md:block z-10 pointer-events-none">
        <TechnicalGraphic variant="ruler" />
      </div>
    </section>
  );
}
