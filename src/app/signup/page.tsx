"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, Mail, Lock, Phone, User, ArrowRight, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in Name, Email, and Password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = signup(name, email, phone, password);
      setIsLoading(false);

      if (res.success) {
        router.push("/account");
      } else {
        setError(res.error || "Signup failed.");
      }
    }, 400);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto text-left">
      <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-10 shadow-card space-y-6 relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-industrial-lightGreenBg border border-emerald-300 text-industrial-green rounded-full flex items-center justify-center mx-auto shadow-subtle">
            <UserPlus className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-extrabold text-industrial-text">Create Customer Account</h1>
          <p className="text-xs text-industrial-textMuted max-w-sm mx-auto">
            Register to track quotation requests, save outdoor fitness equipment specifications, and receive project updates from AMEY INDUSTRIES.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Full Name *</label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl pl-10 pr-4 py-3 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
              <User className="w-4 h-4 text-industrial-steel absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Email Address *</label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl pl-10 pr-4 py-3 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
              <Mail className="w-4 h-4 text-industrial-steel absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Phone Number (Optional)</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl pl-10 pr-4 py-3 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
              <Phone className="w-4 h-4 text-industrial-steel absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Create Password *</label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-industrial-bg border border-industrial-border rounded-xl pl-10 pr-4 py-3 text-sm text-industrial-text placeholder-industrial-textMuted focus:outline-none focus:border-industrial-green transition-colors"
              />
              <Lock className="w-4 h-4 text-industrial-steel absolute left-3.5 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-xl text-white bg-industrial-green hover:bg-industrial-greenDark font-extrabold text-sm shadow-subtle hover:shadow-card transition-all flex items-center justify-center space-x-2 min-h-[44px]"
          >
            {isLoading ? (
              <span>Creating Account...</span>
            ) : (
              <>
                <span>Register Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="pt-4 border-t border-industrial-border text-center text-xs text-industrial-textMuted">
          Already have an account?{" "}
          <Link href="/login" className="text-industrial-green font-bold hover:underline">
            Sign In Here
          </Link>
        </div>

      </div>
    </div>
  );
}
