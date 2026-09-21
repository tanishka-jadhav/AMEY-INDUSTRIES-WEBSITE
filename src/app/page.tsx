"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageSquare,
  Dumbbell,
  Smile,
  Wrench,
  CheckCircle2,
  Building2,
  Trees,
  School,
  Hotel,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import TrustStrip from "@/components/TrustStrip";
import ProductStory from "@/components/ProductStory";
import ImmersiveImageSection from "@/components/ImmersiveImageSection";
import ProjectGallery from "@/components/ProjectGallery";
import CinematicVideo from "@/components/CinematicVideo";
import TechnicalGraphic from "@/components/TechnicalGraphic";
import EnquiryForm from "@/components/EnquiryForm";
import { PRODUCTS } from "@/data/products";
import { FAQS } from "@/data/faqs";
import { getWhatsAppUrl, getPhoneUrl } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const greenGymProducts = PRODUCTS.filter((p) => p.category === "green-gym");
  const playgroundProducts = PRODUCTS.filter((p) => p.category === "playground");
  const fabricationProducts = PRODUCTS.filter((p) => p.category === "industrial-fabrication");

  const WORK_STEPS = [
    {
      num: "01",
      title: "Requirement & Site Specs",
      desc: "Share your park, society, or commercial space dimensions and equipment needs.",
    },
    {
      num: "02",
      title: "Engineering Selection",
      desc: "We assist in picking optimal equipment models, structural grades, and configurations.",
    },
    {
      num: "03",
      title: "Transparent Quotation",
      desc: "Receive direct manufacturer pricing with detailed technical specs and lead times.",
    },
    {
      num: "04",
      title: "Precision Production",
      desc: "Heavy-gauge pipe bending, welding, anti-corrosive primer, and powder coat finish in Nashik.",
    },
    {
      num: "05",
      title: "Delivery & Installation",
      desc: "Secure site transport with foundation concrete grouting support and anchoring.",
    },
  ];

  const APPLICATIONS = [
    { title: "Public Parks & Gardens", icon: Trees, desc: "Municipal open gyms & community fitness setups" },
    { title: "Residential Societies", icon: Building2, desc: "Apartment garden fitness & children's play zones" },
    { title: "Schools & Colleges", icon: School, desc: "Campus youth fitness stations & play structures" },
    { title: "Hotels & Resorts", icon: Hotel, desc: "Outdoor guest wellness grounds & activity areas" },
    { title: "Corporate Facilities", icon: Users, desc: "Employee outdoor wellness & break grounds" },
    { title: "Community Grounds", icon: Award, desc: "Public sport complexes & township recreation parks" },
  ];

  return (
    <div className="space-y-0 pb-16 bg-industrial-bg">
      {/* 1. CINEMATIC HERO */}
      <CinematicHero heroImageUrl="/images/green-gym/hero_green_gym_ai_background.jpg" />

      {/* 2. MANUFACTURER TRUST STRIP */}
      <TrustStrip />

      {/* 3. SECTION: WHAT WE BUILD (Visual Editorial Cards) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-industrial-green uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-industrial-green"></span>
              <span>MANUFACTURING VERTICALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-charcoal tracking-tight">
              What AMEY INDUSTRIES Builds.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-industrial-textMuted max-w-md">
            Three core divisions engineered for public space durability, physical safety, and custom metal fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Green Gym */}
          <div className="group relative bg-white border border-industrial-border rounded-lg overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 w-full bg-industrial-mutedBg overflow-hidden img-zoom-container">
              <Image
                src={greenGymProducts[0]?.image || "/images/green-gym/outdoor-cross-trainer.jpg"}
                alt="AMEY INDUSTRIES Green Gym Outdoor Fitness Equipment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-mono uppercase bg-industrial-green/90 px-2.5 py-1 rounded">
                  OUTDOOR FITNESS
                </span>
                <span className="text-xs font-mono">{greenGymProducts.length} PRODUCTS</span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-industrial-charcoal group-hover:text-industrial-green transition-colors mb-2">
                  GREEN GYM EQUIPMENT
                </h3>
                <p className="text-sm text-industrial-textMuted leading-relaxed">
                  Heavy-duty outdoor exercise equipment for public parks, housing societies, and municipal open gyms. Bodyweight resistance for all age groups.
                </p>
              </div>

              <div className="pt-4 border-t border-industrial-border/60">
                <Link
                  href="/green-gym"
                  className="inline-flex items-center text-sm font-semibold text-industrial-green hover:text-industrial-greenDark group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Green Gym Equipment</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Playground */}
          <div className="group relative bg-white border border-industrial-border rounded-lg overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 w-full bg-industrial-mutedBg overflow-hidden img-zoom-container">
              <Image
                src={playgroundProducts[0]?.image || "/images/playground/multi-play-combination-station.jpg"}
                alt="AMEY INDUSTRIES Playground Equipment Nashik"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-mono uppercase bg-industrial-green/90 px-2.5 py-1 rounded">
                  PLAY STRUCTURES
                </span>
                <span className="text-xs font-mono">{playgroundProducts.length} DESIGNS</span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-industrial-charcoal group-hover:text-industrial-green transition-colors mb-2">
                  PLAYGROUND EQUIPMENT
                </h3>
                <p className="text-sm text-industrial-textMuted leading-relaxed">
                  Durable play solutions including slides, swing sets, seesaws, and multi-play stations engineered for children's safety and all-weather resilience.
                </p>
              </div>

              <div className="pt-4 border-t border-industrial-border/60">
                <Link
                  href="/playground"
                  className="inline-flex items-center text-sm font-semibold text-industrial-green hover:text-industrial-greenDark group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Playground Range</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Fabrication */}
          <div className="group relative bg-white border border-industrial-border rounded-lg overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 w-full bg-industrial-mutedBg overflow-hidden img-zoom-container">
              <Image
                src={fabricationProducts[0]?.image || "/images/fabrication/factory-yard-components.jpg"}
                alt="AMEY INDUSTRIES Industrial Fabrication Nashik"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-mono uppercase bg-industrial-green/90 px-2.5 py-1 rounded">
                  CUSTOM METALWORK
                </span>
                <span className="text-xs font-mono">SPEC-BASED</span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-industrial-charcoal group-hover:text-industrial-green transition-colors mb-2">
                  INDUSTRIAL FABRICATION
                </h3>
                <p className="text-sm text-industrial-textMuted leading-relaxed">
                  Tailored steel fabrication, industrial sheds, metal structures, park benches, and architectural enclosures made to exact project drawings.
                </p>
              </div>

              <div className="pt-4 border-t border-industrial-border/60">
                <Link
                  href="/industrial-fabrication"
                  className="inline-flex items-center text-sm font-semibold text-industrial-green hover:text-industrial-greenDark group-hover:translate-x-1 transition-all"
                >
                  <span>Discuss Fabrication Specs</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STICKY PRODUCT EXPLORER */}
      <ProductStory products={PRODUCTS} />

      {/* 5. IMMERSIVE APPLICATION BANNER */}
      <ImmersiveImageSection
        bgImageUrl="/images/green-gym/outdoor-air-walker-lawn.jpg"
        alt="Green Gym installation in public park"
        eyebrow="COMMUNITY & MUNICIPAL INSTALLATIONS"
        title="Engineered for Public Parks & Active Spaces."
        description="Our heavy-duty outdoor gym stations are designed for continuous daily use by citizens, installed with concrete grouting and multi-layer corrosion defense."
        minHeight="min-h-[480px]"
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => openQuoteModal("Municipal Park Installation", "Green Gym")}
            className="px-6 py-3.5 bg-industrial-green hover:bg-industrial-greenDark text-white font-semibold text-sm rounded shadow transition-colors"
          >
            Request Quotation for Your Park
          </button>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded border border-white/30 backdrop-blur-sm transition-colors inline-flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </ImmersiveImageSection>

      {/* 6. REAL PROJECTS MASONRY GALLERY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-industrial-border">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-industrial-green uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-industrial-green"></span>
              <span>REAL-WORLD INSTALLATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-charcoal tracking-tight">
              See the work in real spaces.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-industrial-textMuted max-w-md">
            Actual completed installations across Nashik, Maharashtra parks, residential townships, and institutional grounds.
          </p>
        </div>

        <ProjectGallery limit={6} />

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-industrial-mutedBg text-industrial-charcoal font-semibold text-sm rounded border border-industrial-border shadow-subtle transition-all"
          >
            <span>Browse Full Executed Projects Gallery</span>
            <ArrowRight className="w-4 h-4 ml-2 text-industrial-green" />
          </Link>
        </div>
      </section>

      {/* 7. CINEMATIC VIDEO PLAYER */}
      <CinematicVideo />

      {/* 8. APPLICATIONS SECTION */}
      <section className="py-20 bg-white border-y border-industrial-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded">
              SECTORS SERVED
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-charcoal tracking-tight mt-3">
              Applications & Installation Environments
            </h2>
            <p className="text-sm text-industrial-textMuted mt-2">
              Our products are engineered to fit seamless architectural layouts for diverse community sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((app, idx) => {
              const IconComp = app.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-industrial-bg border border-industrial-border hover:border-industrial-green/50 transition-all flex items-start space-x-4"
                >
                  <div className="p-3 rounded bg-white text-industrial-green border border-industrial-border shrink-0 shadow-subtle">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-industrial-charcoal">{app.title}</h3>
                    <p className="text-xs text-industrial-textMuted mt-1 leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. 5-STEP TIMELINE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-industrial-green uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-industrial-green"></span>
              <span>DIRECT MANUFACTURER PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-industrial-charcoal tracking-tight">
              How We Work.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-industrial-textMuted max-w-md">
            From initial site drawing review to final concrete anchor installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WORK_STEPS.map((step, i) => (
            <div
              key={step.num}
              className="p-6 bg-white border border-industrial-border rounded-lg shadow-subtle relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-bold text-industrial-green bg-industrial-lightGreenBg px-2.5 py-0.5 rounded">
                    {step.num}
                  </span>
                  <TechnicalGraphic variant="crosshair" />
                </div>
                <h3 className="text-base font-bold text-industrial-charcoal mb-2">{step.title}</h3>
                <p className="text-xs text-industrial-textMuted leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-industrial-border/40 text-[10px] font-mono text-industrial-steel">
                STEP {i + 1} OF 5
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ABOUT PRASAD SURESH JADHAV & AMEY INDUSTRIES */}
      <section className="py-20 bg-white border-y border-industrial-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] w-full rounded-lg overflow-hidden border border-industrial-border shadow-elevated bg-industrial-mutedBg">
                <Image
                  src="/images/green-gym/outdoor-air-walker-paver-tiles.jpg"
                  alt="AMEY INDUSTRIES Workshop & Manufacturing in Nashik"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-mono text-xs text-industrial-lightGreenBg uppercase tracking-widest">
                    PROPRIETOR & LEAD ENGINEER
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Mr. Prasad Suresh Jadhav</h3>
                  <p className="text-xs text-industrial-mutedBg">AMEY INDUSTRIES • Nashik, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-industrial-green uppercase">
                <span className="w-2 h-2 rounded-full bg-industrial-green"></span>
                <span>COMPANY BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-industrial-charcoal tracking-tight">
                Manufacturing with pride in Nashik.
              </h2>
              <p className="text-base text-industrial-textMuted leading-relaxed">
                AMEY INDUSTRIES is a trusted physical-product manufacturing firm based in Nashik, Maharashtra. Under the leadership of <strong className="text-industrial-charcoal">Mr. Prasad Suresh Jadhav</strong>, we specialize in heavy-duty Green Gym outdoor exercise equipment, children's playground structures, and custom industrial metal fabrication.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-industrial-bg border border-industrial-border">
                  <h4 className="font-bold text-sm text-industrial-charcoal">Direct Manufacturer Advantage</h4>
                  <p className="text-xs text-industrial-textMuted mt-1">No middleman markups. Full accountability from raw steel tube selection to site installation.</p>
                </div>
                <div className="p-4 rounded bg-industrial-bg border border-industrial-border">
                  <h4 className="font-bold text-sm text-industrial-charcoal">All-Weather Outdoor Build</h4>
                  <p className="text-xs text-industrial-textMuted mt-1">High-grade anti-rust primer coat, heavy welds, and UV-resistant outdoor powder coating.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={getPhoneUrl()}
                  className="px-6 py-3 bg-industrial-green hover:bg-industrial-greenDark text-white font-semibold text-sm rounded shadow-sm transition-colors"
                >
                  Call Mr. Prasad Suresh Jadhav (+91 9850573181)
                </a>
                <Link
                  href="/about"
                  className="px-6 py-3 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-charcoal font-semibold text-sm rounded transition-colors"
                >
                  Read Full Company Profile
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-industrial-green bg-industrial-lightGreenBg px-3 py-1 rounded">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl font-bold text-industrial-charcoal mt-3">
            Got Questions About Our Equipment?
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-industrial-border rounded-lg overflow-hidden shadow-subtle text-left"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-base text-industrial-charcoal hover:text-industrial-green transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-industrial-steel transition-transform ${
                      isOpen ? "rotate-180 text-industrial-green" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-industrial-textMuted border-t border-industrial-border/60 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. FINAL CINEMATIC CLOSING CTA */}
      <section className="relative py-24 bg-industrial-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/green-gym/outdoor-air-walker-paver-tiles.jpg"
            alt="AMEY INDUSTRIES Nashik Installation background"
            fill
            className="object-cover object-center filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-white text-xs font-mono uppercase tracking-widest rounded border border-white/20">
            <span>START YOUR PROJECT ENQUIRY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Planning an outdoor fitness or playground space?
          </h2>

          <p className="text-lg text-industrial-mutedBg max-w-2xl mx-auto font-normal leading-relaxed">
            Tell us what you need. Receive custom equipment guidance and transparent manufacturer quotations directly from AMEY INDUSTRIES in Nashik.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-4 bg-industrial-green hover:bg-industrial-greenDark text-white font-bold text-base rounded shadow-lg transition-all"
            >
              GET A QUOTE NOW
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-base rounded shadow-md transition-all inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>WHATSAPP US</span>
            </a>

            <a
              href={getPhoneUrl()}
              className="px-8 py-4 bg-white text-industrial-charcoal hover:bg-industrial-mutedBg font-bold text-base rounded transition-all"
            >
              CALL +91 9850573181
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
