
"use client";import { useState } from "react";

export default function Switch({onChange = () => {}, checked = false}) {

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"  /* hides the native checkbox */
      />
      <div
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 
          ${checked ? "bg-green-500" : "bg-gray-400"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 
            ${checked ? "translate-x-6" : "translate-x-1"}`}
        />
      </div>
    </label>
  );
}