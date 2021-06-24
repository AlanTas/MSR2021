import React, { useState } from "react";
import "./styles.css";

export default function App() {
   const [visibleMonth, setVisibleMonth] = useState(new Date().getMonth());
  //  const [countTwo, setCountTwo] = useState(1);
  const [dates, setDates] = useState(null);

  const getDaysArray = async (s, e) => {
    let a = [];
    for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
      a.push(new Date(d).toString());
    }

    return a;
  };

  const prevMonth = async () => {
    let d = new Date();
    d.setMonth(visibleMonth - 1);
    setVisibleMonth((state) => visibleMonth - 1);
    let firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    let lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);
    const dates = await getDaysArray(firstDay, lastDay);
    setDates(dates);
  };

  const nextMonth = async () => {
    let d = new Date();
    d.setMonth(visibleMonth + 1);
    setVisibleMonth((state) => visibleMonth + 1);

    let firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    let lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);

    const dates = await getDaysArray(firstDay, lastDay);
    setDates(dates);
  };

  return (
    <div className="App">
      <button onClick={prevMonth}>Prev Month</button>
      <button onClick={nextMonth}>Next Month</button>
      {dates &&
        dates.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
    </div>
  );
}
