import { useState } from "react";

// Task-4
const CounterComponent = () => {
  const buttonStyle = {
    width: "150px",
    height: "50px",
    fontSize: "20px",
  };

  const [value, updateValue] = useState(0);

  return (
    <>
      <h1>{value}</h1> <br />
      <button
        style={buttonStyle}
        type="button"
        onClick={() => updateValue(value + 1)}
      >
        increment
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => updateValue(value - 1)}
      >
        decrement
      </button>
    </>
  );
};

export default CounterComponent;
