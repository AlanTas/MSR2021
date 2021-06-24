const SECOND_IN_MS = 1000;
const HOUR_IN_MS = 1000 * 60 * 60;

const addTime = (date, time) => new Date(date.getTime() + time);

const Clock = () => {
  const [timeDate, setTimeDate] = useState(addTime(new Date(), SECOND_IN_MS));

  const updateTimeInfo = (addedTime) => {
    setTimeDate((timeDate) => addTime(timeDate, addedTime));
    //other info omitted, won't affect the code
  };

  useEffect(() => {
    const tickClock = setInterval(() => {
      updateTimeInfo(SECOND_IN_MS);
    }, SECOND_IN_MS);

    return () => clearInterval(tickClock);
  }, []);

  return (
    <>
      <span>
        {timeDate.toLocaleTimeString([], {
          hour: "2-digit",
          hour12: true,
          minute: "2-digit",
          second: "2-digit"
        })}
      </span>
      <button type="button" onClick={() => updateTimeInfo(HOUR_IN_MS)}>
        +1 hour
      </button>
      <button type="button" onClick={() => updateTimeInfo(-HOUR_IN_MS)}>
        -1 hour
      </button>
    </>
  );
};
