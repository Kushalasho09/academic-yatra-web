import React from "react";
import { Metadata } from "next";
import LegalPageShell, { LegalTocItem } from "@/components/legal/LegalPageShell";
import {
  FileText,
  Sparkles,
  UserX,
  AlertCircle,
  HelpCircle,
  Scale,
  ShieldAlert,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Academic Yatra",
  description:
    "Review the Terms and Conditions governing access to Academic Yatra's digital preparatory ecosystem, courses, trials, and services.",
};

const TOC_ITEMS: LegalTocItem[] = [
  { id: "sec-intro", number: "I.", label: "Introduction & Acceptance of Terms" },
  { id: "sec-services", number: "II.", label: "Description of Services & 5-Day Free Trial" },
  { id: "sec-accounts", number: "III.", label: "User Accounts, Eligibility & Integrity" },
  { id: "sec-ip", number: "IV.", label: "Acceptable Use & Intellectual Property" },
  { id: "sec-financial", number: "V.", label: "Financial Terms & Refund Framework" },
  { id: "sec-continuity", number: "VI.", label: "Operational Continuity & Modifications" },
  { id: "sec-disclaimers", number: "VII.", label: "Disclaimers of Warranties" },
  { id: "sec-liability", number: "VIII.", label: "Limitation of Liability" },
  { id: "sec-third-party", number: "IX.", label: "Third-Party Integrations & Communication" },
  { id: "sec-legal", number: "X.", label: "Legal Compliance & Jurisdiction" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      title="Terms and Conditions"
      subtitle="Legally binding contract between users and Future Yatra Pvt. Ltd. governing access to Academic Yatra's educational services."
      effectiveDate="June 19, 2026"
      badgeText="Binding User Contract"
      tocItems={TOC_ITEMS}
    >
      {/* Section I */}
      <section id="sec-intro" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            I
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            I. Introduction & Acceptance of Terms
          </h2>
        </div>

        <div className="space-y-3 text-sm">
          <p>
            <strong className="text-slate-900">1.1 Binding Agreement.</strong> These Terms and Conditions constitute a legally binding contract between you (“User”, “Student”) and <strong className="text-slate-900">Future Yatra Pvt. Ltd.</strong> operating through its educational vertical, <strong className="text-slate-900">Academic Yatra</strong>. This Agreement governs your access to and use of <a href="https://academicyatra.com" className="text-[#0C9253] font-semibold underline underline-offset-2">academicyatra.com</a> and all associated digital resources, live classes, mock tests, and consultations (collectively, the “Platform” or “Services”).
          </p>
          <p>
            <strong className="text-slate-900">1.2 Acceptance.</strong> By accessing the Platform, registering an account, enrolling in any program, or utilizing our Services, you signify your unconditional acceptance of these Terms. If you do not agree to be legally bound by this Agreement in its entirety, you must immediately cease all use of the Platform. Academic Yatra is committed to a structured learning environment, and these Terms are designed to ensure operational security and legal clarity for all parties.
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section II */}
      <section id="sec-services" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            II
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            II. Description of Services & Platform Role
          </h2>
        </div>

        <div className="space-y-4 text-sm">
          <p>
            <strong className="text-slate-900">2.1 Overview of Services.</strong> Academic Yatra provides a digital preparatory ecosystem focusing on test preparation programs, language learning, skill development training, live and recorded learning sessions, and structured mock tests. The Platform acts as a preparatory conduit to support students aiming for study abroad, global education, and international career opportunities.
          </p>

          {/* 5-Day Free Trial Policy Callout */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5">
            <div className="flex items-center gap-2 text-[#0C9253] font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>2.2 5-Day Free Trial Policy (Evaluation License)</span>
            </div>
            <p className="text-slate-700">
              To ensure complete transparency, Academic Yatra may grant eligible Users a limited, revocable 5-day free trial for selected programs.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-4 list-disc">
              <li>
                <strong>Inclusions:</strong> Five (5) consecutive days of free access to selected learning resources and platform features with no credit card required.
              </li>
              <li>
                <strong>Strict Limitations:</strong> This trial is strictly limited to a single, one-time use per individual. Trial access is non-transferable and cannot be extended or reused.
              </li>
              <li>
                <strong>Prohibited Manipulation:</strong> The creation of multiple accounts or the use of synthetic/fake identities to exploit the trial period is strictly prohibited and will result in immediate IP bans. Users are strongly encouraged to utilize this period to evaluate the teaching methodology before committing to a paid enrollment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section III */}
      <section id="sec-accounts" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            III
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            III. User Accounts, Eligibility & Integrity
          </h2>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-slate-900 block mb-1">3.1 Eligibility Requirements</strong>
            <p className="text-slate-600">
              By using the Services, you warrant and confirm that: (i) you are legally capable of entering into a binding contract; (ii) you are at least 18 years of age — if you are under 18, you may use the Services only through, and under the supervision of, a parent or lawful guardian who agrees to these Terms on your behalf and remains responsible for your account; and (iii) all information provided during registration is accurate, truthful, and up to date.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">3.2 Account Security & Responsibility</strong>
            <p className="text-slate-600">
              Users are solely and entirely responsible for maintaining the strict confidentiality of their account credentials. You are legally liable for all activities conducted through your account. Any unauthorized access or suspicious activity must be reported to Academic Yatra immediately.
            </p>
          </div>

          {/* Anti-Account Sharing Callout */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70">
            <h3 className="font-bold text-amber-950 mb-1 flex items-center gap-2">
              <UserX className="w-4 h-4 text-amber-600" />
              3.3 Strict Anti-Account Sharing Policy
            </h3>
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed mb-2">
              Course access is licensed exclusively for individual, personal use. Account sharing is strictly prohibited. If Academic Yatra’s security systems detect the unauthorized sharing of login credentials, course materials, recordings, or platform access, we reserve the absolute right to:
            </p>
            <ul className="text-xs sm:text-sm text-amber-900 space-y-1 list-disc pl-5">
              <li>Immediately suspend or terminate access without prior notice.</li>
              <li>Permanently ban the User’s account and restrict future enrollments.</li>
              <li>Deny any refunds, compensation, or credit balances.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section IV */}
      <section id="sec-ip" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            IV
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            IV. Acceptable Use & Intellectual Property
          </h2>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-slate-900 block mb-1">4.1 Intellectual Property Rights</strong>
            <p className="text-slate-600">
              All content hosted on Academic Yatra—including but not limited to live video feeds, recorded sessions, study materials, mock tests, proprietary resources, and platform infrastructure—is the exclusive intellectual property of Future Yatra Pvt. Ltd., protected under applicable copyright and trademark laws. Access to this content is personal and non-transferable.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">4.2 Prohibited Activities</strong>
            <p className="text-slate-600 mb-2">
              Users are expressly prohibited from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Copying, downloading, reproducing, distributing, or publicly sharing any platform content.</li>
              <li>Recording live sessions without explicit written corporate permission.</li>
              <li>Using platform content for any commercial purpose or reselling resources.</li>
              <li>Using fake identities, submitting misleading information, or attempting unauthorized access to backend systems.</li>
              <li>Disrupting live classes, harassing trainers, or uploading harmful, abusive, or illegal content.</li>
            </ul>
            <p className="text-xs text-rose-700 font-semibold mt-2">
              Violation of these policies will result in immediate termination without refund and potential legal prosecution.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section V */}
      <section id="sec-financial" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            V
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            V. Financial Terms & Refund Framework
          </h2>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <strong className="text-slate-900 block mb-1">5.1 Payments & Pricing</strong>
            <p className="text-slate-600">
              All prices displayed on the Platform are exclusive of applicable statutory taxes unless explicitly stated otherwise. Goods and Services Tax (GST) and other applicable regulatory charges will be calculated and added during the secure checkout process. Users are entirely responsible for reviewing pricing and tax details prior to executing a transaction. Valid tax invoices will be issued for all completed purchases.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">5.2 Strict No-Refund Policy</strong>
            <p className="text-slate-600 leading-relaxed mb-2">
              Academic Yatra operates under a strict No Refund Policy for all digital educational services. Once a payment is successfully processed and access to the digital course or service is deployed, the transaction is considered absolute, final, and non-refundable. Specifically, refunds will NOT be entertained for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Change of mind or personal scheduling issues.</li>
              <li>Lack of usage or partial course completion.</li>
              <li>Subjective dissatisfaction after access has been granted.</li>
            </ul>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">5.3 Hedged Exceptions</strong>
            <p className="text-slate-600 mb-2">
              Refund requests will only be evaluated, strictly on a case-by-case basis, under the following verified circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Duplicate financial deductions for a single transaction.</li>
              <li>Payment successfully deducted, but core service access is not activated by our systems.</li>
              <li>A verified, unresolved internal technical failure rendering the platform completely inaccessible.</li>
              <li>
                <strong>Service/Trainer Non-Delivery:</strong> If, following a paid enrollment, Academic Yatra fails to deliver scheduled classes or the assigned trainer for 7 (seven) consecutive days for reasons attributable solely to Academic Yatra, the User may request a pro-rata refund for the undelivered portion of the program.
              </li>
            </ul>
            <p className="text-xs text-slate-500 italic mt-2">
              All exceptions remain at the absolute, sole discretion of Academic Yatra. Submission of a request does not constitute a guarantee of a refund.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section VI */}
      <section id="sec-continuity" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            VI
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            VI. Operational Continuity & Modifications
          </h2>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-slate-900 block mb-1">6.1 Platform Access & Technical Limitations</strong>
            <p className="text-slate-600">
              While Academic Yatra strives to maintain stable and uninterrupted learning services, 100% continuous availability cannot be guaranteed. In the event of internal technical downtime, we may, at our discretion, provide recorded substitute sessions or reschedule affected classes. Academic Yatra explicitly disclaims responsibility for internet disruptions, device incompatibilities, or external ISP failures beyond its direct control.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">6.2 Scheduling Authority</strong>
            <p className="text-slate-600">
              Academic Yatra reserves the absolute right to modify learning schedules, reschedule classes, update program structures, alter session timings, or replace designated trainers where operationally necessary. Reasonable efforts will be made to notify enrolled students in advance.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section VII */}
      <section id="sec-disclaimers" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            VII
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            VII. Disclaimers of Warranties
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2 text-sm">
          <strong className="text-slate-900 block">7.1 “As Is” Basis & No Guarantee of Outcomes</strong>
          <p className="text-slate-600">
            The Platform and all educational services are provided on an “AS IS” and “AS AVAILABLE” basis. Academic Yatra acts solely as a preparatory facilitator. We expressly disclaim any and all guarantees regarding specific outcomes.
          </p>
          <p className="text-slate-700 font-medium">
            User acknowledges that Academic Yatra does not and cannot guarantee:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
            <li>Achievement of specific exam scores or percentiles.</li>
            <li>Admission to any domestic or international institution.</li>
            <li>Successful job placements or employment outcomes.</li>
          </ul>
          <p className="text-xs text-slate-500 italic pt-1">
            Student results are dependent on autonomous factors including preparation level, consistency, academic background, and external third-party evaluation systems. Past performance or testimonials do not constitute a guarantee of future results.
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section VIII */}
      <section id="sec-liability" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            VIII
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            VIII. Limitation of Liability
          </h2>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <p>
            To the maximum extent permitted by applicable law, Academic Yatra and Future Yatra Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential losses arising from the use of the Platform. This includes, but is not limited to, admission rejections, loss of opportunity, revenue, or data, and third-party platform failures.
          </p>
          <p className="p-3.5 rounded-lg bg-slate-100 font-semibold text-slate-800 text-xs sm:text-sm">
            In all events, the total cumulative liability of Academic Yatra for any verified claim shall be strictly limited to and capped at the exact financial amount paid directly by the User for the applicable disputed service.
          </p>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section IX */}
      <section id="sec-third-party" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            IX
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            IX. Third-Party Integrations & Communication
          </h2>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <div>
            <strong className="text-slate-900 block mb-1">9.1 Third-Party Services</strong>
            <p>
              The Platform integrates with third-party tools, including payment gateways, cloud hosting providers, CRM systems, and analytics technical integrations. Users acknowledge that they are also subject to the independent terms and policies of these third-party providers while utilizing connected services.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">9.2 Communication Consent</strong>
            <p className="leading-relaxed">
              By registering on the Platform or utilizing our Services, you consent to receive service-related communications from Academic Yatra via <strong>Phone Calls, WhatsApp, SMS, and Email</strong> — including academic updates, service notifications, secure dashboard credentials, and student support — as these are essential to delivering the Services you have requested. Promotional and marketing communications are sent only where you have separately opted in, and you may withdraw consent for such promotional communications at any time using the opt-out mechanisms provided within the messages or by contacting our Grievance Officer. Where applicable telecom regulations (including the TRAI commercial-communication framework and Do Not Disturb / DND preferences) apply, we will honour your registered DND and promotional-communication preferences.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section X */}
      <section id="sec-legal" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            X
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            X. Legal Compliance & Miscellaneous
          </h2>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <div>
            <strong className="text-slate-900 block mb-1">10.1 Privacy & Data Usage</strong>
            <p>
              The collection, storage, and processing of User data—including for operational, educational, and communication purposes—are strictly governed by the Academic Yatra Privacy Policy, which is incorporated herein by reference.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">10.2 Modifications to Terms</strong>
            <p>
              Academic Yatra reserves the right, at its sole discretion, to update, modify, or replace these Terms & Conditions at any time without prior individual notice. Continued use of the Platform following the publication of any updates shall constitute your legally binding acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <strong className="text-slate-900 block mb-1">10.3 Governing Law & Exclusive Jurisdiction</strong>
            <p>
              This Agreement shall be governed by, and interpreted entirely in accordance with, the laws of the Republic of India. Any legal disputes, claims, or proceedings arising out of or directly relating to these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900">Delhi, India</strong>.
            </p>
          </div>
        </div>
      </section>
    </LegalPageShell>
  );
}
