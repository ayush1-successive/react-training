import { useState, useEffect } from "react";
import "../Styles.css";

const itemList = [
  "app",
  "apple",
  "chocolate",
  "choice",
  "morning",
  "monkey",
  "mountain",
  "butterfly",
  "button",
];

const Task7 = () => {
  const tableStyle = {
    width: "25%",
    borderCollapse: "collapse",
    border: "2px solid #333",
    margin: "20px auto",
    fontSize: 20,
  };

  const thStyle = {
    textAlign: "center",
    padding: "8px",
    border: "2px solid #333",
    backgroundColor: "#d6d4d4",
  };

  const [query, setQuery] = useState("");
  const [queryList, setQueryList] = useState([]);

  useEffect(() => {
    setQueryList(
      itemList.filter((elem) => elem.substring(0, query.length) === query)
    );
  }, [query]);

  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>FULL ITEM LIST</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(itemList).map((item, index) => (
            <tr key={index}>
              <td style={{ fontSize: 24 }}>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Query"
      />

      <h2 style={{ textAlign: "center" }}> Query List:</h2>
      <ul
        style={{
          textAlign: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        {queryList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </ul>
    </>
  );
};

export default Task7;
