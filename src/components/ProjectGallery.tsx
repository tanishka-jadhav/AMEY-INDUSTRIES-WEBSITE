"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, MapPin } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/projects";
import ProjectLightbox from "./ProjectLightbox";

interface ProjectGalleryProps {
  categoryFilter?: string;
  limit?: number;
}

export default function ProjectGallery({ categoryFilter, limit }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  let filteredProjects = PROJECTS;
  if (categoryFilter && categoryFilter !== "all") {
    filteredProjects = PROJECTS.filter(
      (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
    );
  }

  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div className="w-full">
      {/* Editorial Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          // Editorial span variation (makes every 3rd or 4th item visually distinct)
          const isFeaturedWide = index % 5 === 0;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative bg-white border border-industrial-border rounded overflow-hidden shadow-subtle cursor-pointer transition-all duration-300 hover:shadow-elevated hover:border-industrial-green ${
                isFeaturedWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              {/* Project Image Container */}
              <div
                className={`relative w-full overflow-hidden bg-industrial-mutedBg ${
                  isFeaturedWide ? "h-[320px] sm:h-[420px]" : "h-[280px] sm:h-[340px]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/90 via-industrial-charcoal/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-industrial-charcoal text-xs font-mono font-semibold tracking-wider uppercase rounded shadow-sm border border-white">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white flex justify-between items-end">
                  <div className="max-w-[80%]">
                    <div className="flex items-center text-xs text-industrial-lightGreenBg font-mono mb-1">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-freshGreen" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-industrial-lightGreenBg transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded bg-industrial-green text-white flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
