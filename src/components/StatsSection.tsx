"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AppWindow,
  TrendingUp,
  Target,
  Video,
} from "lucide-react";

interface MetricItem {
  target: number;
  label: string;
  glowColor: string;
  accentColor: string;
  iconBg: string;
  borderColor: string;
  gradientBg: string;
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    target: 100,
    label: "Learning. No Tab Chaos.",
    glowColor: "rgba(59, 130, 246, 0.95)",
    accentColor: "#2563eb",
    iconBg: "rgba(239, 246, 255, 0.95)",
    borderColor: "rgba(191, 219, 254, 0.9)",
    gradientBg:
      "radial-gradient(circle, rgba(37,99,235,0.85) 0%, rgba(59,130,246,0.55) 28%, rgba(147,197,253,0.32) 58%, rgba(219,234,254,0.15) 85%, transparent 100%)",
    icon: AppWindow,
  },
  {
    target: 100,
    label: "Progress, Minus the Guesswork.",
    glowColor: "rgba(139, 92, 246, 0.95)",
    accentColor: "#7c3aed",
    iconBg: "rgba(245, 243, 255, 0.95)",
    borderColor: "rgba(221, 214, 254, 0.9)",
    gradientBg:
      "radial-gradient(circle, rgba(124,58,237,0.85) 0%, rgba(139,92,246,0.55) 28%, rgba(196,181,253,0.32) 58%, rgba(237,233,254,0.15) 85%, transparent 100%)",
    icon: TrendingUp,
  },
  {
    target: 99,
    label: "Spot the Gaps. Fix the Gaps.",
    glowColor: "rgba(244, 63, 94, 0.95)",
    accentColor: "#e11d48",
    iconBg: "rgba(255, 241, 242, 0.95)",
    borderColor: "rgba(254, 205, 211, 0.9)",
    gradientBg:
      "radial-gradient(circle, rgba(225,29,72,0.85) 0%, rgba(244,63,94,0.55) 28%, rgba(253,164,175,0.32) 58%, rgba(255,228,230,0.15) 85%, transparent 100%)",
    icon: Target,
  },
  {
    target: 100,
    label: "Missed Class? We Kept It.",
    glowColor: "rgba(249, 115, 22, 0.95)",
    accentColor: "#ea580c",
    iconBg: "rgba(255, 247, 237, 0.95)",
    borderColor: "rgba(254, 215, 170, 0.9)",
    gradientBg:
      "radial-gradient(circle, rgba(234,88,12,0.85) 0%, rgba(249,115,22,0.55) 28%, rgba(254,215,170,0.32) 58%, rgba(255,237,213,0.15) 85%, transparent 100%)",
    icon: Video,
  },
];

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1500;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, target]);

  return <span ref={ref}>{count}%</span>;
}

export default function StatsSection() {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 overflow-hidden border-b border-slate-100">
      {/* Subtle ambient background glow & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:36px_36px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-slate-50/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-slate-50/70 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Only heading */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <h2 className="font-heading text-2xl xs:text-[26px] sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Proof Over Promises.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">
              Clear Outcomes Only.
            </span>
          </h2>
        </div>

        {/* DESKTOP & TABLET HORIZONTAL WORKFLOW (md and above) */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="grid grid-cols-4 items-start relative">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              const isLast = idx === METRICS.length - 1;

              return (
                <div
                  key={metric.label}
                  className="group relative flex flex-col items-center text-center px-2"
                >
                  {/* Top Accurate Category Logo/Icon */}
                  <div className="mb-2 h-9 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs border transition-colors"
                      style={{
                        backgroundColor: metric.iconBg,
                        borderColor: metric.borderColor,
                        color: metric.accentColor,
                      }}
                    >
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Concentric Glow Disc with Glowing Percentage Inside */}
                  <div className="relative w-full flex items-center justify-center h-40 lg:h-44">
                    {/* Concentric Radial Gradient Disc */}
                    <div
                      className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                      style={{
                        background: metric.gradientBg,
                      }}
                    >
                      {/* Subtle concentric rings for visual ripple depth */}
                      <div className="absolute inset-3 rounded-full border border-white/25 pointer-events-none" />
                      <div className="absolute inset-7 rounded-full border border-white/30 pointer-events-none" />
                      <div className="absolute inset-11 rounded-full border border-white/40 pointer-events-none" />

                      {/* Pure Percentage Figure with Color Glow & Soft Transparency */}
                      <div
                        className="relative z-10 flex items-center justify-center font-heading font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight select-none text-white/95"
                        style={{
                          textShadow: `0 0 14px ${metric.glowColor}, 0 0 28px ${metric.glowColor}, 0 0 45px ${metric.glowColor}`,
                        }}
                      >
                        <AnimatedCounter target={metric.target} />
                      </div>
                    </div>

                    {/* Dotted Connecting Arrow line between circles - Dead center alignment */}
                    {!isLast && (
                      <div
                        className="absolute left-1/2 w-full flex items-center pointer-events-none z-0"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                      >
                        <div className="w-full px-12 lg:px-14 flex items-center">
                          <svg
                            className="w-full h-4 block overflow-visible"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 10"
                          >
                            <defs>
                              <marker
                                id={`arrowhead-stat-${idx}`}
                                markerWidth="6"
                                markerHeight="6"
                                refX="5"
                                refY="3"
                                orient="auto"
                              >
                                <polygon
                                  points="0 0.5, 5.5 3, 0 5.5"
                                  fill="#475569"
                                />
                              </marker>
                            </defs>
                            <line
                              x1="18"
                              y1="5"
                              x2="82"
                              y2="5"
                              stroke="#64748b"
                              strokeWidth="1.5"
                              strokeDasharray="3.5 3.5"
                              markerEnd={`url(#arrowhead-stat-${idx})`}
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Below Circle: Current Lines Only */}
                  <div className="mt-5 flex flex-col items-center justify-center text-center px-1">
                    <div className="font-heading font-extrabold text-sm sm:text-base lg:text-[17px] text-slate-900 tracking-tight leading-snug max-w-[210px]">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE HORIZONTAL CONTINUOUS TRAIN-LIKE MOVEMENT (sm and down) */}
        <div className="md:hidden relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-start flex-nowrap w-max"
          >
            {/* Duplicated array for seamless infinite train loop */}
            {[...METRICS, ...METRICS].map((metric, idx) => {
              const Icon = metric.icon;

              return (
                <div
                  key={`${metric.label}-${idx}`}
                  className="flex items-start shrink-0"
                >
                  {/* Train Carriage Item */}
                  <div className="flex flex-col items-center text-center w-[145px] sm:w-[170px]">
                    {/* Category Logo/Icon */}
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xs border mb-2"
                      style={{
                        backgroundColor: metric.iconBg,
                        borderColor: metric.borderColor,
                        color: metric.accentColor,
                      }}
                    >
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>

                    {/* Concentric Glow Disc with Glowing Percentage Inside */}
                    <div
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-xs"
                      style={{ background: metric.gradientBg }}
                    >
                      <div className="absolute inset-2 rounded-full border border-white/25 pointer-events-none" />
                      <div className="absolute inset-4 rounded-full border border-white/35 pointer-events-none" />
                      <div
                        className="relative z-10 flex items-center justify-center font-heading font-black text-xl sm:text-2xl text-white/95"
                        style={{
                          textShadow: `0 0 10px ${metric.glowColor}, 0 0 20px ${metric.glowColor}`,
                        }}
                      >
                        <span>{metric.target}%</span>
                      </div>
                    </div>

                    {/* Label Line Below */}
                    <div className="font-heading font-extrabold text-xs sm:text-sm text-slate-800 leading-snug max-w-[135px] mt-2.5">
                      {metric.label}
                    </div>
                  </div>

                  {/* Connecting Coupler: Dotted Arrow Line between Carriages (Pixel-perfect centered to the disc) */}
                  <div className="shrink-0 w-8 sm:w-10 h-24 mt-[40px] flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-full h-3.5 block overflow-visible"
                      viewBox="0 0 32 10"
                    >
                      <defs>
                        <marker
                          id={`arrowhead-mobile-${idx}`}
                          markerWidth="6"
                          markerHeight="6"
                          refX="5"
                          refY="3"
                          orient="auto"
                        >
                          <polygon
                            points="0 0.5, 5.5 3, 0 5.5"
                            fill="#475569"
                          />
                        </marker>
                      </defs>
                      <line
                        x1="2"
                        y1="5"
                        x2="27"
                        y2="5"
                        stroke="#64748b"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        markerEnd={`url(#arrowhead-mobile-${idx})`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
