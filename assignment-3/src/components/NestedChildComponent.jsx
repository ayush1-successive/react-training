// Task-2

import { useContext, useEffect, useState } from "react";
import {
  AuthenticationContext,
  PreferenceContext,
} from "./NestedParentComponent";

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
  const { status, handleLogin, user } = useContext(AuthenticationContext);
  const { theme, handleTheme } = useContext(PreferenceContext);

  const [message, setMessage] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Login");

  useEffect(() => {
    if (status === "Logged in") {
      setMessage("Welcome " + user);
      setButtonMessage("Logout");
    } else {
      setMessage("Please log in");
      setButtonMessage("Login");
    }
  }, [user, status]);

  return (
    <>
      <div style={themeStyle[theme]}>{message}</div>
      <button className="login-button" onClick={() => handleLogin()}>
        {buttonMessage}
      </button>
      <button
        className="button-style"
        style={{ fontSize: 16 }}
        onClick={() => handleTheme()}
      >
        Change Theme
      </button>
    </>
  );
};

export default NestedChildComponent;
