import React from "react";
import { Metadata } from "next";
import LegalPageShell, { LegalTocItem } from "@/components/legal/LegalPageShell";
import {
  RefreshCcw,
  Sparkles,
  AlertOctagon,
  CheckCircle,
  ShieldAlert,
  Server,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Academic Yatra",
  description:
    "Understand Academic Yatra's strict No Refund Policy, the 5-Day Free Trial evaluation period, and verified failure exceptions.",
};

const TOC_ITEMS: LegalTocItem[] = [
  { id: "refund-intro", number: "I.", label: "Introduction" },
  { id: "refund-trial", number: "II.", label: "The Evaluation Mandate (5-Day Free Trial)" },
  { id: "refund-finality", number: "III.", label: "Finality of Purchase & No-Refund Policy" },
  { id: "refund-exceptions", number: "IV.", label: "Exceptions for Verified Failures" },
  { id: "refund-chargeback", number: "V.", label: "Anti-Chargeback Protection" },
  { id: "refund-third-party", number: "VI.", label: "Third-Party Financial Firewall" },
  { id: "refund-legal", number: "VII.", label: "Modifications & Exclusive Jurisdiction" },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageShell
      title="Refund & Cancellation Policy"
      subtitle="Financial terms governing course purchases, our upfront 5-day risk-free evaluation mandate, and verified exception criteria."
      effectiveDate="June 19, 2026"
      badgeText="Financial Terms"
      tocItems={TOC_ITEMS}
    >
      {/* Section I */}
      <section id="refund-intro" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            I
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            I. Introduction
          </h2>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          This policy governs all purchases, course enrollments, digital subscriptions, and consultation services executed through <a href="https://academicyatra.com" className="text-[#0C9253] font-semibold underline underline-offset-2">academicyatra.com</a>. By purchasing or accessing Academic Yatra (a vertical of <strong className="text-slate-900">Future Yatra Pvt. Ltd.</strong>), you acknowledge and explicitly agree to this strictly enforced financial framework.
        </p>
      </section>

      <hr className="border-slate-100" />

      {/* Section II */}
      <section id="refund-trial" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            II
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            II. The Evaluation Mandate (5-Day Free Trial)
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3 text-sm">
          <div className="flex items-center gap-2 text-[#0C9253] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Upfront Risk-Free Evaluation Period</span>
          </div>
          <p className="text-slate-700">
            To ensure complete transparency, we provide a <strong>5-Day Free Trial</strong> allowing users to fully evaluate our teaching methodology, platform experience, and learning resources prior to purchase.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
            <li>The trial is completely free and requires no credit/debit card details.</li>
            <li>Because this risk-free evaluation is provided upfront, users are expected to make a fully informed decision before committing to a paid program.</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section III */}
      <section id="refund-finality" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            III
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            III. Finality of Purchase & Strict No-Refund Policy
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-3 text-sm">
          <div className="flex items-center gap-2 text-rose-900 font-bold">
            <AlertOctagon className="w-4 h-4 text-rose-600" />
            <span>Immediate Digital Delivery & Strict Non-Refundability</span>
          </div>
          <p className="text-rose-950">
            Due to the immediate digital delivery of our educational content, all purchases are considered legally absolute and final once payment is completed and access is granted.
          </p>
          <p className="text-rose-900">
            Academic Yatra enforces a strict <strong>No Refund Policy</strong> across all offerings, including online courses, live classes, recorded sessions, and mentorship programs. Refunds will <strong>NOT</strong> be issued under any circumstances for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-rose-900 text-xs sm:text-sm">
            <li>Buyer’s remorse, change of mind, or shifts in academic/career plans.</li>
            <li>Lack of usage, partial course completion, or personal scheduling conflicts.</li>
            <li>Subjective dissatisfaction with the service after purchase.</li>
            <li>Failure to achieve expected exam scores, admissions, or career results.</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section IV */}
      <section id="refund-exceptions" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            IV
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            IV. Exceptions for Verified Failures
          </h2>
        </div>

        <p className="text-slate-700 text-sm">
          Refund applications will only be evaluated on a case-by-case basis under the following rare, verified circumstances:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Duplicate Deductions</strong>
            <span className="text-slate-600 text-xs">Duplicate financial deductions for the exact same transaction.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
            <strong className="text-slate-900 block mb-1">Activation Failure</strong>
            <span className="text-slate-600 text-xs">Payment was successfully deducted, but our systems failed to activate service access.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 sm:col-span-2">
            <strong className="text-slate-900 block mb-1">Unresolved Technical Failure</strong>
            <span className="text-slate-600 text-xs">A verified, unresolved internal technical failure on our platform rendering access completely impossible.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 sm:col-span-2">
            <strong className="text-slate-900 block mb-1">Service / Trainer Non-Delivery</strong>
            <span className="text-slate-600 text-xs">
              If, following a paid enrollment, Academic Yatra fails to deliver scheduled classes or the assigned trainer for <strong>7 (seven) consecutive days</strong> for reasons attributable solely to Academic Yatra, the User may request a pro-rata refund for the undelivered portion of the program.
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-100 text-slate-700 text-xs leading-relaxed">
          <strong>Processing Window:</strong> Approval of any exception remains at the sole discretion of Academic Yatra. Approved refunds require <strong>7–14 business days</strong> for processing. Routine technical issues will be addressed via technical support or rescheduled classes, and do not automatically qualify for a refund.
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section V */}
      <section id="refund-chargeback" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            V
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            V. Anti-Chargeback Protection
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-amber-950 font-bold">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Prohibition of Unjustified Disputes</span>
          </div>
          <p className="text-amber-900 text-xs sm:text-sm">
            Users explicitly agree not to initiate unjustified bank chargebacks or payment disputes after receiving access to digital services. If an unjustified chargeback is initiated, Academic Yatra reserves the absolute right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-amber-900 text-xs sm:text-sm">
            <li>Immediately suspend the user account and terminate service access.</li>
            <li>Restrict all future enrollments across all platforms.</li>
            <li>Recover dues through formal legal means if required.</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section VI */}
      <section id="refund-third-party" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            VI
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            VI. Third-Party Financial Firewall
          </h2>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Academic Yatra integrates with third-party payment gateways and hosting providers. We bear no responsibility for independent third-party refund policies, localized payment processing delays, or technical failures that occur outside our direct systemic control.
        </p>
      </section>

      <hr className="border-slate-100" />

      {/* Section VII */}
      <section id="refund-legal" className="scroll-mt-24 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0C9253] font-bold text-sm flex items-center justify-center shrink-0">
            VII
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            VII. Modifications & Exclusive Jurisdiction
          </h2>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <p>
            Academic Yatra reserves the unilateral right to update or modify this policy at any time without prior notice. Continued use of the platform constitutes your legally binding acceptance of the revised terms.
          </p>
          <p>
            This policy is governed by the laws of India. Any legal disputes or formal claims arising from platform transactions shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900">Delhi, India</strong>.
          </p>
        </div>
      </section>
    </LegalPageShell>
  );
}
