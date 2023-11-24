// Task-1

import { useContext, useEffect, useState } from "react";
import "../../index.css";
import {
  BUTTON_LOGIN,
  BUTTON_LOGOUT,
  STATE_LOGIN,
  STATE_LOGOUT,
} from "../../utils/constants";
import { AuthenticationContext } from "./ParentComponent";

const messageStyle = {
  padding: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  whiteSpace: "pre-wrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "15px auto",
  fontSize: 32,
  width: "20%",
};

const ChildComponent = () => {
  const { status, setStatus } = useContext(AuthenticationContext);

  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const [buttonMessage, setButtonMessage] = useState(BUTTON_LOGOUT);

  const handleLogin = () => {
    if (status === STATE_LOGIN) {
      setStatus(STATE_LOGOUT);
      setUsername("");
    } else {
      if (username === "") return;
      setStatus(STATE_LOGIN);
    }
  };

  useEffect(() => {
    if (status === STATE_LOGIN) {
      setMessage("Welcome " + username);
      setButtonMessage(BUTTON_LOGOUT);
    } else {
      setMessage("Please log in");
      setButtonMessage(BUTTON_LOGIN);
    }
  }, [username, status]);

  return (
    <>
      <div style={messageStyle}>{message}</div>
      {status === STATE_LOGOUT && (
        <input
          className="button-style"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px auto",
          }}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      <button className="login-button" onClick={() => handleLogin()}>
        {buttonMessage}
      </button>
    </>
  );
};

export default ChildComponent;
