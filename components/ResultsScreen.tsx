"use client";

import {
  type ProgramData,
  type PersonalityKey,
  type PersonalityDetail,
} from "@/lib/data";
import AgencyCard from "./AgencyCard";

interface Props {
  program: ProgramData;
  primary: PersonalityKey;
  secondary: PersonalityKey | null;
  personalityDetails: Record<PersonalityKey, PersonalityDetail>;
  onRetake: () => void;
  onReset: () => void;
}

export default function ResultsScreen({
  program,
  primary,
  secondary,
  personalityDetails,
  onRetake,
  onReset,
}: Props) {
  const details = personalityDetails[primary];
  const primaryAgencies = program.matches[primary];
  const secondaryAgencies = secondary
    ? program.matches[secondary].slice(0, 2)
    : [];
  const secondaryDetails = secondary ? personalityDetails[secondary] : null;

  return (
    <div className="p-8 md:p-12 overflow-y-auto max-h-[85vh] stagger-children">
      {/* Result hero */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">{details.icon}</div>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/8 border border-brand/15 rounded-full mb-4">
          <span className="text-brand font-bold text-xs uppercase tracking-[0.15em]">
            Your Match
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          {details.title}
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          {details.desc}
        </p>
      </div>

      {/* Primary matches */}
      <div className="mb-8">
        <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-brand/10 flex items-center justify-center text-xs text-brand font-black">✦</span>
          We Think You&apos;ll Like These Agencies
        </h3>
        <div className="space-y-4">
          {primaryAgencies.map((agency) => (
            <AgencyCard key={agency.name} agency={agency} highlight />
          ))}
        </div>
      </div>

      {/* Secondary matches */}
      {secondary && secondaryDetails && secondaryAgencies.length > 0 && (
        <div className="mb-8 pt-8 border-t border-slate-100">
          <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
            <span>◈</span>
            <span>Also a Great Fit: {secondaryDetails.title}</span>
          </h3>
          <p className="text-slate-500 mb-5 text-sm font-medium">
            Since you also leaned toward the {secondaryDetails.title} type, you might enjoy these as well.
          </p>
          <div className="space-y-4">
            {secondaryAgencies.map((agency) => (
              <AgencyCard key={agency.name} agency={agency} />
            ))}
          </div>
        </div>
      )}

      {/* Full list link */}
      <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-center border border-slate-100">
        <p className="text-sm text-slate-600 font-medium mb-3">
          Looking for the complete list of approved opportunities?
        </p>
        <a
          href={program.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand font-bold hover:underline text-sm"
        >
          View Official Approved Agency List
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={onReset}
          className="text-slate-400 font-bold hover:text-brand transition-colors text-xs uppercase tracking-widest"
        >
          ← Back to Start
        </button>
        <button
          onClick={onRetake}
          className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/20 active:scale-[0.98]"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
