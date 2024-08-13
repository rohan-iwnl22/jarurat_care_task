import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([0]);
  const [future, setFuture] = useState([]);

  const increment = () => {
    const newNumber = Math.min(number + 2, 150);
    setNumber(newNumber);
    setHistory((prev) => [...prev, newNumber]);
    setFuture([]);
  };

  const decrement = () => {
    const newNumber = Math.max(number - 2, 0);
    setNumber(newNumber);
    setHistory((prev) => [...prev, newNumber]);
    setFuture([]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      const lastState = newHistory.pop();
      setFuture([number, ...future]);
      setNumber(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const newFuture = [...future];
      const newNumber = newFuture.shift();
      setHistory([...history, number]);
      setNumber(newNumber);
      setFuture(newFuture);
    }
  };

  const progressBarWidth = (number / 150) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full bg-gray-300 rounded-full overflow-hidden mb-4">
        <div
          className="bg-green-400 h-6 transition-all duration-300 ease-in-out"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="text-4xl mb-4">{number}</div>
      <div className="mb-4">
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
        <button
          onClick={undo}
          disabled={history.length <= 1}
          className="mx-2 px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 disabled:bg-gray-300"
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={future.length === 0}
          className="mx-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default App;
