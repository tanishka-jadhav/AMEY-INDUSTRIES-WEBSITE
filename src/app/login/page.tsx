"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, UserCheck, Lock, Mail, ArrowRight, AlertCircle, Building2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [activeTab, setActiveTab] = useState<"customer" | "admin">("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const res = login(email, password);
      setIsLoading(false);

      if (res.success) {
        if (email.toLowerCase().includes("admin") || email === "psj.smil@gmail.com" || activeTab === "admin") {
          router.push("/admin");
        } else {
          router.push("/account");
        }
      } else {
        setError(res.error || "Login failed. Please check your credentials.");
      }
    }, 400);
  };

  const fillAdminCredentials = () => {
    setActiveTab("admin");
    setEmail("psj.smil@gmail.com");
    setPassword("admin123");
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto text-left">
      <div className="bg-white border border-industrial-border rounded-3xl p-6 sm:p-10 shadow-card space-y-6 relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-industrial-lightGreenBg border border-emerald-300 text-industrial-green rounded-full flex items-center justify-center mx-auto shadow-subtle">
            <Building2 className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-extrabold text-industrial-text">Sign In to AMEY INDUSTRIES</h1>
          <p className="text-xs text-industrial-textMuted max-w-sm mx-auto">
            Access your customer account or owner admin portal for outdoor fitness and playground equipment management.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1.5 bg-industrial-bg rounded-2xl border border-industrial-border text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setActiveTab("customer");
              setError("");
            }}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center space-x-2 ${
              activeTab === "customer"
                ? "bg-white text-industrial-green shadow-xs font-black border border-emerald-200"
                : "text-industrial-textMuted hover:text-industrial-text"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Customer Login</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("admin");
              setError("");
              fillAdminCredentials();
            }}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center space-x-2 ${
              activeTab === "admin"
                ? "bg-industrial-green text-white shadow-xs font-black"
                : "text-industrial-textMuted hover:text-industrial-text"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Portal</span>
          </button>
        </div>

        {/* Admin Quick Help Banner */}
        {activeTab === "admin" && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-industrial-green space-y-1">
            <div className="font-bold flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5" />
              Owner Admin Account (Mr. Prasad Suresh Jadhav)
            </div>
            <p className="text-[11px] text-industrial-textMuted">
              Email: <code className="font-mono text-industrial-green font-bold">psj.smil@gmail.com</code> | Password: <code className="font-mono text-industrial-green font-bold">admin123</code>
            </p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-industrial-text mb-1">Email Address</label>
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
            <label className="block text-xs font-bold text-industrial-text mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
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
              <span>Signing in...</span>
            ) : (
              <>
                <span>Sign In to {activeTab === "admin" ? "Admin Portal" : "Customer Account"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Bottom Switch Links */}
        <div className="pt-4 border-t border-industrial-border flex flex-wrap items-center justify-between text-xs text-industrial-textMuted">
          <div>
            Don't have a customer account?{" "}
            <Link href="/signup" className="text-industrial-green font-bold hover:underline">
              Register Here
            </Link>
          </div>
          <button
            type="button"
            onClick={fillAdminCredentials}
            className="text-industrial-text font-semibold hover:text-industrial-green underline mt-1 sm:mt-0"
          >
            Admin Quick Fill
          </button>
        </div>

      </div>
    </div>
  );
}
