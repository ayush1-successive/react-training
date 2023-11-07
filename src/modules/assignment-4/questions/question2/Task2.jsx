import { useState } from "react";
import "../Styles.css";

const Task2 = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData =", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "languages") {
      if (formData.languages === undefined) formData.languages = [];

      const index = formData.languages.findIndex((elem) => elem === value);
      if (index === -1) formData.languages.push(value);
      else formData.languages.splice(index, 1);

      setFormData({ ...formData, languages: [...formData.languages] });
      return;
    }

    formData[name] = value;
    setFormData({ ...formData });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label> Name </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <label> Age </label>
          <input type="number" id="age" name="age" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <label> Email </label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <label>Gender:</label>

          <div>
            <label> Male </label>
            <input
              type="radio"
              // style={{ scale: "1.5" }}
              id="male"
              value="male"
              name="gender"
              onChange={handleChange}
            />
            <label> Female </label>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <label>Languages you know:</label>
          <div>
            <label> C++ </label>
            <input
              type="checkbox"
              id="c++"
              value="c++"
              name="languages"
              onClick={handleChange}
            />

            <label> Python </label>
            <input
              type="checkbox"
              id="python"
              value="python"
              name="languages"
              onClick={handleChange}
            />

            <label> Java </label>
            <input
              type="checkbox"
              id="java"
              value="java"
              name="languages"
              onClick={handleChange}
            />

            <label> JavaScript </label>
            <input
              type="checkbox"
              id="javascript"
              value="javascript"
              name="languages"
              onClick={handleChange}
            />

            <label> C# </label>
            <input
              type="checkbox"
              id="c#"
              value="c#"
              name="languages"
              onClick={handleChange}
            />
          </div>
        </fieldset>

        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

// Form:
// Name
// age
// email
// Gender - Radio [Male, Female]
// Languages you know- Checkbox [C++, Python, Java, Javascript, c#]

export default Task2;
