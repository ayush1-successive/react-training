import { useState } from "react";
import "./Styles.css";

const Task8 = () => {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);

  const handleUserTemp = (e) => {
    const { id, value } = e.target;

    if (id === "celsius") {
      setTempC(value);
      setTempF((value * 9) / 5 + 32);
    } else {
      setTempC(((value - 32) * 5) / 9);
      setTempF(value);
    }
  };

  return (
    <>
      <h2>TEMPERATURE CONVERTER</h2>

      <input
        type="text"
        value={tempC}
        id="celsius"
        placeholder="Celsius"
        onChange={handleUserTemp}
      />

      <input
        type="text"
        value={tempF}
        placeholder="fahrenheit"
        id="fahrenheit"
        onChange={handleUserTemp}
      />
    </>
  );
};

export default Task8;
