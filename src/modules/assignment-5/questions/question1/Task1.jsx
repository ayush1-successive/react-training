import { useState } from "react";
import "../Styles.css";

const Task1 = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setUsers(data.map((elem) => elem.name));
  };

  return (
    <>
      <button onClick={fetchData}> Fetch Data </button>
      {users.length > 0 && (
        <div>
          <h2>Users</h2>
          {users.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Task1;
