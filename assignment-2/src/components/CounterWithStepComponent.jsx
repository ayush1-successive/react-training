import { useState } from "react";
import "./ButtonStyle.css";

// Task-5
const CounterWithStepComponent = () => {
  const [count, updateValue] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <h1>count = {count}</h1> <br />
      <input
        className="button-style"
        type="text"
        placeholder="Enter Step"
        onChange={(event) => setStep(Number(event.target.value))}
      />
      <button
        className="button-style"
        type="button"
        onClick={() => updateValue(count + step)}
      >
        increment
      </button>
      <button
        className="button-style"
        type="button"
        onClick={() => updateValue(count - step)}
      >
        decrement
      </button>
    </>
  );
};

export default CounterWithStepComponent;
