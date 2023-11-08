import React, { useState } from "react";
import axios from "axios";

const Task7 = () => {
  const textareaStyle = {
    height: 400,
    width: 700,
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
    backgroundColor: "#f4f4f4",
    color: "#333",
    borderRadius: "5px",
  };

  const [options, setOptions] = useState({
    method: "POST",
    url: "https://onecompiler-apis.p.rapidapi.com/api/v1/run",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a751c5151amshb89a31e7e7bdb07p141368jsnb8f10878d806",
      "X-RapidAPI-Host": "onecompiler-apis.p.rapidapi.com",
    },
    data: {
      language: "python",
      files: [
        {
          name: "index.py",
          content: "",
        },
      ],
    },
  });

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const fetchData = async () => {
    if (input === 0) {
      console.log("No code found!");
      return;
    }

    options.data.files[0].content = input;

    setOptions({ ...options });
    console.log(options);

    try {
      const response = await axios.request(options);
      console.log(response.data);

      if (response.status === "failed") {
        throw new Error(response.error);
      }

      if (response.data.stdout === null) setOutput("No response found!");
      else setOutput(response.data.stdout);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <textarea
          type="text"
          id="input-code"
          placeholder="Write your python code."
          style={textareaStyle}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        <button onClick={fetchData}> Compile </button>
      </div>

      {output.length > 0 && <h2>{output}</h2>}
    </>
  );
};

export default Task7;
