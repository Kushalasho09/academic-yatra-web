"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRaysProps {
  /** Additional CSS classes */
  className?: string;
  /** Optional children to render over the background */
  children?: React.ReactNode;
  /** Force dark mode rendering for rays (great for dark hero sections) */
  forceDark?: boolean;
}

export function AnimatedRays({
  className = "",
  children,
  forceDark = true,
}: AnimatedRaysProps) {
  const [isDark, setIsDark] = useState(forceDark);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (forceDark !== undefined) {
      setIsDark(forceDark);
      return;
    }
    const checkDark = () => document.documentElement.classList.contains("dark");
    setIsDark(checkDark());

    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [forceDark]);

  if (!mounted) return null;

  const stripes = `repeating-linear-gradient(
    100deg,
    var(--stripe-color, rgba(255, 255, 255, 0.12)) 0%,
    var(--stripe-color, rgba(255, 255, 255, 0.12)) 7%,
    transparent 10%,
    transparent 12%,
    var(--stripe-color, rgba(255, 255, 255, 0.12)) 16%
  )`;
  const rainbow = `repeating-linear-gradient(
    100deg,
    #60a5fa 10%,
    #0C9253 15%,
    #5eead4 20%,
    #0067E3 25%,
    #60a5fa 30%
  )`;

  return (
    <div className={cn("relative w-full h-full overflow-hidden pointer-events-none", className)}>
      {/* Aurora Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `${stripes}, ${rainbow}`,
          backgroundSize: "300%, 200%",
          backgroundPosition: "50% 50%, 50% 50%",
          filter: isDark
            ? "blur(12px) opacity(60%) saturate(220%)"
            : "blur(10px) invert(100%)",
          maskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%)",
        }}
      >
        {/* Animated overlay */}
        <div
          className="absolute inset-0 animate-aurora-bg"
          style={{
            backgroundImage: `${stripes}, ${rainbow}`,
            backgroundSize: "200%, 100%",
            backgroundAttachment: "fixed",
            mixBlendMode: "difference",
          }}
        />
      </div>

      {children && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
}

export default AnimatedRays;
