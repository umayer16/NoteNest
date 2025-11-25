"use client";

import { useState } from "react";

export default function QuizPlayer({ quiz }: { quiz: any }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const question = quiz.mcqs[current];

  const handleAnswer = () => {
    if (selected === question.correct) setScore(score + 1);
    if (current < quiz.mcqs.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <div className="glass p-10 max-w-2xl mx-auto">
      <div className="flex justify-between mb-8">
        <span className="text-2xl font-bold">Question {current + 1}/{quiz.mcqs.length}</span>
        <span className="text-2xl">Score: {score}</span>
      </div>

      <h2 className="text-3xl font-bold mb-8">{question.question}</h2>

      <div className="grid gap-4">
        {question.options.map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`p-6 rounded-2xl text-left text-xl transition ${
              selected === i ? "bg-primary text-white" : "bg-white/50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleAnswer}
        disabled={selected === null}
        className="w-full mt-10 bg-green-600 text-white py-5 rounded-2xl text-xl font-bold disabled:opacity-50"
      >
        {current === quiz.mcqs.length - 1 ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}