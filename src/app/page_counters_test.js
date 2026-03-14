"use client";

import { useState } from "react";

export default function Home() {

  const [hideCounter, setHideCounter] = useState(false);
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <>
      <main>
        <input type="checkbox" className="size-4" checked={hideCounter} onChange={(e) => setHideCounter(e.target.checked)} />
        {
          arr.map((item) => (
            <Counter key={item} show={hideCounter} />
          ))
        }
      </main >
      <footer className="bg-gray-800 text-white text-center py-3 mt-auto">
        © 2026 MyApp. All rights reserved.
      </footer>
    </>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0);

  if (props.show === false) {
    return null;
  }

  return (
    <>
      <div className="mb-2 border-1 flex justify-center items-center gap-10 text-gradient-pink p-1 rounded-full w-200">
        <h1 className="text-4xl text-gradient-purple">Count: {count}</h1>
        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
      </div>

    </>
  );
} 