import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevNumber) => Math.min(prevNumber + 1, 150));
  };

  const decrement = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, 0));
  };

  // Calculate the width of the progress bar based on the number
  const progressBarWidth = (number / 150) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          className="bg-green-400 h-6 transition-width duration-300 ease-in-out"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="text-4xl mb-4">{number}</div>
      <div>
        <button
          onClick={increment}
          className="mx-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="mx-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
