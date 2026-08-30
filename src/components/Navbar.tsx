"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;

    if (mobileMenuOpen) {
      setHidden(false);
      return;
    }

    if (latest > 100 && delta > 4) {
      setHidden(true);
    } else if (delta < -4 || latest <= 20) {
      setHidden(false);
    }
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", aliases: ["/"] },
    { name: "Languages Programs", href: "/languages", aliases: ["/languages", "/languages-programs"] },
    { name: "Test Prep", href: "/test-prep", aliases: ["/test-prep", "/ielts", "/pte", "/celpip", "/gmat", "/gre"] },
    { name: "Skill Catalyst", href: "/skill-catalyst", aliases: ["/skill-catalyst"] },
    { name: "Free Resources", href: "/free-resources", aliases: ["/free-resources"] },
    { name: "About Us", href: "/about-us", aliases: ["/about-us", "/about"] },
    { name: "Contacts", href: "/contacts", aliases: ["/contacts", "/contact"] },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-120%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300"
    >
      {/* Floating Glassmorphic Full Capsule Island */}
      <div className="pointer-events-auto max-w-7xl mx-auto bg-white/90 backdrop-blur-2xl border border-white/80 shadow-[0_10px_30px_-10px_rgba(18,36,71,0.12)] hover:shadow-[0_15px_35px_-8px_rgba(12,146,83,0.18)] rounded-full px-3.5 sm:px-5 lg:px-6 h-16 sm:h-18 flex items-center justify-between transition-all duration-300 group/nav gap-3">
        
        {/* Desktop Full Navigation Links Pill */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
          {navLinks.map((link, idx) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.aliases.some(
                    (alias) => pathname === alias || pathname?.startsWith(alias + "/")
                  );

            return (
              <Link
                key={idx}
                href={link.href}
                className={cn(
                  "relative px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center space-x-1 whitespace-nowrap",
                  isActive
                    ? "text-brand-navy bg-white shadow-sm font-extrabold border border-slate-200/80"
                    : "text-muted hover:text-brand-navy hover:bg-white/80 hover:shadow-xs"
                )}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Brand Name Title */}
        <Link
          href="/"
          className="lg:hidden flex items-center text-brand-navy font-heading font-extrabold text-base sm:text-lg tracking-tight pl-2"
        >
          <span className="text-brand-primary">Academic</span>
          <span className="ml-1 text-brand-navy">Yatra</span>
        </Link>

        {/* Desktop Primary CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0">
          <a
            href="tel:+919286844550"
            className="inline-flex items-center space-x-2 text-xs xl:text-sm font-semibold text-brand-navy px-4 py-2.5 rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary bg-white hover:bg-slate-50 transition-all duration-200 shadow-sm whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
            <span>+91-92868-44550</span>
          </a>

          <Link href="/contacts" className="flex-shrink-0">
            <HoverBorderGradient
              as="div"
              containerClassName="rounded-full"
              className="bg-white hover:bg-brand-greenTint/40 text-brand-navy hover:text-brand-primary font-extrabold text-xs xl:text-sm px-5 xl:px-6 py-2.5 rounded-full border border-brand-primary/20 shadow-sm whitespace-nowrap"
            >
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Book 5 Day Demo</span>
              </span>
            </HoverBorderGradient>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center pr-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-brand-navy hover:text-brand-primary bg-slate-100/80 rounded-full transition-colors duration-150"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Card Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-5 shadow-2xl space-y-2.5"
          >
            {navLinks.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.aliases.some(
                      (alias) => pathname === alias || pathname?.startsWith(alias + "/")
                    );

              return (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-150",
                    isActive
                      ? "text-brand-primary font-bold bg-brand-greenTint/80"
                      : "text-brand-navy hover:text-brand-primary hover:bg-brand-greenTint/40"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-2 space-y-2 border-t border-slate-100">
              <a
                href="tel:+919286844550"
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-full border border-slate-300 text-brand-navy font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>+91-92868-44550</span>
              </a>

              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                <HoverBorderGradient
                  as="div"
                  containerClassName="rounded-full w-full"
                  className="w-full bg-white hover:bg-brand-greenTint/40 text-brand-navy hover:text-brand-primary font-extrabold text-xs px-6 py-3 rounded-full justify-center border border-brand-primary/20 shadow-sm"
                >
                  <span className="flex items-center justify-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-brand-primary" />
                    <span>Book 5 Day Demo</span>
                  </span>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
