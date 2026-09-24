export interface PricingItem {
  program: string;
  tier: string;
  pricePerMonth?: string;
  totalPrice: string;
  validity: string;
  inclusions: string;
  badge?: string;
  isPopular?: boolean;
}

export const PRICING_GUIDE_DATA: PricingItem[] = [
  // IELTS Academic
  {
    program: "IELTS Academic",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹2,316/m",
    totalPrice: "₹13,899",
    validity: "6 months",
    inclusions: "60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab lessons, no live lectures",
  },
  {
    program: "IELTS Academic",
    tier: "Champion Pack",
    pricePerMonth: "₹4,333/m",
    totalPrice: "₹25,999",
    validity: "6 months",
    inclusions: "1 batch timing, 100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video",
  },
  {
    program: "IELTS Academic",
    tier: "Champion Pack +",
    pricePerMonth: "₹4,833/m",
    totalPrice: "₹28,999",
    validity: "6 months",
    inclusions: "All 3 batch timings (morning/afternoon/evening), 100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video",
    badge: "Most Popular",
    isPopular: true,
  },

  // IELTS General
  {
    program: "IELTS General",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹2,316/m",
    totalPrice: "₹13,899",
    validity: "6 months",
    inclusions: "60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab lessons, no live lectures",
  },
  {
    program: "IELTS General",
    tier: "Champion Pack",
    totalPrice: "₹28,999",
    validity: "6 months",
    inclusions: "100 hrs live lectures, 60 sectional tests, 15 mock tests, 20+ hrs video, 500+ grammar/vocab",
    badge: "Most Popular",
    isPopular: true,
  },

  // PTE Academic
  {
    program: "PTE Academic",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹2,316/m",
    totalPrice: "₹13,899",
    validity: "6 months",
    inclusions: "Dashboard access, 2000+ practice questions, 15 mock tests, performance analysis, no live lectures",
  },
  {
    program: "PTE Academic",
    tier: "Champion Pack",
    pricePerMonth: "₹3,500/m",
    totalPrice: "₹20,999",
    validity: "6 months",
    inclusions: "Live lecture, dashboard access, 2000+ practice questions, 15 mock tests, performance analysis",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "PTE Academic",
    tier: "Live Class",
    pricePerMonth: "₹3,166/m",
    totalPrice: "₹9,499",
    validity: "3 months",
    inclusions: "Dashboard access, performance analysis, expert feedback",
  },

  // PTE Core
  {
    program: "PTE Core",
    tier: "Champion Pack",
    pricePerMonth: "₹3,500/m",
    totalPrice: "₹20,999",
    validity: "6 months",
    inclusions: "2000+ practice questions, 5 mock tests, 6 week live lectures, dashboard access, performance analysis",
    badge: "Most Popular",
    isPopular: true,
  },

  // CELPIP
  {
    program: "CELPIP",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹5,333/m",
    totalPrice: "₹31,999",
    validity: "6 months",
    inclusions: "11 mock tests, dashboard access, performance analysis, expert feedback, no live lectures",
  },
  {
    program: "CELPIP",
    tier: "Champion Pack",
    pricePerMonth: "₹8,500/m",
    totalPrice: "₹50,999",
    validity: "6 months",
    inclusions: "11 mock tests, 6 weeks live lectures, dashboard access, performance analysis, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },

  // French Language Programs
  {
    program: "French Language Programs",
    tier: "Basic & A1 (1 timing)",
    pricePerMonth: "₹6,400/m",
    totalPrice: "₹31,999",
    validity: "5 months",
    inclusions: "Single batch, 15 practice tests, 10 wks live lectures, grammar+vocab+e-book",
  },
  {
    program: "French Language Programs",
    tier: "Basic & A1 (2 timings)",
    pricePerMonth: "₹7,400/m",
    totalPrice: "₹36,999",
    validity: "5 months",
    inclusions: "Morning+evening batches, 15 practice tests, 10 wks live lectures",
  },
  {
    program: "French Language Programs",
    tier: "Basic, A1 & A2 (1 lecture)",
    pricePerMonth: "₹6,857/m",
    totalPrice: "₹47,999",
    validity: "7 months",
    inclusions: "Single batch, 30 practice tests, 16 wks live lectures",
  },
  {
    program: "French Language Programs",
    tier: "Basic, A1 & A2 (2 lectures)",
    pricePerMonth: "₹8,000/m",
    totalPrice: "₹55,999",
    validity: "7 months",
    inclusions: "Morning+evening batches, 30 practice tests, 16 wks live lectures",
  },
  {
    program: "French Language Programs",
    tier: "Basic to TEF (Most Popular)",
    pricePerMonth: "₹5,750/m",
    totalPrice: "₹91,999",
    validity: "16 months",
    inclusions: "60 practice tests, 10 TEF mocks, 32 wks live lectures",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "French Language Programs",
    tier: "B1, B2 & TEF Pack",
    pricePerMonth: "₹8,143/m",
    totalPrice: "₹56,999",
    validity: "7 months",
    inclusions: "15 practice tests, 10 TEF mocks, 16 wks live lectures",
  },

  // German Language Programs
  {
    program: "German Language Programs",
    tier: "Basic & A1",
    pricePerMonth: "₹5,400/m",
    totalPrice: "₹26,999",
    validity: "5 months",
    inclusions: "11 wks live lectures, 15 practice tests, grammar+vocab, dashboard, e-book",
  },
  {
    program: "German Language Programs",
    tier: "Basic, A1 & A2 (Most Popular)",
    pricePerMonth: "₹5,857/m",
    totalPrice: "₹40,999",
    validity: "7 months",
    inclusions: "18 wks live lectures, 30 practice tests, grammar+vocab, dashboard, e-book",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "German Language Programs",
    tier: "Basic, A1, A2 & B1 (Premium)",
    pricePerMonth: "₹6,100/m",
    totalPrice: "₹60,999",
    validity: "10 months",
    inclusions: "27 wks live lectures, 45 practice tests, grammar+vocab, dashboard, e-book",
    badge: "Premium",
  },

  // Duolingo English Test
  {
    program: "Duolingo English Test",
    tier: "Champion Pack",
    pricePerMonth: "₹5,250/m",
    totalPrice: "₹10,499",
    validity: "2 months",
    inclusions: "13 mock tests, 4 wks live lectures, dashboard, performance analysis, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },

  // Spoken English
  {
    program: "Spoken English",
    tier: "Champion Pack",
    pricePerMonth: "₹2,633/m",
    totalPrice: "₹15,799",
    validity: "6 months",
    inclusions: "Dashboard access, live + recorded lectures, practice test, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },

  // TOEFL
  {
    program: "TOEFL",
    tier: "Live Class Pack",
    pricePerMonth: "₹3,833/m",
    totalPrice: "₹22,999",
    validity: "6 months",
    inclusions: "12 wks live lectures, recorded lessons, dashboard, performance analysis, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },

  // D-SAT
  {
    program: "D-SAT",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹3,833/m",
    totalPrice: "₹22,999",
    validity: "6 months",
    inclusions: "39 practice tests, 11 mock tests, 90+ hrs video lessons, dashboard, expert feedback",
  },
  {
    program: "D-SAT",
    tier: "Champion Pack",
    pricePerMonth: "₹9,000/m",
    totalPrice: "₹53,999",
    validity: "6 months",
    inclusions: "39 practice tests, 11 mock tests, 120+ hrs live lectures, dashboard, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "D-SAT",
    tier: "Live Class Pack",
    pricePerMonth: "₹9,666/m",
    totalPrice: "₹28,999",
    validity: "3 months",
    inclusions: "Live lectures, recorded lessons, dashboard, performance analysis, expert feedback",
  },

  // Shorter GRE
  {
    program: "Shorter GRE",
    tier: "Self Preparation Pack",
    pricePerMonth: "₹3,833/m",
    totalPrice: "₹22,999",
    validity: "6 months",
    inclusions: "11 mock tests, 90+ hrs video lessons, dashboard, performance analysis, expert feedback",
  },
  {
    program: "Shorter GRE",
    tier: "Champion Pack",
    pricePerMonth: "₹9,000/m",
    totalPrice: "₹53,999",
    validity: "6 months",
    inclusions: "11 mock tests, 120+ hrs video lessons, dashboard, performance analysis, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "Shorter GRE",
    tier: "Live Class Pack",
    pricePerMonth: "₹9,666/m",
    totalPrice: "₹28,999",
    validity: "3 months",
    inclusions: "Live lectures, recorded lessons, dashboard, performance analysis, expert feedback",
  },

  // GMAT
  {
    program: "GMAT",
    tier: "Live Class Pack",
    pricePerMonth: "₹13,000/m",
    totalPrice: "₹38,999",
    validity: "3 months",
    inclusions: "Live lectures, 3 days Quant + 3 days Verbal, dashboard, performance analysis, expert feedback",
    badge: "Most Popular",
    isPopular: true,
  },

  // DMAT
  {
    program: "DMAT",
    tier: "Live Classes",
    totalPrice: "₹34,999",
    validity: "60 days",
    inclusions: "Live classes",
    badge: "Most Popular",
    isPopular: true,
  },

  // Skill Catalyst Programs
  {
    program: "Skill Catalyst Programs",
    tier: "Career Essentials Pack",
    totalPrice: "₹16,299",
    validity: "10 days",
    inclusions: "95 days portal access, 20 hrs live lectures, capstone projects, mock interviews, skill assessment, certificate",
  },
  {
    program: "Skill Catalyst Programs",
    tier: "Combo Pack (Most Popular)",
    totalPrice: "₹42,999",
    validity: "6 weeks",
    inclusions: "95 days portal access, 6 wks live lectures, capstone projects, competency evaluation, skill assessment, certificate",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    program: "Skill Catalyst Programs",
    tier: "Google Suite Hub Pack (Premium)",
    totalPrice: "₹16,299",
    validity: "7 days",
    inclusions: "95 days portal access, 14 hrs live lectures, dashboard projects, quiz tracking, skill assessment, certificate",
    badge: "Premium",
  },
  {
    program: "Skill Catalyst Programs",
    tier: "Bizz Tech Course",
    totalPrice: "₹16,299",
    validity: "7 days",
    inclusions: "95 days portal access, 14 hrs live lectures, podcast projects, analytics mastery, skill assessment, certificate",
  },

  // Test Your English
  {
    program: "Test Your English",
    tier: "15-Day Package",
    totalPrice: "₹199",
    validity: "15 days",
    inclusions: "Quick English proficiency test package",
  },
];
