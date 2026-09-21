"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Check, Send, MessageSquare } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { getWhatsAppUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";
import VisualFallbackImage from "@/components/VisualFallbackImage";
import EnquiryForm from "@/components/EnquiryForm";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { openQuoteModal } = useQuoteModal();
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const whatsappMsg = `Hello AMEY INDUSTRIES, I saw your executed project "${project.title}" and have a similar project requirement.`;

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-left">
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center text-xs font-bold text-industrial-textMuted hover:text-industrial-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded-full border border-emerald-200">
            {project.categoryLabel}
          </span>
          <span className="text-xs text-industrial-textMuted flex items-center font-medium">
            <MapPin className="w-3.5 h-3.5 mr-1 text-industrial-green" />
            {project.location}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-industrial-text">{project.title}</h1>
        <p className="text-industrial-textMuted text-base max-w-3xl leading-relaxed">{project.description}</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-industrial-border shadow-card bg-white">
        <VisualFallbackImage
          src={project.image}
          alt={project.title}
          category={project.categoryLabel}
          aspectRatio="aspect-[16/9]"
        />
      </div>

      {project.equipmentSupplied && project.equipmentSupplied.length > 0 && (
        <div className="p-6 rounded-2xl bg-white border border-industrial-border space-y-3 shadow-subtle">
          <h3 className="text-xs font-bold text-industrial-textMuted uppercase tracking-wider">
            Equipment & Services Delivered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.equipmentSupplied.map((item, idx) => (
              <div key={idx} className="flex items-center text-sm text-industrial-text bg-industrial-bg p-3 rounded-xl border border-industrial-border">
                <Check className="w-4 h-4 text-industrial-green mr-2 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action CTA Bar */}
      <div className="p-8 rounded-3xl bg-white border border-industrial-border shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-extrabold text-industrial-text">Require a Similar Installation?</h3>
          <p className="text-xs text-industrial-textMuted mt-1">Get an exact project quotation and material specifications from Mr. Prasad Suresh Jadhav.</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={() => openQuoteModal(project.title, project.categoryLabel)}
            className="px-6 py-3.5 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle flex items-center"
          >
            <Send className="w-4 h-4 mr-2" />
            <span>Request Quote</span>
          </button>
          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2 fill-white/20" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto pt-8">
        <EnquiryForm
          initialProduct={project.title}
          initialRequirement="Project / Installation"
          title={`Enquire About ${project.title}`}
        />
      </div>
    </div>
  );
}
