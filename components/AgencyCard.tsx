"use client";

import { type Agency } from "@/lib/data";

interface Props {
  agency: Agency;
  highlight?: boolean;
}

export default function AgencyCard({ agency, highlight = false }: Props) {
  return (
    <div
      className={`p-6 rounded-2xl border-2 transition-all ${
        highlight
          ? "border-brand/15 bg-brand/[0.02]"
          : "border-slate-100 bg-white hover:border-brand/20 hover:shadow-sm"
      }`}
    >
      <h4 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
        {agency.name}
      </h4>
      <p className="text-slate-500 text-sm mb-5 leading-relaxed font-medium">
        {agency.desc}
      </p>

      <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-slate-100">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {agency.location}
        </div>

        {/* Phone */}
        <a
          href={`tel:${agency.contact}`}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {agency.contact}
        </a>

        {/* Email */}
        <a
          href={`mailto:${agency.email}?subject=Scholarship Volunteer Inquiry`}
          className="ml-auto flex items-center gap-1.5 text-xs font-bold text-brand bg-brand/8 hover:bg-brand/15 px-4 py-2 rounded-xl transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Agency
        </a>
      </div>
    </div>
  );
}
