"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Wrench, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function IndustrialFabricationPage() {
  const { openQuoteModal } = useQuoteModal();
  const fabProducts = PRODUCTS.filter((p) => p.category === "industrial-fabrication");

  const FABRICATION_PROCESS = [
    { num: "01", title: "Requirement & Drawing", desc: "Share your structural requirements or technical sketches." },
    { num: "02", title: "Technical Discussion", desc: "Consultation with Prasad Suresh Jadhav regarding steel grades & load specs." },
    { num: "03", title: "Design & Quotation", desc: "Finalizing specs, metal thickness, finish, and quotation." },
    { num: "04", title: "Precision Fabrication", desc: "Cutting, MIG/TIG welding, and frame assembly in Nashik." },
    { num: "05", title: "Finishing & Coating", desc: "Surface prep, anti-rust primer, and protective powder coat." },
    { num: "06", title: "Delivery & Installation", desc: "Safe site transport and installation support." },
  ];

  const CAPABILITIES = [
    "Custom Structural Steel Work",
    "Heavy Equipment Metal Frames",
    "Industrial Protective Sheds",
    "Architectural Outdoor Metal Structures",
    "Perimeter Barriers & Fencing",
    "Park Benches & Tree Guards",
  ];

  const whatsappMsg = "Hello AMEY INDUSTRIES, I have an industrial fabrication requirement and would like to discuss the project drawings and quotation.";

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Category Hero with Industrial Background Visual */}
      <div className="relative rounded-3xl p-8 sm:p-12 shadow-card space-y-4 overflow-hidden bg-industrial-charcoal text-white">
        <Image
          src="/images/projects/industrial-fabrication-project.jpg"
          alt="Industrial Metal Fabrication Assembly"
          fill
          priority
          className="object-cover object-center opacity-30 transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-charcoal via-industrial-charcoal/85 to-transparent z-0" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-industrial-freshGreen bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            AMEY INDUSTRIES • FABRICATION DIVISION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Industrial Metal Fabrication
          </h1>
          <p className="text-base text-industrial-mutedBg leading-relaxed font-normal">
            Custom steel frames, industrial sheds, and structural metalwork manufactured at our Nashik facility based on client drawings and technical specifications.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openQuoteModal("", "Industrial Fabrication")}
              className="px-6 py-3.5 rounded-xl bg-industrial-green hover:bg-industrial-greenDark text-white font-extrabold text-sm shadow-subtle transition-all flex items-center space-x-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Discuss Fabrication Project</span>
            </button>

            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center space-x-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Drawings</span>
            </a>
          </div>
        </div>
      </div>

      {/* Capabilities Overview */}
      <div className="space-y-6">
        <SectionHeader
          title="Fabrication Capabilities & Services"
          subtitle="We undertake custom metalwork for industrial plants, infrastructure projects, housing societies, and municipal public spaces."
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-industrial-border flex items-center space-x-3 shadow-subtle">
              <CheckCircle2 className="w-5 h-5 text-industrial-green shrink-0" />
              <span className="text-sm font-bold text-industrial-text">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Step Visual Process */}
      <div className="space-y-8 bg-industrial-bg p-8 sm:p-12 rounded-3xl border border-industrial-border">
        <SectionHeader
          badge="Structured Execution"
          title="Our Fabrication Workflow"
          subtitle="A disciplined 6-step manufacturing process ensures accuracy and timely delivery."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FABRICATION_PROCESS.map((step) => (
            <div key={step.num} className="p-6 rounded-2xl bg-white border border-industrial-border space-y-3 relative shadow-subtle">
              <span className="text-3xl font-black text-industrial-green/30 font-mono">{step.num}</span>
              <h4 className="text-lg font-bold text-industrial-text">{step.title}</h4>
              <p className="text-xs text-industrial-textMuted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Showcase */}
      {fabProducts.length > 0 && (
        <div className="space-y-6">
          <SectionHeader
            title="Standard Fabricated Products"
            subtitle="Examples of custom metalwork structures manufactured at our Nashik facility."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {fabProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Lead Form */}
      <div className="max-w-4xl mx-auto pt-8">
        <EnquiryForm
          initialRequirement="Industrial Fabrication"
          title="Submit Custom Fabrication Requirement"
          subtitle="Have technical drawings or project specifications? Fill out the form or contact Prasad Suresh Jadhav directly."
        />
      </div>
    </div>
  );
}
