// Task-2

import { useState } from "react";

const PersonFormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();

  return (
    <>
      <form
        style={{
          margin: "10px",
          padding: "10px",
          border: "5px solid #ccc",
        }}
      >
        <p>
          <label htmlFor="firstName"> First Name </label>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="lastName"> Last Name </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="age"> Age </label>
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(event) => setAge(event.target.value)}
          />
        </p>
      </form>
      <h2>Person Details</h2>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </>
  );
};

export default PersonFormComponent;
