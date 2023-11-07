import { useState } from "react";
import "../Styles.css";

const Task4 = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Password Validation
    if (password !== confirmPassword) {
      console.log("Password validation failed!");
      return;
    }

    // Submitting the form
    console.log("FormData =", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    formData[name] = value;
    setFormData({ ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Username </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
        />
      </div>

      <div>
        <label> Password </label>
        <input type="password" name="password" onChange={handleChange} />
      </div>

      <div>
        <label> Confirm Password </label>
        <input type="password" name="confirmPassword" onChange={handleChange} />
      </div>

      <button type="submit"> Submit </button>
    </form>
  );
};

export default Task4;
