// Task-4

import { createContext, useState } from "react";
import { About } from "../../../../components/About";

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

export const AuthenticationContext = createContext();

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);

  const correctUserName = "ayush";
  const correctPassword = "123456";

  const handleAuthentication = () => {
    if (correctUserName !== username || correctPassword !== password) {
      console.log("Invalid Credentials");
      setAuthenticated(false);
      return;
    }

    console.log("User Authenticated");
    setAuthenticated(true);
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
      {isAuthenticated && <About name={username} />}
    </>
  );
};

export default LoginComponent;
