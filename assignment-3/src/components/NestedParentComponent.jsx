// Task-2

import React, { createContext, useState } from "react";
import NestedChildComponent from "./NestedChildComponent";

export const AuthenticationContext = createContext();
export const PreferenceContext = createContext();

const NestedParentComponent = () => {
  // States
  const [status, setStatus] = useState("Logged out");
  const [theme, setTheme] = useState("light");

  const handleLogin = () => {
    if (status === "Logged in") setStatus("Logged out");
    else setStatus("Logged in");
  };

  const handleTheme = () => {
    if (status === "Logged out") return;
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <AuthenticationContext.Provider
      value={{ status, handleLogin, user: "Ayush" }}
    >
      <PreferenceContext.Provider value={{ theme, handleTheme }}>
        <NestedChildComponent />
      </PreferenceContext.Provider>
    </AuthenticationContext.Provider>
  );
};

export default NestedParentComponent;
