export interface AudienceCard {
  title: string;
}

export interface GuideItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface EcosystemCard {
  title: string;
  iconType: "dashboard" | "lessons" | "classes" | "practice" | "mock" | "evaluation";
  description?: string;
  items: string[];
}

export interface PackagePricingPlan {
  id: string;
  category: string;
  name: string;
  priceMonth: string;
  totalText: string;
  badge?: string;
  badgeColor?: "gold" | "green";
  featured?: boolean;
  features: { text: string; included?: boolean }[];
  buttonText: string;
}

export interface PackageDetailData {
  id: string;
  slug: string;
  category: string;
  titlePrefix: string;
  titleHighlight: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  stats: {
    value: string;
    label: string;
  }[];
  audience: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    cards: AudienceCard[];
  };
  courseGuide: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    items: GuideItem[];
  };
  whyChoose: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    description: string;
    cards: EcosystemCard[];
  };
  pricing: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    plans: PackagePricingPlan[];
  };
  ctaBanner: {
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    disclaimer: string;
  };
}

const COMMON_ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: "Live Masterclasses & Interactive Lectures",
    iconType: "classes",
    items: [
      "Small-batch interactive live classes led by certified master trainers.",
      "Instant doubt solving and real-time concept clarity during sessions.",
      "Access recordings within 2 hours of every lecture with lifetime revision access.",
    ],
  },
  {
    title: "Personalized Diagnostic & Strategy Plan",
    iconType: "evaluation",
    items: [
      "Initial diagnostic benchmark assessment to uncover strengths and gap areas.",
      "Personalized week-by-week score progression study calendar.",
      "1-on-1 strategy sessions with senior academic mentors.",
    ],
  },
  {
    title: "Official Exam Pattern Simulations & Adaptive Mocks",
    iconType: "mock",
    items: [
      "Full-length exam software mimicking the real exam interface and timer.",
      "Detailed sectional performance breakdown with speed and accuracy analytics.",
      "AI-driven diagnostic scoring reports and error log analysis.",
    ],
  },
  {
    title: "Comprehensive Practice Hub & Question Banks",
    iconType: "practice",
    items: [
      "Over 1,000+ curated practice questions categorized by difficulty level.",
      "High-scoring templates, proven formula sheets, and vocabulary flashcards.",
      "Daily homework assignments with detailed correction remarks.",
    ],
  },
  {
    title: "1-on-1 Feedback & Speaking / Writing Reviews",
    iconType: "lessons",
    items: [
      "Detailed evaluation of written essays and tasks within 24–48 hours.",
      "Live 1-on-1 mock interview and speaking simulations with rubric feedback.",
      "Continuous band / score trajectory tracking to guarantee your target.",
    ],
  },
  {
    title: "Student Progress & Analytics Dashboard",
    iconType: "dashboard",
    items: [
      "Single portal for attendance, schedules, test scores, and learning materials.",
      "Visual weak-spot heatmaps to optimize your practice efficiency.",
      "Seamless mobile and web access across all devices anywhere, anytime.",
    ],
  },
];

export const PACKAGES_DATA: Record<string, PackageDetailData> = {
  // 1. IELTS ACADEMIC
  "ielts-academic": {
    id: "ielts-academic",
    slug: "ielts-academic",
    category: "IELTS Academic",
    titlePrefix: "IELTS",
    titleHighlight: "Academic",
    eyebrow: "Live Classes • Mock Tests • Study Plans",
    heroDescription:
      "Structured preparation for students pursuing undergraduate, postgraduate, and professional admissions across leading international universities worldwide today.",
    heroImage: "/images/why_academic_students.jpg",
    stats: [
      { value: "100%", label: "Learning. No Tab Chaos." },
      { value: "100%", label: "Progress, Minus the Guesswork." },
      { value: "99%", label: "Spot the Gaps. Fix the Gaps." },
      { value: "100%", label: "Missed Class? We Kept It." },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "IELTS Academic?",
      description:
        "Planning to study at a university abroad? IELTS Academic builds the exact English skills you'll use every day — following lectures, writing assignments, doing research and taking part in class discussions. A strong band score also strengthens your application and brings your admission goals within reach. It's especially recommended for:",
      cards: [
        { title: "Students applying for Bachelor's degrees abroad" },
        { title: "Students applying for Master's programs abroad" },
        { title: "PhD & research applicants" },
        { title: "Candidates pursuing Medicine, Nursing, Engineering, Business or Science" },
        { title: "Students targeting the UK, Canada, Australia, New Zealand, Ireland & Europe" },
        { title: "Applicants whose university requires English proficiency proof" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "IELTS Academic",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is IELTS Academic?",
          answer:
            "The International English Language Testing System (IELTS) Academic assesses whether your level of English language proficiency is suitable for an academic undergraduate, master's or doctoral programme. Accepted by over 12,000 organisations worldwide including universities, professional bodies, and immigration authorities.",
        },
        {
          id: "02",
          number: "02",
          question: "When is IELTS Academic Conducted?",
          answer:
            "Computer-delivered IELTS is conducted almost daily (up to 3 test sessions per day) at certified IDP test centres across major cities. Paper-based IELTS is scheduled on up to 48 fixed test dates per year, typically on Thursdays and Saturdays.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does IELTS Academic Cost?",
          answer:
            "The official IELTS Academic test fee is set by IDP IELTS and currently stands at approximately ₹17,000 INR in India (approx. $215–$260 USD internationally). Academic Yatra coaching packages are priced independently and cover comprehensive live masterclasses, personalized evaluations, and portal access.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your IELTS Results?",
          answer:
            "For Computer-delivered IELTS, your results are usually accessible online within 3 to 5 calendar days. For Paper-based IELTS, results are published on the 13th calendar day after taking the test. You can log into your official IDP candidate portal to download your electronic Test Report Form (eTRF).",
        },
        {
          id: "05",
          number: "05",
          question: "What is an IELTS Academic Score?",
          answer:
            "IELTS uses a 9-Band scoring scale, ranging from 1 (Non-User) to 9 (Expert User). Test-takers receive an individual band score for each of the four language skills (Listening, Reading, Writing, Speaking) and an Overall Band Score. Most top universities require between Band 6.5 to 7.5 overall.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take IELTS Academic?",
          answer:
            "You can take IELTS Academic at certified IDP IELTS exam centres in more than 140 countries. In India, official test centres are operational across 80+ cities. Test takers can select between the Computer-Delivered format in tech-enabled labs or traditional Paper-Based testing.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for IELTS Academic?",
          answer:
            "Registration can be done online through the official IDP IELTS portal or facilitated directly by Academic Yatra's testing support team. You will choose your test format (Computer or Paper), select test city and date, upload your valid passport details, and make the payment online.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for IELTS Academic",
          answer:
            "A valid, original Passport is the only acceptable identity proof required for booking and attending the IELTS exam on test day. Expired passports, photocopies, notarized copies, or student IDs are strictly not accepted by the test centre authorities.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "IELTS Academic consists of 4 modules with a total duration of approx. 2 hours and 45 minutes: Listening (4 sections, 40 questions, ~30 mins), Reading (3 academic texts, 40 questions, 60 mins), Writing (Task 1 visual report & Task 2 academic essay, 60 mins), and Speaking (face-to-face 3-part interview with an examiner, 11–14 mins).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Built around your routine, designed for score breakthroughs",
      description:
        "Every session, test and review is built into one connected system so you always know where you stand, what to fix, and how close you are to your target score.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Preparation Plan",
      subtitle: "Pick the package that matches your learning style and target band score.",
      plans: [
        {
          id: "self-prep",
          category: "IELTS Academic",
          name: "Self-Prep Pack",
          priceMonth: "₹2,316/m",
          totalText: "Total: ₹13,899 (incl. 18% GST)",
          features: [
            { text: "6 Months Validity" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "500+ Grammar & Vocabulary lessons" },
          ],
          buttonText: "Get Started",
        },
        {
          id: "champ",
          category: "IELTS Academic",
          name: "Champion Pack",
          priceMonth: "₹4,333/m",
          totalText: "Total: ₹25,999 (incl. 18% GST)",
          badgeColor: "green",
          features: [
            { text: "6 Months Validity" },
            { text: "Single Batch Only" },
            { text: "100 Hours of Live Lectures" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "500+ Grammar & Vocabulary lessons" },
          ],
          buttonText: "Get Started",
        },
        {
          id: "champ-plus",
          category: "IELTS Academic",
          name: "Champion Pack +",
          priceMonth: "₹4,833/m",
          totalText: "Total: ₹28,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "All 3 Batch Timings (M/A/E)" },
            { text: "100 Hours of Live Lectures" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "1-on-1 Mentor Evaluation" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and get a feel for the way we teach, practise, and track progress before you commit.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 2. IELTS GENERAL
  "ielts-general": {
    id: "ielts-general",
    slug: "ielts-general",
    category: "IELTS General",
    titlePrefix: "IELTS",
    titleHighlight: "General",
    eyebrow: "Live Classes • Mock Tests • Study Plans",
    heroDescription:
      "Target CLB 9/10 with proven immigration strategies for Canada Express Entry, Australian PR & UK Skilled Worker Visas.",
    heroImage: "/images/story_canada_settling.jpg",
    stats: [
      { value: "100%", label: "Learning. No Tab Chaos." },
      { value: "100%", label: "Progress, Minus the Guesswork." },
      { value: "99%", label: "Spot the Gaps. Fix the Gaps." },
      { value: "100%", label: "Missed Class? We Kept It." },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "IELTS General?",
      description:
        "IELTS General Training measures English language proficiency in a practical, everyday context. It is essential for migration, work permits, and secondary education in English-speaking nations. It is designed for:",
      cards: [
        { title: "Canada Express Entry & PNP applicants seeking CLB 9 or 10" },
        { title: "Australia & New Zealand General Skilled Migration (GSM) aspirants" },
        { title: "UK Skilled Worker Visa & Health and Care Worker Visa candidates" },
        { title: "Professionals seeking international career progression abroad" },
        { title: "Secondary school or non-degree vocational training applicants" },
        { title: "Spouses and dependents accompanying primary visa holders" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "IELTS General",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is IELTS General Training?",
          answer:
            "IELTS General Training measures English proficiency in a practical work and everyday context. Tasks reflect real workplace communications, social situations, and daily notices, making it the globally accepted benchmark for immigration to Canada, Australia, New Zealand, and the UK.",
        },
        {
          id: "02",
          number: "02",
          question: "How does IELTS General compare with IELTS Academic?",
          answer:
            "Listening and Speaking modules are completely identical across Academic and General. However, General Reading features shorter workplace texts, company policies, and notices, while General Writing Task 1 requires writing a formal, semi-formal, or personal letter instead of analyzing graphs.",
        },
        {
          id: "03",
          number: "03",
          question: "What Score do I need for Canada PR (Express Entry)?",
          answer:
            "To achieve the highest Canadian Language Benchmark (CLB 9) bonus points, you need minimum scores of Listening 8.0, Reading 7.0, Writing 7.0, and Speaking 7.0. Achieving CLB 9 can add over 50+ points to your Express Entry CRS rank.",
        },
        {
          id: "04",
          number: "04",
          question: "How long is my IELTS General score valid?",
          answer:
            "IELTS General test scores are officially valid for 2 years from the test date for immigration and visa processing authorities including IRCC (Canada) and Department of Home Affairs (Australia).",
        },
        {
          id: "05",
          number: "05",
          question: "How often is IELTS General conducted?",
          answer:
            "Computer-delivered IELTS General is held up to 3 times a day across accredited testing centres, offering fast turnaround times of 3–5 days for score publishing.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Built around your routine, designed for score breakthroughs",
      description:
        "Every session, test and review is built into one connected system so you always know where you stand, what to fix, and how close you are to your target score.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Preparation Plan",
      subtitle: "Pick the package that matches your learning style and target band score.",
      plans: [
        {
          id: "champ",
          category: "IELTS General",
          name: "Champion Pack",
          priceMonth: "—",
          totalText: "Total: ₹28,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "100 Hours of Live Lectures" },
            { text: "CLB 9/10 Strategy Modules" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "500+ Grammar & Vocabulary lessons" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and get a feel for the way we teach, practise, and track progress before you commit.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 3. PTE ACADEMIC
  "pte-academic": {
    id: "pte-academic",
    slug: "pte-academic",
    category: "PTE Academic",
    titlePrefix: "PTE",
    titleHighlight: "Academic",
    eyebrow: "Mock Exams • Score Analysis • Live Classes",
    heroDescription:
      "Comprehensive preparation designed for students seeking university admissions through fast, widely accepted English proficiency assessments.",
    heroImage: "/images/hero_center_laptop.jpg",
    stats: [
      { value: "79+", label: "Target Score Strategy" },
      { value: "48h", label: "Official Results Turnaround" },
      { value: "100%", label: "Pearson AI Scoring Engine" },
      { value: "30+", label: "Full Simulation Mocks" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "PTE Academic?",
      description:
        "Pearson Test of English (PTE Academic) is a fully computer-based English exam accepted by thousands of universities worldwide and immigration authorities in Australia, New Zealand, and the UK. It is ideal for:",
      cards: [
        { title: "Bachelor's applicants" },
        { title: "Master's applicants" },
        { title: "MBA applicants" },
        { title: "PhD candidates" },
        { title: "Students applying to universities in Australia, New Zealand, the UK, Canada, the USA, and Europe" },
        { title: "Applicants seeking a fully computer-based testing experience" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "PTE Academic",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is PTE Academic?",
          answer:
            "The Pearson Test of English (PTE) Academic is a computer-based English language test designed to assess the readiness of non-native English speakers to participate in a university-level English-language instruction program. Accepted by 3,300+ institutions globally including Oxford, Harvard, and governments of Australia, New Zealand, and the UK for student visas.",
        },
        {
          id: "02",
          number: "02",
          question: "When is PTE Academic Conducted?",
          answer:
            "PTE Academic is conducted round the year with flexible test slots available almost every day, multiple times a day (morning, afternoon, and evening) across Pearson VUE authorized test centres.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does PTE Academic Cost?",
          answer:
            "The official Pearson PTE Academic test fee is approximately ₹17,000 INR in India (approx. $200–$250 USD internationally depending on the test location). Academic Yatra coaching packages are priced independently and include comprehensive live training, mock tests, and AI portal access.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your PTE Results?",
          answer:
            "PTE Academic results are typically available online within 48 hours, and often in as little as 24 hours. You receive an email notification when your scores are ready, which you can view and send directly to institutions through your Pearson account (myPTE).",
        },
        {
          id: "05",
          number: "05",
          question: "What is a PTE Academic Score?",
          answer:
            "PTE Academic scores are reported on the Global Scale of English from 10 to 90. Most top universities require an overall score between 58 and 65 (equivalent to IELTS 6.5–7.0), while competitive programs require 65 to 79+.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take PTE Academic?",
          answer:
            "You can take PTE Academic at certified Pearson VUE test centres in over 115 countries worldwide. In India, official test centres are located in all major cities. A remote online proctored version (PTE Academic Online) is also available in select regions.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for PTE Academic?",
          answer:
            "You can register online 24/7 on the official Pearson website (pearsonpte.com) or book through Academic Yatra's assistance desk. Simply create a Pearson account, select your preferred date and test centre, enter your passport information, and pay the fee online.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for PTE Academic",
          answer:
            "A valid, original Passport is the mandatory identity document required to register and sit for the PTE Academic exam at test centres in India and most countries. The details on your ID must match your Pearson booking exactly.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "PTE Academic is a 2-hour single test session covering 3 parts: Part 1 - Speaking & Writing (54–67 mins, including Personal Introduction, Read Aloud, Repeat Sentence, Essay), Part 2 - Reading (29–30 mins, Multiple Choice, Re-order paragraphs, Fill in the blanks), and Part 3 - Listening (30–43 mins, Summarize Spoken Text, Multiple Choice, Write from Dictation).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "AI score calibration with master trainer guidance",
      description:
        "Gain access to certified Pearson AI scoring software, proven speaking templates, and daily pronunciation drills to secure your 79+ target score.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "PTE Preparation Plan",
      subtitle: "Select the bundle tailored to your target score and timeline.",
      plans: [
        {
          id: "pte-champ",
          category: "PTE Academic",
          name: "Champion Pack",
          priceMonth: "₹3,999/m",
          totalText: "Total: ₹23,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "80 Hours of Live Lectures" },
            { text: "Pearson AI Mock Software" },
            { text: "Repeat Sentence & SST Templates" },
            { text: "30 Full Length Mock Tests" },
            { text: "Pronunciation & Pitch Feedback" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and get a feel for our Pearson AI simulator before you commit.",
      disclaimer:
        "Exam fees and policies follow Pearson PLC updates. Academic Yatra provides coaching and preparation services.",
    },
  },

  // 4. PTE CORE
  "pte-core": {
    id: "pte-core",
    slug: "pte-core",
    category: "PTE Core",
    titlePrefix: "PTE",
    titleHighlight: "Core",
    eyebrow: "Practice Tests • Expert Support • Feedback",
    heroDescription:
      "Targeted preparation for individuals pursuing Canadian immigration pathways, employment opportunities, and permanent residency goals successfully.",
    heroImage: "/images/indian_student_laptop.jpg",
    stats: [
      { value: "CLB 9+", label: "Target Benchmark" },
      { value: "100%", label: "IRCC Approved" },
      { value: "2 Days", label: "Average Result Speed" },
      { value: "20+", label: "Full Core Simulations" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "PTE Core?",
      description:
        "PTE Core is the new English test officially approved by Immigration, Refugees and Citizenship Canada (IRCC) for economic immigration and Canadian citizenship. It is recommended for:",
      cards: [
        { title: "Canadian immigration applicants" },
        { title: "Permanent residency candidates" },
        { title: "Skilled worker applicants" },
        { title: "Economic immigration program candidates" },
        { title: "Professionals relocating to Canada" },
        { title: "Individuals seeking language certification for work-related requirements" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "PTE Core",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is PTE Core?",
          answer:
            "PTE Core is a 2-hour, computer-based English language proficiency test approved by Immigration, Refugees and Citizenship Canada (IRCC) for economic immigration streams (Express Entry, PNP) and Canadian citizenship. It evaluates everyday, practical English skills across Speaking, Writing, Reading, and Listening.",
        },
        {
          id: "02",
          number: "02",
          question: "How Much Does PTE Core Cost?",
          answer:
            "The official Pearson PTE Core test fee is approximately ₹17,000 INR in India (approx. $340 CAD in Canada or $200–$250 USD globally). Academic Yatra coaching packages are priced independently and include targeted mock tests, CLB score tracking, and expert-led live classes.",
        },
        {
          id: "03",
          number: "03",
          question: "When is PTE Core Conducted?",
          answer:
            "PTE Core is conducted year-round with test sessions available multiple times a day across authorized Pearson VUE test centres worldwide. Because test administration is fully computerized, test slots are available frequently throughout each month.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your PTE Core Results?",
          answer:
            "PTE Core scores are typically delivered online within 48 hours (often in under 24 hours). You will receive an automated email notification once your digital scorecard is ready in your Pearson online account (myPTE), which can be directly linked to your IRCC profile.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a PTE Core Score?",
          answer:
            "PTE Core scores range from 10 to 90 and map directly to Canadian Language Benchmark (CLB) levels. For example, CLB 7 requires 60–68 in Listening, 60–68 in Reading, 68–75 in Speaking, and 69–78 in Writing; while CLB 9 requires 82–88 in Listening, 78–87 in Reading, 84–88 in Speaking, and 88–89 in Writing.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take PTE Core?",
          answer:
            "PTE Core can be taken at certified Pearson VUE test centres across more than 115 countries, including extensive networks in India and Canada. Please note that IRCC only accepts in-person test centre results; at-home online proctored tests are not accepted for Canadian immigration.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for PTE Core?",
          answer:
            "Registration is completed online 24/7 at pearsonpte.com/pte-core or assisted by Academic Yatra's admissions desk. You simply create an account, choose your test centre and date, enter your passport information, and pay the registration fee.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for PTE Core",
          answer:
            "A valid, original Passport is the mandatory government-issued ID required on test day. The name, date of birth, and identity details must strictly match your Pearson exam registration.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "PTE Core is divided into 3 modules taken in a single 2-hour sitting: Part 1 - Speaking & Writing (approx. 50 mins: Read Aloud, Repeat Sentence, Describe Image, Respond to a Situation, and Write Email), Part 2 - Reading (approx. 30 mins: Multiple Choice, Re-order Paragraphs, Fill in the Blanks), and Part 3 - Listening (approx. 30 mins: Summarize Spoken Text, Multiple Choice, Fill in Blanks, Write from Dictation).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Canada PR focused training and template mastery",
      description:
        "Master the exact question types required by IRCC with high-scoring email writing frameworks and oral fluency templates.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "PTE Core Plan",
      subtitle: "Accelerate your Canadian PR score.",
      plans: [
        {
          id: "core-champ",
          category: "PTE Core",
          name: "Champion Pack",
          priceMonth: "₹3,999/m",
          totalText: "Total: ₹23,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "green",
          features: [
            { text: "6 Months Validity" },
            { text: "PTE Core Specific Question Banks" },
            { text: "Email Writing Task Mastery" },
            { text: "20 Full Mocks with AI Scoring" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and test your CLB benchmark today.",
      disclaimer:
        "PTE Core is a registered trademark of Pearson PLC. IRCC policies govern immigration criteria.",
    },
  },

  // 5. TOEFL iBT
  "toefl-ibt": {
    id: "toefl-ibt",
    slug: "toefl-ibt",
    category: "TOEFL",
    titlePrefix: "TOEFL",
    titleHighlight: "",
    eyebrow: "Sectional Practice • Mock Tests • Live Classes",
    heroDescription:
      "Structured training for students applying to universities requiring TOEFL scores for academic admissions and scholarship opportunities.",
    heroImage: "/images/path_competitive_boy.jpg",
    stats: [
      { value: "100+", label: "Target Score Strategy" },
      { value: "2 Hours", label: "New Shorter Format" },
      { value: "100%", label: "US University Acceptance" },
      { value: "160+", label: "Countries Accepted" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "TOEFL?",
      description:
        "TOEFL is the premier English test preferred by 9 out of 10 US universities and accepted worldwide. It is designed for:",
      cards: [
        { title: "Bachelor's applicants" },
        { title: "Master's applicants" },
        { title: "PhD candidates" },
        { title: "Research scholars" },
        { title: "Exchange program students" },
        { title: "Students targeting universities in the USA, Canada, Europe, and Asia" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "TOEFL",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is TOEFL iBT?",
          answer:
            "The Test of English as a Foreign Language (TOEFL) iBT is an internationally standardized test that measures the English language proficiency of non-native speakers wishing to enroll in English-speaking universities. Administered by ETS, it is accepted by more than 12,500 institutions across 160+ countries, including 100% of US universities and leading institutions worldwide.",
        },
        {
          id: "02",
          number: "02",
          question: "TOEFL iBT Dates",
          answer:
            "TOEFL iBT is offered more than 60 times a year at authorized test centres worldwide. Test dates are available on almost all weekends (Saturdays and Sundays), and the TOEFL Home Edition is available 24 hours a day, 4 days a week.",
        },
        {
          id: "03",
          number: "03",
          question: "TOEFL iBT Fees (India 2026)",
          answer:
            "The official TOEFL iBT registration fee in India is approximately $205 USD (approx. ₹17,000 INR). Rescheduling or late registration fees may apply. Academic Yatra preparation packages are priced separately and cover personalized coaching, diagnostic feedback, and full mock simulations.",
        },
        {
          id: "04",
          number: "04",
          question: "TOEFL iBT Results",
          answer:
            "Your unofficial Reading and Listening scores are displayed immediately upon completing the exam on test day. Your official, complete score report (including Speaking and Writing) is available online in your ETS account within 4 to 8 calendar days.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a TOEFL Score?",
          answer:
            "TOEFL iBT is scored on a scale of 0 to 120, with each of the four sections (Reading, Listening, Speaking, and Writing) graded out of 30. Most top 100 global universities require a minimum composite score between 85 and 100, while competitive Ivy League and STEM programs often recommend 100+.",
        },
        {
          id: "06",
          number: "06",
          question: "TOEFL Test Centres",
          answer:
            "TOEFL iBT test centres are available in major cities across India and worldwide, equipped with secure computer stations and audio headsets. You can also opt for the TOEFL iBT Home Edition, taken on your own PC monitored by online human proctors.",
        },
        {
          id: "07",
          number: "07",
          question: "TOEFL Registration",
          answer:
            "Registration can be completed online via the official ETS portal (ets.org/toefl) or with assistance from Academic Yatra's counselling team. You must create an ETS account, choose your preferred testing location and date, enter your passport information, and pay the fee online.",
        },
        {
          id: "08",
          number: "08",
          question: "TOEFL Eligibility",
          answer:
            "There are no specific minimum age or academic qualification restrictions set by ETS to take the TOEFL iBT. Anyone planning to pursue higher education, scholarships, or international certification where English is the medium of instruction is eligible to register.",
        },
        {
          id: "09",
          number: "09",
          question: "TOEFL Syllabus & Pattern",
          answer:
            "The streamlined TOEFL iBT format takes under 2 hours to complete and consists of 4 sections: Reading (20 questions, 35 mins), Listening (28 questions, 36 mins), Speaking (4 tasks, 16 mins), and Writing (2 tasks: Integrated Writing & Writing for an Academic Discussion, 29 mins).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Master ETS integrated tasks and speech clarity",
      description:
        "Our specialized ETS curriculum develops note-taking precision, academic synthesis, and natural speech delivery to secure 100+ scores.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "TOEFL Plan",
      subtitle: "Target top global university admissions.",
      plans: [
        {
          id: "toefl-champ",
          category: "TOEFL",
          name: "Champion Pack",
          priceMonth: "₹4,166/m",
          totalText: "Total: ₹24,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "80 Hours Live Instruction" },
            { text: "Official ETS Pattern Question Bank" },
            { text: "1-on-1 Speech Clarity Sessions" },
            { text: "20 Full Mocks & Essay Evaluations" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and test your TOEFL diagnostic level.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance.",
    },
  },

  // 6. DUOLINGO ENGLISH TEST
  "duolingo-det": {
    id: "duolingo-det",
    slug: "duolingo-det",
    category: "Duolingo English Test",
    titlePrefix: "Duolingo",
    titleHighlight: "English Test",
    eyebrow: "Mock Tests • Q Banks • Expert Guidance",
    heroDescription:
      "Flexible preparation for students seeking convenient English proficiency certification accepted by universities across numerous countries.",
    heroImage: "/images/path_learning_dashboard.jpg",
    stats: [
      { value: "125+", label: "Target Score Focus" },
      { value: "1 Hour", label: "Test Duration" },
      { value: "48h", label: "Verified Results" },
      { value: "5,000+", label: "Universities Accepting" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Duolingo?",
      description:
        "The Duolingo English Test is an affordable, accessible English assessment taken from home on your computer with a webcam. It is ideal for:",
      cards: [
        { title: "Undergraduate applicants" },
        { title: "Master's applicants" },
        { title: "International students with limited access to test centres" },
        { title: "Students applying to universities that accept Duolingo scores" },
        { title: "Applicants seeking faster score reporting" },
        { title: "Budget-conscious study-abroad candidates" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Duolingo",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Duolingo English Test (DET)?",
          answer:
            "The Duolingo English Test (DET) is a modern, computer-adaptive English proficiency assessment designed for international students and institutions. It evaluates real-world language ability across Literacy, Comprehension, Conversation, and Production, and is accepted by over 5,000 university programs globally including Columbia, Yale, and NYU.",
        },
        {
          id: "02",
          number: "02",
          question: "When is the DET Conducted?",
          answer:
            "The DET is available 24 hours a day, 365 days a year, on-demand. There is no need to make an appointment or travel to a test centre; you can take the test online from home whenever you are ready.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does the DET Cost?",
          answer:
            "The official Duolingo English Test fee is $65 USD (approx. ₹5,400 INR) for a single test, or $110 USD for a 2-test bundle. This makes it substantially more affordable than traditional in-person language exams. Academic Yatra's coaching packages are priced independently and include adaptive question bank access, live masterclasses, and production subscore workshops.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your DET Results?",
          answer:
            "Your certified DET scores are available online within 48 hours of completing the test (or in as little as 12 hours with expedited results). You will receive an email notification to log into your Duolingo account, view your breakdown, and share your score report with an unlimited number of universities at no extra charge.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a Duolingo English Test Score?",
          answer:
            "The DET is scored on a holistic scale from 10 to 160 in 5-point increments, aligned with the CEFR levels. It also includes four integrated subscores: Literacy, Comprehension, Conversation, and Production. A score of 120–135 is roughly equivalent to IELTS 7.0–7.5 or TOEFL 95–105.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take the DET?",
          answer:
            "You can take the DET from anywhere in the world on a desktop or laptop computer equipped with a webcam, microphone, speakers, and a stable internet connection in a quiet, private room. Physical exam centres are not required.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for the DET?",
          answer:
            "Registration is straightforward: create an account on englishtest.duolingo.com or sign up through Academic Yatra's team. Purchase your test credit, download the secure Duolingo testing application, verify your government ID with your webcam, and begin testing within 21 days of purchase.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for DET",
          answer:
            "You need an official, unexpired government-issued photo ID such as a Passport, National Identity Card, or Driver's License. Your ID must be in its original physical format and presented to the camera during pre-test identity verification.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "The DET takes about 1 hour and includes two main sections: an adaptive test (approx. 45 mins) featuring Read and Select, Fill in the Blanks, Listen and Type, Read Aloud, and Write/Speak About the Photo; followed by an unproctored video interview and writing sample (approx. 10 mins) sent directly to institutions along with your numerical score.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Adaptive drills and production subscore mastery",
      description:
        "We train you on the hardest subscores—Conversation and Production—with real interactive prompts, mock videos, and speed typing drills.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Duolingo DET Plan",
      subtitle: "Fast-track your certified score.",
      plans: [
        {
          id: "det-champ",
          category: "Duolingo English Test",
          name: "Champion Pack",
          priceMonth: "₹3,333/m",
          totalText: "Total: ₹19,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "green",
          features: [
            { text: "6 Months Validity" },
            { text: "15 Adaptive Simulation Mocks" },
            { text: "Subscore Optimization Strategies" },
            { text: "Interactive Writing & Speaking Drills" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live demo and get your DET readiness evaluated.",
      disclaimer:
        "Duolingo is a registered trademark of Duolingo, Inc.",
    },
  },

  // 7. CELPIP PREPARATION
  "celpip-prep": {
    id: "celpip-prep",
    slug: "celpip-prep",
    category: "CELPIP",
    titlePrefix: "CELPIP",
    titleHighlight: "",
    eyebrow: "Canada Pathways • Mock Tests • Score Improvement",
    heroDescription:
      "Practical preparation for individuals pursuing immigration, licensing, and professional opportunities requiring English proficiency in Canada.",
    heroImage: "/images/dest_canada.png",
    stats: [
      { value: "CLB 9/10", label: "Target Benchmark" },
      { value: "100%", label: "Canadian Context" },
      { value: "1 Sitting", label: "No Separate Speaking Date" },
      { value: "15+", label: "Full Length Tests" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "CELPIP?",
      description:
        "CELPIP is designed specifically for Canadian immigration and professional designation in Canada. It is recommended for:",
      cards: [
        { title: "Permanent residency applicants" },
        { title: "Canadian citizenship applicants" },
        { title: "Skilled immigration candidates" },
        { title: "Provincial nominee program applicants" },
        { title: "Professionals seeking Canadian licensing requirements" },
        { title: "Individuals settling in Canada" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "CELPIP",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is CELPIP?",
          answer:
            "The Canadian English Language Proficiency Index Program (CELPIP) is a 100% computer-delivered English language assessment officially designated by Immigration, Refugees and Citizenship Canada (IRCC) for permanent residency and citizenship. It uses practical, everyday Canadian English scenarios rather than abstract academic topics.",
        },
        {
          id: "02",
          number: "02",
          question: "When is the CELPIP Exam Conducted?",
          answer:
            "CELPIP is conducted year-round with multiple test dates available every week, including weekend sessions, across designated test centres. The entire test is completed in a single 3-hour sitting with no separate speaking appointment.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does CELPIP Cost?",
          answer:
            "The CELPIP - General test fee is approximately ₹14,000 to ₹17,000 INR in India (approx. $280 CAD + tax in Canada). Academic Yatra coaching packages are priced separately and provide targeted Canadian accent listening practice, writing survey templates, and full simulation mock evaluations.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your CELPIP Results?",
          answer:
            "CELPIP test results are available online in your CELPIP account within 3 to 4 business days after test day (or within 1 business day with Express Rating). You can view your official score report online and submit the score details directly to IRCC.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a CELPIP Score?",
          answer:
            "CELPIP scores range from Level 3 to Level 12 for each component (Listening, Reading, Writing, Speaking) and align directly 1-to-1 with Canadian Language Benchmark (CLB) levels. For example, a CELPIP Level 9 corresponds to CLB 9, which awards maximum CRS points for Express Entry applicants.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take CELPIP?",
          answer:
            "CELPIP is administered at certified Prometric and Paragon test centres in major cities across India (such as Delhi, Mumbai, Bengaluru, Chandigarh, Hyderabad), throughout Canada, and internationally across several countries. It must be taken at an official in-person test centre for IRCC applications.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for CELPIP?",
          answer:
            "You can register online at the official CELPIP website (celpip.ca) or through Academic Yatra's counselling team. Select your preferred test location, date, and sitting time, submit your passport identification details, and pay the registration fee online.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for CELPIP",
          answer:
            "A valid, original Passport is the required photo identification for test-takers taking CELPIP in India and most international centres. The name, date of birth, and identity number must match your test booking confirmation exactly.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "The CELPIP - General test takes approximately 3 hours in one continuous sitting and consists of 4 components: Listening (47–55 mins, 6 parts with Canadian audio clips), Reading (55–60 mins, 4 parts including reading correspondence and diagrams), Writing (53–60 mins, 2 tasks: writing an email and responding to a survey), and Speaking (15–20 mins, 8 tasks recorded into a microphone).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Comprehensive Canadian PR coaching",
      description:
        "Specialized modules on Canadian accent listening, survey response writing, and timed speaking prompts.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "CELPIP Preparation Plan",
      subtitle: "Maximize your Canadian Express Entry score.",
      plans: [
        {
          id: "celpip-champ",
          category: "CELPIP",
          name: "Champion Pack",
          priceMonth: "₹3,999/m",
          totalText: "Total: ₹23,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "Canadian Accent Audio Drills" },
            { text: "Writing Survey & Email Frameworks" },
            { text: "15 Mock Tests with Human Evaluation" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Book a free live trial class and get your CELPIP baseline score.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 8. FRENCH PREPARATION
  "french-prep": {
    id: "french-prep",
    slug: "french-prep",
    category: "French Language",
    titlePrefix: "French",
    titleHighlight: "Language",
    eyebrow: "Speaking Practice • Grammar Support • Assessments",
    heroDescription:
      "Build practical French communication skills for academic, professional, and immigration goals across French-speaking regions worldwide.",
    heroImage: "/images/dest_europe.png",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "French Language?",
      description:
        "French opens doors to bilingual PR invitations, European master's degrees, and global careers. It is designed for:",
      cards: [
        { title: "Canadian immigration applicants" },
        { title: "Future international students" },
        { title: "Working professionals" },
        { title: "DELF, TEF, or TCF candidates" },
        { title: "Travel and language enthusiasts" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "French language",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "Why Learn French for Your Global Career?",
          answer:
            "French is an official language in 29 countries and spoken by over 300 million people worldwide. For career and immigration, it provides unmatched advantages: earning up to 50+ bonus CRS points in Canada's Express Entry via TEF/TCF Canada, unlocking Francophone Mobility work permits, and opening high-paying opportunities in international diplomacy, multinational corporations, hospitality, and European institutions.",
        },
        {
          id: "02",
          number: "02",
          question: "What Is Taught in French Language Courses?",
          answer:
            "Our French curriculum is structured according to the international CEFR framework. Courses cover all four core language competencies: Listening (understanding native accents, radio, and conversations), Reading (comprehending articles, literary excerpts, and official documents), Writing (mastering grammar, conjugations, formal correspondence, and essays), and Speaking (interactive conversation, pronunciation, and spontaneous oral debate).",
        },
        {
          id: "03",
          number: "03",
          question: "What Are French Language Certifications?",
          answer:
            "The primary international French certifications include DELF/DALF (diplomas awarded by the French Ministry of Education, valid for life and ideal for European study), and TEF / TCF (Test d'Évaluation de Français / Test de Connaissance du Français), which are standardized tests recognized by IRCC for Canadian immigration, Quebec PR, and citizenship.",
        },
        {
          id: "04",
          number: "04",
          question: "French Language Proficiency Levels (CEFR Framework)",
          answer:
            "The Common European Framework of Reference for Languages (CEFR) divides French into six levels: A1 (Complete Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper Intermediate - the standard benchmark for Canadian immigration NCLC 7 and European university admissions), C1 (Advanced / Professional Fluency), and C2 (Mastery / Bilingual Proficiency).",
        },
        {
          id: "05",
          number: "05",
          question: "Time Required to Reach B2 Level French",
          answer:
            "Reaching a B2 level typically requires between 500 to 650 guided study hours starting from zero. With Academic Yatra's intensive cohort program (combining live masterclasses, daily conversation clubs, and homework drills), dedicated students typically progress from beginner (A1) to a confident B2 proficiency within 6 to 9 months.",
        },
        {
          id: "06",
          number: "06",
          question: "Can You Pass TEF or TCF Through Self-Study?",
          answer:
            "While basic vocabulary and grammar can be explored independently, passing TEF or TCF Canada at an NCLC 7 level through self-study alone is challenging. The exams have fast-paced audio formats, strict time limits, and complex oral evaluation criteria that require structured feedback, native-speaker accent training, and timed exam simulation.",
        },
        {
          id: "07",
          number: "07",
          question: "What Is the Validity of French Language Certifications?",
          answer:
            "DELF and DALF diplomas have lifelong validity—once earned, they never expire. In contrast, TEF Canada and TCF Canada test results are valid for 2 years from the date of the exam for immigration and visa purposes with IRCC and Quebec authorities.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Immersion methodology with certified bilingual trainers",
      description:
        "Daily interactive conversational clubs, grammar drills, and TEF exam strategy ensure fast progression from beginner to B2 fluency.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "French Preparation Plan",
      subtitle: "Build language fluency and unlock bilingual immigration pathways.",
      plans: [
        {
          id: "french-champ",
          category: "French (DELF / TEF)",
          name: "Multi-Level Champion Pack",
          priceMonth: "₹4,999/m",
          totalText: "Total: ₹29,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Comprehensive Access" },
            { text: "Levels A1 to B1 Complete Track" },
            { text: "TEF / TCF Canada Exam Simulation" },
            { text: "Daily Speaking Immersion Circles" },
            { text: "Grammar & Conjugation Mastery Labs" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary French live masterclass and assess your current level.",
      disclaimer:
        "DELF is administered by France Éducation International. TEF is administered by CCI Paris Île-de-France.",
    },
  },

  // 9. GERMAN PREPARATION
  "german-prep": {
    id: "german-prep",
    slug: "german-prep",
    category: "German Language",
    titlePrefix: "German",
    titleHighlight: "Language",
    eyebrow: "Speaking Practice • Structured Learning • Assessments",
    heroDescription:
      "Develop German language proficiency for university admissions, career advancement, and opportunities across German-speaking countries.",
    heroImage: "/images/carousel_explore_brands.png",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "German Language?",
      description:
        "Germany is the top study and work destination in Europe offering tuition-free world-class education. This pathway is designed for:",
      cards: [
        { title: "Students applying to German-taught bachelor's or master's programs" },
        { title: "Candidates preparing for Goethe-Zertifikat, TestDaF, or DSH examinations" },
        { title: "Individuals pursuing vocational training (Ausbildung) programs" },
        { title: "Professionals seeking employment in Germany, Austria, or Switzerland" },
        { title: "Applicants targeting work visas, EU Blue Card pathways, or long-term settlement" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "German language",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "Why Learn German for Your Global Career?",
          answer:
            "German is the most widely spoken native language in the European Union and the official language of Germany, Austria, and Switzerland—three of Europe's strongest economies. Learning German opens access to tuition-free world-class education at prestigious German public universities, fast-tracks work visas and EU Blue Cards in engineering, IT, and healthcare, and unlocks structured vocational training (Ausbildung) pathways.",
        },
        {
          id: "02",
          number: "02",
          question: "What Is Taught in German Language Courses?",
          answer:
            "Our German curriculum adheres strictly to the international CEFR standard and develops all 4 communicative skills: Hörverstehen (Listening to native dialogues, announcements, and lectures), Leseverstehen (Reading articles, job descriptions, and technical texts), Schriftlicher Ausdruck (Writing formal emails, motivation letters, and essays with correct case declensions), and Mündlicher Ausdruck (Speaking with natural pronunciation, pitch, and spontaneous discussion).",
        },
        {
          id: "03",
          number: "03",
          question: "Official German Language Certifications",
          answer:
            "The primary internationally recognized German certifications include: Goethe-Zertifikat (awarded by the Goethe-Institut for study, visas, and employment), TestDaF (advanced academic language exam for university entrance), telc Deutsch (standardized test used for healthcare licensing and visas), and DSH (university-administered entrance examination).",
        },
        {
          id: "04",
          number: "04",
          question: "German Language Proficiency Levels (CEFR Framework)",
          answer:
            "The CEFR framework defines 6 progressive levels: A1 (Beginner: basic everyday phrases), A2 (Elementary: routine conversational exchanges), B1 (Intermediate: independent user for vocational Ausbildung entry), B2 (Upper Intermediate: required for hybrid university degrees and healthcare professions), and C1/C2 (Advanced/Mastery: complex academic research and effortless native fluency).",
        },
        {
          id: "05",
          number: "05",
          question: "Time Required to Reach B2 Level German",
          answer:
            "Reaching B2 level German typically requires 600 to 750 hours of structured instruction and practice. In Academic Yatra's intensive cohort program, students committing 2 to 3 hours daily typically progress through each level (A1 to B2) in approximately 6 to 9 months with guided grammar clinics and interactive speaking clubs.",
        },
        {
          id: "06",
          number: "06",
          question: "Self-Study vs. Taking a German Course",
          answer:
            "While apps and textbooks can teach basic introductory vocabulary, German grammar (four grammatical cases, genders, adjective endings, and word order rules) is notoriously difficult to master without expert feedback. Enrolling in a structured course with native-fluent instructors provides essential real-time speaking practice, error correction, and targeted exam preparation.",
        },
        {
          id: "07",
          number: "07",
          question: "Do German Certifications Expire?",
          answer:
            "Official Goethe-Zertifikat, telc, and TestDaF certificates do not have an expiration date and remain valid indefinitely. However, German embassies, universities, and professional licensing authorities often require certificates that were issued within the last 1 to 2 years to verify that your language skills remain active and current.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Grammar simplified, real conversational German",
      description:
        "Master the complex German case system (Nominativ, Akkusativ, Dativ) through intuitive interactive teaching and daily speaking practice.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "German Preparation Plan",
      subtitle: "Open the door to Europe's largest economy.",
      plans: [
        {
          id: "german-champ",
          category: "German (Goethe-Zertifikat)",
          name: "Multi-Level Champion Pack",
          priceMonth: "₹4,999/m",
          totalText: "Total: ₹29,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Comprehensive Access" },
            { text: "Levels A1 + A2 + B1 Complete" },
            { text: "Goethe-Zertifikat Model Papers" },
            { text: "Ausbildung & University Guidance" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Join a free live German masterclass and start your European study journey.",
      disclaimer:
        "Goethe-Zertifikat is a registered trademark of the Goethe-Institut.",
    },
  },

  // 10. SPOKEN ENGLISH
  "spoken-english": {
    id: "spoken-english",
    slug: "spoken-english",
    category: "Spoken English",
    titlePrefix: "Spoken",
    titleHighlight: "English",
    eyebrow: "Fluency Training • Vocabulary Building • Expert Guidance",
    heroDescription:
      "Improve everyday communication skills through practical speaking exercises designed for academic and professional environments.",
    heroImage: "/images/hero_campus_life.png",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Spoken English?",
      description:
        "Fluency is the key to career promotions, interview success, and social influence. It is designed for:",
      cards: [
        { title: "Working professionals" },
        { title: "Job seekers preparing for interviews" },
        { title: "Entrepreneurs and freelancers" },
        { title: "University students" },
        { title: "Public speaking aspirants" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Spoken English",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "Why Learn Spoken English for Career Growth?",
          answer:
            "English is the universal language of global business, higher education, and multinational corporations. Developing confident spoken English enables you to clear competitive job interviews, present ideas persuasively in corporate meetings, negotiate deals effectively, and build professional rapport with international clients and leaders, directly accelerating salary growth and executive promotions.",
        },
        {
          id: "02",
          number: "02",
          question: "What Is Taught in Spoken English Courses?",
          answer:
            "Our Spoken English curriculum focuses on practical application rather than textbook memorization. Key modules include Conversational Fluency (overcoming hesitation and spontaneous speech flow), Accent & Pronunciation (voice modulation, rhythm, stress patterns, and neutralizing MTI), Grammar & Vocabulary (corporate terminology, idioms, and eliminating recurring grammatical errors), and Public Speaking (argument structuring, extempore, and confident body language).",
        },
        {
          id: "03",
          number: "03",
          question: "How Can Spoken English Improve Communication Skills?",
          answer:
            "Spoken English training transforms passive language knowledge into active oral expression. By participating in daily interactive speaking clubs, roleplays, and guided debates, learners gain real-time error correction in a supportive environment. This builds active listening skills, eliminates social anxiety, and trains you to think directly in English without translating from your native language.",
        },
        {
          id: "04",
          number: "04",
          question: "What Skills Will You Develop Through a Spoken English Course?",
          answer:
            "Throughout the course, students develop: unshakeable conversational confidence in social and professional settings; interview mastery for campus placements, HR rounds, and executive panels; formal corporate communication including email etiquette, client pitching, and presentation delivery; and advanced vocabulary to articulate complex thoughts clearly and concisely.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Speak from Day 1 without textbook pressure",
      description:
        "Focus on real-world conversational speaking, voice modulation, and business etiquette.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Spoken English Plan",
      subtitle: "Speak fluent English with unshakeable confidence.",
      plans: [
        {
          id: "spoken-champ",
          category: "Spoken English & Fluency",
          name: "Fluency Champion Pack",
          priceMonth: "₹2,499/m",
          totalText: "Total: ₹14,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "green",
          features: [
            { text: "3 Months Interactive Batches" },
            { text: "Daily Live Speaking Clubs" },
            { text: "Accent Neutralization Drills" },
            { text: "Corporate Communication & Email Etiquette" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Join a free demo speaking club today and feel the difference.",
      disclaimer: "Course pricing is set by Academic Yatra.",
    },
  },

  // 11. DIGITAL SAT
  "sat-digital": {
    id: "sat-digital",
    slug: "sat-digital",
    category: "Digital SAT",
    titlePrefix: "Digital",
    titleHighlight: "SAT",
    eyebrow: "Mock Tests • Expert Mentoring • Progress Tracking",
    heroDescription:
      "Modern preparation designed to help students excel in the digital format through structured practice sessions.",
    heroImage: "/images/why_academic_students.jpg",
    stats: [
      { value: "1500+", label: "Target Score Strategy" },
      { value: "Bluebook", label: "Official Adaptive Engine" },
      { value: "Desmos", label: "Speed Hack Mastery" },
      { value: "12+", label: "Full Length Digital Mocks" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Digital SAT?",
      description:
        "The Digital SAT is required for undergraduate college admissions in the USA, Canada, and leading global universities. It is essential for:",
      cards: [
        { title: "Class 11–12 students planning abroad studies" },
        { title: "Recent school graduates applying for bachelor’s programs" },
        { title: "Applicants to USA, Canada, Europe, and Asia universities" },
        { title: "Students targeting scholarships or competitive courses" },
        { title: "Engineering, Business, CS, and other major applicants" },
        { title: "Candidates applying to selective global universities" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "DSAT",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Digital SAT?",
          answer:
            "The Digital SAT is a computer-adaptive standardized test administered by the College Board, required or accepted for undergraduate admissions and merit scholarships by thousands of universities worldwide, including colleges across the USA, Canada, Europe, Asia, and India.",
        },
        {
          id: "02",
          number: "02",
          question: "SAT Dates: When is the Digital SAT Conducted?",
          answer:
            "The Digital SAT is administered globally 7 times a year: typically in March, May, June, August, October, November, and December. Tests are held on Saturday mornings at authorized testing centres.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does the Digital SAT Cost?",
          answer:
            "The official registration fee for the Digital SAT is $68 USD plus a regional international fee (approx. $43 USD), bringing the total to approximately $111 USD (approx. ₹9,200 INR) in India. Academic Yatra coaching packages are priced independently and cover live classes, Desmos calculator shortcuts, and adaptive mock simulations.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your SAT Results?",
          answer:
            "Digital SAT results are released online within 2 to 3 weeks after your test date. You can log into your personal College Board student account to view your total score, section breakdown, percentile ranking, and send score reports directly to universities.",
        },
        {
          id: "05",
          number: "05",
          question: "What is an SAT Score?",
          answer:
            "The Digital SAT is scored on a scale of 400 to 1600, calculated by combining two section scores: Reading and Writing (200–800) and Math (200–800). Scores above 1400 are competitive for top 50 global universities, while 1500+ is the benchmark for Ivy League and highly selective programs.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take the Digital SAT?",
          answer:
            "The Digital SAT is taken in-person at certified College Board test centres (usually international schools and universities) across major cities globally. Test-takers bring their own approved laptop or tablet running the official Bluebook application.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for the Digital SAT?",
          answer:
            "Registration is completed online through your student account on the official College Board website (satsuite.collegeboard.org). You choose your test date and preferred test centre, upload an acceptable student photo, and pay the registration fee.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for the Digital SAT",
          answer:
            "On test day, you must present a printed SAT Admission Ticket and an original, valid government-issued photo ID (a valid Passport is mandatory in India). You must also bring your fully charged device with the Bluebook application installed and your exam setup completed.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "The Digital SAT takes 2 hours and 14 minutes and consists of 2 sections: Reading & Writing (64 minutes, 54 questions across two 32-minute modules) and Math (70 minutes, 44 questions across two 35-minute modules with built-in Desmos graphing calculator allowed throughout).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Precision score improvement for top colleges",
      description:
        "Gain an unfair advantage with our Bluebook simulation software, Desmos speed tricks, and 1-on-1 error log analysis.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Digital SAT Plan",
      subtitle: "Secure admissions and scholarships at world-class universities.",
      plans: [
        {
          id: "sat-champ",
          category: "Digital SAT",
          name: "Champion Pack",
          priceMonth: "₹4,999/m",
          totalText: "Total: ₹29,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Comprehensive Access" },
            { text: "100 Hours Live Masterclasses" },
            { text: "Desmos Calculator Speed Accelerator" },
            { text: "12 Full Digital SAT Bluebook Mocks" },
            { text: "College Application & Essay Workshop" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live session and test your SAT diagnostic score.",
      disclaimer: "SAT is a registered trademark of the College Board.",
    },
  },

  // 12. GRE GENERAL
  "gre-general": {
    id: "gre-general",
    slug: "gre-general",
    category: "GRE",
    titlePrefix: "GRE",
    titleHighlight: "",
    eyebrow: "Quant Practice • Mock Tests • Mentor Support",
    heroDescription:
      "Comprehensive preparation helping students strengthen analytical, quantitative, and verbal skills for graduate school admissions.",
    heroImage: "/images/path_competitive_boy.jpg",
    stats: [
      { value: "325+", label: "Target Score Strategy" },
      { value: "Quant 170", label: "Trap Analysis Labs" },
      { value: "1,000+", label: "High Frequency Vocab Roots" },
      { value: "10+", label: "Shorter GRE Mocks" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "GRE?",
      description:
        "The GRE is the standard admissions test for graduate Master's and PhD programs globally. It is designed for:",
      cards: [
        { title: "Students applying for Master's programs abroad" },
        { title: "PhD and research applicants" },
        { title: "Engineering and Technology graduates pursuing MS degrees" },
        { title: "Computer Science, AI, Data Science, and IT applicants" },
        { title: "Economics, Psychology, and Social Science students" },
        { title: "Candidates applying for STEM programs" },
        { title: "Working professionals planning higher education abroad" },
        { title: "Students targeting universities in the USA, Canada, Europe, and other GRE-accepting destinations" },
        { title: "Applicants seeking merit-based scholarships" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "GRE",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Shorter GRE?",
          answer:
            "The Shorter GRE is the modernized version of the GRE General Test introduced by ETS in September 2023. Taking under 2 hours (halving the previous test duration), it evaluates Verbal Reasoning, Quantitative Reasoning, and Analytical Writing for graduate, master's, business, and doctoral admissions worldwide.",
        },
        {
          id: "02",
          number: "02",
          question: "GRE Dates",
          answer:
            "The computer-delivered GRE is offered year-round at authorized Prometric test centres on almost every weekday and weekend. Additionally, the GRE General Test at Home is available 24 hours a day, 7 days a week, year-round.",
        },
        {
          id: "03",
          number: "03",
          question: "GRE Fees (India 2026)",
          answer:
            "The official GRE General Test registration fee in India is $228 USD (approx. ₹19,000 INR). Academic Yatra coaching packages are priced independently and cover comprehensive Quant shortcut masterclasses, vocabulary root training, and adaptive sectional mocks.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your GRE Results?",
          answer:
            "Your unofficial Quantitative and Verbal Reasoning scores are displayed on screen immediately upon completing the exam. Your official score report—including your Analytical Writing score and percentile ranks—is published in your ETS account online within 8 to 10 calendar days.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a GRE Score?",
          answer:
            "The GRE provides three separate scores: Verbal Reasoning (130–170 in 1-point increments), Quantitative Reasoning (130–170 in 1-point increments), and Analytical Writing (0–6 in half-point increments). A combined score of 320+ (with Quant 165+) is considered competitive for premier global graduate and STEM programs.",
        },
        {
          id: "06",
          number: "06",
          question: "GRE Test Centres",
          answer:
            "GRE test centres are operational in major cities across India and over 160 countries worldwide, administered in secure computer testing labs. Test-takers can also choose the official GRE at Home option if they meet equipment and room requirements.",
        },
        {
          id: "07",
          number: "07",
          question: "GRE Registration",
          answer:
            "You can register online 24/7 on the official ETS website (ets.org/gre) or through Academic Yatra's guidance team. Create an ETS account, choose your preferred test centre or home edition, select your test date, and complete payment online.",
        },
        {
          id: "08",
          number: "08",
          question: "GRE Eligibility",
          answer:
            "There are no official minimum age, GPA, or academic prerequisite requirements set by ETS to register for the GRE. Anyone with an undergraduate degree or in their final college years planning to pursue a Master's, MS, PhD, or MBA degree is eligible to take the test.",
        },
        {
          id: "09",
          number: "09",
          question: "GRE Syllabus & Pattern",
          answer:
            "The Shorter GRE takes 1 hour and 58 minutes in total and consists of 3 sections: Analytical Writing (1 'Analyze an Issue' task, 30 mins), Quantitative Reasoning (2 sections, 27 questions total, 47 mins), and Verbal Reasoning (2 sections, 27 questions total, 41 mins).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "325+ engineered score frameworks",
      description:
        "Master Quant traps and eliminate guessing in Sentence Equivalence and Text Completion.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "GRE General Plan",
      subtitle: "Target top global MS and PhD admissions.",
      plans: [
        {
          id: "gre-champ",
          category: "GRE General",
          name: "Champion Pack",
          priceMonth: "₹4,999/m",
          totalText: "Total: ₹29,999 (incl. 18% GST)",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "100 Hours Live Instruction" },
            { text: "10 Full Length Shorter GRE Mocks" },
            { text: "Quant 170 Master Frameworks" },
            { text: "1000+ Vocab Flashcard Portal" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Start with a complimentary live demo and get your GRE diagnostic report.",
      disclaimer: "GRE is a registered trademark of Educational Testing Service (ETS).",
    },
  },

  // 13. GMAT FOCUS
  "gmat-focus": {
    id: "gmat-focus",
    slug: "gmat-focus",
    category: "GMAT",
    titlePrefix: "GMAT",
    titleHighlight: "",
    eyebrow: "Mock Exams • Strategy Sessions • Performance Tracking",
    heroDescription:
      "Structured preparation for students targeting competitive business school admissions through focused practice and expert guidance.",
    heroImage: "/images/hero_center_laptop.jpg",
    stats: [
      { value: "705+", label: "Target Score Strategy (99th %ile)" },
      { value: "3 Sections", label: "Quant, Verbal, Data Insights" },
      { value: "45 Mins", label: "Per Section Efficiency" },
      { value: "100%", label: "Top B-School Acceptance" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "GMAT?",
      description:
        "The GMAT Focus Edition is the gold standard for global business school admissions. It is tailored for:",
      cards: [
        { title: "Students applying for MBA programs abroad" },
        { title: "Candidates pursuing Master in Management (MiM) degrees" },
        { title: "Applicants targeting business and management schools" },
        { title: "Working professionals seeking career advancement through higher education" },
        { title: "Candidates applying to Executive MBA programs" },
        { title: "Professionals transitioning into leadership and management roles" },
        { title: "Applicants targeting top-ranked global business schools" },
        { title: "Students pursuing Finance, Consulting, Marketing, or Business Analytics programs" },
        { title: "Candidates seeking merit-based scholarships at business schools" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "GMAT",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the GMAT Focus Edition?",
          answer:
            "The GMAT Focus Edition is the official standard for global business school admissions, engineered specifically for graduate business and management programs (MBA, MiM, Executive MBA). It features 3 sections (Quantitative Reasoning, Verbal Reasoning, and Data Insights) taken in just 2 hours and 15 minutes, with no essay section.",
        },
        {
          id: "02",
          number: "02",
          question: "GMAT Dates: When is the GMAT Conducted?",
          answer:
            "The GMAT Focus Edition is available round the year, up to 6 months in advance. You can book an appointment almost any day of the week at Pearson VUE test centres or opt for the online proctored format available 24/7.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does the GMAT Cost?",
          answer:
            "The official GMAT Focus Edition test fee is $275 USD (approx. ₹23,000 INR) at test centres in India and $300 USD for the online exam. Academic Yatra coaching packages are separate and provide comprehensive Data Insights training, Quant trap analysis, and official mock diagnostics.",
        },
        {
          id: "04",
          number: "04",
          question: "How Do You Check Your GMAT Results?",
          answer:
            "Unofficial scores are displayed immediately on the screen after you complete the test. Your official Score Report is typically available in your mba.com account within 1 to 3 business days (up to 7 days for online testing), complete with an in-depth Official Score Report detailing section performance.",
        },
        {
          id: "05",
          number: "05",
          question: "What is a GMAT Score?",
          answer:
            "The GMAT Focus Edition total score ranges from 205 to 805 in 10-point increments, ending in '5' to distinguish it from the classic scale. It equally weights all 3 sections: Quantitative Reasoning (60–90), Verbal Reasoning (60–90), and Data Insights (60–90). A score of 645–665 corresponds to the 90th percentile, and 705+ represents the elite 99th percentile.",
        },
        {
          id: "06",
          number: "06",
          question: "Where Can You Take the GMAT?",
          answer:
            "The GMAT Focus Edition is delivered at certified Pearson VUE test centres in over 110 countries and across all major Indian cities. Alternatively, candidates can take the test remotely via the GMAT Online exam using a personal computer with a webcam and microphone.",
        },
        {
          id: "07",
          number: "07",
          question: "How Do I Register for the GMAT?",
          answer:
            "Registration is completed online at the official Graduate Management Admission Council (GMAC) website (mba.com) or assisted by Academic Yatra. Select your preferred test location and time slot, upload your identification details, and pay the registration fee.",
        },
        {
          id: "08",
          number: "08",
          question: "Documents Required for GMAT",
          answer:
            "A valid, unexpired Passport is the mandatory form of government-issued photo identification required for test-takers in India and internationally. The name, date of birth, and signature on your passport must match your mba.com profile exactly.",
        },
        {
          id: "09",
          number: "09",
          question: "What Does the Test Contain?",
          answer:
            "The GMAT Focus Edition takes 2 hours and 15 minutes and consists of three 45-minute sections in any order of your choice: Quantitative Reasoning (21 questions, Problem Solving), Verbal Reasoning (23 questions, Critical Reasoning & Reading Comprehension), and Data Insights (20 questions: Data Sufficiency, Multi-Source Reasoning, Table Analysis, and Graphics Interpretation).",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Learn directly from 99th-percentile MBA mentors",
      description:
        "Master the critical Data Insights section and logical reasoning shortcuts to secure your 705+ score.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "GMAT Focus Plan",
      subtitle: "Accelerate your path to premier global business schools.",
      plans: [
        {
          id: "gmat-champ",
          category: "GMAT Focus Edition",
          name: "Champion Pack +",
          priceMonth: "₹5,499/m",
          totalText: "Total: ₹32,999 (incl. 18% GST)",
          badge: "Top Tier",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "Data Insights Deep-Dive Modules" },
            { text: "Critical Reasoning Master Frameworks" },
            { text: "15 Adaptive Focus Edition Mocks" },
            { text: "B-School Resume & Interview Prep" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Connect with a GMAT 99th-percentile mentor for a complimentary strategy session.",
      disclaimer: "GMAT is a registered trademark of the Graduate Management Admission Council (GMAC).",
    },
  },

  // 14. COMBO MASTERS
  "combo-masters": {
    id: "combo-masters",
    slug: "combo-masters",
    category: "GRE + IELTS Combo",
    titlePrefix: "Master's Complete",
    titleHighlight: "Pathway (GRE + IELTS)",
    eyebrow: "Dual Mentorship • Integrated Prep • Visa & University Roadmap",
    heroDescription:
      "The all-in-one preparation bundle covering both GRE General and IELTS Academic for seamless university admissions, scholarships, and study visa approvals.",
    heroImage: "/images/indian_student_laptop.jpg",
    stats: [
      { value: "2 Exams", label: "Integrated Preparation" },
      { value: "325+ & 7.5+", label: "Target Band & Score" },
      { value: "30%", label: "Bundle Cost Savings" },
      { value: "100%", label: "Admissions Consulting" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Master's Pathway?",
      description:
        "Students heading for Master's programs in the USA, Canada, and Europe need both an aptitude test (GRE) and an English test (IELTS). This bundled package provides cohesive preparation under one roof.",
      cards: [
        { title: "Students planning MS/STEM applications for Fall or Spring intakes" },
        { title: "Applicants wanting balanced timelines without test prep overlap burnout" },
        { title: "Candidates seeking unified mentorship for test prep, SOPs, and visas" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "GRE + IELTS Combo",
      subtitle: "Timeline synchronization, study calendars, and dual mock schedules.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How are the two courses synchronized?",
          answer:
            "We structure your preparation in two progressive stages: Stage 1 focuses on GRE Quant and advanced Verbal vocabulary, followed by Stage 2 which transitions smoothly into IELTS exam strategies and writing tasks.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "One cohesive roadmap from first mock to visa approval",
      description:
        "Save time and money with synchronized schedules, dual diagnostics, and end-to-end guidance.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Master's Pathway Plan",
      subtitle: "Complete dual test preparation bundle.",
      plans: [
        {
          id: "combo-champ",
          category: "GRE + IELTS Combo",
          name: "Mastery Pack",
          priceMonth: "₹6,499/m",
          totalText: "Total: ₹38,999 (incl. 18% GST)",
          badge: "Best Value",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "12 Months Comprehensive Validity" },
            { text: "Full GRE General Champion Course" },
            { text: "Full IELTS Academic Champion Course" },
            { text: "25 Total Mock Tests with AI & Trainer Grading" },
            { text: "Complimentary University Shortlisting Session" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Schedule a free dual-assessment consultation with our admissions director.",
      disclaimer: "Academic Yatra provides coaching and admissions advisory.",
    },
  },

  // 15. SAT BOOSTER
  "sat-booster": {
    id: "sat-booster",
    slug: "sat-booster",
    category: "SAT Score Booster",
    titlePrefix: "SAT 800 Math &",
    titleHighlight: "Verbal Sprint",
    eyebrow: "150+ Score Improvement • Rapid Concept Sprint • 4-6 Weeks",
    heroDescription:
      "High-intensity sprint for test-takers aiming to jump 150+ points with Desmos calculator mastery, punctuation drills, and hard question error log analysis.",
    heroImage: "/images/path_learning_dashboard.jpg",
    stats: [
      { value: "+150", label: "Average Point Jump" },
      { value: "4-6 Wks", label: "Intensive Sprint" },
      { value: "100%", label: "Hard Question Focus" },
      { value: "8+", label: "Targeted Timed Drills" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "SAT Booster?",
      description:
        "Designed for students who already took the SAT or scored between 1150–1350 and need an immediate breakthrough to 1500+ before the next test date.",
      cards: [
        { title: "Repeat test-takers stuck on the 1300 score plateau" },
        { title: "Students needing a perfect 800 in Math using Desmos shortcuts" },
        { title: "Applicants facing immediate application deadlines" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "SAT Booster Sprint",
      subtitle: "Error log analysis, hard question traps, and Desmos speed hacks.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How does the SAT sprint achieve a 150+ score jump?",
          answer:
            "By isolating your specific error patterns in Module 2 questions and training you on proven speed-solving hacks for hard questions.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Laser-focused score breakthrough",
      description:
        "Every session is dedicated to advanced problem solving and timing efficiency.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "SAT Booster Plan",
      subtitle: "Break your score plateau.",
      plans: [
        {
          id: "booster-champ",
          category: "SAT Score Booster",
          name: "Fast-Track Pack",
          priceMonth: "₹3,999/m",
          totalText: "Total: ₹23,999 (incl. 18% GST)",
          badge: "Fast Track",
          badgeColor: "green",
          features: [
            { text: "4-6 Weeks Intensive Coaching" },
            { text: "Desmos Graphing Hacks Deep-Dive" },
            { text: "Hard Reading Synthesis Workshops" },
            { text: "8 Full Bluebook Simulation Tests" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Take a free SAT diagnostic sprint test today.",
      disclaimer: "SAT is a registered trademark of the College Board.",
    },
  },

  // 16. EXECUTIVE MBA TRACK
  "executive-mba": {
    id: "executive-mba",
    slug: "executive-mba",
    category: "Executive MBA / EMBA",
    titlePrefix: "Executive MBA",
    titleHighlight: "Track (EMBA)",
    eyebrow: "Flexible Weekend Batches • 1-on-1 Strategy • Premier Global EMBA",
    heroDescription:
      "Weekend and evening batches designed for working professionals targeting premier global executive MBA programs with flexible pacing and executive coaching.",
    heroImage: "/images/carousel_founder_guidance.png",
    stats: [
      { value: "Flexible", label: "Weekend & Evening Schedules" },
      { value: "1-on-1", label: "Senior Executive Mentorship" },
      { value: "Top B-Schools", label: "INSEAD, LBS, Kellogg, ISB" },
      { value: "100%", label: "Working Pro Friendly" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Executive MBA Prep?",
      description:
        "Designed for senior managers and corporate leaders balancing demanding careers with executive MBA entrance preparation (Executive Assessment / GMAT / GRE).",
      cards: [
        { title: "Senior leaders with 5–15+ years experience targeting global EMBA programs" },
        { title: "Executives taking the GMAC Executive Assessment (EA)" },
        { title: "Professionals needing personalized evening and weekend instruction" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Executive MBA Prep",
      subtitle: "Executive Assessment vs GMAT, time management, and admissions.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Executive Assessment (EA)?",
          answer:
            "The Executive Assessment is a 90-minute test designed specifically for busy professionals applying to EMBA programs. It requires less preparation time while measuring readiness for business leadership.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Tailored for high-performing working professionals",
      description:
        "High-efficiency executive instruction that respects your schedule.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Executive MBA Plan",
      subtitle: "Executive preparation with senior mentors.",
      plans: [
        {
          id: "emba-champ",
          category: "Executive MBA / EMBA",
          name: "Executive Pack",
          priceMonth: "₹5,999/m",
          totalText: "Total: ₹35,999 (incl. 18% GST)",
          badge: "Executive",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "Flexible Weekend & Evening Batches" },
            { text: "1-on-1 Strategy & Progress Reviews" },
            { text: "Executive Assessment & GMAT Prep" },
            { text: "B-School Leadership Essay Review" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Book a confidential profile evaluation with an EMBA advisor.",
      disclaimer: "Course pricing is set by Academic Yatra.",
    },
  },

  // 17. SKILL CATALYST COMBO
  "skill-catalyst-combo": {
    id: "skill-catalyst-combo",
    slug: "skill-catalyst-combo",
    category: "Skill Catalyst Programs",
    titlePrefix: "Skill",
    titleHighlight: "Catalyst",
    eyebrow: "Career Skills • Professional Development • Guided Learning",
    heroDescription:
      "A comprehensive learning pathway combining workplace, digital, and professional skills for long-term career growth.",
    heroImage: "/images/path_skill_development.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Should Join the",
      headingHighlight: "Skill Catalyst Program?",
      description:
        "A comprehensive learning pathway combining workplace, digital, and professional skills for long-term career growth. Best suited for:",
      cards: [
        { title: "Students preparing for internships and placements" },
        { title: "Fresh graduates entering the job market" },
        { title: "Job seekers looking to strengthen their professional profile" },
        { title: "Professionals seeking workplace productivity and communication skills" },
        { title: "Candidates preparing for interviews, assessments, and recruitment processes" },
        { title: "Learners who want both technical and soft skills in a single program" },
        { title: "Individuals aiming to improve digital, business, and professional competencies" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Skill Catalyst Program",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Skill Catalyst Program?",
          answer:
            "The Skill Catalyst Program is an all-inclusive 6-week pathway integrating Career Essentials, Bizz Tech, and Google Suite Hub with hands-on capstone projects to deliver end-to-end employability and digital competence.",
        },
        {
          id: "02",
          number: "02",
          question: "What Skills Are Taught in the Bizz Tech Course?",
          answer:
            "Instruction spans business communication, ATS resume creation, interview techniques, advanced Google Sheets and Workspace tools, data analytics, podcast creation, and digital business workflows.",
        },
        {
          id: "03",
          number: "03",
          question: "How Does Skill Catalyst Improve Career Readiness?",
          answer:
            "By combining hard technical software proficiency with executive soft skills, practical cross-domain capstones, and intensive mentor feedback that equips learners to thrive in modern corporate environments.",
        },
        {
          id: "04",
          number: "04",
          question: "What Are the Benefits of Skill Catalyst Certification?",
          answer:
            "Holders gain a distinguished Certificate of Achievement, an integrated multi-project portfolio, 95 days of full portal access, and prioritized career guidance for top placement opportunities.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Hands-on projects and career acceleration",
      description:
        "Practical skill building with tangible outputs: real resumes, live dashboards, and automated workflows.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Skill Catalyst Programs",
      headingPrefix: "Choose Your",
      headingHighlight: "Skill Catalyst",
      subtitle: "A comprehensive learning pathway for long-term career growth.",
      plans: [
        {
          id: "combo-pack",
          category: "Skill Catalyst Programs",
          name: "Combo Pack",
          priceMonth: "₹39,000",
          totalText: "₹39,000 + GST",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "95 Days Portal Access" },
            { text: "6 Weeks Live Lectures" },
            { text: "Online Portal Access" },
            { text: "Integrated Capstone Projects" },
            { text: "Comprehensive Skill Assessment" },
            { text: "Certificate of Achievement" },
          ],
          buttonText: "Enroll Now",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Attend a free career acceleration masterclass this week.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 18. CAREER ESSENTIALS
  "career-essentials": {
    id: "career-essentials",
    slug: "career-essentials",
    category: "Skill Catalyst Programs",
    titlePrefix: "Career",
    titleHighlight: "Essentials",
    eyebrow: "Workplace Skills • Interview Prep • Career Guidance",
    heroDescription:
      "Develop practical workplace competencies that improve employability, professional confidence, and readiness for career opportunities.",
    heroImage: "/images/why_academic_students.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Should Join the",
      headingHighlight: "Career Essentials Program?",
      description:
        "Career Essentials is suitable for students, fresh graduates, job seekers, and working professionals looking to improve employability and workplace performance. The program helps bridge the gap between academic learning and industry expectations. Career Essentials is best suited for:",
      cards: [
        { title: "College students" },
        { title: "Fresh graduates" },
        { title: "Internship applicants" },
        { title: "Job seekers preparing for interviews" },
        { title: "Working professionals" },
        { title: "Professionals looking to improve communication" },
        { title: "Career switchers" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Career Essentials Program",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Career Essentials Program?",
          answer:
            "Career Essentials is an intensive job-readiness program designed to bridge the gap between academic education and modern workplace demands, equipping candidates with workplace communication, professional etiquette, resume optimization, and interview handling.",
        },
        {
          id: "02",
          number: "02",
          question: "What Skills Are Taught in Career Essentials?",
          answer:
            "Curriculum modules include high-impact workplace communication, executive email writing, ATS-compliant resume and cover letter drafting, LinkedIn networking, behavioral interview preparation (STAR technique), group discussions, and workplace negotiation.",
        },
        {
          id: "03",
          number: "03",
          question: "How Does Career Essentials Improve Job Readiness?",
          answer:
            "Through personalized mock interviews with actionable scoring rubrics, hands-on capstone projects, portfolio building, and comprehensive skill assessments that simulate real corporate recruitment evaluation standards.",
        },
        {
          id: "04",
          number: "04",
          question: "What Are the Benefits of Career Essentials Certification?",
          answer:
            "Graduates earn an industry-recognized Certificate of Achievement, verified practical capstone portfolio entries, enhanced recruiter profile visibility, and the professional confidence required to clear top company hiring rounds.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Interview-ready in 10 days",
      description:
        "Real interview practice with industry HR leaders and executive mentors.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Skill Catalyst Programs",
      headingPrefix: "Choose Your",
      headingHighlight: "Career Essentials Pack",
      subtitle: "Develop practical workplace competencies and professional confidence.",
      plans: [
        {
          id: "career-pack",
          category: "Skill Catalyst Programs",
          name: "Career Essentials Pack",
          priceMonth: "₹15,000",
          totalText: "₹15,000 + GST",
          badge: "Popular",
          badgeColor: "green",
          features: [
            { text: "95 Days Portal Access" },
            { text: "20 Hours Live Lectures" },
            { text: "10 Day Program" },
            { text: "Online Portal Access" },
            { text: "Hands-On Capstone Projects" },
            { text: "Mock Interview Assessments" },
            { text: "Comprehensive Skill Assessment" },
            { text: "Certificate of Achievement" },
          ],
          buttonText: "Enroll Now",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Get your current resume reviewed for free by our career experts.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 19. GOOGLE SUITE HUB
  "gsuite-hub": {
    id: "gsuite-hub",
    slug: "google-suite-hub",
    category: "Skill Catalyst Programs",
    titlePrefix: "Google Suite",
    titleHighlight: "Hub",
    eyebrow: "Workspace Tools • Practical Skills • Projects",
    heroDescription:
      "Master essential productivity tools used by organizations worldwide for communication, collaboration, and project management.",
    heroImage: "/images/path_learning_dashboard.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Should Join the",
      headingHighlight: "Google Suite Hub Program?",
      description:
        "Master essential productivity tools used by organizations worldwide for communication, collaboration, and project management. Best suited for:",
      cards: [
        { title: "College students" },
        { title: "Fresh graduates" },
        { title: "Working professionals" },
        { title: "Team coordinators" },
        { title: "Entrepreneurs" },
        { title: "Professionals looking to improve communication" },
        { title: "Professionals using Google Workspace daily" },
        { title: "Administrative staff" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Google Suite Hub Program",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Google Suite Hub Program?",
          answer:
            "Google Suite Hub is a comprehensive practical program focused on mastering Google Workspace applications (Docs, Sheets, Slides, Forms, Drive, and Gmail) for high-efficiency organizational productivity.",
        },
        {
          id: "02",
          number: "02",
          question: "What Skills Are Taught in Google Suite Hub?",
          answer:
            "Skills include advanced Google Sheets data analysis (formulas, pivot tables, dynamic dashboards), collaborative document workflows in Docs, executive presentations in Slides, automated surveys via Forms, and structured Drive management.",
        },
        {
          id: "03",
          number: "03",
          question: "How Does Google Suite Hub Improve Workplace Productivity?",
          answer:
            "By teaching automated data processing, dynamic reporting dashboards, standardized business documentation templates, and collaborative cloud management techniques that save hours of operational work.",
        },
        {
          id: "04",
          number: "04",
          question: "What Are the Benefits of Google Suite Hub Certification?",
          answer:
            "Graduates receive a Certificate of Achievement certifying expertise in modern cloud productivity tools, pre-built workplace dashboard templates, and an elevated professional profile.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Practical workplace workflows",
      description:
        "Build business templates and dashboards that save you hours of work each week.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Skill Catalyst Programs",
      headingPrefix: "Choose Your",
      headingHighlight: "Google Suite Hub Pack",
      subtitle: "Master everyday productivity tools used by organizations worldwide.",
      plans: [
        {
          id: "gsuite-pack",
          category: "Skill Catalyst Programs",
          name: "Google Suite Hub Pack",
          priceMonth: "₹15,000",
          totalText: "₹15,000 + GST",
          badge: "Premium",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "95 Days Portal Validity" },
            { text: "14 Hours Live Lectures" },
            { text: "7 Day Program" },
            { text: "Online Portal Access" },
            { text: "Dynamic Dashboard Projects" },
            { text: "Quiz & Performance Tracking" },
            { text: "Comprehensive Skill Assessment" },
            { text: "Certificate of Achievement" },
          ],
          buttonText: "Enroll Now",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Download our free Google Sheets shortcut guide today.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  // 20. BIZZ TECH
  "bizz-tech": {
    id: "bizz-tech",
    slug: "bizz-tech",
    category: "Skill Catalyst Programs",
    titlePrefix: "Bizz",
    titleHighlight: "Tech",
    eyebrow: "Technology Skills • Industry Projects • Practical Learning",
    heroDescription:
      "Build business and technology skills relevant to modern workplaces through practical learning and real applications.",
    heroImage: "/images/hero_center_laptop.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance · Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Should Join the",
      headingHighlight: "Bizz Tech Program?",
      description:
        "Build business and technology skills relevant to modern workplaces through practical learning and real applications. Best suited for:",
      cards: [
        { title: "College students" },
        { title: "Entrepreneurs" },
        { title: "Professionals managing business operations" },
        { title: "Small business owners" },
        { title: "Marketing professionals" },
        { title: "Digital creators and influencers" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Bizz Tech Program",
      subtitle: "Tap any card to expand — fees, band system, syllabus, dates & more, all in one place.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Bizz Tech Course?",
          answer:
            "The Bizz Tech Course is a hands-on training program designed to teach modern business and technology skills, digital workplace workflows, analytics, and tech applications needed in competitive commercial environments.",
        },
        {
          id: "02",
          number: "02",
          question: "What Skills Are Taught in the Bizz Tech Course?",
          answer:
            "Curriculum modules include business analytics and insights, podcast and digital media production, digital workflow automation, modern workplace technology stacks, and data-driven decision making.",
        },
        {
          id: "03",
          number: "03",
          question: "How Does the Bizz Tech Course Improve Business Skills?",
          answer:
            "Through hands-on student podcast projects, live analytics case studies, and real workplace problem solving that enable learners to immediately apply tech-driven solutions to operational challenges.",
        },
        {
          id: "04",
          number: "04",
          question: "What Are the Benefits of Bizz Tech Course Certification?",
          answer:
            "Earners receive a verified Certificate of Achievement, tangible project portfolio evidence, and demonstrated competence in modern business technology valued by agile enterprises and startups.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Practical, real-world business technology",
      description:
        "Build student podcast projects and live analytics dashboards that showcase your real-world capability.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Skill Catalyst Programs",
      headingPrefix: "Choose Your",
      headingHighlight: "Bizz Tech Course",
      subtitle: "Build business and technology skills for modern workplaces.",
      plans: [
        {
          id: "bizz-pack",
          category: "Skill Catalyst Programs",
          name: "Bizz Tech Course",
          priceMonth: "₹39,000",
          totalText: "₹39,000 + GST",
          badge: "Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "95 Days Portal Access" },
            { text: "14 Hours Live Lectures" },
            { text: "7 Day Program" },
            { text: "Online Portal Access" },
            { text: "Student Podcast Projects" },
            { text: "Analytics & Insights Mastery" },
            { text: "Comprehensive Skill Assessment" },
            { text: "Certificate of Achievement" },
          ],
          buttonText: "Enroll Now",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Join a free practical tech workshop this weekend.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },
};

const ALIAS_MAP: Record<string, string> = {
  // Aliases for languages
  pte: "pte-academic",
  "pte-ac": "pte-academic",
  "pte-academic": "pte-academic",
  "pte-core": "pte-core",
  ielts: "ielts-academic",
  "ielts-ac": "ielts-academic",
  "ielts-gn": "ielts-general",
  "ielts-academic": "ielts-academic",
  "ielts-general": "ielts-general",
  toefl: "toefl-ibt",
  "toefl-ibt": "toefl-ibt",
  duolingo: "duolingo-det",
  "duolingo-det": "duolingo-det",
  det: "duolingo-det",
  celpip: "celpip-prep",
  "celpip-prep": "celpip-prep",
  french: "french-prep",
  "french-prep": "french-prep",
  german: "german-prep",
  "german-prep": "german-prep",
  "spoken-eng": "spoken-english",
  "spoken-english": "spoken-english",
  spoken: "spoken-english",

  // Aliases for competitive / test prep
  sat: "sat-digital",
  "sat-prep": "sat-digital",
  "sat-digital": "sat-digital",
  gre: "gre-general",
  "gre-prep": "gre-general",
  "gre-general": "gre-general",
  gmat: "gmat-focus",
  "gmat-prep": "gmat-focus",
  "gmat-focus": "gmat-focus",
  "gre-ielts-combo": "combo-masters",
  "combo-masters": "combo-masters",
  "sat-booster": "sat-booster",
  "sat-math-verbal-booster": "sat-booster",
  "executive-mba": "executive-mba",
  "executive-mba-track": "executive-mba",

  // Aliases for skill catalyst
  "skill-combo": "skill-catalyst-combo",
  "skill-catalyst-combo": "skill-catalyst-combo",
  "skill-catalyst": "skill-catalyst-combo",
  combo: "skill-catalyst-combo",
  "career-essentials": "career-essentials",
  "skill-catalyst-career-essentials": "career-essentials",
  "google-suite": "gsuite-hub",
  "google-suite-hub": "gsuite-hub",
  "gsuite-hub": "gsuite-hub",
  "skill-catalyst-gsuite": "gsuite-hub",
  "skill-catalyst-google-suite-hub": "gsuite-hub",
  "bizz-tech": "bizz-tech",
  bizztech: "bizz-tech",
  "skill-catalyst-bizz-tech": "bizz-tech",
};

export function getPackageBySlug(slug: string): PackageDetailData {
  if (!slug) return PACKAGES_DATA["ielts-academic"];
  const normalized = slug.toLowerCase().replace(/[^a-z0-9-]/g, "");

  // Check direct match
  if (PACKAGES_DATA[normalized]) {
    return PACKAGES_DATA[normalized];
  }

  // Check alias map
  if (ALIAS_MAP[normalized] && PACKAGES_DATA[ALIAS_MAP[normalized]]) {
    return PACKAGES_DATA[ALIAS_MAP[normalized]];
  }

  // Check partial key matches
  for (const key of Object.keys(PACKAGES_DATA)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return PACKAGES_DATA[key];
    }
  }

  // Fallback to IELTS Academic template
  return PACKAGES_DATA["ielts-academic"];
}
