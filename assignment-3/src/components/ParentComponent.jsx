// Task-1

import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export const AuthenticationContext = createContext();

const ParentComponent = () => {
  const [status, setStatus] = useState("Logged out");

  const handleLogin = () => {
    if (status === "Logged in") setStatus("Please log in");
    else setStatus("Logged in");
  };

  return (
    <AuthenticationContext.Provider
      value={{ status, handleLogin, user: "Ayush" }}
    >
      <ChildComponent />
    </AuthenticationContext.Provider>
  );
};

export default ParentComponent;
