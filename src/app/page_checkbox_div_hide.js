"use client";

import { useState } from "react";

export default function Home() {
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    console.log("Checkbox clicked");
    setShowCard(e.target.checked);
  };

  return (
    <main>
      <div
        className={
          showCard
            ? "mb-8 border-4 border-amber-400 p-10 rounded-full transform scale-100 transition-transform duration-300 ease-in-out"
            : "transform scale-0 transition-transform duration-300 ease-in-out"
        }
      >
        <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
      </div>

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          className="checkbox checkbox-primary size-6"
          checked={showCard}
          onChange={handleChange}
        />

        Show Card
      </label>
    </main >
  );
}