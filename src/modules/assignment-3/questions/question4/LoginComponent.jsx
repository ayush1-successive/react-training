// Task-4

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginStyle = {
  border: "2px solid black",
  padding: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50%",
  width: "40%",
  margin: "50px auto",
};

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const correctUserName = "ayush";
  const correctPassword = "123456";

  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (correctUserName !== username || correctPassword !== password) {
      console.log("Invalid Credentials");
      return;
    }

    console.log("User Authenticated");
    navigate("../about", { state: { isAuthenticated: true } });
  };

  return (
    <>
      <div style={loginStyle}>
        <div style={{ fontSize: 40, fontWeight: "bold" }}>Login</div>
        <input
          className="button-style"
          type="text"
          placeholder="Your username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="button-style"
          type="text"
          placeholder="Your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="login-button"
          type="button"
          onClick={handleAuthentication}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginComponent;
