// Task-2

import { useContext, useEffect, useState } from "react";
import {
  AuthenticationContext,
  PreferenceContext,
} from "./NestedParentComponent";
import {
  BUTTON_LOGIN,
  BUTTON_LOGOUT,
  STATE_LOGIN,
  STATE_LOGOUT,
  THEME_DARK,
  THEME_LIGHT,
} from "../../utils/constants";

const themeStyle = {
  light: {
    height: 400,
    width: 700,
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: "0 auto",
    border: "2px solid black",
  },
  dark: {
    height: 400,
    width: 700,
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    margin: "0 auto",
  },
};

const NestedChildComponent = () => {
  const { status, setStatus } = useContext(AuthenticationContext);
  const { theme, setTheme } = useContext(PreferenceContext);

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
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

  const handleTheme = () => {
    if (status === STATE_LOGOUT) return;
    if (theme === THEME_LIGHT) setTheme(THEME_DARK);
    else setTheme(THEME_LIGHT);
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
      <div style={themeStyle[theme]}>{message}</div>
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

      {status === STATE_LOGIN && (
        <button
          style={{
            fontSize: 22,
            padding: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px auto",
            width: "auto",
          }}
          onClick={() => handleTheme()}
        >
          Change Theme
        </button>
      )}
    </>
  );
};

export default NestedChildComponent;
