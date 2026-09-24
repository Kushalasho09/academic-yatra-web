"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Shield,
  FileText,
  RefreshCcw,
  Calendar,
  Building2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Menu,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export interface LegalTocItem {
  id: string;
  label: string;
  number?: string;
}

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  badgeText: string;
  tocItems: LegalTocItem[];
  children: React.ReactNode;
}

const LEGAL_TABS = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    icon: Shield,
  },
  {
    href: "/terms-and-conditions",
    label: "Terms & Conditions",
    icon: FileText,
  },
  {
    href: "/refund-policy",
    label: "Refund Policy",
    icon: RefreshCcw,
  },
];

export default function LegalPageShell({
  title,
  subtitle,
  effectiveDate,
  badgeText,
  tocItems,
  children,
}: LegalPageShellProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setMobileMenuOpen(false);
    }
  };

  const activeItem = tocItems.find((i) => i.id === activeId) || tocItems[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Header — Clean Luxury Theme (No harsh grid lines, no breadcrumb) */}
      <section className="relative bg-[#071328] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#0C9253]/25 via-[#0067E3]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Pill Badges Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0C9253]/20 text-emerald-300 border border-[#0C9253]/40 shadow-sm">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{badgeText}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Effective Date: {effectiveDate}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 border border-white/10">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Future Yatra Pvt. Ltd.</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-tight mb-3">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="font-body text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mx-auto md:mx-0">
                {subtitle}
              </p>
            </div>

            {/* Right: 3D Shield Emblem Asset */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(12,146,83,0.3)] border border-emerald-400/25 bg-gradient-to-b from-white/10 to-transparent p-1.5 group">
                <Image
                  src="/images/legal_trust_shield.jpg"
                  alt="Security & Trust Emblem"
                  fill
                  priority
                  className="object-cover rounded-[22px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* 3 Main Legal Tabs */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
              {LEGAL_TABS.map((tab) => {
                const isActive =
                  pathname === tab.href ||
                  (tab.href === "/terms-and-conditions" && pathname === "/terms");
                const Icon = tab.icon;

                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0C9253] text-white shadow-lg shadow-emerald-900/50 scale-[1.02]"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mobile Quick Jump Menu Bar (Visible only on mobile/tablet) */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-sm">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100/90 text-xs font-semibold text-slate-800"
        >
          <div className="flex items-center gap-2 truncate">
            <Menu className="w-3.5 h-3.5 text-[#0C9253] shrink-0" />
            <span className="text-slate-500 font-normal">Jump to:</span>
            <span className="truncate text-slate-900 font-bold">
              {activeItem?.label}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-500 transition-transform ${
              mobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileMenuOpen && (
          <div className="mt-2 py-2 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-72 overflow-y-auto space-y-0.5">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 transition-colors ${
                  activeId === item.id
                    ? "bg-emerald-50 text-[#0C9253] font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.number && (
                  <span className="font-mono text-[11px] text-slate-400">
                    {item.number}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Main Content Body with TOC Sidebar */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Desktop Table of Contents (Sticky) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider mb-3 pb-3 border-b border-slate-100">
                  <FileText className="w-4 h-4 text-[#0C9253]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1">
                  {tocItems.map((item) => {
                    const isCurrent = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer ${
                          isCurrent
                            ? "bg-emerald-50 text-[#0C9253] font-bold shadow-xs"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                        }`}
                      >
                        {item.number && (
                          <span
                            className={`text-[11px] font-mono shrink-0 pt-0.5 ${
                              isCurrent ? "text-[#0C9253]" : "text-slate-400"
                            }`}
                          >
                            {item.number}
                          </span>
                        )}
                        <span className="leading-snug">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Assistance Box */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/60 text-xs">
                    <p className="font-bold text-slate-900 mb-0.5">Need Clarification?</p>
                    <p className="text-slate-500 mb-2 leading-relaxed text-[11.5px]">
                      Our grievance and legal desk is available to address queries.
                    </p>
                    <a
                      href="mailto:info@academicyatra.com"
                      className="inline-flex items-center gap-1.5 font-bold text-[#0C9253] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>info@academicyatra.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-8 sm:space-y-10 text-slate-700 leading-relaxed font-body">
              {children}

              {/* Official Grievance Redressal Card */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-[#0A192F] to-[#071328] text-white p-5 sm:p-7 md:p-8 shadow-xl border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Statutory Grievance Redressal</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-heading mb-2">
                    Grievance & Privacy Officer
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                    Under the Information Technology Act, 2000, and the Digital Personal Data Protection (DPDP) Act, 2023, Academic Yatra acknowledges grievances within 24 hours and resolves them transparently within 15 days.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-3.5 border border-white/10">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10.5px] uppercase tracking-wider font-semibold">Designated Officer</p>
                        <p className="font-bold text-white mt-0.5">Aazan Khan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-3.5 border border-white/10">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10.5px] uppercase tracking-wider font-semibold">Email Address</p>
                        <a
                          href="mailto:info@academicyatra.com"
                          className="font-bold text-emerald-300 hover:underline mt-0.5 block break-all"
                        >
                          info@academicyatra.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-3.5 border border-white/10">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10.5px] uppercase tracking-wider font-semibold">Phone Support</p>
                        <a
                          href="tel:+919286844550"
                          className="font-bold text-emerald-300 hover:underline mt-0.5 block"
                        >
                          +91-92868-44550
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 sm:p-3.5 border border-white/10">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10.5px] uppercase tracking-wider font-semibold">Corporate Office</p>
                        <p className="font-bold text-white mt-0.5 text-xs sm:text-[13px] leading-snug">
                          Future Yatra Pvt. Ltd., Okhla Phase II, New Delhi, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-slate-400 text-xs">
                      Registered Vertical of Future Yatra Pvt. Ltd.
                    </p>
                    <a
                      href="https://web.whatsapp.com/send?phone=+919403892981"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C9253] hover:bg-[#0A7A45] text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Contact via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
