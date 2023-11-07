// Task-1

import { useState } from "react";
import "../../index.css";

const CounterComponent = () => {
  const [value, updateValue] = useState(0);

  return (
    <>
      <p>
        <h1>{value}</h1>
      </p>

      <button
        className="button-style"
        type="button"
        onClick={() => updateValue(value + 1)}
      >
        increment
      </button>

      <button
        className="button-style"
        type="button"
        onClick={() => updateValue(value - 1)}
      >
        decrement
      </button>
    </>
  );
};

export default CounterComponent;
