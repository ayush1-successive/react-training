import React, { useState } from "react";
import axios from "axios";

const Task5 = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setUsers(response.data.map((elem) => elem.name));
    } catch (error) {
      console.log(error);
    }
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

export default Task5;
