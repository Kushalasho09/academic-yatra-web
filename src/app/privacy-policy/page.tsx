import React from "react";
import { Metadata } from "next";
import LegalPageShell, { LegalTocItem } from "@/components/legal/LegalPageShell";
import {
  Shield,
  Lock,
  UserCheck,
  Database,
  FileCheck,
  AlertTriangle,
  Scale,
  Baby,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Academic Yatra",
  description:
    "Learn how Academic Yatra collects, uses, protects, and handles your personal data in compliance with the IT Act 2000 and DPDP Act 2023.",
};

const TOC_ITEMS: LegalTocItem[] = [
  { id: "intro-consent", number: "1.", label: "Introduction & Consent" },
  { id: "info-collect", number: "2.", label: "What Information We Collect" },
  { id: "how-we-use", number: "3.", label: "How We Use Your Information" },
  { id: "how-we-share", number: "4.", label: "How We Share Your Information" },
  { id: "data-security", number: "5.", label: "Data Security, Storage & Transfer" },
  { id: "user-rights", number: "6.", label: "User Rights (Data Principal Rights)" },
  { id: "children-privacy", number: "7.", label: "Children’s Privacy" },
  { id: "legal-contact", number: "8.", label: "Policy Updates & Legal Jurisdiction" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="How Academic Yatra collects, utilizes, stores, and protects personal data in full compliance with Indian privacy laws and the DPDP Act, 2023."
      effectiveDate="June 19, 2026"
      badgeText="DPDP Act 2023 Compliant"
      tocItems={TOC_ITEMS}
    >
      {/* 1. Introduction & Consent */}
      <section id="intro-consent" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            1. Introduction & Consent
          </h2>
        </div>

        <p className="text-slate-700">
          Welcome to <strong className="text-slate-900">Academic Yatra</strong>, the dedicated online learning and professional test preparation vertical of <strong className="text-slate-900">Future Yatra Pvt. Ltd.</strong> This Privacy Policy explains how we collect, use, store, and protect your personal information when you access <a href="https://academicyatra.com" className="text-[#0C9253] font-semibold underline underline-offset-2">academicyatra.com</a> and our related educational services.
        </p>

        <p className="text-slate-700">
          Academic Yatra values transparency, responsible data handling, and user privacy. We are committed to protecting personal information in full compliance with applicable Indian privacy laws, including the <em>Information Technology Act, 2000</em>, the <em>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>, and the <em>Digital Personal Data Protection (DPDP) Act, 2023</em>, together with the <em>DPDP Rules, 2025</em>.
        </p>

        {/* Consent Box */}
        <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-5 sm:p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#0C9253] font-bold text-sm">
            <UserCheck className="w-4 h-4" />
            <span>Your Consent:</span>
          </div>
          <p className="text-slate-800 text-sm leading-relaxed">
            By using our website, enrolling in our programs, or accessing our digital learning platform, you explicitly agree to the practices described in this policy. Furthermore, by submitting your contact details, you provide explicit, affirmative consent for Academic Yatra to contact you via <strong>Phone Calls, WhatsApp, SMS, and Email</strong> for course updates, student support, administrative notifications, and promotional communication (which you retain the right to opt out of at any time).
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* 2. What Information We Collect */}
      <section id="info-collect" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            2. What Information We Collect
          </h2>
        </div>

        <p className="text-slate-700">
          To provide personalized learning experiences and targeted test preparation, we collect the following categories of data:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              Personally Identifiable Information (PII)
            </h3>
            <p className="text-sm text-slate-600">
              Full Name, Email Address, Phone/Mobile Number, Academic Background, and Course/Test Preferences (e.g., IELTS, PTE, CELPIP, TOEFL, Duolingo, SAT, GRE, GMAT). We also collect uploaded documents where legally or operationally required for enrollment verification.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              Financial Data
            </h3>
            <p className="text-sm text-slate-600">
              Payment Information (processed exclusively through secure, RBI-compliant third-party payment gateway providers).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              Technical & Automated Information
            </h3>
            <p className="text-sm text-slate-600">
              When you interact with our website and Learning Management System (LMS), we automatically collect your IP Address, Device and Browser Information, Session Durations, Pages Visited, and Interaction/Progression Tracking Analytics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C9253]" />
              Cookies & Tracking Technologies
            </h3>
            <p className="text-sm text-slate-600">
              We use cookies and similar technologies for platform optimization, performance monitoring, and (where applicable) analytics. Essential cookies required for core platform functionality are always active. Non-essential cookies are deployed only after you provide consent through our cookie consent banner, and you may withdraw or adjust your cookie preferences at any time through the banner or your browser settings. Disabling certain cookies may limit access to personalized features, such as your student dashboard.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* 3. How We Use Your Information */}
      <section id="how-we-use" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            3. How We Use Your Information
          </h2>
        </div>

        <p className="text-slate-700">
          As a <strong className="text-slate-900">Data Fiduciary</strong>, we process your personal data responsibly based on Contractual Necessity, Legal Obligations, and Legitimate Business Interests for the following specific purposes:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
          <li className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Service Delivery</strong>
            <span className="text-slate-600">Providing educational services, live online classes, managed learning programs, and processing registrations/secure payments.</span>
          </li>
          <li className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Platform Enhancement</strong>
            <span className="text-slate-600">Improving platform functionality, LMS deployment, and the overall digital learning experience.</span>
          </li>
          <li className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Communication</strong>
            <span className="text-slate-600">Sending academic updates, essential notifications, secure dashboard credentials, and providing technical support.</span>
          </li>
          <li className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Security & Compliance</strong>
            <span className="text-slate-600">Preventing misuse, fraud, cyber incidents, unauthorized platform activity, and complying with binding statutory requirements.</span>
          </li>
        </ul>
      </section>

      <hr className="border-slate-100" />

      {/* 4. How We Share Your Information */}
      <section id="how-we-share" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            4. How We Share Your Information
          </h2>
        </div>

        <p className="text-slate-700">
          Academic Yatra <strong className="text-slate-900">does not sell, rent, or trade personal information to third parties</strong>. We share necessary information strictly on a need-to-know basis with trusted, legally compliant third-party processors, including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-700">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C9253] shrink-0" />
            <span>RBI-compliant Payment Gateway Providers.</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C9253] shrink-0" />
            <span>CRM, LMS, and Marketing Automation Tool Providers.</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C9253] shrink-0" />
            <span>Secure Cloud Hosting and Technical Infrastructure Providers.</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0C9253] shrink-0" />
            <span>Authorized Trainers, Mentors, or Academic Partners (only where strictly required for course delivery).</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 italic mt-3 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
          <strong>Note:</strong> All third-party service providers are contractually bound to maintain appropriate confidentiality, data isolation, and robust security standards equivalent to those upheld by Future Yatra Pvt. Ltd.
        </p>
      </section>

      <hr className="border-slate-100" />

      {/* 5. Data Security, Storage, Retention & Transfer */}
      <section id="data-security" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            5. Data Security, Storage, Retention & Transfer
          </h2>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Security Safeguards</h3>
            <p className="text-slate-600">
              We implement reasonable technical and organizational measures—including encryption, secure protocols, access firewalls, and log retention—to protect your data. While we continuously upgrade our infrastructure, no online platform is absolutely secure; users share information at their own risk.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70">
            <h3 className="font-bold text-amber-950 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Breach Notification (72-Hour DPDP Protocol)
            </h3>
            <p className="text-amber-900 text-xs sm:text-sm">
              In accordance with the DPDP framework, in the unlikely event of a personal data breach, we will notify the Data Protection Board of India and affected Data Principals within <strong>72 hours</strong>, detailing the incident and protective measures.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-1">Data Retention</h3>
            <p className="text-slate-600">
              We retain personal and learning data only as long as necessary to fulfil the educational purpose for which it was collected. As a general rule, student account and learning-progress data is retained for up to <strong>2 (two) years</strong> after course completion or your last active engagement, after which it is securely deleted or anonymized. Financial and transaction records (such as invoices and payment records) are retained for up to <strong>8 (eight) years</strong> to comply with applicable Indian tax, accounting, and company-law obligations. Data may be retained longer only where required to resolve disputes or satisfy binding legal/regulatory mandates.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-1">International Transfers</h3>
            <p className="text-slate-600">
              While Future Yatra Pvt. Ltd. is headquartered in Delhi, India, user data may be securely transferred, managed, or stored on cloud servers outside India where our technical partners operate, strictly complying with cross-border provisions permitted under Indian law.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* 6. User Rights (Data Principal Rights) */}
      <section id="user-rights" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            6. User Rights (Data Principal Rights)
          </h2>
        </div>

        <p className="text-slate-700">
          In alignment with the <strong className="text-slate-900">DPDP Act, 2023</strong>, you hold the following statutory rights regarding your personal data:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-0.5">Right to Access</strong>
            <span className="text-slate-600 text-xs">Request a summary of the personal data currently being processed by us.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-0.5">Right to Correction</strong>
            <span className="text-slate-600 text-xs">Request the correction of inaccurate, outdated, or incomplete data.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-0.5">Right to Erasure</strong>
            <span className="text-slate-600 text-xs">Request the deletion of your personal data when it is no longer required.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-0.5">Right to Withdraw Consent</strong>
            <span className="text-slate-600 text-xs">Withdraw consent for data processing or specific communications.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 sm:col-span-2">
            <strong className="text-slate-900 block mb-0.5">Right to Nominate</strong>
            <span className="text-slate-600 text-xs">Nominate an individual to exercise these rights in the event of death or medical incapacity.</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 pt-1">
          To exercise any of these statutory rights, please contact our Grievance Officer detailed below.
        </p>
      </section>

      <hr className="border-slate-100" />

      {/* 7. Children's Privacy */}
      <section id="children-privacy" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            7. Children’s Privacy
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-3 text-sm text-slate-700">
          <div className="flex items-center gap-2 text-sky-900 font-bold">
            <Baby className="w-4 h-4 text-sky-600" />
            <span>Section 9 of the DPDP Act, 2023 Compliance</span>
          </div>
          <p>
            In strict compliance with Section 9 of the DPDP Act, 2023, Academic Yatra defines a <strong>“child”</strong> as any individual under the age of 18. Our Services are intended for users aged 18 years and above.
          </p>
          <p>
            We do not knowingly collect or process the personal data of any individual under the age of 18 who registers independently. A person under 18 may access our Services only when enrolled by a parent or lawful guardian, who must provide verifiable consent and accept the applicable terms on the child’s behalf and remains responsible for the account.
          </p>
          <p className="font-semibold text-slate-900">
            We strictly prohibit behavioral monitoring, tracking, student profiling, or targeted advertising directed at children under 18.
          </p>
          <p className="text-xs text-slate-500">
            If we detect that personal data has been provided by a minor without verifiable parental or guardian consent, we will take immediate steps to securely delete it.
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* 8. Policy Updates & Legal Jurisdiction */}
      <section id="legal-contact" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            8. Policy Updates, Legal & Contact Information
          </h2>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">Policy Updates</h3>
            <p className="text-slate-600">
              Academic Yatra reserves the right to amend this Privacy Policy at any time without prior individual notice to reflect evolving legal regulations. Updated versions will be published on this page, and the “Effective Date” will be revised.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-1">Legal Disclaimer & Exclusive Jurisdiction</h3>
            <p className="text-slate-600">
              This policy outlines our information handling practices and creates no additional contractual guarantees beyond those available under the statutory laws of the Republic of India. This policy shall be governed by Indian law. Any legal disputes or proceedings arising out of this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900">New Delhi, India</strong>.
            </p>
          </div>
        </div>
      </section>
    </LegalPageShell>
  );
}
