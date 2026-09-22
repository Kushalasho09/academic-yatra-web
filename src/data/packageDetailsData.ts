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
          badge: "Popular",
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
    eyebrow: "Pearson AI Simulator • Sectional Mocks • Fast Results in 48 Hours",
    heroDescription:
      "Master computer-delivered Pearson PTE Academic with AI scoring alignment, Repeat Sentence mastery, SST templates, and proven 79+ target strategies for universities and global migration.",
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
        { title: "Students applying to Australian, UK, US, Canadian & European universities" },
        { title: "Australian PR aspirants targeting 20 migration points (Superior English: 79+)" },
        { title: "Candidates who prefer fast computer grading over subjective human examiners" },
        { title: "Healthcare, IT, and Engineering professionals seeking immediate score delivery" },
        { title: "Test takers needing quick exam retakes and score reporting within 48 hours" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "PTE Academic",
      subtitle: "Tap any card to expand — scoring, AI algorithm, templates & testing tips.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is PTE Academic?",
          answer:
            "PTE Academic is a 2-hour, computer-delivered language assessment evaluated entirely by Pearson's patented automated scoring algorithm. It tests Speaking, Writing, Reading, and Listening in an integrated format with zero human examiner bias.",
        },
        {
          id: "02",
          number: "02",
          question: "How is PTE Academic Scored?",
          answer:
            "Scores range from 10 to 90 on the Global Scale of English. PTE features integrated cross-scoring: for example, 'Read Aloud' contributes points to both Speaking and Reading, while 'Write From Dictation' contributes to Listening and Writing.",
        },
        {
          id: "03",
          number: "03",
          question: "How fast do you get PTE results?",
          answer:
            "PTE results are typically released within 48 hours (often within 24 hours) through your online MyPTE portal, making it the fastest major English proficiency test available.",
        },
        {
          id: "04",
          number: "04",
          question: "Why choose Academic Yatra for PTE?",
          answer:
            "Academic Yatra provides access to an AI-powered mock engine calibrated to Pearson's scoring criteria, tested oral fluency templates, Repeat Sentence prediction files, and live 1-on-1 pitch and pronunciation clinics.",
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
    titleHighlight: "Core (Canada PR)",
    eyebrow: "IRCC Approved • Express Entry • CLB 9/10 Focus",
    heroDescription:
      "Target high CLB benchmarks for Canada Express Entry and Provincial Nominee Programs with focused training on PTE Core's vocational, real-world communication format.",
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
        { title: "Canada Express Entry applicants (FSWP, CEC, FSTP)" },
        { title: "Provincial Nominee Program (PNP) candidates across Canadian provinces" },
        { title: "Applicants seeking an easier alternative to IELTS General and CELPIP" },
        { title: "Skilled workers and trades professionals targeting fast PR invitations" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "PTE Core",
      subtitle: "Canada immigration guidelines, format differences, and CLB conversions.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is PTE Core?",
          answer:
            "PTE Core is a 2-hour, computer-based English test approved by IRCC for all Canadian economic immigration streams and citizenship applications. It replaces academic topics with practical workplace and everyday English.",
        },
        {
          id: "02",
          number: "02",
          question: "How does PTE Core differ from PTE Academic?",
          answer:
            "Instead of academic lectures and graph analysis, PTE Core tests email writing (Respond to a Situation), workplace phone conversations, and vocational listening clips.",
        },
        {
          id: "03",
          number: "03",
          question: "What are the CLB 9 equivalents for PTE Core?",
          answer:
            "To hit CLB 9: Listening 82–88, Reading 78–87, Speaking 84–88, and Writing 88–89. Academic Yatra's Canada immigration specialists provide exact rubrics to hit these scores.",
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
    category: "TOEFL iBT",
    titlePrefix: "TOEFL",
    titleHighlight: "iBT (ETS)",
    eyebrow: "Shorter Format • 100+ Score Focus • Ivy League & US Admissions",
    heroDescription:
      "Build elite academic English proficiency for top American, Canadian, and global universities with intensive training on ETS testing patterns, integrated tasks, and academic writing discussions.",
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
      headingHighlight: "TOEFL iBT?",
      description:
        "TOEFL iBT is the premier English test preferred by 9 out of 10 US universities and accepted worldwide. It is designed for:",
      cards: [
        { title: "Undergraduate and Graduate applicants targeting top US & Ivy League schools" },
        { title: "Candidates applying for Graduate Assistantships (TA/RA) requiring high speaking scores" },
        { title: "Healthcare and Pharmacy licensing boards in the USA (NABP requirements)" },
        { title: "Students targeting European and Canadian STEM master's programs" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "TOEFL iBT",
      subtitle: "New shorter format, section breakdowns, and scoring criteria.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the New TOEFL iBT format?",
          answer:
            "In July 2023, ETS streamlined the TOEFL iBT to under 2 hours. It features a new 'Writing for an Academic Discussion' task, streamlined reading passages, and eliminated all unscored test questions.",
        },
        {
          id: "02",
          number: "02",
          question: "How is TOEFL iBT scored?",
          answer:
            "Each of the 4 sections (Reading, Listening, Speaking, Writing) is scored from 0 to 30, resulting in a total score out of 120. Top-tier US universities typically require an overall score of 100+ with 25+ in Speaking.",
        },
        {
          id: "03",
          number: "03",
          question: "Where is TOEFL accepted?",
          answer:
            "TOEFL iBT is accepted by over 12,500 institutions in 160+ countries, including 100% of US universities, all UK Russell Group institutions, and major universities across Canada, Australia, and New Zealand.",
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
      headingHighlight: "TOEFL iBT Plan",
      subtitle: "Target top global university admissions.",
      plans: [
        {
          id: "toefl-champ",
          category: "TOEFL iBT",
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
        "TOEFL iBT is a registered trademark of Educational Testing Service (ETS).",
    },
  },

  // 6. DUOLINGO ENGLISH TEST
  "duolingo-det": {
    id: "duolingo-det",
    slug: "duolingo-det",
    category: "Duolingo English Test",
    titlePrefix: "Duolingo",
    titleHighlight: "English Test (DET)",
    eyebrow: "100% Online • 1-Hour Test • Certified Results in 48h",
    heroDescription:
      "Prepare flexibly for the computer-adaptive Duolingo English Test accepted by 5,000+ universities worldwide. Master interactive question patterns and subscore strategies.",
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
      headingHighlight: "Duolingo DET?",
      description:
        "The Duolingo English Test is an affordable, accessible English assessment taken from home on your computer with a webcam. It is ideal for:",
      cards: [
        { title: "Students needing fast certified results for immediate intake deadlines" },
        { title: "Applicants to US, Canadian, UK, and European universities accepting DET" },
        { title: "Students seeking an affordable test without travelling to physical test centres" },
        { title: "Candidates who excel in rapid, computer-adaptive question formats" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Duolingo DET",
      subtitle: "Computer adaptivity, 160-point scale, and subscores.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the Duolingo English Test?",
          answer:
            "The Duolingo English Test is a 1-hour computer-adaptive test proctored remotely using AI and human supervisors. It measures Literacy, Comprehension, Conversation, and Production on a 10–160 point scale.",
        },
        {
          id: "02",
          number: "02",
          question: "How does computer adaptivity work?",
          answer:
            "As you answer questions correctly, subsequent questions become harder, allowing the test to measure your true ability in less than an hour. A mistake lowers question difficulty.",
        },
        {
          id: "03",
          number: "03",
          question: "Which universities accept DET?",
          answer:
            "Over 5,000 programs accept DET, including Yale, Columbia, NYU, University of Toronto, and Imperial College London programs.",
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
    category: "CELPIP General",
    titlePrefix: "CELPIP",
    titleHighlight: "General",
    eyebrow: "Canadian PR • Citizenship • 100% Canadian English",
    heroDescription:
      "Strengthen practical English for Canadian immigration and citizenship. Master Canadian accents, workplace writing tasks, and speaking prompts designed for IRCC criteria.",
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
      headingHighlight: "CELPIP General?",
      description:
        "CELPIP is designed specifically for Canadian immigration and professional designation in Canada. It is recommended for:",
      cards: [
        { title: "Express Entry candidates targeting maximum CRS points" },
        { title: "Provincial Nominee Program (PNP) applicants" },
        { title: "Canadian citizenship applicants" },
        { title: "Professionals seeking certification from Canadian regulatory bodies" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "CELPIP General",
      subtitle: "Format, scoring levels, and Canadian English strategies.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is CELPIP General?",
          answer:
            "CELPIP (Canadian English Language Proficiency Index Program) is a 3-hour, 100% computer-delivered test conducted in one sitting. It uses Canadian English spelling, grammar, and workplace scenarios.",
        },
        {
          id: "02",
          number: "02",
          question: "How is CELPIP scored?",
          answer:
            "CELPIP scores map directly 1-to-1 to Canadian Language Benchmark (CLB) levels, ranging from Level 3 to Level 12. Level 9 is the coveted target for Express Entry.",
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
          category: "CELPIP General",
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
        "CELPIP is a registered trademark of Paragon Testing Enterprises.",
    },
  },

  // 8. FRENCH PREPARATION
  "french-prep": {
    id: "french-prep",
    slug: "french-prep",
    category: "French (DELF / TEF)",
    titlePrefix: "French",
    titleHighlight: "Preparation (DELF / TEF)",
    eyebrow: "TEF Canada 50+ Bonus CRS Points • DELF A1–B2 • Native Mentors",
    heroDescription:
      "Comprehensive French pathways from beginner A1 to fluent B2/C1. Boost your Canada Express Entry PR score by up to 50+ bonus points through targeted TEF Canada training.",
    heroImage: "/images/dest_europe.png",
    stats: [
      { value: "50+", label: "Bonus CRS Points (Canada)" },
      { value: "A1–B2", label: "CEFR Structured Levels" },
      { value: "100%", label: "Native Bilingual Mentors" },
      { value: "Daily", label: "Live Speaking Practice" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "French Preparation?",
      description:
        "French opens doors to bilingual PR invitations, European master's degrees, and global careers. It is designed for:",
      cards: [
        { title: "Canada Express Entry applicants needing 50 bonus CRS bilingual points" },
        { title: "Candidates targeting Quebec Immigration & Francophone Mobility Visas" },
        { title: "Students applying to universities in France, Switzerland, Belgium & Canada" },
        { title: "Professionals seeking international mobility in multinational corporations" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "French (DELF / TEF)",
      subtitle: "CEFR progression, exam dates, and Canada immigration bonus rules.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How does French give 50+ bonus points in Canada Express Entry?",
          answer:
            "Under IRCC rules, achieving NCLC 7 (approx. B2 level) in TEF or TCF Canada earns you 50 additional Comprehensive Ranking System (CRS) points if you already have English skills. This often guarantees an invitation to apply (ITA).",
        },
        {
          id: "02",
          number: "02",
          question: "What is the difference between DELF and TEF Canada?",
          answer:
            "DELF/DALF are diplomas awarded by the French Ministry of Education and are valid for life (ideal for university admissions and European visas). TEF Canada is specifically recognized by IRCC for Canadian immigration and is valid for 2 years.",
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
    category: "German (Goethe-Zertifikat)",
    titlePrefix: "German",
    titleHighlight: "Preparation (Goethe A1–B2)",
    eyebrow: "Goethe-Zertifikat • Free German Public Universities • Ausbildung",
    heroDescription:
      "Structured German language training for study, work, and healthcare visas. Prepare for Goethe-Institut and telc certifications with native pedagogy, grammar clarity, and speaking clubs.",
    heroImage: "/images/carousel_explore_brands.png",
    stats: [
      { value: "€0", label: "Public University Tuition" },
      { value: "A1–B2", label: "Complete CEFR Pathway" },
      { value: "100%", label: "Goethe Exam Aligned" },
      { value: "Chancenkarte", label: "Opportunity Card Ready" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "German Preparation?",
      description:
        "Germany is the top study and work destination in Europe offering tuition-free world-class education. This pathway is designed for:",
      cards: [
        { title: "Students targeting tuition-free German Public Universities (TU9 & Elite unis)" },
        { title: "Nurses and medical doctors preparing for German healthcare licensing (B2 FSP)" },
        { title: "Engineers and IT professionals applying for the German Opportunity Card (Chancenkarte)" },
        { title: "Candidates pursuing vocational training programs (Ausbildung) in Germany" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "German (Goethe / telc)",
      subtitle: "Public university requirements, visa benchmarks, and study duration.",
      items: [
        {
          id: "01",
          number: "01",
          question: "Can international students really study in Germany for free?",
          answer:
            "Yes! Public universities in Germany charge zero tuition fees for all students, including non-EU international students (only a small semester fee of €150–€350 is required). Most programs require B1/B2/TestDaF German certification.",
        },
        {
          id: "02",
          number: "02",
          question: "Which German exam should I take: Goethe or telc?",
          answer:
            "Both Goethe-Zertifikat and telc are officially recognized by German embassies, universities, and professional boards. Goethe is widely known globally, while telc offers frequent exam dates in many locations.",
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
    category: "Spoken English & Fluency",
    titlePrefix: "Spoken English &",
    titleHighlight: "Fluency Mastery",
    eyebrow: "Daily Speaking Clubs • Accent Training • Corporate Confidence",
    heroDescription:
      "Break through hesitation, build natural vocabulary, and speak English with confidence in social, academic, and high-stakes corporate environments.",
    heroImage: "/images/hero_campus_life.png",
    stats: [
      { value: "Daily", label: "Live Speaking Clubs" },
      { value: "1-on-1", label: "Confidence Coaching" },
      { value: "100%", label: "Hesitation Removal" },
      { value: "500+", label: "Real Dialogue Prompts" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Spoken English?",
      description:
        "Fluency is the key to career promotions, interview success, and social influence. It is designed for:",
      cards: [
        { title: "College students preparing for placement interviews and group discussions" },
        { title: "Working professionals aiming for promotions and client-facing presentations" },
        { title: "Individuals seeking to eliminate mother-tongue influence (MTI) and refine pronunciation" },
        { title: "Homemakers and entrepreneurs looking to communicate confidently in English" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Spoken English",
      subtitle: "Class structure, daily speaking topics, and fluency milestones.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How do you help students overcome hesitation?",
          answer:
            "Through our safe, supportive small-group environment and daily guided conversation topics. Trainers gently correct pronunciation, eliminate grammatical fear, and encourage spontaneous thought in English.",
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
    titleHighlight: "SAT Preparation",
    eyebrow: "Adaptive Bluebook Engine • Desmos Mastery • 1500+ Target",
    heroDescription:
      "Target 1500+ with master trainers on the Digital SAT. Master built-in Desmos calculator shortcuts, punctuation rules, reading synthesis, and computer-adaptive strategy.",
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
      headingHighlight: "Digital SAT Prep?",
      description:
        "The Digital SAT is required for undergraduate college admissions in the USA, Canada, and leading global universities. It is essential for:",
      cards: [
        { title: "High school students (Grades 10–12) applying to US colleges & Ivy Leagues" },
        { title: "Applicants targeting merit scholarships in the US, Canada, Singapore, and Europe" },
        { title: "Students applying to leading Indian universities accepting SAT (Ashoka, Plaksha, Bennett)" },
        { title: "Test takers wanting to maximize both Math 800 and Reading/Writing scores" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Digital SAT",
      subtitle: "Adaptive modules, Desmos calculator hacks, and College Board format.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How does the Digital SAT's multistage adaptivity work?",
          answer:
            "Both Reading & Writing and Math are split into two modules. Your performance on Module 1 determines whether Module 2 gives you easier or harder questions. Hitting the harder Module 2 is required to achieve scores above 1350+.",
        },
        {
          id: "02",
          number: "02",
          question: "How important is the Desmos graphing calculator?",
          answer:
            "Desmos is built directly into every math question on the Digital SAT. At Academic Yatra, we teach students how to solve up to 40% of math problems in seconds using Desmos regressions and graph intersections without manual algebra.",
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
    category: "GRE General",
    titlePrefix: "GRE",
    titleHighlight: "General Preparation",
    eyebrow: "Shorter GRE Format • Quant 170 Strategy • 325+ Target",
    heroDescription:
      "Target 325+ for top MS, STEM, and PhD programs. High-yield Quant shortcut frameworks, 1,000+ root-word vocabulary mastery, and computer-adaptive mock test simulations.",
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
      headingHighlight: "GRE General?",
      description:
        "The GRE is the standard admissions test for graduate Master's and PhD programs globally. It is designed for:",
      cards: [
        { title: "Engineers and Science graduates targeting US/European Master's (MS/STEM)" },
        { title: "Business school applicants submitting GRE scores for top MBA programs" },
        { title: "Fellowship, Assistantship (TA/RA), and research scholarship candidates" },
        { title: "Aspirants targeting premier technical universities (CMU, Georgia Tech, TU Munich)" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "GRE General",
      subtitle: "Shorter format, Quant strategies, and Verbal text completion hacks.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the new Shorter GRE format?",
          answer:
            "Introduced by ETS in September 2023, the Shorter GRE takes less than 2 hours. It has only one Analytical Writing essay, 54 Quant questions, and 54 Verbal questions, with zero unscored sections.",
        },
        {
          id: "02",
          number: "02",
          question: "How is the GRE scored?",
          answer:
            "Verbal and Quantitative Reasoning are scored from 130 to 170 in 1-point increments. Analytical Writing is scored from 0 to 6 in half-point increments. A combined score of 320–325+ opens doors to the world's top 20 universities.",
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
    category: "GMAT Focus Edition",
    titlePrefix: "GMAT",
    titleHighlight: "Focus Edition",
    eyebrow: "Data Insights • 99th Percentile Mentors • Top MBA Target 705+",
    heroDescription:
      "Engineered for elite MBA admissions. Master Data Insights, Critical Reasoning frameworks, and problem-solving speed for Harvard, Stanford, INSEAD, and ISB.",
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
      headingHighlight: "GMAT Focus?",
      description:
        "The GMAT Focus Edition is the gold standard for global business school admissions. It is tailored for:",
      cards: [
        { title: "MBA aspirants targeting top global B-Schools (Harvard, Wharton, INSEAD, LBS, ISB)" },
        { title: "Working professionals with 2–8 years of experience aiming for career acceleration" },
        { title: "Deferred MBA applicants and Master's in Management (MiM) candidates" },
        { title: "Consultants, bankers, and corporate leaders seeking top percentile scores" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "GMAT Focus Edition",
      subtitle: "New 205–805 scoring scale, Data Insights section, and question editing.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is the GMAT Focus Edition structure?",
          answer:
            "The test consists of three 45-minute sections: Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions). There is no essay (AWA) or sentence correction.",
        },
        {
          id: "02",
          number: "02",
          question: "What is the new Question Review & Edit feature?",
          answer:
            "Unlike the old GMAT, the Focus Edition allows you to bookmark questions and review or change up to 3 answers per section before time runs out.",
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
    category: "Skill Catalyst",
    titlePrefix: "Skill Catalyst",
    titleHighlight: "Complete Suite",
    eyebrow: "Career Essentials • Google Workspace • Modern AI & Business Tech",
    heroDescription:
      "The ultimate professional readiness suite: Resume & LinkedIn optimization, advanced Google Workspace mastery, and practical AI tools for career growth.",
    heroImage: "/images/path_skill_development.jpg",
    stats: [
      { value: "3-in-1", label: "Complete Skills Bundle" },
      { value: "100%", label: "Practical Workplace Ready" },
      { value: "AI Tools", label: "ChatGPT, Claude & Automation" },
      { value: "ATS", label: "90+ Resume Score Guarantee" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Skill Catalyst?",
      description:
        "Designed for college graduates, career transitioners, and ambitious professionals looking to stand out in today's competitive digital workplace.",
      cards: [
        { title: "Graduates preparing for corporate campus placements and job hunts" },
        { title: "Professionals wanting to master AI tools (ChatGPT, Notion, Claude) for workplace efficiency" },
        { title: "Job seekers needing an ATS-proof resume and optimized LinkedIn presence" },
        { title: "Anyone wanting to master Google Workspace (Sheets, Docs, Slides, Forms)" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Skill Catalyst Suite",
      subtitle: "Curriculum modules, live workshops, and portfolio building.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What skills will I graduate with?",
          answer:
            "You will graduate with an ATS-optimized resume, an all-star LinkedIn profile, advanced Google Sheets data skills, and the ability to leverage modern AI tools to automate workplace tasks.",
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
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Skill Catalyst Plan",
      subtitle: "Future-proof your career.",
      plans: [
        {
          id: "skill-champ",
          category: "Skill Catalyst",
          name: "Champion Pack",
          priceMonth: "₹2,999/m",
          totalText: "Total: ₹17,999 (incl. 18% GST)",
          badge: "Best Value",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Weeks Live Interactive Sessions" },
            { text: "1-on-1 Resume & LinkedIn Overhaul" },
            { text: "Advanced Google Sheets & Data Labs" },
            { text: "AI Productivity & Prompt Engineering" },
            { text: "Mock HR & Technical Interviews" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Attend a free career acceleration masterclass this week.",
      disclaimer: "Course pricing is set by Academic Yatra.",
    },
  },

  // 18. CAREER ESSENTIALS
  "career-essentials": {
    id: "career-essentials",
    slug: "career-essentials",
    category: "Career Essentials",
    titlePrefix: "Career",
    titleHighlight: "Essentials Mastery",
    eyebrow: "ATS Resume • LinkedIn Optimization • Mock HR & Technical Interviews",
    heroDescription:
      "Build workplace-ready skills for high-impact applications, behavioral interview readiness (STAR technique), professional confidence, and salary negotiation.",
    heroImage: "/images/carousel_founder_guidance.png",
    stats: [
      { value: "95%", label: "Interview Shortlist Rate" },
      { value: "STAR", label: "Behavioral Method" },
      { value: "1-on-1", label: "Mock HR Interviews" },
      { value: "ATS", label: "Keyword Optimized" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Career Essentials?",
      description:
        "For students and working professionals aiming for tier-1 job offers, high-paying corporate roles, and successful career transitions.",
      cards: [
        { title: "Job seekers struggling to pass automated ATS screening filters" },
        { title: "Candidates facing technical and HR behavioral interview anxiety" },
        { title: "Professionals seeking higher salary negotiation strategies" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Career Essentials",
      subtitle: "Resume optimization, interview prep, and LinkedIn networking.",
      items: [
        {
          id: "01",
          number: "01",
          question: "How does the ATS resume optimization work?",
          answer:
            "We reconstruct your resume using modern ATS-compliant templates, quantifiable achievement bullets, and high-frequency industry keywords that get you shortlisted by recruiters.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Interview-ready in 4 weeks",
      description:
        "Real interview practice with industry HR leaders and executive recruiters.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Career Essentials Plan",
      subtitle: "Land your dream job offer.",
      plans: [
        {
          id: "career-champ",
          category: "Career Essentials",
          name: "Career Pack",
          priceMonth: "₹1,999/m",
          totalText: "Total: ₹11,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "green",
          features: [
            { text: "4 Weeks Live Instruction" },
            { text: "Personalized ATS Resume Builder" },
            { text: "LinkedIn All-Star Profile Makeover" },
            { text: "2 Mock Interviews with Detailed Feedback" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Get your current resume reviewed for free by our career experts.",
      disclaimer: "Course pricing is set by Academic Yatra.",
    },
  },

  // 19. GSUITE HUB
  "gsuite-hub": {
    id: "gsuite-hub",
    slug: "gsuite-hub",
    category: "Google Suite Hub",
    titlePrefix: "Google Suite",
    titleHighlight: "Productivity Hub",
    eyebrow: "Advanced Sheets • Presentation Design • Cloud Collaboration",
    heroDescription:
      "Master everyday Google tools for smoother, faster, and more organized workplace productivity with practical templates, formulas, and dashboards.",
    heroImage: "/images/path_learning_dashboard.jpg",
    stats: [
      { value: "100%", label: "Hands-on Practice" },
      { value: "Sheets", label: "VLOOKUP, XLOOKUP & Pivot Tables" },
      { value: "Slides", label: "Executive Deck Design" },
      { value: "50+", label: "Business Templates" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "Google Suite Hub?",
      description:
        "Ideal for corporate employees, analysts, teachers, and entrepreneurs who want to stop wasting time on manual work and automate their day.",
      cards: [
        { title: "Professionals who want to master data analysis in Google Sheets" },
        { title: "Teams looking to streamline cloud collaboration across Docs and Drive" },
        { title: "Anyone preparing executive business presentations in Google Slides" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "Google Suite Mastery",
      subtitle: "Sheets formulas, pivot tables, and cloud workflows.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What will I master in Google Sheets?",
          answer:
            "You will master XLOOKUP, INDEX/MATCH, nested IF statements, Pivot Tables, conditional formatting, dynamic charts, and automated dashboard creation.",
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
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "Google Suite Plan",
      subtitle: "Master everyday productivity.",
      plans: [
        {
          id: "gsuite-pack",
          category: "Google Suite Hub",
          name: "Productivity Pack",
          priceMonth: "₹1,499/m",
          totalText: "Total: ₹8,999 (incl. 18% GST)",
          badge: "Self-Paced",
          badgeColor: "green",
          features: [
            { text: "Lifetime Portal Access" },
            { text: "Advanced Sheets Formula Lab" },
            { text: "50+ Downloadable Corporate Templates" },
            { text: "Google Certified Trainer Support" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Download our free Google Sheets shortcut guide today.",
      disclaimer: "Google is a registered trademark of Google LLC.",
    },
  },

  // 20. BIZZ TECH
  "bizz-tech": {
    id: "bizz-tech",
    slug: "bizz-tech",
    category: "BizzTech",
    titlePrefix: "Business Tech &",
    titleHighlight: "AI Workflows",
    eyebrow: "AI Workplace Tools • Project Management • Data Dashboards",
    heroDescription:
      "Learn practical digital and AI productivity tools through hands-on corporate case studies, prompt engineering, and automation workflows.",
    heroImage: "/images/hero_center_laptop.jpg",
    stats: [
      { value: "AI Tools", label: "ChatGPT, Claude & Perplexity" },
      { value: "Workflow", label: "Notion & Trello Systems" },
      { value: "10x", label: "Productivity Boost" },
      { value: "100%", label: "Practical Projects" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "BizzTech & AI?",
      description:
        "For modern professionals, project managers, and startup founders who want to leverage generative AI and modern business tools to work smarter.",
      cards: [
        { title: "Professionals looking to integrate AI into their daily workflow" },
        { title: "Project managers seeking structured Notion and Trello workflows" },
        { title: "Entrepreneurs building automated digital systems" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "BizzTech & AI",
      subtitle: "Prompt engineering, automation tools, and productivity frameworks.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What AI tools are covered?",
          answer:
            "We cover advanced prompt engineering with ChatGPT and Claude, AI research with Perplexity, automated task management in Notion, and workflow integrations.",
        },
      ],
    },
    whyChoose: {
      badge: "The Academic Yatra Difference",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Our Preparation Ecosystem",
      subtitle: "Future-proof your skills with cutting-edge tools",
      description:
        "Practical, no-fluff hands-on projects you can immediately implement at your job.",
      cards: COMMON_ECOSYSTEM_CARDS,
    },
    pricing: {
      badge: "Course Packages",
      headingPrefix: "Choose Your",
      headingHighlight: "BizzTech Plan",
      subtitle: "Multiply your daily output.",
      plans: [
        {
          id: "bizz-pack",
          category: "BizzTech",
          name: "Innovation Pack",
          priceMonth: "₹2,166/m",
          totalText: "Total: ₹12,999 (incl. 18% GST)",
          badge: "Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "4 Weeks Live Accelerator" },
            { text: "Prompt Engineering Playbook" },
            { text: "Custom Notion Workplace Setup" },
            { text: "Weekly Live Automation Clinics" },
          ],
          buttonText: "Get Started",
        },
      ],
    },
    ctaBanner: {
      headingPrefix: "See How Academic Yatra",
      headingHighlight: "Fits Your Goals.",
      description:
        "Join a free AI productivity workshop this weekend.",
      disclaimer: "Course pricing is set by Academic Yatra.",
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
  "career-essentials": "career-essentials",
  "skill-catalyst-career-essentials": "career-essentials",
  "google-suite": "gsuite-hub",
  "gsuite-hub": "gsuite-hub",
  "skill-catalyst-gsuite": "gsuite-hub",
  "bizz-tech": "bizz-tech",
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
