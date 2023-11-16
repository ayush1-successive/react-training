import { useState, useEffect } from "react";

// Task-6
const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p>
        <h2>Current time = {time.toLocaleString().split(",")[1]}</h2>
      </p>
    </>
  );
};

export default ClockComponent;
