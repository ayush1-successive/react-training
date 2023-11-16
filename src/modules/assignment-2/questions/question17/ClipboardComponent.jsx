// Task-17

import { useState } from "react";
import "../../index.css";

const useClipboard = (text) => {
  const [success, setSuccess] = useState(false);

  const copyToClipboard = (text) => {
    if (text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return [success, copyToClipboard];
};

const ClipboardComponent = () => {
  const [message, setMessage] = useState("");
  const [copySuccess, copyToClipboard] = useClipboard("");

  return (
    <>
      <input
        className="button-style"
        type="text"
        placeholder="Enter message..."
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        className="button-style"
        type="button"
        onClick={() => copyToClipboard(message)}
      >
        Copy
      </button>
      {copySuccess && (
        <span>
          <h2>Message Copied!</h2>
        </span>
      )}
    </>
  );
};

export default ClipboardComponent;
