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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Built for <br />
            <span className="text-industrial-lightGreenBg underline decoration-industrial-green/60 underline-offset-8">
              Real Spaces.
            </span>
          </h1>

          {/* Supporting Copy - Short & Punchy */}
          <p className="text-base sm:text-xl text-industrial-mutedBg font-normal leading-relaxed mb-8 max-w-xl">
            Outdoor Fitness Equipment, Playground Solutions & Custom Metal Fabrication manufactured in Nashik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 sm:px-8 py-3.5 bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition-all active:scale-95 min-h-[44px]"
            >
              GET A QUOTE
            </button>

            <a
              href="https://wa.me/919850573181?text=Hello%20AMEY%20INDUSTRIES%2C%20I%20am%20interested%20in%20your%20outdoor%20fitness%20and%20playground%20equipment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#25D366] hover:bg-[#1EBE57] text-white font-extrabold text-sm sm:text-base rounded-xl shadow transition-all active:scale-95 min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/green-gym"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-sm transition-all min-h-[44px]"
            >
              <span>Explore Green Gym</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
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
              <MessageSquare className="w-3.5 h-3.5 text-industrial-freshGreen" />
              <span>Instant WhatsApp Support</span>
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
