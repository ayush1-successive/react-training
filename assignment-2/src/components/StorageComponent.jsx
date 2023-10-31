// Task-18

import { useState } from "react";
import "./ButtonStyle.css";

const tableStyle = {
  width: "60%",
  borderCollapse: "collapse",
  border: "2px solid #333",
  margin: "20px auto",
  fontSize: 20,
};

const tdStyle = {
  border: "2px solid #333",
  padding: "8px",
  textAlign: "center",
};

const useLocalStorage = () => {
  const [data, setData] = useState({ ...localStorage });

  const updateData = (key, value) => {
    if (key === "" || value === "") return;
    localStorage.setItem(key, value);
    data[key] = value;
    setData({ ...data });
  };

  const getData = (key) => {
    console.log(localStorage.getItem(key));
    return localStorage.getItem(key);
  };

  const removeData = (lookupKey) => {
    localStorage.removeItem(lookupKey);

    const newData = { ...data };
    delete newData[lookupKey];
    setData(newData);
  };

  return { data, updateData, getData, removeData };
};

const StorageComponent = () => {
  const { data, updateData, getData, removeData } = useLocalStorage();

  const [updateKeyText, setUpdateKeyText] = useState("");
  const [updateValueText, setUpdateValueText] = useState("");

  const [getKeyText, setGetKeyText] = useState("");
  const [getValueText, setGetValueText] = useState("");

  const [removeKeyText, setRemoveKeyText] = useState("");

  return (
    <>
      <h2>CUSTOM DATABASE</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>Key</th>
            <th style={{ ...tdStyle, backgroundColor: "#f2f2f2" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key, index) => (
            <tr key={index}>
              <td style={tdStyle}>{key}</td>
              <td style={tdStyle}>{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          className="button-style"
          onClick={() => updateData(updateKeyText, updateValueText)}
        >
          Update
        </button>
        <input
          className="button-style"
          type="text"
          placeholder="Key..."
          onChange={(e) => setUpdateKeyText(e.target.value)}
        />
        <input
          className="button-style"
          type="text"
          placeholder="Value..."
          onChange={(e) => setUpdateValueText(e.target.value)}
        />
      </div>
      <div>
        <button
          className="button-style"
          onClick={() => setGetValueText(getData(getKeyText))}
        >
          Get
        </button>
        <input
          className="button-style"
          type="text"
          placeholder="Key..."
          onChange={(e) => setGetKeyText(e.target.value)}
        />
        {getValueText && (
          <span>
            <h3>{getValueText}</h3>
          </span>
        )}
      </div>
      <div>
        <button
          className="button-style"
          onClick={() => removeData(removeKeyText)}
        >
          Remove
        </button>
        <input
          className="button-style"
          type="text"
          placeholder="Key..."
          onChange={(e) => setRemoveKeyText(e.target.value)}
        />
      </div>
    </>
  );
};

export default StorageComponent;
