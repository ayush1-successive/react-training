import { useState, useEffect } from "react";
import "./ButtonStyle.css";

// Task-7
const NotificationComponent = () => {
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(0);

  useEffect(() => {
    if (messageState !== 0) setMessage("Notification Appeared for 5 seconds!");

    const timerID = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timerID);
  }, [messageState]);

  return (
    <>
      <p>
        <h2 style={{ color: "blue" }}>{message}</h2>
      </p>
      <button
        className="button-style"
        onClick={() => setMessageState(messageState + 1)}
      >
        Change State
      </button>
      <p>
        <h3>Message State : {messageState}</h3>
      </p>
    </>
  );
};

export default NotificationComponent;
