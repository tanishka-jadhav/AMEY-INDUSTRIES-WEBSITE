"use client";

import React, { useEffect } from "react";
import { X, MapPin, Check, Send } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { useQuoteModal } from "@/context/QuoteModalContext";
import VisualFallbackImage from "./VisualFallbackImage";

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-text/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-industrial-border rounded-3xl shadow-elevated overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-industrial-bg px-6 py-4 border-b border-industrial-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-wider text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-industrial-textMuted flex items-center font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-green" />
              {project.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-industrial-textMuted hover:text-industrial-text hover:bg-industrial-mutedBg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Main Visual */}
          <div className="rounded-2xl overflow-hidden border border-industrial-border shadow-subtle">
            <VisualFallbackImage
              src={project.image}
              alt={project.title}
              category={project.categoryLabel}
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Project Info */}
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-industrial-text">{project.title}</h3>
            <p className="text-industrial-textMuted text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Equipment Supplied */}
          {project.equipmentSupplied && project.equipmentSupplied.length > 0 && (
            <div className="p-4 rounded-xl bg-industrial-bg border border-industrial-border space-y-2">
              <h4 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider">
                Equipment / Services Supplied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.equipmentSupplied.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs text-industrial-text bg-white px-3 py-1.5 rounded-lg border border-industrial-border font-medium"
                  >
                    <Check className="w-3.5 h-3.5 mr-1.5 text-industrial-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Thumbnails */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider">Project Photos</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((imgSrc, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-industrial-border">
                    <VisualFallbackImage
                      src={imgSrc}
                      alt={`${project.title} photo ${i + 1}`}
                      aspectRatio="aspect-[4/3]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Bar */}
          <div className="pt-4 border-t border-industrial-border flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-industrial-textMuted">Have a project requirement in Nashik or Maharashtra?</p>
              <p className="text-sm font-bold text-industrial-text">Discuss specs and request quotation</p>
            </div>
            <button
              onClick={() => {
                onClose();
                openQuoteModal(project.title, project.categoryLabel);
              }}
              className="px-6 py-3 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-bold text-sm shadow-subtle transition-all flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Request Similar Project Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
