"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, ArrowRight, X } from "lucide-react";

interface PackageFloatingDockProps {
  onOpenContact: () => void;
}

export default function PackageFloatingDock({ onOpenContact }: PackageFloatingDockProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-1 select-none">
      {/* Toggle Arrow */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle Dock"
        className="w-8 h-8 rounded-l-md bg-black text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
      >
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
      </button>

      {!collapsed && (
        <>
          {/* Blue Vertical Contact Us Pill */}
          <button
            onClick={onOpenContact}
            aria-label="Contact Us"
            className="rounded-l-lg bg-[#0F52BA] hover:bg-[#0c449c] text-white py-4 px-2 shadow-lg flex flex-col items-center gap-2 cursor-pointer transition-all hover:pl-3"
          >
            <Mail className="w-4 h-4" />
            <span
              className="text-xs font-bold tracking-wider uppercase text-[11px]"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              Contact Us
            </span>
          </button>

          {/* Green WhatsApp Tab */}
          <a
            href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20am%20interested%20in%20the%20IELTS%20Academic%20Program."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Academic Yatra"
            className="w-10 h-10 rounded-l-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-all hover:w-11 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>
        </>
      )}
    </div>
  );
}
