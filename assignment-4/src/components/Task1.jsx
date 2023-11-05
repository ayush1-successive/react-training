import { useState } from "react";
import "./Styles.css";

const Task1 = () => {
  const [text, setText] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  const handleReset = () => {
    setSubmitClicked(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(event) => setText(event.target.value)}
      />
      <div className="inline">
        <button onClick={() => handleSubmit()}>Submit</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>

      {submitClicked && <h2>{text}</h2>}
    </>
  );
};

export default Task1;
