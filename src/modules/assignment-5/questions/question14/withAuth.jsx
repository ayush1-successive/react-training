import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  return () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const correctUsername = "admin";
    const correctPassword = "123456";

    const handleAuthentication = () => {
      if (name !== correctUsername || password !== correctPassword) return;

      console.log("User authenticated!");
      setAuthenticated(true);
    };

    return isAuthenticated ? (
      <WrappedComponent />
    ) : (
      <div>
        <h3>Please enter your credentials to authenticate:</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAuthentication}>Authenticate</button>
      </div>
    );
  };
};

export default withAuth;
