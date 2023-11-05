import { useEffect, useState } from "react";
import "./Styles.css";

const Component1 = () => {
  return <h2>This is first component</h2>;
};

const Component2 = () => {
  return <h2>This is second component</h2>;
};

const Task3 = () => {
  const [text, setText] = useState("");
  const [command, setCommand] = useState({});

  const handleSubmit = () => {
    setCommand(text);
  };

  useEffect(() => {
    if (command === "") return;
  }, [command]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter command"
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>

      <div>
        {command === "show1" && (
          <span>
            <Component1 />
          </span>
        )}

        {command === "show2" && (
          <span>
            <Component2 />
          </span>
        )}
      </div>
    </>
  );
};

export default Task3;
