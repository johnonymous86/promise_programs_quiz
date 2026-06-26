"use client";

import { type Question, type PersonalityKey } from "@/lib/data";

interface Props {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (letter: PersonalityKey) => void;
}

const LETTERS = ["A", "B", "C", "D", "E"];

export default function QuizScreen({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
}: Props) {
  const progress = (questionIndex / totalQuestions) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="h-1.5 w-full bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-brand to-brand-light progress-bar-fill transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-8 md:p-12">
        {/* Question counter */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-brand font-bold uppercase tracking-[0.15em] text-xs">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < questionIndex
                    ? "w-6 bg-brand"
                    : i === questionIndex
                    ? "w-6 bg-brand/40"
                    : "w-3 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question text */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-8">
          {question.text}
        </h2>

        {/* Options */}
        <div className="space-y-3 stagger-children">
          {question.options.map((opt, idx) => (
            <button
              key={opt.letter}
              onClick={() => onAnswer(opt.letter)}
              className="option-btn w-full text-left p-5 border-2 border-slate-100 rounded-2xl bg-white text-slate-700 font-semibold flex items-center gap-4 group"
            >
              <span className="flex-shrink-0 h-10 w-10 bg-slate-50 group-hover:bg-brand/8 rounded-xl flex items-center justify-center text-sm font-bold text-slate-400 group-hover:text-brand transition-all duration-150">
                {LETTERS[idx]}
              </span>
              <span className="text-slate-600 group-hover:text-slate-900 transition-colors text-sm md:text-base leading-snug">
                {opt.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
