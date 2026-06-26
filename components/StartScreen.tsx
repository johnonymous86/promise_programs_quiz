"use client";

import { type ProgramData } from "@/lib/data";

interface Props {
  program: ProgramData;
  onStart: () => void;
  onShowMajors: () => void;
  onReset: () => void;
}

export default function StartScreen({
  program,
  onStart,
  onShowMajors,
  onReset,
}: Props) {
  return (
    <div className="p-8 md:p-12 text-center stagger-children">
      {/* Program badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/8 border border-brand/15 rounded-full mb-8">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
        <span className="text-brand font-bold text-xs uppercase tracking-[0.15em]">
          {program.name}
        </span>
      </div>

      {/* Headline */}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
        Find Your
        <span className="block text-brand italic">Perfect Match</span>
      </h2>

      <p className="text-slate-500 mb-10 text-base md:text-lg leading-relaxed max-w-md mx-auto font-medium">
        Answer 5 quick questions and we&apos;ll match you with volunteer agencies that fit your strengths and interests.
      </p>

      {/* Stats row */}
      <div className="flex items-center justify-center gap-8 mb-10 py-5 border-y border-slate-100">
        <div className="text-center">
          <div className="font-display text-3xl font-bold text-slate-900">5</div>
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Questions</div>
        </div>
        <div className="w-px h-10 bg-slate-100" />
        <div className="text-center">
          <div className="font-display text-3xl font-bold text-slate-900">~2</div>
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Minutes</div>
        </div>
        <div className="w-px h-10 bg-slate-100" />
        <div className="text-center">
          <div className="font-display text-3xl font-bold text-slate-900">5</div>
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Personality Types</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/25 active:scale-[0.98]"
        >
          Start Personality Match
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button
          onClick={onShowMajors}
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-4 px-8 rounded-2xl border-2 border-slate-100 hover:border-slate-200 transition-all duration-200 active:scale-[0.98]"
        >
          <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Agencies for my Major
        </button>
      </div>

      <button
        onClick={onReset}
        className="text-xs text-slate-400 font-bold hover:text-brand transition-colors uppercase tracking-widest"
      >
        ← Switch Programs
      </button>
    </div>
  );
}
