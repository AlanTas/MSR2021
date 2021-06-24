import React, { useState } from "react";

export default function App() {
  const data = ["q", "c", "s", "a"];

  const [iterator, setIterator] = useState(0);
  const [curr, setCurr] = useState(data[iterator]);

  const fetchNext = () => {
    if (iterator === data.length - 1) {
      return;
    }
    setIterator((prev) => prev + 1);
    setCurr(data[iterator + 1]);
  };

  const fetchPrevious = () => {
    if (iterator === 0) {
      return;
    }
    setIterator((prev) => prev - 1);
    setCurr(data[iterator - 1]);
  };

  const nextDisabled = iterator >= data.length - 1;
  const prevDisabled = iterator <= 0;

  return (
    <div>
      <h1>{curr}</h1>
      <button disabled={nextDisabled} onClick={fetchNext}>
        next
      </button>
      <button disabled={prevDisabled} onClick={fetchPrevious}>
        previous
      </button>
    </div>
  );
}
