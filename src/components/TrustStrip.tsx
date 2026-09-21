"use client";

import React from "react";
import { Dumbbell, Smile, Wrench, ShieldCheck } from "lucide-react";

export default function TrustStrip() {
  const TRUST_ITEMS = [
    {
      icon: Dumbbell,
      title: "Green Gym Equipment",
      desc: "Outdoor fitness stations for parks, societies & public spaces",
    },
    {
      icon: Smile,
      title: "Playground Solutions",
      desc: "Durable slides, swings & multi-play units for children",
    },
    {
      icon: Wrench,
      title: "Industrial Fabrication",
      desc: "Custom metalwork, structures & sheds as per client drawings",
    },
    {
      icon: ShieldCheck,
      title: "Installation Support",
      desc: "Anchoring guidance & robust outdoor manufacturing build",
    },
  ];

  return (
    <div className="w-full bg-white border-y border-industrial-border py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_ITEMS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="flex items-start space-x-3.5 p-4 rounded-xl bg-industrial-bg border border-industrial-border hover:border-industrial-green/40 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-industrial-lightGreenBg text-industrial-green border border-emerald-200/80 shrink-0">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-industrial-text tracking-wide">{item.title}</h4>
                <p className="text-xs text-industrial-textMuted mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
