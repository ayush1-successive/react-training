// Task-4

import { useState } from "react";

const RandomNumberGeneratorComponent = () => {
  const buttonStyle = {
    width: "auto",
    height: "auto",
    padding: "15px",
    fontSize: "20px",
  };

  const [value, updateValue] = useState(0);

  const genRandomNumber = () => Math.floor(1 + Math.random() * 99);

  return (
    <>
      <p>
        <h1>{value}</h1>
      </p>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => updateValue(genRandomNumber())}
      >
        Generator Random Number
      </button>
    </>
  );
};

export default RandomNumberGeneratorComponent;
