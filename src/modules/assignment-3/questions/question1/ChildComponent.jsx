// Task-1

import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "./ParentComponent";
import "../../index.css";

const messageStyle = {
  padding: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  whiteSpace: "pre-wrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  fontSize: 32,
  width: "20%",
};

const ChildComponent = () => {
  const { status, handleLogin, user } = useContext(AuthenticationContext);

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
      <div style={messageStyle}>{message}</div>
      <button className="login-button" onClick={() => handleLogin()}>
        {buttonMessage}
      </button>
    </>
  );
};

export default ChildComponent;
