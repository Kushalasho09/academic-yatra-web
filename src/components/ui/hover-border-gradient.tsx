"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  innerBgClassName,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    innerBgClassName?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 60% at 50% 0%, #0C9253 0%, rgba(12, 146, 83, 0) 100%)",
    LEFT: "radial-gradient(25% 55% at 0% 50%, #0C9253 0%, rgba(12, 146, 83, 0) 100%)",
    BOTTOM:
      "radial-gradient(30% 60% at 50% 100%, #0C9253 0%, rgba(12, 146, 83, 0) 100%)",
    RIGHT:
      "radial-gradient(25% 55% at 100% 50%, #0C9253 0%, rgba(12, 146, 83, 0) 100%)",
  };

  const highlight =
    "radial-gradient(85% 180% at 50% 50%, #10B981 0%, rgba(16, 185, 129, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border border-brand-primary/30 content-center bg-slate-100 hover:bg-slate-200 transition duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-[2px] w-fit shadow-sm group",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto font-bold z-10 px-5 sm:px-6 py-2.5 rounded-full font-heading text-xs sm:text-sm tracking-wide transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-full pointer-events-none"
        )}
        style={{
          filter: "blur(3px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div
        className={cn(
          "absolute z-1 flex-none inset-[1.5px] rounded-full pointer-events-none",
          innerBgClassName ?? "bg-white"
        )}
      />
    </Tag>
  );
}

export default HoverBorderGradient;
