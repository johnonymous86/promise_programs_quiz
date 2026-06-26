"use client";

import { type ProgramKey } from "@/lib/data";

interface Props {
  onSelect: (prog: ProgramKey) => void;
}

const programs: { key: ProgramKey; name: string; subtitle: string }[] = [
  {
    key: "wytheBland",
    name: "Wythe-Bland",
    subtitle: "Foundation Scholarship",
  },
  {
    key: "twinCounty",
    name: "Twin County",
    subtitle: "Community Foundation Scholarship",
  },
  {
    key: "smythPromise",
    name: "Smyth County",
    subtitle: "Promise Scholarship",
  },
];

export default function ProgramSelection({ onSelect }: Props) {
  return (
    <div className="p-8 md:p-12 stagger-children">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/8 mb-5">
          <svg
            className="h-8 w-8 text-brand"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
          Volunteer Match Quiz
        </h2>
        <p className="text-slate-500 text-base md:text-lg font-medium max-w-md mx-auto leading-relaxed">
          Select your scholarship program to find approved volunteer agencies that fit your personality.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programs.map((prog) => (
          <button
            key={prog.key}
            onClick={() => onSelect(prog.key)}
            className="group relative p-6 border-2 border-slate-100 rounded-2xl text-left hover:border-brand/40 hover:bg-brand/[0.02] hover:shadow-lg hover:shadow-brand/8 transition-all duration-200 bg-white active:scale-[0.98]"
          >
            {/* Subtle gradient on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/[0.03] group-hover:to-transparent transition-all duration-200" />

            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-brand/8 flex items-center justify-center mb-4 group-hover:bg-brand/12 transition-colors">
                <div className="w-3 h-3 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-brand transition-colors">
                {prog.name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider group-hover:text-brand/60 transition-colors">
                {prog.subtitle}
              </p>
            </div>

            {/* Arrow */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200 group-hover:text-brand/40 transition-all duration-200 group-hover:translate-x-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
