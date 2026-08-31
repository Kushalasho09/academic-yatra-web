"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Compass, Zap, Building, Sparkles, CheckCircle2 } from "lucide-react";
import { RouteType } from "@/data/counsellingData";

export interface RouteNodeData {
  selectedRoute: RouteType;
  onSelectRoute: (route: RouteType) => void;
  supportsAccelerated: boolean;
  savingsText?: string;
}

export default function RouteNode({ data }: NodeProps<any>) {
  const nodeData = data as RouteNodeData;
  const { selectedRoute, onSelectRoute, supportsAccelerated, savingsText } = nodeData;

  return (
    <div className="relative min-w-[300px] max-w-[330px] rounded-[24px] bg-white/95 backdrop-blur-xl border-2 border-brand-accent/40 p-5 shadow-xl shadow-blue-500/10 select-none">
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-brand-primary border-2 border-white shadow-md !-left-2"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-brand-accent">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase text-brand-accent tracking-wider">
              Step 2: Study Route
            </span>
            <p className="text-xs font-bold text-dark">Pathway Architecture</p>
          </div>
        </div>
      </div>

      {/* Route Choices */}
      <div className="pt-3 space-y-2.5">
        
        {/* DIRECT MODEL */}
        <button
          onClick={() => onSelectRoute("direct")}
          className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedRoute === "direct"
              ? "bg-brand-tint border-brand-accent text-brand-accentDark shadow-xs ring-2 ring-brand-accent/20"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 font-bold text-xs">
              <Building className="w-3.5 h-3.5" />
              <span>Direct Model</span>
            </div>
            {selectedRoute === "direct" && <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            100% On-Campus Abroad. Full traditional international campus immersion.
          </p>
        </button>

        {/* ACCELERATED PATHWAY */}
        <button
          onClick={() => supportsAccelerated && onSelectRoute("accelerated")}
          disabled={!supportsAccelerated}
          className={`w-full p-3 rounded-2xl border text-left transition-all ${
            !supportsAccelerated
              ? "opacity-50 cursor-not-allowed bg-slate-50 border-slate-200"
              : selectedRoute === "accelerated"
              ? "bg-emerald-50 border-brand-primary text-emerald-950 shadow-xs ring-2 ring-brand-primary/20 cursor-pointer"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 font-bold text-xs text-brand-primary">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Accelerated Pathway</span>
            </div>
            {supportsAccelerated && (
              <span className="bg-emerald-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md">
                SAVE ₹27L–53L
              </span>
            )}
          </div>
          <p className="text-[10px] text-slate-600 mt-1">
            Part Online in India (IIIT-B / IMT-G) + On-Campus Abroad. GRE/GMAT Waived.
          </p>
        </button>

      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3.5 h-3.5 bg-brand-accent border-2 border-white shadow-md !-right-2"
      />
    </div>
  );
}
