"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, MessageSquare, Send, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";
import { useAuth } from "@/context/AuthContext";

export default function QuoteModal() {
  const { isOpen, productName, categoryName, closeQuoteModal } = useQuoteModal();
  const { addEnquiry } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirementType: "Green Gym",
    product: "",
    quantity: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        product: productName,
        requirementType: categoryName || prev.requirementType,
      }));
    }
  }, [productName, categoryName]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuoteModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.phone || !formData.city) {
      setErrorMsg("Please fill in your Name, Phone Number, and City.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Sync with AuthContext lead tracker
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
        setSubmitted(true);
      }
    } catch {
      setErrorMsg("Network issue. You can contact us directly via WhatsApp or Phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMsg("");
    closeQuoteModal();
  };

  const whatsappText = formData.name 
    ? `Hello AMEY INDUSTRIES, I am ${formData.name}. I would like to request a quotation for ${formData.product || formData.requirementType}${formData.city ? ` (Location: ${formData.city})` : ""}.`
    : `Hello AMEY INDUSTRIES, I would like to request a quotation for ${formData.product || formData.requirementType}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-industrial-text/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white border border-industrial-border rounded-2xl shadow-elevated overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-industrial-bg px-6 py-4 border-b border-industrial-border flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-industrial-text flex items-center">
              Request Project Quote
              <span className="ml-2.5 text-[11px] py-0.5 px-2 bg-industrial-lightGreenBg text-industrial-green border border-emerald-200 rounded-full font-bold">
                AMEY INDUSTRIES
              </span>
            </h3>
            <p className="text-xs text-industrial-textMuted mt-0.5">
              Direct Manufacturer Enquiry • Nashik, MH
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-industrial-textMuted hover:text-industrial-text hover:bg-industrial-mutedBg transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-industrial-lightGreenBg border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-industrial-green">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-industrial-text">Enquiry Received!</h4>
              <p className="text-sm text-industrial-textMuted max-w-md mx-auto leading-relaxed">
                Thank you. <strong className="text-industrial-text font-bold">AMEY INDUSTRIES</strong> (Mr. Prasad Suresh Jadhav) will review your requirement and contact you shortly.
              </p>

              <div className="pt-4 border-t border-industrial-border grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                <a
                  href={getPhoneUrl()}
                  className="flex items-center justify-center py-3 px-4 bg-industrial-mutedBg hover:bg-industrial-border text-industrial-text rounded-xl text-sm font-bold border border-industrial-border transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-industrial-green" />
                  Call Now Directly
                </a>
                <a
                  href={getWhatsAppUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-industrial-green hover:bg-industrial-greenDark text-white rounded-xl text-sm font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Us Now
                </a>
              </div>

              <button
                onClick={handleResetAndClose}
                className="mt-4 text-xs text-industrial-textMuted underline hover:text-industrial-text"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Requirement Type Selector */}
              <div>
                <label className="block text-xs font-bold text-industrial-text mb-1">
                  Requirement Type *
                </label>
                <select
                  value={formData.requirementType}
                  onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                  className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text focus:outline-none focus:border-industrial-green transition-colors"
                >
                  <option value="Green Gym">Green Gym / Outdoor Fitness Equipment</option>
                  <option value="Playground Equipment">Playground Equipment</option>
                  <option value="Industrial Fabrication">Industrial Fabrication Work</option>
                  <option value="Bulk Requirement">Bulk Quantity Requirement</option>
                  <option value="Project / Installation">Turnkey Project & Installation</option>
                  <option value="Other">Other Enquiry</option>
                </select>
              </div>

              {/* Grid 2 Cols: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-industrial-text mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-industrial-text mb-1">
                    Phone Number *
                  </label>
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

              {/* Grid 2 Cols: City & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-industrial-text mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nashik, Pune, Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-industrial-text mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
                  />
                </div>
              </div>

              {/* Product Context */}
              <div>
                <label className="block text-xs font-bold text-industrial-text mb-1">
                  Specific Product / Item Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Outdoor Cross Trainer / Custom Shed / Slide"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-industrial-text mb-1">
                  Project Details / Quantity / Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your requirement, quantity, site location, or target timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-industrial-bg border border-industrial-border rounded-xl px-3.5 py-2.5 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl text-white bg-industrial-green hover:bg-industrial-greenDark font-extrabold text-sm shadow-subtle hover:shadow-card transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request to AMEY INDUSTRIES</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-xs text-industrial-textMuted pt-2 border-t border-industrial-border">
                <span className="flex items-center font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-industrial-green" />
                  Direct response from Prasad Suresh Jadhav
                </span>
                <a
                  href={getWhatsAppUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-industrial-green hover:underline font-bold"
                >
                  WhatsApp directly
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
