import React, { useState, createContext } from "react";
import ThemeComponent from "./ThemeComponent";

export const ThemeContext = createContext();

const ThemeSwitcherComponent = () => {
  const [currentTheme, setCurrentTheme] = useState("white");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "white" ? "black" : "white");

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default ThemeSwitcherComponent;
