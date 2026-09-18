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

export const PACKAGES_DATA: Record<string, PackageDetailData> = {
  "ielts-academic": {
    id: "ielts-academic",
    slug: "ielts-academic",
    category: "IELTS Academic",
    titlePrefix: "IELTS",
    titleHighlight: "Academic",
    eyebrow: "Live Classes • Mock Tests • Study Plans",
    heroDescription:
      "Structured preparation for students pursuing undergraduate, postgraduate, and professional admissions across leading international universities worldwide today.",
    heroImage: "/images/student_ielts_tablet.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance • Recorded Sessions" },
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
            "Computer-delivered IELTS is conducted almost daily (up to 3 test sessions per day) at certified IDP test centres across major cities. Paper-based IELTS is scheduled on up to 48 fixed test dates per year, typically on Thursdays and Saturdays, allowing you to choose the exact slot that aligns with your intake deadlines.",
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
            "The test consists of 4 modules: Listening (30 mins + 10 mins transfer, 40 questions), Reading (60 mins, 3 long academic texts, 40 questions), Writing (60 mins: Task 1 report on charts/diagrams [150 words] + Task 2 argumentative essay [250 words]), and Speaking (11–14 mins one-on-one live interview with a certified examiner).",
        },
      ],
    },
    whyChoose: {
      badge: "Why Academic Yatra",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Academic Yatra",
      subtitle: "Everything you need to hit your target band — in one complete learning ecosystem.",
      cards: [
        {
          title: "Student Dashboard",
          iconType: "dashboard",
          items: [
            "Personalised student profile",
            "Study progress tracking",
            "Course overview",
            "Notice board & updates",
          ],
        },
        {
          title: "Lessons",
          iconType: "lessons",
          items: [
            "Video lessons",
            "Text lessons",
            "Practice quizzes",
            "Instant feedback",
          ],
        },
        {
          title: "Live Interactive Classes",
          iconType: "classes",
          items: [
            "Certified trainers",
            "Live doubt solving",
            "Recorded sessions",
            "Flexible schedules",
          ],
        },
        {
          title: "Practice Tests",
          iconType: "practice",
          items: [
            "Topic-wise exercises",
            "Skill-building modules",
            "Instant scoring",
            "Performance tracking",
          ],
        },
        {
          title: "Mock Tests",
          iconType: "mock",
          items: [
            "Real IELTS exam pattern",
            "Actual test simulation",
            "Band prediction",
            "Performance benchmarking",
          ],
        },
        {
          title: "Evaluation & Expert Feedback",
          iconType: "evaluation",
          items: [
            "Instant assessments",
            "Detailed trainer review",
            "Personalised improvement plan",
            "Expert guidance",
          ],
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      headingPrefix: "Choose Your",
      headingHighlight: "IELTS Success Plan",
      subtitle: "Pick the package that matches your learning style and target band score.",
      plans: [
        {
          id: "self-prep",
          category: "IELTS Academic",
          name: "Self Preparation Pack",
          priceMonth: "₹2,199/m",
          totalText: "Total: ₹13,194",
          features: [
            { text: "6 Months Validity" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "500+ Grammar & Vocabulary lessons" },
            { text: "No Live Lectures", included: false },
          ],
          buttonText: "Get Started",
        },
        {
          id: "champ-plus",
          category: "IELTS Academic",
          name: "Champion Pack +",
          priceMonth: "₹4,499/m",
          totalText: "Total: ₹26,994 – All 3 timings",
          badge: "Most Popular",
          badgeColor: "gold",
          featured: true,
          features: [
            { text: "6 Months Validity" },
            { text: "Batches Available Morning, Afternoon & Evening" },
            { text: "100 Hours of Live Lectures" },
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
          priceMonth: "₹3,999/m",
          totalText: "Total: ₹23,994 – 1 Lecture timing",
          badge: "Premium",
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
      headingPrefix: "Your journey to",
      headingHighlight: "success starts here.",
      description:
        "Take the next step toward goals Get expert guidance, structured learning, and personalized support designed for your success.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },

  "ielts-general": {
    id: "ielts-general",
    slug: "ielts-general",
    category: "IELTS General",
    titlePrefix: "IELTS",
    titleHighlight: "General",
    eyebrow: "Live Classes • Mock Tests • Study Plans",
    heroDescription:
      "Target CLB 9/10 with proven immigration strategies for Canada Express Entry, Australian PR & UK Skilled Worker Visas.",
    heroImage: "/images/student_ielts_tablet.jpg",
    stats: [
      { value: "100%", label: "Online Digital Dashboard" },
      { value: "100%", label: "Live Performance Tracking" },
      { value: "99%", label: "Result Accuracy" },
      { value: "100%", label: "Attendance • Recorded Sessions" },
    ],
    audience: {
      badge: "Is This Course For You?",
      headingPrefix: "Who Needs",
      headingHighlight: "IELTS General?",
      description:
        "Looking to work or settle abroad? IELTS General evaluates everyday English language skills in practical work and social contexts. Highly recommended for:",
      cards: [
        { title: "Applicants for Canada Express Entry & Provincial Nominee Programs" },
        { title: "Australia Subclass 189 & 190 Permanent Residency Candidates" },
        { title: "Professionals seeking UK Skilled Worker Visas" },
        { title: "New Zealand Skilled Migrant Category Applicants" },
        { title: "Corporate candidates seeking international employment" },
        { title: "Secondary education & vocational training abroad" },
      ],
    },
    courseGuide: {
      badge: "Complete Course Guide",
      headingPrefix: "Everything about",
      headingHighlight: "IELTS General",
      subtitle: "Fees, CLB scoring correlation, question formats & test schedule.",
      items: [
        {
          id: "01",
          number: "01",
          question: "What is IELTS General?",
          answer:
            "IELTS General Training measures English language proficiency in a practical, everyday context. It is widely used for migration to Australia, Canada, New Zealand and the UK, as well as for secondary education or work training programmes.",
        },
        {
          id: "02",
          number: "02",
          question: "What is CLB 9 and why is it important?",
          answer:
            "Canadian Language Benchmark (CLB) 9 awards maximum CRS points under Express Entry. It corresponds to IELTS scores of: Listening 8.0, Reading 7.0, Writing 7.0, and Speaking 7.0.",
        },
        {
          id: "03",
          number: "03",
          question: "How Much Does IELTS General Cost?",
          answer:
            "The official IELTS General test fee is approximately ₹17,000 INR in India, matching the standard IDP IELTS examination rates.",
        },
      ],
    },
    whyChoose: {
      badge: "Why Academic Yatra",
      headingPrefix: "Why Students Choose",
      headingHighlight: "Academic Yatra",
      subtitle: "Everything you need to hit your target band — in one complete learning ecosystem.",
      cards: [
        {
          title: "Student Dashboard",
          iconType: "dashboard",
          items: [
            "Personalised student profile",
            "Study progress tracking",
            "Course overview",
            "Notice board & updates",
          ],
        },
        {
          title: "Lessons",
          iconType: "lessons",
          items: [
            "Video lessons",
            "Text lessons",
            "Practice quizzes",
            "Instant feedback",
          ],
        },
        {
          title: "Live Interactive Classes",
          iconType: "classes",
          items: [
            "Certified trainers",
            "Live doubt solving",
            "Recorded sessions",
            "Flexible schedules",
          ],
        },
        {
          title: "Practice Tests",
          iconType: "practice",
          items: [
            "Topic-wise exercises",
            "Skill-building modules",
            "Instant scoring",
            "Performance tracking",
          ],
        },
        {
          title: "Mock Tests",
          iconType: "mock",
          items: [
            "Real IELTS exam pattern",
            "Actual test simulation",
            "Band prediction",
            "Performance benchmarking",
          ],
        },
        {
          title: "Evaluation & Expert Feedback",
          iconType: "evaluation",
          items: [
            "Instant assessments",
            "Detailed trainer review",
            "Personalised improvement plan",
            "Expert guidance",
          ],
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      headingPrefix: "Choose Your",
      headingHighlight: "IELTS General Plan",
      subtitle: "Pick the package that matches your immigration timeline.",
      plans: [
        {
          id: "self-prep-gn",
          category: "IELTS General",
          name: "Self Preparation Pack",
          priceMonth: "₹2,199/m",
          totalText: "Total: ₹13,194",
          features: [
            { text: "6 Months Validity" },
            { text: "60 Sectional Tests" },
            { text: "15 Mock Tests" },
            { text: "20+ Hours video lessons" },
            { text: "500+ Grammar & Vocabulary lessons" },
            { text: "No Live Lectures", included: false },
          ],
          buttonText: "Get Started",
        },
        {
          id: "champ-gn",
          category: "IELTS General",
          name: "Champion Pack",
          priceMonth: "₹4,499/m",
          totalText: "Total: ₹26,994",
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
      headingPrefix: "Your journey to",
      headingHighlight: "success starts here.",
      description:
        "Take the next step toward goals Get expert guidance, structured learning, and personalized support designed for your success.",
      disclaimer:
        "Exam fees, dates and policies are indicative and follow the official conducting body’s latest updates. Course pricing is set by Academic Yatra. Academic Yatra provides coaching, preparation and guidance — not the official IELTS examination.",
    },
  },
};

export function getPackageBySlug(slug: string): PackageDetailData {
  // If slug matches, return it; otherwise default to ielts-academic
  const normalized = slug?.toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (PACKAGES_DATA[normalized]) {
    return PACKAGES_DATA[normalized];
  }
  // Generic fallback using ielts-academic template
  return PACKAGES_DATA["ielts-academic"];
}
