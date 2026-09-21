"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, MessageSquare, User, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { useAuth } from "@/context/AuthContext";
import { getPhoneUrl, getWhatsAppUrl } from "@/data/company";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Green Gym", href: "/green-gym" },
  { name: "Playground", href: "/playground" },
  { name: "Fabrication", href: "/industrial-fabrication" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and add Escape key handler when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white border-b border-industrial-border ${
        isScrolled ? "py-2.5 shadow-subtle" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-industrial-green text-white font-extrabold text-lg flex items-center justify-center shadow-sm group-hover:bg-industrial-greenDark transition-colors">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-industrial-text group-hover:text-industrial-green transition-colors">
              AMEY INDUSTRIES
            </span>
            <span className="text-[10px] uppercase tracking-widest text-industrial-textMuted font-semibold">
              Nashik, Maharashtra
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-industrial-green bg-industrial-lightGreenBg font-bold"
                    : "text-industrial-textMuted hover:text-industrial-text hover:bg-industrial-mutedBg"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Auth Links */}
        <div className="hidden lg:flex items-center space-x-3">
          {user ? (
            <Link
              href={user.role === "admin" ? "/admin" : "/account"}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold text-industrial-text bg-industrial-mutedBg hover:bg-industrial-border border border-industrial-border transition-colors"
            >
              {user.role === "admin" ? (
                <ShieldCheck className="w-4 h-4 text-industrial-green" />
              ) : (
                <User className="w-4 h-4 text-industrial-green" />
              )}
              <span>{user.role === "admin" ? "Admin Portal" : "Account"}</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-bold text-industrial-textMuted hover:text-industrial-text transition-colors"
            >
              <User className="w-4 h-4 mr-1 text-industrial-green" />
              <span>Sign In</span>
            </Link>
          )}

          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-industrial-green hover:bg-industrial-greenDark shadow-sm transition-all"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quote Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={() => openQuoteModal()}
            className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-industrial-green hover:bg-industrial-greenDark active:scale-95 transition-all shadow-xs"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-industrial-textMuted hover:text-industrial-text hover:bg-industrial-mutedBg focus:outline-none focus:ring-2 focus:ring-industrial-green/50 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-industrial-text" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-industrial-border px-4 pt-3 pb-8 space-y-4 shadow-elevated animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between min-h-[44px] ${
                    isActive
                      ? "text-industrial-green bg-industrial-lightGreenBg font-bold border border-emerald-200"
                      : "text-industrial-text hover:bg-industrial-mutedBg active:bg-industrial-mutedBg"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-industrial-green" : "text-industrial-steel opacity-60"}`} />
                </Link>
              );
            })}

            <Link
              href={user ? (user.role === "admin" ? "/admin" : "/account") : "/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3.5 rounded-xl text-base font-bold text-industrial-green bg-industrial-lightGreenBg flex items-center justify-between min-h-[44px] border border-emerald-200"
            >
              <div className="flex items-center space-x-2">
                {user?.role === "admin" ? <ShieldCheck className="w-5 h-5" /> : <User className="w-5 h-5" />}
                <span>{user ? (user.role === "admin" ? "Admin Portal" : "Customer Account") : "Sign In / Register"}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-industrial-green" />
            </Link>
          </div>

          <div className="pt-4 border-t border-industrial-border space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-industrial-green hover:bg-industrial-greenDark flex items-center justify-center space-x-2 shadow-sm min-h-[44px]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-extrabold text-sm min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 mr-2 fill-white/20" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

