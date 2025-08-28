import React from "react";

export default function ScoreGauge({ score }) {
  const color =
    score >= 90 ? "text-green-400" : score >= 50 ? "text-yellow-400" : "text-red-400";

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Performance Score</h2>
      <p className={`text-5xl font-bold ${color}`}>{score}</p>
      <span className="mt-2 text-sm">out of 100</span>
    </div>
  );
}
