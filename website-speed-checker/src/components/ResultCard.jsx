import React from "react";

export default function ResultCard({ title, value }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-xl font-bold text-green-400">{value}</p>
    </div>
  );
}
