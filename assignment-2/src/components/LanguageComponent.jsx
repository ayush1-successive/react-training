// Task-10
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./ButtonStyle.css";

const LanguageComponent = () => {
  const language = useContext(LanguageContext);
  const themeStyle = {
    height: 400,
    width: 700,
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    margin: "0 auto",
  };

  const sampleText = {
    english:
      "The sun is shining brightly in the clear blue sky. Birds are chirping, and the flowers are in full bloom. It's a beautiful day.",
    spanish:
      "El sol brilla intensamente en el cielo azul y despejado. Los pájaros cantan y las flores están en plena floración. Es un hermoso día.",
  };

  return (
    <>
      <div style={themeStyle}> {sampleText[language.currentLanguage]}</div>
      <button
        className="button-style"
        onClick={() => language.handleLanguageSwitch("english")}
      >
        English
      </button>
      <button
        className="button-style"
        onClick={() => language.handleLanguageSwitch("spanish")}
      >
        Spanish
      </button>
    </>
  );
};

export default LanguageComponent;
