import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../../index.css";

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  const themeStyle = {
    white: {
      height: 400,
      width: 700,
      fontSize: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      backgroundColor: "white",
      color: "black",
    },
    black: {
      height: 400,
      width: 700,
      fontSize: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <>
      <div style={themeStyle[theme.currentTheme]}>Hello World</div>
      <button className="button-style" onClick={() => theme.toggleTheme()}>
        Toggle Theme
      </button>
    </>
  );
};

export default ThemeComponent;
