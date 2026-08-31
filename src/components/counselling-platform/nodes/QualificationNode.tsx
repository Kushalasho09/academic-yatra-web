"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { GraduationCap, Award, BookOpen, Layers } from "lucide-react";
import { QualificationCategory, StreamOption } from "@/data/counsellingData";

export interface QualificationNodeData {
  qualification: QualificationCategory;
  selectedStream: StreamOption;
  onSelectStream: (stream: StreamOption) => void;
  availableQualifications: QualificationCategory[];
  onSelectQualification: (qual: QualificationCategory) => void;
}

export default function QualificationNode({ data }: NodeProps<any>) {
  const nodeData = data as QualificationNodeData;
  const { qualification, selectedStream, onSelectStream, availableQualifications, onSelectQualification } = nodeData;

  return (
    <div className="relative min-w-[320px] max-w-[360px] rounded-[24px] bg-white/95 backdrop-blur-xl border-2 border-brand-primary/40 p-5 shadow-xl shadow-brand-primary/10 select-none">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-brand-greenTint flex items-center justify-center text-brand-primary">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase text-brand-primary tracking-wider">
              Step 1: Indian Qualification
            </span>
            <p className="text-xs font-bold text-dark">{qualification.title}</p>
          </div>
        </div>
        <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
          Completed
        </span>
      </div>

      {/* Qualification Level Switcher */}
      <div className="py-3">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
          Select Highest Education:
        </label>
        <div className="flex flex-wrap gap-1.5">
          {availableQualifications.map((q) => {
            const isSelected = q.id === qualification.id;
            return (
              <button
                key={q.id}
                onClick={() => onSelectQualification(q)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? "bg-brand-primary text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {q.id === "12th" ? "12th Standard" : q.id === "bachelors" ? "Bachelor's" : q.id === "masters" ? "Master's" : q.id === "phd" ? "PhD" : "Diploma"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stream Selector Chips */}
      <div className="pt-2 border-t border-slate-100">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1.5">
          Academic Stream / Cluster:
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {qualification.streams.map((stream) => {
            const isStreamActive = stream.id === selectedStream?.id;
            return (
              <button
                key={stream.id}
                onClick={() => onSelectStream(stream)}
                className={`text-left p-2 rounded-xl text-[11px] font-bold transition-all border cursor-pointer ${
                  isStreamActive
                    ? "bg-brand-greenTint border-brand-primary text-brand-primary shadow-xs"
                    : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="truncate font-extrabold">{stream.code}</div>
                <div className="text-[9px] text-slate-400 font-medium truncate">{stream.name.split("(")[0]}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3.5 h-3.5 bg-brand-primary border-2 border-white shadow-md !-right-2"
      />
    </div>
  );
}
