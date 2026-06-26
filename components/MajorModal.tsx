"use client";

import { useEffect } from "react";
import { type MajorAgency } from "@/lib/data";

interface Props {
  agencies: MajorAgency[];
  onClose: () => void;
}

export default function MajorModal({ agencies, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col animate-fade-up">
        {/* Header */}
        <div className="p-7 border-b bg-slate-50/80 flex justify-between items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">
              Program Requirements
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Agencies that prefer specific majors or degree tracks
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-brand p-2 bg-white rounded-xl shadow-sm border border-slate-100 transition-colors flex-shrink-0 ml-4"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-7 space-y-5 overflow-y-auto">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h3 className="font-bold text-slate-900 text-base">
                  {agency.name}
                </h3>
                <span className="text-xs font-bold text-brand bg-brand/8 px-3 py-1 rounded-full tracking-wider uppercase">
                  Degree-Specific
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-5 font-medium leading-relaxed">
                {agency.desc}
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {agency.location}
                </div>

                <a
                  href={`tel:${agency.contact}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {agency.contact}
                </a>

                <a
                  href={`mailto:${agency.email}?subject=Volunteer Opportunity Inquiry`}
                  className="ml-auto flex items-center gap-1.5 text-xs font-bold text-brand bg-brand/8 hover:bg-brand/15 px-4 py-2 rounded-xl transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {agency.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
