// Task-2

import React, { createContext, useState } from "react";
import { STATE_LOGOUT, THEME_LIGHT } from "../../utils/constants";
import NestedChildComponent from "./NestedChildComponent";

export const AuthenticationContext = createContext();
export const PreferenceContext = createContext();

const NestedParentComponent = () => {
  // States
  const [status, setStatus] = useState(STATE_LOGOUT);
  const [theme, setTheme] = useState(THEME_LIGHT);

  return (
    <AuthenticationContext.Provider value={{ status, setStatus }}>
      <PreferenceContext.Provider value={{ theme, setTheme }}>
        <NestedChildComponent />
      </PreferenceContext.Provider>
    </AuthenticationContext.Provider>
  );
};

export default NestedParentComponent;
