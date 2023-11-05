import { useState } from "react";
import "./Styles.css";

const Task5 = () => {
  const [name, setName] = useState("Trainees");

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <select
        style={{ fontSize: 24, height: 40, width: 200, textAlign: "center" }}
        onClick={(e) => handleName(e)}
      >
        <option value="Trainees">Trainees</option>
        <option value="Ayush">Ayush</option>
        <option value="Rounak">Rounak</option>
        <option value="Pranjhi">Pranjhi</option>
        <option value="Nikhil">Nikhil</option>
        <option value="Vinay">Vinay</option>
        <option value="Munendra">Munendra</option>
        <option value="Somil">Somil</option>
        <option value="Sanskar">Sanskar</option>
      </select>
      {name !== "Trainees" && <h2>Welcome to Succcessive Digital {name}</h2>}
    </>
  );
};

export default Task5;
