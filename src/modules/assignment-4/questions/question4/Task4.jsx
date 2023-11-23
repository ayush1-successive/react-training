import { useState } from "react";
import "../Styles.css";

const Task4 = () => {
  const [formData, setFormData] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const formTextStyle = {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    overflowWrap: "break-word",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Password Validation
    if (password !== confirmPassword) {
      console.log("Password validation failed!");
      setSubmitMessage("Passwords are not same!");
      return;
    }

    // Submitting the form
    setSubmitMessage("Form submitted!");
    console.log("FormData =", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    formData[name] = value;
    setFormData({ ...formData });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={formTextStyle}>
          <label style={{ width: 250 }}> Username </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div style={formTextStyle}>
          <label style={{ width: 250 }}> Password </label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div style={formTextStyle}>
          <label style={{ width: 250 }}> Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
      {submitMessage && <div style={{ fontSize: 20 }}>{submitMessage}</div>}
    </>
  );
};

export default Task4;
