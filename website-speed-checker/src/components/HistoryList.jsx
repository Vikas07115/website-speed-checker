import React from "react";

export default function HistoryList({ history, onSelect }) {
  if (!history.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Recent Searches</h2>
      <ul className="space-y-2">
        {history.map((url, index) => (
          <li
            key={index}
            className="cursor-pointer bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
            onClick={() => onSelect(url)}
          >
            {url}
          </li>
        ))}
      </ul>
    </div>
  );
}
