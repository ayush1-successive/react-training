// Task-10
import React, { createContext, useState } from "react";
import LanguageComponent from "./LanguageComponent";

export const LanguageContext = createContext();

const LanguageSwitcherComponent = () => {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleLanguageSwitch = (newLanguage) => setCurrentLanguage(newLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleLanguageSwitch }}>
      <LanguageComponent />
    </LanguageContext.Provider>
  );
};

export default LanguageSwitcherComponent;
