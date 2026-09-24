"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Star,
  Plus,
  ArrowRight,
  Zap,
  AlertCircle,
  Lock,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  QrCode,
  Building2,
  Sparkles,
  Download,
  Calendar,
  LogOut,
  UserCheck,
  ExternalLink,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoursePlanCard {
  id: string;
  category: string;
  duration: string;
  title: string;
  packType: string;
  popular?: boolean;
  badge?: string;
  theme: "mint" | "lime" | "lavender";
  tagline: string;
  description: string;
  image: string;
  glowText: string;
  priceFormatted: string;
  monthlyPrice: string;
  rating: string;
  reviewsCount: string;
  features: { text: string; included: boolean }[];
  level: "Beginner" | "Intermediate" | "Advanced";
}

/**
 * Condition: Evaluates all cards in any course pack, determines which card
 * has the highest amount (and more features), and assigns that card as POPULAR.
 */
export function evaluatePopularCard(cards: CoursePlanCard[]): CoursePlanCard[] {
  if (!cards || cards.length === 0) return [];

  const parseAmount = (val?: string): number => {
    if (!val) return 0;
    const match = val.replace(/,/g, "").match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  const countIncludedFeatures = (features?: Array<{ text: string; included?: boolean }>): number => {
    if (!features) return 0;
    return features.filter((f) => f.included !== false).length;
  };

  let maxScore = -1;
  let topCardId = cards[0]?.id;

  cards.forEach((card) => {
    const amount = parseAmount(card.priceFormatted) || parseAmount(card.monthlyPrice);
    const featureCount = countIncludedFeatures(card.features);
    // User condition: "check which has the more features and which has the more amount that one will be popular"
    const score = amount * 1000 + featureCount;
    if (score > maxScore) {
      maxScore = score;
      topCardId = card.id;
    }
  });

  return cards.map((card, idx) => {
    const isPopular = card.id === topCardId;
    return {
      ...card,
      popular: isPopular,
      badge: isPopular ? "POPULAR" : undefined,
      theme: isPopular ? "lime" : (idx === 0 ? "mint" : "lavender"),
    };
  });
}

const DEFAULT_COURSES_PLANS: Record<string, (category: string) => CoursePlanCard[]> = {
  "ielts": (cat) => [
    {
      id: "ielts-self-prep",
      category: cat,
      duration: "6 Months Access",
      title: "Self-Prep Pack",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: "Best for self-paced independent learners",
      description: "60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab lessons.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "Target Band 7.5+ with Cambridge AI Mocks",
      priceFormatted: "₹13,899.00",
      monthlyPrice: "₹2,316/m • 6 months (incl. 18% GST)",
      rating: "4.7",
      reviewsCount: "356 reviews",
      features: [
        { text: "60 sectional tests", included: true },
        { text: "15 mock tests", included: true },
        { text: "20+ hrs video lessons", included: true },
        { text: "500+ grammar/vocab lessons", included: true },
        { text: "Live interactive masterclasses", included: false },
      ],
      level: "Beginner",
    },
    {
      id: "ielts-champ",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: "100 hrs live lectures & single batch timing",
      description: "1 batch timing, 100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Target Band 7.5+ with Cambridge AI Mocks",
      priceFormatted: "₹25,999.00",
      monthlyPrice: "₹4,333/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "236 reviews",
      features: [
        { text: "1 batch timing", included: true },
        { text: "100 hrs live lectures", included: true },
        { text: "60 sectional tests", included: true },
        { text: "15 mock tests", included: true },
        { text: "20+ hrs video lessons", included: true },
      ],
      level: "Intermediate",
    },
    {
      id: "ielts-champ-plus",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack +",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: "All 3 batch timings & complete flexibility",
      description: "All 3 batch timings (morning/afternoon/evening), 100 hrs live lectures, 60 sectional tests, 15 mock tests.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "Target Band 7.5+ with Cambridge AI Mocks",
      priceFormatted: "₹28,999.00",
      monthlyPrice: "₹4,833/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "576 reviews",
      features: [
        { text: "All 3 batch timings (M/A/E)", included: true },
        { text: "100 hrs live lectures", included: true },
        { text: "60 sectional tests", included: true },
        { text: "15 mock tests", included: true },
        { text: "20+ hrs video lessons", included: true },
      ],
      level: "Advanced",
    },
  ],
  "pte": (cat) => [
    {
      id: "pte-live",
      category: cat,
      duration: "3 Months Access",
      title: "Live Class Pack",
      packType: "Live Class",
      popular: false,
      theme: "mint",
      tagline: "Focused live lectures for rapid exam readiness",
      description: "Score-targeted live lectures, Pearson aligned sectional drills, and mock tests.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "PTE 79+ Targeted Preparation",
      priceFormatted: "₹9,499.00",
      monthlyPrice: "₹3,166/m • 3 months (incl. 18% GST)",
      rating: "4.6",
      reviewsCount: "180 reviews",
      features: [
        { text: "Dashboard Access & Question Bank", included: true },
        { text: "10 Mock Tests with AI Scoring", included: true },
        { text: "Live Lecture Strategy Modules", included: true },
        { text: "Performance Analytics & Diagnostics", included: true },
        { text: "Unlimited Sectional Repeat Retakes", included: false },
      ],
      level: "Beginner",
    },
    {
      id: "pte-self",
      category: cat,
      duration: "6 Months Access",
      title: "Self-Prep Pack",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "lavender",
      tagline: "Comprehensive self-paced Pearson question banks",
      description: "2000+ Pearson question bank drills, 15 full scored mock tests, and video analytics.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Pearson Official Practice Portal",
      priceFormatted: "₹13,899.00",
      monthlyPrice: "₹2,316/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "290 reviews",
      features: [
        { text: "2000+ Practice Question Banks", included: true },
        { text: "15 AI-Scored Mock Tests", included: true },
        { text: "Detailed Speaking & Writing Feedback", included: true },
        { text: "6 Months Platform Access", included: true },
        { text: "Live Mentor Interactive Sessions", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "pte-champ",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lime",
      tagline: "Full live interactive coaching & 20 full AI mocks",
      description: "6 weeks live lectures, 20 full AI scored mocks, 2000+ drills, and 1-on-1 strategy sessions.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "Guaranteed 79+ Band Strategy",
      priceFormatted: "₹20,999.00",
      monthlyPrice: "₹3,500/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "440 reviews",
      features: [
        { text: "Full Live Interactive Coaching Cohort", included: true },
        { text: "20 Full AI Scored Pearson Mocks", included: true },
        { text: "2000+ Practice Question Bank", included: true },
        { text: "1-on-1 Pronunciation & Template Review", included: true },
        { text: "6 Months Unlimited Platform Access", included: true },
      ],
      level: "Advanced",
    },
  ],
  "toefl": (cat) => [
    {
      id: "toefl-self",
      category: cat,
      duration: "6 Months Access",
      title: "Self-Prep Pack",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: "Best for independent self-paced TOEFL candidates",
      description: "50+ sectional drills, 12 ETS-aligned mocks, 25+ hrs video lessons.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "Target TOEFL 105+ Score",
      priceFormatted: "₹13,899.00",
      monthlyPrice: "₹2,316/m • 6 months (incl. 18% GST)",
      rating: "4.7",
      reviewsCount: "215 reviews",
      features: [
        { text: "50+ Sectional Practice Drills", included: true },
        { text: "12 ETS-Aligned Full Mock Tests", included: true },
        { text: "25+ Hours Video Lessons", included: true },
        { text: "Academic Vocabulary & Grammar", included: true },
        { text: "Live Interactive Masterclasses", included: false },
      ],
      level: "Beginner",
    },
    {
      id: "toefl-champ",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: "Comprehensive live TOEFL coaching cohort",
      description: "80 hrs live interactive coaching, single batch timing, and 15 scored mocks.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Target TOEFL 110+ Mastery",
      priceFormatted: "₹25,999.00",
      monthlyPrice: "₹4,333/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "310 reviews",
      features: [
        { text: "Single Batch Fixed Schedule", included: true },
        { text: "80 Hours of Live Lectures", included: true },
        { text: "15 ETS-Format Full Mock Tests", included: true },
        { text: "Speaking & Writing Mentor Evaluation", included: true },
        { text: "6 Months Portal Access", included: true },
      ],
      level: "Intermediate",
    },
    {
      id: "toefl-champ-plus",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack +",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: "All 3 batch timings & 1-on-1 speaking evaluations",
      description: "All batch schedules, 100 hrs live classes, unlimited speaking retakes, priority feedback.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "Top Ivy League TOEFL Benchmark",
      priceFormatted: "₹28,999.00",
      monthlyPrice: "₹4,833/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "490 reviews",
      features: [
        { text: "All 3 Batch Timings (Morning/Afternoon/Evening)", included: true },
        { text: "100 Hours Live Lectures + Recordings", included: true },
        { text: "20 ETS-Format Mock Tests with AI Scoring", included: true },
        { text: "Priority 24-hr Essay & Speech Corrections", included: true },
        { text: "1-on-1 University Application Guidance", included: true },
      ],
      level: "Advanced",
    },
  ],
  "gre": (cat) => [
    {
      id: "gre-quant",
      category: cat,
      duration: "6 Months Access",
      title: "Quant & Verbal Pack",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: "Essential foundations for GRE Quantitative & Verbal sections",
      description: "1500+ GRE practice questions, 10 sectionals, and full video breakdowns.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "Target 320+ GRE Score",
      priceFormatted: "₹15,999.00",
      monthlyPrice: "₹2,666/m • 6 months (incl. 18% GST)",
      rating: "4.7",
      reviewsCount: "280 reviews",
      features: [
        { text: "1500+ Official Format GRE Questions", included: true },
        { text: "10 Sectional Practice Tests", included: true },
        { text: "Vocabulary Flashcard App Access", included: true },
        { text: "Detailed Math Solution Videos", included: true },
        { text: "Live Cohort Interactive Sessions", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "gre-champ",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: "Live interactive GRE cohort with 99th-percentile instructors",
      description: "100 hrs live classes, shortcuts, advanced quant strategies, and 12 adaptive mocks.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Master Advanced GRE Quant & Verbal",
      priceFormatted: "₹24,999.00",
      monthlyPrice: "₹4,166/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "350 reviews",
      features: [
        { text: "100 Hours Live Interactive Coaching", included: true },
        { text: "12 Adaptive Computer Mocks", included: true },
        { text: "Advanced Quant Problem-Solving Tactics", included: true },
        { text: "Text Completion & Reading Drills", included: true },
        { text: "1-on-1 B-School Counseling Session", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "gre-champ-plus",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack +",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: "Complete 330+ pathway with 1-on-1 counseling & admissions roadmap",
      description: "Full live cohort, unlimited adaptive mock tests, personalized roadmap, and SOP review.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "Target 330+ Top STEM & MBA Score",
      priceFormatted: "₹29,999.00",
      monthlyPrice: "₹5,000/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "520 reviews",
      features: [
        { text: "All 3 Batch Timings (Full Flexibility)", included: true },
        { text: "120 Hours Live Masterclasses", included: true },
        { text: "20 Adaptive Full-Length Mocks", included: true },
        { text: "1-on-1 SOP & University Shortlisting Session", included: true },
        { text: "Direct Doubt Clearing with 99th-Percentile Mentors", included: true },
      ],
      level: "Advanced",
    },
  ],
  "gmat": (cat) => [
    {
      id: "gmat-data",
      category: cat,
      duration: "6 Months Access",
      title: "Data Insights & Quant",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: "Targeted focus on Data Insights & Quantitative reasoning",
      description: "1200+ Focus Edition questions, sectional tests, and video explanations.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "GMAT Focus Edition Benchmark",
      priceFormatted: "₹16,999.00",
      monthlyPrice: "₹2,833/m • 6 months (incl. 18% GST)",
      rating: "4.7",
      reviewsCount: "190 reviews",
      features: [
        { text: "1200+ Focus Edition Practice Questions", included: true },
        { text: "Data Insights Multi-Source Drills", included: true },
        { text: "Quant Shortcuts & Frameworks", included: true },
        { text: "6 Focus Edition Adaptive Mocks", included: true },
        { text: "Live Strategy Masterclasses", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "gmat-champ",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: "Live strategy cohort for 685+ GMAT Focus scores",
      description: "100 hrs live classes, verbal critical reasoning mastery, and 12 mocks.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Premier Business School Pathway",
      priceFormatted: "₹26,999.00",
      monthlyPrice: "₹4,500/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "280 reviews",
      features: [
        { text: "100 Hours Live Intensive Coaching", included: true },
        { text: "12 Full Focus Adaptive Simulations", included: true },
        { text: "Critical Reasoning & Data Analysis Masterclasses", included: true },
        { text: "Sectional Review with Expert Faculty", included: true },
        { text: "B-School Interview Prep Session", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "gmat-champ-plus",
      category: cat,
      duration: "6 Months Access",
      title: "Champion Pack +",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: "Elite 705+ pathway with 1-on-1 B-School admissions mentoring",
      description: "Comprehensive live coaching, personalized score roadmap, resume review, and interview prep.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "705+ Top 1% Global B-School Score",
      priceFormatted: "₹32,999.00",
      monthlyPrice: "₹5,500/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "430 reviews",
      features: [
        { text: "All 3 Batch Timings (Complete Schedule Flexibility)", included: true },
        { text: "120 Hours Live Masterclasses + Case Studies", included: true },
        { text: "18 Full-Length Computer Adaptive Mocks", included: true },
        { text: "1-on-1 B-School Resume & Interview Prep", included: true },
        { text: "Direct 24/7 Access to 99th-Percentile Mentors", included: true },
      ],
      level: "Advanced",
    },
  ],
  "career": (cat) => [
    {
      id: "career-found",
      category: cat,
      duration: "3 Months Access",
      title: "Foundation Readiness",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: "Essential workplace communication and resume basics",
      description: "Resume crafting templates, LinkedIn profile blueprint, and email etiquette modules.",
      image: "/images/subscription_self_prep.jpg",
      glowText: "Start Your Career Journey",
      priceFormatted: "₹4,999.00",
      monthlyPrice: "₹1,666/m • 3 months (incl. 18% GST)",
      rating: "4.6",
      reviewsCount: "140 reviews",
      features: [
        { text: "ATS Resume & Cover Letter Templates", included: true },
        { text: "LinkedIn Optimization Blueprint", included: true },
        { text: "Business Email & Communication Drills", included: true },
        { text: "Recorded Workplace Skills Modules", included: true },
        { text: "Live 1-on-1 Mock Interviews", included: false },
      ],
      level: "Beginner",
    },
    {
      id: "career-pro",
      category: cat,
      duration: "6 Months Access",
      title: "Pro Employability Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: "Interactive interview prep and managerial competencies",
      description: "Live behavioral interview clinics, case interviews, and personal brand workshop.",
      image: "/images/subscription_champion_live.jpg",
      glowText: "Accelerate Career Promotions",
      priceFormatted: "₹8,999.00",
      monthlyPrice: "₹1,500/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "260 reviews",
      features: [
        { text: "Live Behavioral & Technical Interview Clinics", included: true },
        { text: "Executive Presentation & Speaking Drills", included: true },
        { text: "Salary Negotiation Masterclass", included: true },
        { text: "2 Live 1-on-1 Mock Interview Evaluations", included: true },
        { text: "Lifetime Placement Community Access", included: false },
      ],
      level: "Intermediate",
    },
    {
      id: "career-catalyst",
      category: cat,
      duration: "12 Months Access",
      title: "All-Access Career Catalyst",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: "Complete career transformation with 1-on-1 executive mentorship",
      description: "Full access to all career, interview, and leadership modules with dedicated industry mentor.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: "Guaranteed Placement & Leadership Edge",
      priceFormatted: "₹14,999.00",
      monthlyPrice: "₹2,500/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "410 reviews",
      features: [
        { text: "Unlimited 1-on-1 Mock Interviews with HR Leaders", included: true },
        { text: "Complete Leadership & Executive Communication", included: true },
        { text: "Dedicated Career Coach & Weekly Check-ins", included: true },
        { text: "Global Industry Referral & Network Access", included: true },
        { text: "Verified Career Catalyst Certificate", included: true },
      ],
      level: "Advanced",
    },
  ],
};

function getCardsForCategory(category: string): CoursePlanCard[] {
  const norm = category.toLowerCase().trim();
  for (const [key, fn] of Object.entries(DEFAULT_COURSES_PLANS)) {
    if (norm.includes(key)) {
      return evaluatePopularCard(fn(category));
    }
  }

  // Universal dynamic 3-pack fallback for any course:
  const baseCards: CoursePlanCard[] = [
    {
      id: `${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}-self`,
      category: category,
      duration: "6 Months Access",
      title: "Self-Prep Pack",
      packType: "Self Preparation Pack",
      popular: false,
      theme: "mint",
      tagline: `Best for self-paced independent ${category} learners`,
      description: "60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab lessons.",
      image: "/images/subscription_self_prep.jpg",
      glowText: `Target Top Band in ${category}`,
      priceFormatted: "₹13,899.00",
      monthlyPrice: "₹2,316/m • 6 months (incl. 18% GST)",
      rating: "4.7",
      reviewsCount: "356 reviews",
      features: [
        { text: "Full Question Banks & Sectional Drills", included: true },
        { text: "15 Mock Tests with Analytics", included: true },
        { text: "20+ Hours Video Lessons", included: true },
        { text: "Comprehensive Study Resources", included: true },
        { text: "Live Interactive Masterclasses", included: false },
      ],
      level: "Beginner",
    },
    {
      id: `${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}-champ`,
      category: category,
      duration: "6 Months Access",
      title: "Champion Pack",
      packType: "Champion Pack",
      popular: false,
      theme: "lavender",
      tagline: `100 hrs live lectures & single batch timing for ${category}`,
      description: "1 batch timing, 100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video.",
      image: "/images/subscription_champion_live.jpg",
      glowText: `Master ${category} with Top Faculty`,
      priceFormatted: "₹25,999.00",
      monthlyPrice: "₹4,333/m • 6 months (incl. 18% GST)",
      rating: "4.8",
      reviewsCount: "236 reviews",
      features: [
        { text: "1 Batch Timing Fixed Schedule", included: true },
        { text: "100 Hours of Live Lectures", included: true },
        { text: "60 Sectional Practice Tests", included: true },
        { text: "15 Mock Tests with Feedback", included: true },
        { text: "20+ Hours Video Lessons", included: true },
      ],
      level: "Intermediate",
    },
    {
      id: `${category.toLowerCase().replace(/[^a-z0-9]/g, "-")}-champ-plus`,
      category: category,
      duration: "6 Months Access",
      title: "Champion Pack +",
      packType: "Champion Pack +",
      popular: false,
      theme: "lime",
      tagline: `All 3 batch timings & complete flexibility for ${category}`,
      description: "All 3 batch timings (morning/afternoon/evening), 100 hrs live lectures, 60 sectional tests, 15 mock tests.",
      image: "/images/subscription_champion_plus.jpg",
      glowText: `Maximum Score & Flexibility Guaranteed`,
      priceFormatted: "₹28,999.00",
      monthlyPrice: "₹4,833/m • 6 months (incl. 18% GST)",
      rating: "4.9",
      reviewsCount: "576 reviews",
      features: [
        { text: "All 3 Batch Timings (M / A / E)", included: true },
        { text: "100 Hours Live Lectures + Recordings", included: true },
        { text: "60 Sectional Practice Tests", included: true },
        { text: "15 Mock Tests with 1-on-1 Feedback", included: true },
        { text: "20+ Hours Video Lessons & Extra Mocks", included: true },
      ],
      level: "Advanced",
    },
  ];

  return evaluatePopularCard(baseCards);
}

interface PackageInlineCheckoutProps {
  onOpenDemo: () => void;
  categoryName?: string;
}

export default function PackageInlineCheckout({
  onOpenDemo,
  categoryName,
}: PackageInlineCheckoutProps) {
  const currentCategory = categoryName || "IELTS Academic";
  const activeCards = React.useMemo(() => {
    return getCardsForCategory(currentCategory);
  }, [currentCategory]);

  // Selected course plan - defaults to the dynamically evaluated popular plan!
  const [selectedPlan, setSelectedPlan] = useState<CoursePlanCard>(() => {
    const popularCard = activeCards.find((c) => c.popular);
    return popularCard || activeCards[0];
  });

  // Update selected plan if category changes
  useEffect(() => {
    const popularCard = activeCards.find((c) => c.popular);
    setSelectedPlan(popularCard || activeCards[0]);
  }, [activeCards]);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [adminNote, setAdminNote] = useState("");

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const checkoutRef = useRef<HTMLDivElement>(null);

  const handleSelectPlan = (plan: CoursePlanCard) => {
    setSelectedPlan(plan);
    setIsPaymentSuccessful(false);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Step 1: Sign in or Register
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaAnswer.trim() !== "8") {
      alert("Please solve the human verification correctly (7 + 1 = 8)");
      return;
    }
    // Set logged in and switch view to checkout card only!
    setIsLoggedIn(true);
    if (!fullName) {
      setFullName(username.split("@")[0] || "Student User");
    }
  };

  // Step 2: Final Payment
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsPaymentSuccessful(true);
      setTimeout(() => {
        checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsPaymentSuccessful(false);
    setUsername("");
    setPassword("");
    setCaptchaAnswer("");
  };

  return (
    <section className="py-14 sm:py-20 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Enrollment Pathways</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-navy leading-snug tracking-tight">
            Choose Your <span className="text-emerald-600">{currentCategory} Plan</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-xl">
            Select the course pack below to begin your checkout instantly without leaving the page.
          </p>
        </div>

        {/* 3 Course Cards Grid matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pb-12">
          {activeCards.map((course) => {
            const isSelected = selectedPlan?.id === course.id;
            const isLime = course.theme === "lime";

            // Box tint classes matching the reference image
            const boxBgClass =
              course.theme === "mint"
                ? "bg-[#F0F9EE] border-emerald-100/80"
                : course.theme === "lime"
                ? "bg-[#F8F9E4] border-lime-200/80"
                : "bg-[#F7EEF5] border-pink-200/70";

            return (
              <div
                key={course.id}
                onClick={() => handleSelectPlan(course)}
                className={cn(
                  "relative rounded-[32px] p-6 sm:p-8 bg-white border flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 cursor-pointer group text-left",
                  isSelected
                    ? "border-emerald-500 ring-2 ring-emerald-500/30 shadow-xl shadow-emerald-500/10"
                    : isLime
                    ? "border-lime-300 shadow-lg md:-translate-y-1.5"
                    : "border-slate-200/80"
                )}
              >
                <div>
                  {/* Top Header: Title & Subtitle */}
                  <div className="text-left">
                    <h3 className="font-heading font-extrabold text-2xl sm:text-[28px] text-slate-900 tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1 leading-relaxed">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="relative mt-6 mb-4 text-left">
                    {/* Highlight Badge (matching "until may" in reference image) */}
                    {course.badge && (
                      <div className="absolute -top-3.5 right-2 sm:right-4 z-10">
                        <span className="inline-block bg-[#D4F938] text-slate-900 text-[11px] font-black px-3 py-0.5 rounded-full -rotate-6 shadow-xs select-none uppercase tracking-wider">
                          {course.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-none">
                        {course.priceFormatted.replace(".00", "")}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-500 font-medium ml-1">
                        {course.monthlyPrice}
                      </span>
                    </div>
                  </div>

                  {/* Tinted Features Box (Signature Reference UI Element) */}
                  <div className={cn("rounded-2xl p-4 sm:p-5 my-5 border", boxBgClass)}>
                    <div className="space-y-2.5">
                      {course.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-[13px]">
                          {feat.included ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-500 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-rose-100 border border-rose-300 text-rose-500 flex items-center justify-center shrink-0">
                              <X className="w-2.5 h-2.5 stroke-[3.5]" />
                            </div>
                          )}

                          <span
                            className={cn(
                              "leading-snug flex-1",
                              feat.included
                                ? "text-slate-700 font-medium"
                                : "text-slate-400 font-normal line-through"
                            )}
                          >
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Description below features box */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed my-4 text-left font-normal">
                    {course.description}
                  </p>
                </div>

                {/* Action Button: BUY NOW (per explicit user instruction) */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(course);
                    }}
                    className={cn(
                      "w-full py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer",
                      isLime
                        ? "bg-[#D4F938] hover:bg-[#cbf133] text-slate-950 font-black shadow-lime-500/20"
                        : "bg-[#111827] hover:bg-black text-white"
                    )}
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* INLINE CHECKOUT SECTION (DIRECTLY BELOW SUBSCRIPTION CARDS) */}
        <div ref={checkoutRef} className="pt-8 scroll-mt-24">
          <AnimatePresence mode="wait">
            
            {/* ========================================================================= */}
            {/* CASE 1: PAYMENT SUCCESSFUL STATE                                          */}
            {/* ========================================================================= */}
            {isPaymentSuccessful ? (
              <motion.div
                key="payment-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-14 border border-emerald-200 shadow-2xl text-center space-y-7 max-w-3xl mx-auto relative overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600" />

                {/* Animated Success Badge */}
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner shadow-emerald-200">
                  <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-800">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Transaction Confirmed</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                    Payment Successful! 🎉
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Congratulations <strong>{fullName || username || "Student"}</strong>! Your enrollment in{" "}
                    <span className="text-emerald-700 font-bold">{selectedPlan.category} — {selectedPlan.packType}</span> has been confirmed.
                  </p>
                </div>

                {/* Receipt Details Box */}
                <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 text-left max-w-xl mx-auto space-y-3.5">
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Order ID:</span>
                    <span className="font-mono font-bold text-slate-800">#AY-2026-9842</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="font-bold text-emerald-600 text-base">{selectedPlan.priceFormatted}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 pb-2.5">
                    <span className="text-slate-500">Program Duration:</span>
                    <span className="font-semibold text-slate-800">{selectedPlan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-500">Access Status:</span>
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded text-xs">
                      Active • 6 Months Full LMS Access
                    </span>
                  </div>
                </div>

                {/* Post-Enrollment Action Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
                  <a
                    href="https://web.whatsapp.com/send?phone=+919403892981&text=Hi%20Academic%20Yatra,%20I%20have%20completed%20my%20enrollment%20for%20IELTS%20Academic%20Champion%20Pack%20+.%20Please%20assign%20my%20batch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Join Official WhatsApp Batch</span>
                  </a>

                  <button
                    onClick={() => alert("Downloading official payment receipt & enrollment summary PDF...")}
                    className="py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white text-slate-700 font-bold text-xs sm:text-sm shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-emerald-600" />
                    <span>Download Invoice (PDF)</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setIsPaymentSuccessful(false);
                      setIsLoggedIn(false);
                    }}
                    className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
                  >
                    Enroll in another package or log out
                  </button>
                </div>
              </motion.div>
            ) : (

              /* ========================================================================= */
              /* CASE 2: USER IS LOGGED IN -> SHOW CHECKOUT CARD ONLY (NO SIGN IN CARD)    */
              /* ========================================================================= */
              isLoggedIn ? (
                <motion.div
                  key="checkout-only"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Verified Student Header Strip */}
                  <div className="w-full p-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 text-emerald-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        Logged in as <strong className="font-bold text-slate-900">{fullName || username}</strong> ({username || "student@academicyatra.com"})
                      </span>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-emerald-300 bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Switch Account</span>
                    </button>
                  </div>

                  {/* Two-Column Checkout Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Direct Payment Method Card */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl text-left space-y-6">
                      <div className="pb-3 border-b border-slate-100">
                        <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                          Final Step
                        </span>
                        <h3 className="text-2xl font-bold font-heading text-slate-900 mt-0.5">
                          Select Payment Method
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Complete your enrollment to unlock immediate LMS course access.
                        </p>
                      </div>

                      <form onSubmit={handlePaymentSubmit} className="space-y-5">
                        {/* Payment Method Selector Tabs */}
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod("upi")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "upi"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <QrCode className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">UPI / QR</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod("card")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "card"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">Card</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod("netbanking")}
                            className={cn(
                              "p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer",
                              paymentMethod === "netbanking"
                                ? "border-emerald-500 bg-emerald-50/50 text-emerald-900 ring-2 ring-emerald-500/20 font-bold shadow-xs"
                                : "border-slate-200 hover:border-slate-300 text-slate-600"
                            )}
                          >
                            <Building2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-xs font-semibold">NetBanking</span>
                          </button>
                        </div>

                        {/* Payment Details Container */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                          {paymentMethod === "upi" && (
                            <div className="space-y-2">
                              <label className="block font-bold text-slate-700">
                                UPI ID / VPA *
                              </label>
                              <input
                                type="text"
                                placeholder="yourname@okhdfcbank or @paytm"
                                defaultValue="student@upi"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                              />
                              <p className="text-[11px] text-slate-500">
                                Supported: Google Pay, PhonePe, Paytm, CRED, BHIM &amp; all bank apps.
                              </p>
                            </div>
                          )}

                          {paymentMethod === "card" && (
                            <div className="space-y-2.5">
                              <div>
                                <label className="block font-bold text-slate-700 mb-1">
                                  Card Number *
                                </label>
                                <input
                                  type="text"
                                  placeholder="4532 •••• •••• 8920"
                                  defaultValue="4532 8920 1284 9281"
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block font-bold text-slate-700 mb-1">Expiry</label>
                                  <input
                                    type="text"
                                    placeholder="MM/YY"
                                    defaultValue="08/29"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                  />
                                </div>
                                <div>
                                  <label className="block font-bold text-slate-700 mb-1">CVV</label>
                                  <input
                                    type="password"
                                    placeholder="•••"
                                    defaultValue="894"
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {paymentMethod === "netbanking" && (
                            <div className="space-y-2">
                              <label className="block font-bold text-slate-700">
                                Select Bank *
                              </label>
                              <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-emerald-500">
                                <option>HDFC Bank</option>
                                <option>State Bank of India</option>
                                <option>ICICI Bank</option>
                                <option>Axis Bank</option>
                                <option>Kotak Mahindra Bank</option>
                              </select>
                            </div>
                          )}
                        </div>

                        {/* Note to administrator */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Batch Preference &amp; Target Band
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Evening Batch (7 PM), Target Band 7.5..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        {/* Pay Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isProcessingPayment}
                            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                          >
                            {isProcessingPayment ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Authorizing Payment...</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-4 h-4" />
                                <span>Pay {selectedPlan.priceFormatted} &amp; Start Learning</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-left space-y-5">
                      <h3 className="text-xl font-bold font-heading text-slate-900 pb-3 border-b border-slate-100">
                        Your order
                      </h3>

                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                            <Image
                              src={selectedPlan.image || "/images/subscription_champion_live.jpg"}
                              alt={selectedPlan.packType}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 truncate">
                              {selectedPlan.packType}
                            </h4>
                            <span className="text-xs text-slate-400">
                              {selectedPlan.category} ({selectedPlan.duration})
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-bold text-emerald-600 shrink-0">
                          {selectedPlan.priceFormatted}
                        </span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100 text-sm">
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-semibold text-emerald-600">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-900 text-base font-bold pt-2 border-t border-slate-100">
                          <span>Total</span>
                          <span className="font-extrabold text-emerald-600 text-lg">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-800 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>100% Encrypted &amp; Authorized</span>
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          Instant access to LMS dashboard, mock test simulations, and Cambridge trainer batch.
                        </p>
                      </div>

                      <a
                        href={`https://web.whatsapp.com/send?phone=+919403892981&text=${encodeURIComponent(
                          `Hi Academic Yatra, I am completing enrollment for ${selectedPlan.category} - ${selectedPlan.packType} (${selectedPlan.priceFormatted}). Please confirm batch timings.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Pay or Query via WhatsApp (+91 94038 92981)</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              ) : (

                /* ========================================================================= */
                /* CASE 3: USER NOT LOGGED IN -> SHOW RED ALERT & SIGN IN / REGISTER FORM   */
                /* ========================================================================= */
                <motion.div
                  key="auth-required"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Red Error / Alert Strip matching Image 2 */}
                  <div className="w-full p-4 rounded-xl border border-red-200 bg-red-50/70 text-red-700 flex items-center gap-3 text-xs sm:text-sm font-medium shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <span>Please login in to enroll in the course!</span>
                  </div>

                  {/* Two-Column Layout: Sign In Form + Order Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Sign In / Account Form matching Image 2 */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-lg text-left space-y-6">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <h3 className="text-2xl font-bold font-heading text-slate-900">
                          {authMode === "signin" ? "Sign in" : "New Student"}
                        </h3>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setAuthMode("signin")}
                            className={cn(
                              "text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                              authMode === "signin"
                                ? "bg-slate-900 text-white"
                                : "text-slate-500 hover:bg-slate-100"
                            )}
                          >
                            Sign in
                          </button>
                          <button
                            type="button"
                            onClick={() => setAuthMode("signup")}
                            className={cn(
                              "text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                              authMode === "signup"
                                ? "bg-slate-900 text-white"
                                : "text-slate-500 hover:bg-slate-100"
                            )}
                          >
                            New Student
                          </button>
                        </div>
                      </div>

                      <form onSubmit={handleAuthSubmit} className="space-y-4">
                        {authMode === "signup" && (
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Rahul Sharma"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                            />
                          </div>
                        )}

                        {/* Username or Email */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Username or email *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Email or username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Password */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Password *
                          </label>
                          <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Remember Me & Lost Password */}
                        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                          <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                              className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                            />
                            <span>Remember me</span>
                          </label>

                          <a
                            href="#lost-password"
                            onClick={(e) => {
                              e.preventDefault();
                              alert("Password reset instructions have been sent to your email.");
                            }}
                            className="text-slate-500 hover:text-emerald-700 transition-colors"
                          >
                            Lost password?
                          </a>
                        </div>

                        {/* Prove Your Humanity Captcha matching Image 2 */}
                        <div className="pt-2">
                          <label className="block text-xs text-slate-500 font-medium mb-1.5">
                            Prove your humanity
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-700">7 + 1 =</span>
                            <input
                              type="number"
                              required
                              placeholder="?"
                              value={captchaAnswer}
                              onChange={(e) => setCaptchaAnswer(e.target.value)}
                              className="w-16 px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-center font-bold focus:outline-none focus:border-emerald-500"
                            />
                            <span className="text-[11px] text-slate-400">(Answer: 8)</span>
                          </div>
                        </div>

                        {/* Sign up toggle prompt */}
                        <div className="pt-1 text-xs text-slate-600">
                          {authMode === "signin" ? (
                            <span>
                              Don&apos;t have an account?{" "}
                              <button
                                type="button"
                                onClick={() => setAuthMode("signup")}
                                className="text-emerald-600 font-bold hover:underline cursor-pointer"
                              >
                                Sign up.
                              </button>
                            </span>
                          ) : (
                            <span>
                              Already have an account?{" "}
                              <button
                                type="button"
                                onClick={() => setAuthMode("signin")}
                                className="text-emerald-600 font-bold hover:underline cursor-pointer"
                              >
                                Sign in.
                              </button>
                            </span>
                          )}
                        </div>

                        {/* Note to Administrator matching Image 2 */}
                        <div className="pt-3">
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Note to administrator
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Add any specific requirements, preferred batch timing or queries..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Lock className="w-4 h-4" />
                            <span>Continue to Checkout →</span>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Right Column: Your Order matching Image 2 */}
                    <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg text-left space-y-5">
                      <h3 className="text-xl font-bold font-heading text-slate-900 pb-3 border-b border-slate-100">
                        Your order
                      </h3>

                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                            <Image
                              src={selectedPlan.image || "/images/subscription_champion_live.jpg"}
                              alt={selectedPlan.packType}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-slate-900 truncate">
                              {selectedPlan.packType}
                            </h4>
                            <span className="text-xs text-slate-400">
                              {selectedPlan.category} ({selectedPlan.duration})
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-bold text-emerald-600 shrink-0">
                          {selectedPlan.priceFormatted}
                        </span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100 text-sm">
                        <div className="flex justify-between text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-semibold text-emerald-600">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-900 text-base font-bold pt-2 border-t border-slate-100">
                          <span>Total</span>
                          <span className="font-extrabold text-emerald-600 text-lg">
                            {selectedPlan.priceFormatted}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1.5">
                        <div className="flex items-center gap-2 text-slate-700 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>100% Secure Checkout</span>
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          Includes 6 Months LMS Access, Cambridge Tests, Trainer Reviews &amp; Recorded Sessions.
                        </p>
                      </div>

                      <a
                        href={`https://web.whatsapp.com/send?phone=+919403892981&text=${encodeURIComponent(
                          `Hi Academic Yatra, I would like to enroll in ${selectedPlan.category} - ${selectedPlan.packType} (${selectedPlan.priceFormatted}). Please guide me on payment options.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Pay or Query via WhatsApp (+91 94038 92981)</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
