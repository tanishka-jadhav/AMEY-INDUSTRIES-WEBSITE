"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface CinematicVideoProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  subtitle?: string;
}

export default function CinematicVideo({
  videoUrl = "/videos/green-gym-hero.mp4",
  posterUrl = "/images/green-gym/outdoor-air-walker-paver-tiles.jpg",
  title = "See It in Action",
  subtitle = "High-grade outdoor equipment engineered for longevity and daily public use in parks and recreation grounds.",
}: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-industrial-charcoal text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-green/80 text-white text-xs font-mono uppercase tracking-widest rounded mb-3">
            <span>MANUFACTURING & INSTALLATION MOVEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-industrial-mutedBg text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Player Stage */}
        <div className="relative w-full aspect-[16/9] max-h-[600px] bg-black rounded-lg overflow-hidden border border-white/20 shadow-elevated group">
          {!hasError && videoUrl ? (
            <video
              ref={videoRef}
              poster={posterUrl}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={posterUrl}
                alt="AMEY INDUSTRIES Equipment in Action"
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Dark Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-industrial-charcoal/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-6">
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="w-20 h-20 rounded-full bg-industrial-green hover:bg-industrial-freshGreen text-white flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 mb-4"
              >
                <Play className="w-8 h-8 ml-1 fill-current" />
              </button>
              <span className="text-sm font-mono tracking-wider text-white uppercase bg-black/60 px-4 py-1.5 rounded">
                Click to Watch Equipment in Real Use
              </span>
            </div>
          )}

          {/* Player Controls Bar (Visible on Hover when playing) */}
          {isPlaying && (
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-2 bg-white/20 hover:bg-white/40 rounded text-white"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 bg-white/20 hover:bg-white/40 rounded text-white"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-2 bg-white/20 hover:bg-white/40 rounded text-white"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
