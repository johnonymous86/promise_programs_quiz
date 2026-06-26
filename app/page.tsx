import QuizApp from "@/components/QuizApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand/60 mb-2">
          Wytheville Community College
        </p>
        <h1 className="font-display text-2xl font-bold text-slate-800 tracking-tight">
          Promise Programs
        </h1>
      </div>

      {/* Quiz Card */}
      <QuizApp />

      {/* Footer */}
      <p className="mt-8 text-xs text-slate-400 font-medium text-center">
        Questions? Contact the Financial Aid Office at WCC.
      </p>
    </main>
  );
}
