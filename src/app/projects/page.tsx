"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProjectLightbox from "@/components/ProjectLightbox";
import VisualFallbackImage from "@/components/VisualFallbackImage";
import EnquiryForm from "@/components/EnquiryForm";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { MapPin, ArrowRight, Check } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProjectsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Page Header */}
      <SectionHeader
        badge="Executed Work Portfolio"
        title="See Our Work"
        subtitle="Explore equipment and projects supplied and installed by AMEY INDUSTRIES across Nashik and Maharashtra."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {[
          { id: "all", label: "All Projects" },
          { id: "green-gym", label: "Green Gym" },
          { id: "playground", label: "Playground Equipment" },
          { id: "fabrication", label: "Industrial Fabrication" },
          { id: "installation", label: "Site Installations" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? "bg-industrial-green text-white shadow-xs"
                : "bg-white text-industrial-textMuted hover:text-industrial-text hover:bg-industrial-mutedBg border border-industrial-border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group bg-white border border-industrial-border hover:border-industrial-green/40 rounded-3xl overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div
              className="cursor-pointer overflow-hidden bg-industrial-mutedBg"
              onClick={() => setSelectedProject(proj)}
            >
              <VisualFallbackImage
                src={proj.image}
                alt={proj.title}
                category={proj.categoryLabel}
                aspectRatio="aspect-[16/10]"
                className="group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-industrial-green uppercase tracking-wider">
                    {proj.categoryLabel}
                  </span>
                  <span className="text-industrial-textMuted flex items-center font-medium">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-green" />
                    {proj.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-industrial-text group-hover:text-industrial-green transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-industrial-textMuted line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>

                {proj.equipmentSupplied && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.equipmentSupplied.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-[10px] text-industrial-text bg-industrial-bg px-2 py-0.5 rounded border border-industrial-border"
                      >
                        <Check className="w-3 h-3 text-industrial-green mr-1" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-6 pt-0 border-t border-industrial-border mt-auto grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedProject(proj)}
                className="py-2.5 px-3 rounded-xl bg-industrial-bg hover:bg-industrial-mutedBg text-industrial-text text-xs font-semibold border border-industrial-border transition-colors flex items-center justify-center"
              >
                <span>View Photos</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-industrial-textMuted" />
              </button>

              <button
                onClick={() => openQuoteModal(proj.title, proj.categoryLabel)}
                className="py-2.5 px-3 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white text-xs font-extrabold transition-colors flex items-center justify-center shadow-xs"
              >
                <span>Request Quote</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Embedded Lead Form */}
      <div className="max-w-4xl mx-auto pt-8">
        <EnquiryForm
          initialRequirement="Project / Installation"
          title="Have a Similar Project Requirement?"
          subtitle="Discuss equipment quantities, site drawings, and installation schedules with AMEY INDUSTRIES."
        />
      </div>
    </div>
  );
}
