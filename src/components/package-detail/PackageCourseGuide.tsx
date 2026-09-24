"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Calendar,
  CreditCard,
  Award,
  Target,
  MapPin,
  ClipboardCheck,
  FileText,
  BookOpen,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { PackageDetailData } from "@/data/packageDetailsData";
import { cn } from "@/lib/utils";

interface PackageCourseGuideProps {
  guide: PackageDetailData["courseGuide"];
}

interface ItemTheme {
  icon: React.ElementType;
  label: string;
  color: string;
  bg: string;
  ring: string;
  border: string;
  pillBg: string;
}

const ITEM_THEMES: ItemTheme[] = [
  {
    icon: HelpCircle,
    label: "Overview",
    color: "text-emerald-600",
    bg: "bg-emerald-500",
    ring: "ring-emerald-100",
    border: "border-emerald-500",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: Calendar,
    label: "Schedule",
    color: "text-sky-600",
    bg: "bg-sky-500",
    ring: "ring-sky-100",
    border: "border-sky-500",
    pillBg: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    icon: CreditCard,
    label: "Fees & Cost",
    color: "text-amber-600",
    bg: "bg-amber-500",
    ring: "ring-amber-100",
    border: "border-amber-500",
    pillBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: Award,
    label: "Results",
    color: "text-purple-600",
    bg: "bg-purple-500",
    ring: "ring-purple-100",
    border: "border-purple-500",
    pillBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: Target,
    label: "Score Band",
    color: "text-teal-600",
    bg: "bg-teal-500",
    ring: "ring-teal-100",
    border: "border-teal-500",
    pillBg: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    icon: MapPin,
    label: "Locations",
    color: "text-blue-600",
    bg: "bg-blue-500",
    ring: "ring-blue-100",
    border: "border-blue-500",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: ClipboardCheck,
    label: "Registration",
    color: "text-rose-600",
    bg: "bg-rose-500",
    ring: "ring-rose-100",
    border: "border-rose-500",
    pillBg: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    icon: FileText,
    label: "Documents",
    color: "text-emerald-600",
    bg: "bg-emerald-600",
    ring: "ring-emerald-100",
    border: "border-emerald-600",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: BookOpen,
    label: "Syllabus",
    color: "text-indigo-600",
    bg: "bg-indigo-500",
    ring: "ring-indigo-100",
    border: "border-indigo-500",
    pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export default function PackageCourseGuide({ guide }: PackageCourseGuideProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>("01");
  const activeCardIdRef = useRef<string | null>("01");
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sectionRef = useRef<HTMLElement | null>(null);
  const lastManualScrollY = useRef<number | null>(null);
  const isManualOverride = useRef<boolean>(false);

  // Sync ref with current active state
  useEffect(() => {
    activeCardIdRef.current = activeCardId;
  }, [activeCardId]);

  const toggleCard = (id: string) => {
    isManualOverride.current = true;
    lastManualScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If user manually tapped, only release override once they scroll > 50px
          if (isManualOverride.current && lastManualScrollY.current !== null) {
            if (Math.abs(window.scrollY - lastManualScrollY.current) > 50) {
              isManualOverride.current = false;
              lastManualScrollY.current = null;
            } else {
              ticking = false;
              return;
            }
          }

          const section = sectionRef.current;
          if (!section) {
            ticking = false;
            return;
          }

          const sectionRect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const focalY = viewportHeight * 0.45; // Natural visual focus line (45% from top)

          // Only spy when section is within relevant viewport view
          if (sectionRect.bottom < focalY * 0.5 || sectionRect.top > viewportHeight * 0.85) {
            ticking = false;
            return;
          }

          let closestId: string | null = null;
          let minDistance = Infinity;

          guide.items.forEach((item) => {
            const el = itemRefs.current[item.id];
            if (!el) return;
            const rect = el.getBoundingClientRect();
            // Anchor at the node center (top of row + 30px) so height changes don't cause jitter
            const nodeCenter = rect.top + 30;
            const distance = Math.abs(nodeCenter - focalY);

            if (distance < minDistance) {
              minDistance = distance;
              closestId = item.id;
            }
          });

          if (closestId && closestId !== activeCardIdRef.current) {
            activeCardIdRef.current = closestId;
            setActiveCardId(closestId);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [guide.items]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative z-10 overflow-hidden"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-brand-navy tracking-tight font-heading leading-tight sm:leading-snug">
            <span>{guide.headingPrefix} </span>
            <span className="text-emerald-600">{guide.headingHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal font-body leading-relaxed max-w-xl mx-auto">
            {guide.subtitle}
          </p>
        </div>

        {/* ========================================================== */}
        {/* UNIFIED ALTERNATING TIMELINE (One in Right, One in Left)   */}
        {/* Symmetrical Left Wing + Center Fixed Node + Right Wing     */}
        {/* Bidirectional Scroll-Spy: Opens active, Closes inactive    */}
        {/* ========================================================== */}
        <div className="relative w-full">
          {/* Continuous Central Vertical Spine Line (Exact 50% Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[2px] sm:w-[2.5px] bg-gradient-to-b from-emerald-400 via-slate-300 to-emerald-400 pointer-events-none z-0" />

          <div className="space-y-6 sm:space-y-10 lg:space-y-12 relative z-10">
            {guide.items.map((item, idx) => {
              const theme = ITEM_THEMES[idx % ITEM_THEMES.length];
              const Icon = theme.icon;
              const isOpen = activeCardId === item.id;
              const isEven = idx % 2 === 1; // Even rows: Card on Left, Pill on Right

              return (
                <motion.div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-start justify-center w-full relative"
                >
                  {/* LEFT WING AREA (Exactly 50% width minus half-node) */}
                  <div className="flex-1 min-w-0 flex items-center justify-end pt-1.5 sm:pt-4">
                    {!isEven ? (
                      // ODD ROW: Pill on Left pointing to Center Node
                      <div className="flex items-center gap-1 sm:gap-2.5 max-w-full">
                        <button
                          onClick={() => toggleCard(item.id)}
                          type="button"
                          className={cn(
                            "px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-[9px] sm:text-xs font-black tracking-wider uppercase flex items-center gap-1 sm:gap-2 shadow-xs transition-all hover:scale-105 cursor-pointer whitespace-nowrap",
                            isOpen
                              ? theme.bg + " text-white border-transparent shadow-md"
                              : theme.pillBg
                          )}
                        >
                          <span>{item.number}</span>
                          <span className="hidden xs:inline">•</span>
                          <span className="hidden xs:inline">{theme.label}</span>
                        </button>
                        {/* Connector line from Pill straight into Center Node */}
                        <div className="w-2.5 sm:w-8 lg:w-12 h-[2px] bg-slate-300 relative flex items-center justify-end shrink-0">
                          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 -mr-1" />
                        </div>
                      </div>
                    ) : (
                      // EVEN ROW: Accordion Card on Left
                      <div className="w-full flex items-center gap-1.5 sm:gap-3">
                        <div
                          className={cn(
                            "w-full rounded-2xl sm:rounded-[24px] border transition-all duration-300 overflow-hidden bg-white shadow-xs hover:shadow-lg",
                            isOpen
                              ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20 bg-emerald-50/15"
                              : "border-slate-200/90 hover:border-emerald-300"
                          )}
                        >
                          <button
                            onClick={() => toggleCard(item.id)}
                            aria-expanded={isOpen}
                            type="button"
                            className="w-full text-left p-2.5 sm:p-4 lg:p-5 flex items-start justify-between gap-1.5 sm:gap-3 cursor-pointer group"
                          >
                            <div className="flex items-baseline gap-1.5 sm:gap-2.5 min-w-0 flex-1">
                              <span className="font-heading text-xs sm:text-base font-black text-emerald-600 shrink-0">
                                {item.number}
                              </span>
                              <span className="text-[11px] sm:text-sm lg:text-[15px] font-extrabold text-brand-navy group-hover:text-emerald-700 leading-snug transition-colors line-clamp-2 sm:line-clamp-none">
                                {item.question}
                              </span>
                            </div>

                            <div
                              className={cn(
                                "w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5",
                                isOpen
                                  ? "bg-emerald-500 text-white"
                                  : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                              )}
                            >
                              {isOpen ? (
                                <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                              ) : (
                                <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                              )}
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: "easeInOut" }}
                              >
                                <div className="px-2.5 sm:px-5 pb-3 sm:pb-5 pt-1 text-[10px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-body">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Connector line from Left Card straight into Center Node */}
                        <div className="w-2 sm:w-6 lg:w-10 h-[2px] bg-slate-300 shrink-0" />
                      </div>
                    )}
                  </div>

                  {/* CENTER NODE: Dual-Ring Circular Node Locked at Exact 50% Horizontal Center */}
                  <div className="shrink-0 z-20 flex items-center justify-center px-0.5 sm:px-1">
                    <button
                      onClick={() => toggleCard(item.id)}
                      type="button"
                      aria-label={`Toggle ${item.question}`}
                      className="relative group cursor-pointer focus:outline-none"
                    >
                      <div
                        className={cn(
                          "w-9 h-9 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-4 flex items-center justify-center bg-white shadow-md transition-all duration-300 group-hover:scale-110",
                          isOpen
                            ? `${theme.border} ring-2 sm:ring-4 ${theme.ring} shadow-lg scale-105`
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div
                          className={cn(
                            "w-6 h-6 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-colors",
                            isOpen
                              ? `${theme.bg} text-white`
                              : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                          )}
                        >
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* RIGHT WING AREA (Exactly 50% width minus half-node) */}
                  <div className="flex-1 min-w-0 flex items-center justify-start pt-1.5 sm:pt-4">
                    {!isEven ? (
                      // ODD ROW: Accordion Card on Right
                      <div className="w-full flex items-center gap-1.5 sm:gap-3">
                        {/* Connector line from Center Node straight into Right Card */}
                        <div className="w-2 sm:w-6 lg:w-10 h-[2px] bg-slate-300 shrink-0" />

                        <div
                          className={cn(
                            "w-full rounded-2xl sm:rounded-[24px] border transition-all duration-300 overflow-hidden bg-white shadow-xs hover:shadow-lg",
                            isOpen
                              ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20 bg-emerald-50/15"
                              : "border-slate-200/90 hover:border-emerald-300"
                          )}
                        >
                          <button
                            onClick={() => toggleCard(item.id)}
                            aria-expanded={isOpen}
                            type="button"
                            className="w-full text-left p-2.5 sm:p-4 lg:p-5 flex items-start justify-between gap-1.5 sm:gap-3 cursor-pointer group"
                          >
                            <div className="flex items-baseline gap-1.5 sm:gap-2.5 min-w-0 flex-1">
                              <span className="font-heading text-xs sm:text-base font-black text-emerald-600 shrink-0">
                                {item.number}
                              </span>
                              <span className="text-[11px] sm:text-sm lg:text-[15px] font-extrabold text-brand-navy group-hover:text-emerald-700 leading-snug transition-colors line-clamp-2 sm:line-clamp-none">
                                {item.question}
                              </span>
                            </div>

                            <div
                              className={cn(
                                "w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5",
                                isOpen
                                  ? "bg-emerald-500 text-white"
                                  : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                              )}
                            >
                              {isOpen ? (
                                <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                              ) : (
                                <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                              )}
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: "easeInOut" }}
                              >
                                <div className="px-2.5 sm:px-5 pb-3 sm:pb-5 pt-1 text-[10px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-body">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    ) : (
                      // EVEN ROW: Pill on Right pointing to Center Node
                      <div className="flex items-center gap-1 sm:gap-2.5 max-w-full">
                        {/* Connector line from Center Node straight into Pill */}
                        <div className="w-2.5 sm:w-8 lg:w-12 h-[2px] bg-slate-300 relative flex items-center justify-start shrink-0">
                          <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 -ml-1" />
                        </div>
                        <button
                          onClick={() => toggleCard(item.id)}
                          type="button"
                          className={cn(
                            "px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-[9px] sm:text-xs font-black tracking-wider uppercase flex items-center gap-1 sm:gap-2 shadow-xs transition-all hover:scale-105 cursor-pointer whitespace-nowrap",
                            isOpen
                              ? theme.bg + " text-white border-transparent shadow-md"
                              : theme.pillBg
                          )}
                        >
                          <span>{item.number}</span>
                          <span className="hidden xs:inline">•</span>
                          <span className="hidden xs:inline">{theme.label}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
