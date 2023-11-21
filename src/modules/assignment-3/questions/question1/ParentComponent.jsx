// Task-1

import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";
import { STATE_LOGOUT } from "../../utils/constants";

export const AuthenticationContext = createContext();

const ParentComponent = () => {
  const [status, setStatus] = useState(STATE_LOGOUT);

  return (
    <AuthenticationContext.Provider value={{ status, setStatus }}>
      <ChildComponent />
    </AuthenticationContext.Provider>
  );
};

export default ParentComponent;
