"use client";
import { useState } from "react";

export default function ThreeLevelSwitch() {
  const [active, setActive] = useState(1); // 1, 2, or 3

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-56 bg-gray-200 rounded-full p-2 justify-between">
        {[1, 2, 3].map((level) => (
          <button
            key={level}
            onClick={() => setActive(level)}
            className={`h-12 w-12 rounded-full transition-all duration-300 
              ${active === level 
                ? "bg-green-500 shadow-inner" 
                : "bg-gray-400 hover:bg-gray-500 shadow"} 
            `}
          >
            {/* Optional: add text or icon */}
          </button>
        ))}
      </div>
    </div>
  );
}