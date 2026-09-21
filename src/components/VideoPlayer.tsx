"use client";

import React, { useState } from "react";
import { Play, Camera } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src = "/videos/green-gym.mp4",
  poster = "/images/green-gym/outdoor-cross-trainer.jpg",
  title = "AMEY INDUSTRIES Manufacturing & Installation",
  autoPlay = false,
  loop = true,
  muted = true,
  controls = true,
  className = "w-full aspect-video rounded-3xl overflow-hidden border border-industrial-border shadow-card relative bg-industrial-mutedBg",
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={className}>
      {!hasError && src ? (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        /* Clean Light Video Visual Placeholder */
        <div className="w-full h-full bg-gradient-to-br from-industrial-bg via-white to-industrial-lightGreenBg flex flex-col items-center justify-center p-6 text-center space-y-3 relative group">
          <div className="absolute inset-0 bg-industrial-grid-light opacity-30 pointer-events-none" />
          
          <div className="w-16 h-16 rounded-full bg-white border border-industrial-border text-industrial-green flex items-center justify-center shadow-subtle group-hover:scale-105 transition-transform">
            <Play className="w-7 h-7 ml-1 fill-industrial-green" />
          </div>

          <div className="max-w-md space-y-1 z-10">
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-industrial-green bg-white px-2.5 py-0.5 rounded-md border border-industrial-border shadow-xs">
              <Camera className="w-3 h-3 mr-1" />
              Real Factory & Installation Video Placeholder
            </span>
            <h4 className="text-lg font-extrabold text-industrial-text">{title}</h4>
            <p className="text-xs text-industrial-textMuted">
              Drop real company video file to <code className="text-industrial-green font-mono">/public/videos/green-gym.mp4</code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
