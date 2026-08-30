"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Languages Programs", href: "/languages" },
  { label: "Test Prep", href: "/test-prep" },
  { label: "Skill Catalyst", href: "/skill-catalyst" },
  { label: "Free Resources", href: "/free-resources" },
  { label: "About Us", href: "/about-us" },
  { label: "Contacts", href: "/contacts" },
];

export const Liquid = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const initialIndex = Math.max(0, NAV_LINKS.findIndex((link) => link.href === pathname));
  const [currentLink, setCurrentLink] = useState(initialIndex >= 0 ? initialIndex : 0);

  useEffect(() => {
    const idx = NAV_LINKS.findIndex((link) => link.href === pathname);
    if (idx !== -1) {
      setCurrentLink(idx);
    }
  }, [pathname]);

  return (
    <div className={cn("relative flex items-center justify-center flex-shrink-0", className)}>
      {/* SVG Gooey Filter */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute pointer-events-none w-0 h-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <motion.ul
        style={{
          filter: "url(#goo)",
        }}
        layout
        className="h-10 xl:h-11 flex items-center bg-brand-navy rounded-full p-1 shadow-md border border-slate-700/40"
      >
        {NAV_LINKS.map((link, index) => {
          const isSelected = currentLink === index;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setCurrentLink(index)}
              className="inline-flex h-full items-center flex-shrink-0"
            >
              <motion.li
                animate={isSelected ? { scale: [0.96, 1.04, 1] } : { scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "px-2.5 xl:px-3 h-full items-center justify-center flex text-[11px] xl:text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap select-none",
                  isSelected
                    ? "bg-brand-primary text-white font-bold mx-0.5 shadow-md shadow-brand-primary/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10 mx-0.5"
                )}
              >
                {link.label}
              </motion.li>
            </Link>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Liquid;
