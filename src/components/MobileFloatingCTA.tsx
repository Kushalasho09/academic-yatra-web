"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function MobileFloatingCTA() {
  const pathname = usePathname();

  // Hide on full-screen workspace view
  if (pathname?.startsWith("/counselling-platform")) {
    return null;
  }

  return (
    <aside
      aria-label="Book Demo Mobile Action"
      className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 w-full px-3 sm:px-6 pointer-events-none lg:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="pointer-events-auto max-w-7xl mx-auto w-full">
        <Link
          href="/contacts"
          className="block w-full transition-transform active:scale-[0.99] duration-150 drop-shadow-[0_8px_25px_rgba(0,0,0,0.14)]"
        >
          <HoverBorderGradient
            as="div"
            containerClassName="w-full !w-full rounded-full shadow-lg"
            className="w-full !w-full flex items-center justify-center py-3.5 px-4 rounded-full bg-white/90 hover:bg-white text-[#031643] hover:text-[#0C9253] border border-emerald-500/25 whitespace-nowrap backdrop-blur-xl transition-colors"
            innerBgClassName="bg-white/90 backdrop-blur-xl"
          >
            <span className="flex items-center justify-center space-x-2 text-center">
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0C9253] shrink-0" />
              <span className="font-extrabold text-[13.5px] xs:text-sm tracking-tight text-[#031643]">
                Book Your Free 5-Day Trial
              </span>
            </span>
          </HoverBorderGradient>
        </Link>
      </div>
    </aside>
  );
}
