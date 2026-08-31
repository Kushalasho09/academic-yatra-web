"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export interface AnimatedGradientBackgroundProps {
  /**
   * Initial size of the radial gradient, defining the starting width.
   * @default 125
   */
  startingGap?: number;

  /**
   * Enables or disables the breathing animation effect.
   * @default false
   */
  Breathing?: boolean;

  /**
   * Array of colors to use in the radial gradient.
   * Each color corresponds to a stop percentage in `gradientStops`.
   */
  gradientColors?: string[];

  /**
   * Array of percentage stops corresponding to each color in `gradientColors`.
   * The values should range between 0 and 100.
   */
  gradientStops?: number[];

  /**
   * Speed of the breathing animation.
   * Lower values result in slower animation.
   * @default 0.025
   */
  animationSpeed?: number;

  /**
   * Maximum range for the breathing animation in percentage points.
   * Determines how much the gradient "breathes" by expanding and contracting.
   * @default 6
   */
  breathingRange?: number;

  /**
   * Additional inline styles for the gradient container.
   * @default {}
   */
  containerStyle?: React.CSSProperties;

  /**
   * Additional class names for the gradient container.
   * @default ""
   */
  containerClassName?: string;

  /**
   * Additional top offset for the gradient container from the top.
   * @default 0
   */
  topOffset?: number;

  /**
   * Position of the radial gradient center.
   * @default "50% 25%"
   */
  centerPosition?: string;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  startingGap = 125,
  Breathing = true,
  gradientColors = [
    "#080E1A", // Deep Navy Center
    "#0067E3", // Layer 1: Electric Blue (Brand Accent)
    "#00D084", // Layer 2: Vivid Emerald (Brand Primary)
    "#FFD000", // Layer 3: Luminous Gold (Brand Gold)
    "#FF6B00", // Layer 4: Radiant Orange
    "#FF2E93", // Layer 5: Neon Pink / Magenta
    "#0067E3", // Layer 6: Deep Royal Blue
    "#080E1A", // Outer Rim
  ],
  gradientStops = [35, 48, 58, 68, 78, 88, 95, 100],
  animationSpeed = 0.025,
  breathingRange = 6,
  containerStyle = {},
  topOffset = 0,
  centerPosition = "50% 25%",
  containerClassName = "",
}) => {
  // Validation: Ensure gradientStops and gradientColors lengths match
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length.
     Received gradientColors length: ${gradientColors.length},
     gradientStops length: ${gradientStops.length}`
    );
  }

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let width = startingGap;
    let directionWidth = 1;

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) directionWidth = -1;
      if (width <= startingGap - breathingRange) directionWidth = 1;

      if (!Breathing) directionWidth = 0;
      width += directionWidth * animationSpeed;

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(", ");

      const gradient = `radial-gradient(${width}% ${
        width + topOffset
      }% at ${centerPosition}, ${gradientStopsString})`;

      if (containerRef.current) {
        containerRef.current.style.background = gradient;
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => cancelAnimationFrame(animationFrame);
  }, [
    startingGap,
    Breathing,
    gradientColors,
    gradientStops,
    animationSpeed,
    breathingRange,
    topOffset,
    centerPosition,
  ]);

  return (
    <motion.div
      key="animated-gradient-background"
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName}`}
    >
      <div
        ref={containerRef}
        style={containerStyle}
        className="absolute inset-0 transition-transform"
      />
    </motion.div>
  );
};

export default AnimatedGradientBackground;
