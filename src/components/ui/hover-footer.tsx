"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  // Tight viewBox aspect ratio so the typography expands fully across width & height
  const viewBoxWidth = 880;
  const viewBoxHeight = 110;

  return (
    <div className="relative w-full h-full flex items-center justify-center group overflow-hidden">
      {/* Dynamic Cursor Ambient Glow (Active only when hovered) */}
      <motion.div
        className="pointer-events-none absolute w-96 h-56 rounded-full blur-3xl transition-opacity duration-300 -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 135, 0.55) 0%, rgba(0, 103, 227, 0.45) 45%, transparent 70%)",
          left: maskPosition.cx,
          top: maskPosition.cy,
          transform: "translate(-50%, -50%)",
          opacity: hovered ? 0.9 : 0,
        }}
        animate={{
          left: maskPosition.cx,
          top: maskPosition.cy,
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setCursor({ x: null, y: null });
        }}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className={cn("select-none uppercase cursor-pointer w-full h-full block", className)}
      >
        <defs>
          {/* High-Impact Vibrant Gradient */}
          <linearGradient
            id="vibrantTextGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="30%"
          >
            <stop offset="0%" stopColor="#00FF87" />
            <stop offset="20%" stopColor="#10B981" />
            <stop offset="45%" stopColor="#00F0FF" />
            <stop offset="70%" stopColor="#0067E3" />
            <stop offset="85%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial Reveal Mask Centered on Cursor */}
          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="24%"
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{ duration: duration ?? 0.05, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </motion.radialGradient>

          {/* Mask active only on hover */}
          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill={hovered ? "url(#revealMask)" : "black"}
            />
          </mask>
        </defs>

        {/* 1. Base Outline - Crisp & Full Width */}
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          textLength="860"
          lengthAdjust="spacingAndGlyphs"
          strokeWidth="0.6"
          className="fill-transparent stroke-slate-700/70 font-[helvetica] font-black transition-opacity duration-300"
          style={{ fontSize: "88px", opacity: hovered ? 0.3 : 0.75 }}
        >
          {text}
        </text>

        {/* 2. Animated Outline Stroke Draw with Emerald Brand Color */}
        <motion.text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          textLength="860"
          lengthAdjust="spacingAndGlyphs"
          strokeWidth="0.8"
          className="fill-transparent stroke-[#0C9253] font-[helvetica] font-black drop-shadow-[0_0_10px_rgba(12,146,83,0.35)]"
          style={{ fontSize: "88px" }}
          initial={{ strokeDashoffset: 1600, strokeDasharray: 1600 }}
          animate={{
            strokeDashoffset: 0,
            strokeDasharray: 1600,
          }}
          transition={{
            duration: 2.8,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.text>

        {/* 3. Glowing Neon Stroke (Only Active on Hover via Mask) */}
        {hovered && (
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            textLength="860"
            lengthAdjust="spacingAndGlyphs"
            stroke="url(#vibrantTextGradient)"
            strokeWidth="1.6"
            filter="url(#neonGlow)"
            mask="url(#textMask)"
            className="fill-transparent font-[helvetica] font-black"
            style={{ fontSize: "88px" }}
          >
            {text}
          </text>
        )}

        {/* 4. Vivid Gradient Filled Text (Only Active on Hover via Mask) */}
        {hovered && (
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            textLength="860"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#vibrantTextGradient)"
            stroke="url(#vibrantTextGradient)"
            strokeWidth="0.6"
            mask="url(#textMask)"
            className="font-[helvetica] font-black"
            style={{ fontSize: "88px", opacity: 0.98 }}
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 15%, #0A192Fee 45%, #0C925330 80%, #0067E325 100%)",
      }}
    />
  );
};
