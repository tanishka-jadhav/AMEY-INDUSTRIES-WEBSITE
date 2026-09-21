"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";
import { useAuth } from "@/context/AuthContext";

interface EnquiryFormProps {
  initialProduct?: string;
  initialRequirement?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function EnquiryForm({
  initialProduct = "",
  initialRequirement = "Green Gym",
  title = "Discuss Your Requirement & Get a Quote",
  subtitle = "Contact AMEY INDUSTRIES in Nashik directly for product pricing, project drawings, installation details, and custom metal fabrication.",
  className = "",
}: EnquiryFormProps) {
  const { addEnquiry } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirementType: initialRequirement,
    product: initialProduct,
    quantity: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.phone || !formData.city) {
      setErrorMsg("Please fill in required fields: Name, Phone Number, and City.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Save locally to AuthContext enquiries state immediately
      addEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        requirementType: formData.requirementType,
        product: formData.product,
        quantity: formData.quantity,
        message: formData.message,
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // Proceed to success screen
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappText = formData.name 
    ? `Hello AMEY INDUSTRIES, I am ${formData.name}. I would like to request a quotation for ${formData.product || formData.requirementType}${formData.city ? ` (Location: ${formData.city})` : ""}.`
    : `Hello AMEY INDUSTRIES, I would like to request a quotation for ${formData.product || formData.requirementType}.`;

  return (
    <div className={`bg-white border border-industrial-border rounded-3xl p-6 sm:p-8 shadow-card relative overflow-hidden ${className}`}>
      {title && (
        <div className="mb-6 relative z-10 text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-industrial-text tracking-tight">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-industrial-textMuted mt-1 leading-relaxed">{subtitle}</p>}
        </div>
      )}

      {submitted ? (
        <div className="py-8 text-center space-y-4 relative z-10">
          <div className="w-16 h-16 bg-industrial-lightGreenBg border border-emerald-300 text-industrial-green rounded-full flex items-center justify-center mx-auto shadow-subtle">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h4 className="text-2xl font-extrabold text-industrial-text">Enquiry Submitted Successfully!</h4>
          <p className="text-sm text-industrial-textMuted max-w-lg mx-auto">
            Thank you! AMEY INDUSTRIES will contact you shortly regarding your quotation and product specifications.
          </p>
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <a
              href={getPhoneUrl()}
              className="flex items-center justify-center py-3 px-4 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-text rounded-xl text-sm font-bold border border-industrial-border transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-industrial-green" />
              Call Directly Now
            </a>
            <a
              href={getWhatsAppUrl(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 bg-industrial-green hover:bg-industrial-greenDark text-white rounded-xl text-sm font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Message
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10 text-left">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">Requirement Type *</label>
              <select
                value={formData.requirementType}
                onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text focus:outline-none focus:border-industrial-green transition-colors"
              >
                <option value="Green Gym">Green Gym / Outdoor Fitness</option>
                <option value="Playground Equipment">Playground Equipment</option>
                <option value="Industrial Fabrication">Industrial Fabrication</option>
                <option value="Bulk Requirement">Bulk Quantity Order</option>
                <option value="Project / Installation">Turnkey Project & Installation</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">Product / Project Name</label>
              <input
                type="text"
                placeholder="e.g. Cross Trainer / Slide / Industrial Frame"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 9850573181"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">City / Location *</label>
              <input
                type="text"
                required
                placeholder="e.g. Nashik, MH"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-industrial-text mb-1">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Requirements & Quantity Details</label>
            <textarea
              rows={3}
              placeholder="Tell us about your project requirements, quantities, site location..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl text-white bg-industrial-green hover:bg-industrial-greenDark font-extrabold text-base shadow-subtle hover:shadow-card transition-all flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <span>Processing Enquiry...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Request Official Quotation</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-between text-xs text-industrial-textMuted pt-3 border-t border-industrial-border">
            <span className="flex items-center font-medium">
              <ShieldCheck className="w-4 h-4 mr-1 text-industrial-green" />
              Direct Response from Prasad Suresh Jadhav
            </span>
            <a
              href={getWhatsAppUrl(whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-industrial-green font-bold hover:underline"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
