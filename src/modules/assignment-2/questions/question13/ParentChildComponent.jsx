// Task-13

import { useCallback, useState } from "react";
import "../../index.css";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount(count + 1), [count]);

  return (
    <ChildComponent
      count={count}
      setCount={setCount}
      handleIncrement={handleIncrement}
    />
  );
};

const ChildComponent = ({ count, setCount, handleIncrement }) => {
  const reset = () => setCount(0);

  return (
    <>
      <h2>{count}</h2>
      <button className="button-style" onClick={handleIncrement}>
        Increment
      </button>
      <button className="button-style" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default ParentComponent;
