"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  MarkerType,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import {
  MASTER_QUALIFICATIONS_DATA,
  QualificationCategory,
  StreamOption,
  AbroadCourseOption,
  CountryProgramData,
  RouteType,
} from "@/data/counsellingData";

import QualificationNode from "./nodes/QualificationNode";
import RouteNode from "./nodes/RouteNode";
import CourseNode from "./nodes/CourseNode";
import CountryCardNode from "./nodes/CountryCardNode";
import CounsellorDrawer from "./CounsellorDrawer";
import {
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
  Landmark,
  ShieldCheck,
  Compass,
  FileCheck2,
  Maximize2,
  Layers,
} from "lucide-react";

const nodeTypes = {
  qualificationNode: QualificationNode,
  routeNode: RouteNode,
  courseNode: CourseNode,
  countryNode: CountryCardNode,
};

export default function CounsellingFlowCanvas() {
  // Master Selection State
  const [selectedQualification, setSelectedQualification] = useState<QualificationCategory>(
    MASTER_QUALIFICATIONS_DATA[0] // 12th by default
  );

  const [selectedStream, setSelectedStream] = useState<StreamOption>(
    MASTER_QUALIFICATIONS_DATA[0].streams[0] // PCM by default
  );

  const [selectedRoute, setSelectedRoute] = useState<RouteType>("direct");

  const [selectedCourse, setSelectedCourse] = useState<AbroadCourseOption>(
    MASTER_QUALIFICATIONS_DATA[0].streams[0].courseOptions[0]
  );

  const [currencyMode, setCurrencyMode] = useState<"INR" | "LOCAL">("INR");
  const [filterTag, setFilterTag] = useState<"all" | "recommended" | "easy-pr" | "zero-tuition">("all");

  // Drawer State
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [activeCountryForDrawer, setActiveCountryForDrawer] = useState<CountryProgramData | null>(null);

  const handleOpenDetails = useCallback((country: CountryProgramData) => {
    setActiveCountryForDrawer(country);
    setDrawerOpen(true);
  }, []);

  const handleSelectQualification = useCallback((qual: QualificationCategory) => {
    setSelectedQualification(qual);
    const firstStream = qual.streams[0];
    setSelectedStream(firstStream);
    const firstCourse = firstStream.courseOptions[0];
    setSelectedCourse(firstCourse);
    setSelectedRoute("direct");
  }, []);

  const handleSelectStream = useCallback((stream: StreamOption) => {
    setSelectedStream(stream);
    const firstCourse = stream.courseOptions[0];
    setSelectedCourse(firstCourse);
    setSelectedRoute("direct");
  }, []);

  const handleSelectRoute = useCallback((route: RouteType) => {
    setSelectedRoute(route);
  }, []);

  const handleSelectCourse = useCallback((course: AbroadCourseOption) => {
    setSelectedCourse(course);
  }, []);

  // Filter countries for display
  const filteredCountries = useMemo(() => {
    if (!selectedCourse || !selectedCourse.countries) return [];
    return selectedCourse.countries.filter((country) => {
      if (filterTag === "recommended") return country.isFyRecommended;
      if (filterTag === "easy-pr") return country.prEase === "Very Easy" || country.prEase === "Easy";
      if (filterTag === "zero-tuition") return country.isZeroTuition;
      return true;
    });
  }, [selectedCourse, filterTag]);

  // Construct React Flow Nodes
  const initialNodes: Node[] = useMemo(() => {
    const nodes: Node[] = [];

    // 1. Qualification Node
    nodes.push({
      id: "node-qualification",
      type: "qualificationNode",
      position: { x: 40, y: 120 },
      data: {
        qualification: selectedQualification,
        selectedStream: selectedStream,
        onSelectStream: handleSelectStream,
        availableQualifications: MASTER_QUALIFICATIONS_DATA,
        onSelectQualification: handleSelectQualification,
      },
    });

    // 2. Route Node
    const supportsAccelerated = selectedCourse?.applicableRoutes.includes("accelerated") ?? false;
    nodes.push({
      id: "node-route",
      type: "routeNode",
      position: { x: 450, y: 150 },
      data: {
        selectedRoute,
        onSelectRoute: handleSelectRoute,
        supportsAccelerated,
        savingsText: selectedCourse?.acceleratedSavingsInr,
      },
    });

    // 3. Course Node
    nodes.push({
      id: "node-course",
      type: "courseNode",
      position: { x: 830, y: 140 },
      data: {
        availableCourses: selectedStream?.courseOptions || [],
        selectedCourse: selectedCourse,
        onSelectCourse: handleSelectCourse,
      },
    });

    // 4. Country Nodes (Vertically Stacked / Staggered)
    filteredCountries.forEach((country, idx) => {
      nodes.push({
        id: `node-country-${country.id}`,
        type: "countryNode",
        position: { x: 1250, y: 40 + idx * 300 },
        data: {
          country,
          onOpenDetails: handleOpenDetails,
          currencyMode,
        },
      });
    });

    return nodes;
  }, [
    selectedQualification,
    selectedStream,
    selectedRoute,
    selectedCourse,
    filteredCountries,
    currencyMode,
    handleSelectQualification,
    handleSelectStream,
    handleSelectRoute,
    handleSelectCourse,
    handleOpenDetails,
  ]);

  // Construct Animated Edges
  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = [];

    // Edge 1: Qualification ➔ Route
    edges.push({
      id: "edge-qual-to-route",
      source: "node-qualification",
      target: "node-route",
      animated: true,
      style: { stroke: "#0C9253", strokeWidth: 3 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#0C9253",
      },
    });

    // Edge 2: Route ➔ Course
    edges.push({
      id: "edge-route-to-course",
      source: "node-route",
      target: "node-course",
      animated: true,
      style: { stroke: selectedRoute === "accelerated" ? "#0C9253" : "#0067E3", strokeWidth: 3 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: selectedRoute === "accelerated" ? "#0C9253" : "#0067E3",
      },
    });

    // Edges 3..N: Course ➔ Countries
    filteredCountries.forEach((country) => {
      edges.push({
        id: `edge-course-to-${country.id}`,
        source: "node-course",
        target: `node-country-${country.id}`,
        animated: true,
        style: {
          stroke: country.isFyRecommended ? "#0C9253" : "#9333EA",
          strokeWidth: country.isFyRecommended ? 3 : 2,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: country.isFyRecommended ? "#0C9253" : "#9333EA",
        },
      });
    });

    return edges;
  }, [selectedRoute, filteredCountries]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Sync state changes with nodes and edges
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const handleResetFlow = () => {
    handleSelectQualification(MASTER_QUALIFICATIONS_DATA[0]);
    setFilterTag("all");
    setCurrencyMode("INR");
  };

  return (
    <div className="relative w-full h-[820px] bg-[#F4F9F5] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl flex flex-col select-none">
      
      {/* TOP CONTROL TOOLBAR */}
      <div className="px-6 py-4 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 z-20 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Breadcrumbs Info */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold shadow-md shadow-brand-primary/25">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-dark">
              <span>{selectedQualification.id.toUpperCase()}</span>
              <span className="text-slate-300">/</span>
              <span className="text-brand-primary">{selectedStream.code}</span>
              <span className="text-slate-300">/</span>
              <span className="text-brand-accent truncate max-w-[160px]">{selectedCourse.name}</span>
            </div>
            <p className="text-[10px] text-muted font-medium">
              Interactive Study-Abroad Decision Tree • Powered by React Flow
            </p>
          </div>
        </div>

        {/* Center: Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/70">
          <button
            onClick={() => setFilterTag("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterTag === "all" ? "bg-white text-dark shadow-xs" : "text-slate-500 hover:text-dark"
            }`}
          >
            All Countries
          </button>
          <button
            onClick={() => setFilterTag("recommended")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterTag === "recommended"
                ? "bg-amber-100 text-amber-900 border border-amber-300 shadow-xs"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            ⭐ Recommended
          </button>
          <button
            onClick={() => setFilterTag("easy-pr")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterTag === "easy-pr"
                ? "bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-xs"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            Easy PR Only
          </button>
          <button
            onClick={() => setFilterTag("zero-tuition")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterTag === "zero-tuition"
                ? "bg-blue-100 text-blue-900 border border-blue-300 shadow-xs"
                : "text-slate-500 hover:text-dark"
            }`}
          >
            Zero Tuition
          </button>
        </div>

        {/* Right: Actions & Currency Switcher */}
        <div className="flex items-center space-x-2">
          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-bold">
            <button
              onClick={() => setCurrencyMode("INR")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "INR" ? "bg-white text-brand-primary shadow-xs" : "text-slate-500"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrencyMode("LOCAL")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currencyMode === "LOCAL" ? "bg-white text-brand-accent shadow-xs" : "text-slate-500"
              }`}
            >
              $ / € Local
            </button>
          </div>

          {/* Reset Flow Button */}
          <button
            onClick={handleResetFlow}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shadow-xs cursor-pointer flex items-center justify-center"
            title="Reset to initial state"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* REACT FLOW CANVAS CONTAINER */}
      <div className="flex-1 w-full h-full relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.15, minZoom: 0.6, maxZoom: 1.1 }}
          minZoom={0.3}
          maxZoom={1.5}
          className="bg-dot-grid"
        >
          <Background color="#0C9253" gap={24} size={1.2} variant={BackgroundVariant.Dots} className="opacity-15" />
          <Controls className="!bg-white !rounded-2xl !border !border-slate-200 !shadow-lg" />
          <MiniMap
            nodeColor={(node) => {
              if (node.type === "qualificationNode") return "#0C9253";
              if (node.type === "routeNode") return "#0067E3";
              if (node.type === "courseNode") return "#9333EA";
              return "#F59E0B";
            }}
            className="!bg-white/90 !rounded-2xl !border !border-slate-200 !shadow-md"
          />
        </ReactFlow>
      </div>

      {/* BOTTOM FLOATING SUMMARY PILL */}
      <div className="absolute bottom-4 left-6 z-20 bg-white/90 backdrop-blur-xl border border-slate-200 px-4 py-2 rounded-full shadow-lg flex items-center space-x-3 text-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
        <span className="text-slate-600 font-medium">
          Showing <strong>{filteredCountries.length} destination pathways</strong> for <strong>{selectedCourse.name}</strong>
        </span>
      </div>

      {/* COUNSELLOR DETAILS DRAWER */}
      <CounsellorDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        countryData={activeCountryForDrawer}
        courseData={selectedCourse}
        qualificationTitle={selectedQualification.title}
        selectedStreamName={selectedStream.name}
      />

    </div>
  );
}
