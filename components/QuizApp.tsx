"use client";

import { useState } from "react";
import {
  scholarshipData,
  questions,
  personalityDetails,
  type ProgramKey,
  type PersonalityKey,
} from "@/lib/data";
import ProgramSelection from "./ProgramSelection";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
import ResultsScreen from "./ResultsScreen";
import MajorModal from "./MajorModal";

export type Screen = "selection" | "start" | "quiz" | "results";

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>("selection");
  const [selectedProgram, setSelectedProgram] = useState<ProgramKey | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityKey, number>>({
    A: 0, B: 0, C: 0, D: 0, E: 0,
  });
  const [showMajorModal, setShowMajorModal] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleSelectProgram = (prog: ProgramKey) => {
    setSelectedProgram(prog);
    setAnimKey((k) => k + 1);
    setScreen("start");
  };

  const handleStartQuiz = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setAnimKey((k) => k + 1);
    setScreen("quiz");
  };

  const handleAnswer = (letter: PersonalityKey) => {
    const newScores = { ...scores, [letter]: scores[letter] + 1 };
    setScores(newScores);
    if (currentQuestion + 1 < questions.length) {
      setAnimKey((k) => k + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setAnimKey((k) => k + 1);
      setScreen("results");
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setAnimKey((k) => k + 1);
    setScreen("quiz");
  };

  const handleReset = () => {
    setSelectedProgram(null);
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setAnimKey((k) => k + 1);
    setScreen("selection");
  };

  const getPrimaryAndSecondary = (): [PersonalityKey, PersonalityKey | null] => {
    const sorted = (Object.keys(scores) as PersonalityKey[])
      .map((k) => ({ letter: k, score: scores[k] }))
      .sort((a, b) => b.score - a.score);
    const primary = sorted[0].letter;
    const secondary = sorted[1].score > 0 ? sorted[1].letter : null;
    return [primary, secondary];
  };

  return (
    <>
      {/* Main Card */}
      <div className="w-full max-w-3xl glass-card rounded-[2rem] shadow-2xl shadow-brand/10 overflow-hidden border border-white/80">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

        <div key={animKey}>
          {screen === "selection" && (
            <ProgramSelection onSelect={handleSelectProgram} />
          )}
          {screen === "start" && selectedProgram && (
            <StartScreen
              program={scholarshipData[selectedProgram]}
              onStart={handleStartQuiz}
              onShowMajors={() => setShowMajorModal(true)}
              onReset={handleReset}
            />
          )}
          {screen === "quiz" && (
            <QuizScreen
              question={questions[currentQuestion]}
              questionIndex={currentQuestion}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}
          {screen === "results" && selectedProgram && (
            <ResultsScreen
              program={scholarshipData[selectedProgram]}
              primary={getPrimaryAndSecondary()[0]}
              secondary={getPrimaryAndSecondary()[1]}
              personalityDetails={personalityDetails}
              onRetake={handleRetake}
              onReset={handleReset}
            />
          )}
        </div>
      </div>

      {/* Major Modal */}
      {showMajorModal && selectedProgram && (
        <MajorModal
          agencies={scholarshipData[selectedProgram].majorAgencies}
          onClose={() => setShowMajorModal(false)}
        />
      )}
    </>
  );
}
