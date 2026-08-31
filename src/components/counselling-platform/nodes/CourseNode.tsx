"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { AbroadCourseOption } from "@/data/counsellingData";

export interface CourseNodeData {
  availableCourses: AbroadCourseOption[];
  selectedCourse: AbroadCourseOption;
  onSelectCourse: (course: AbroadCourseOption) => void;
}

export default function CourseNode({ data }: NodeProps<any>) {
  const nodeData = data as CourseNodeData;
  const { availableCourses, selectedCourse, onSelectCourse } = nodeData;

  return (
    <div className="relative min-w-[320px] max-w-[360px] rounded-[24px] bg-white/95 backdrop-blur-xl border-2 border-slate-300 p-5 shadow-xl shadow-slate-200/50 select-none">
      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-3.5 h-3.5 bg-brand-accent border-2 border-white shadow-md !-left-2"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase text-purple-700 tracking-wider">
              Step 3: Abroad Degree Track
            </span>
            <p className="text-xs font-bold text-dark">{selectedCourse?.name}</p>
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="pt-3 space-y-2 max-h-[220px] overflow-y-auto pr-1">
        {availableCourses.map((c) => {
          const isSelected = c.id === selectedCourse?.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelectCourse(c)}
              className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? "bg-purple-50 border-purple-500 text-purple-950 shadow-xs ring-2 ring-purple-500/20"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs truncate">{c.name}</span>
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />}
              </div>
              {c.subtitle && (
                <p className="text-[10px] text-slate-500 truncate mt-0.5">{c.subtitle}</p>
              )}
            </button>
          );
        })}
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="w-3.5 h-3.5 bg-purple-600 border-2 border-white shadow-md !-right-2"
      />
    </div>
  );
}
