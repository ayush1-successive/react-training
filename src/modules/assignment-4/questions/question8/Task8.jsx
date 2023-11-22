import { useState } from "react";
import "../Styles.css";

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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={tempC}
            id="celsius"
            placeholder="Celsius"
            onChange={handleUserTemp}
          />
          <h2 style={{ width: 200 }}>Degree Celsius</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={tempF}
            placeholder="fahrenheit"
            id="fahrenheit"
            onChange={handleUserTemp}
          />
          <h2 style={{ width: 200 }}>Fahrenheit</h2>
        </div>
      </div>
    </>
  );
};

export default Task8;
