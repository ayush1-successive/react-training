import axios from "axios";
import React, { useState } from "react";

const Task6 = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [requestFailed, setRequestFailed] = useState(false);

  const fetchData = async () => {
    try {
      setUsers([]);

      // For causing random error during API fetch
      if (Math.random() < 0.3) throw new Error("Random Error!");

      const response = await axios.get(apiUrl);

      setUsers(response.data.map((elem) => elem.name));
      setRequestFailed(false);
    } catch (error) {
      console.log(error);

      setRequestFailed(true);
      setUsers([]);
    }
  };

  return (
    <>
      <button onClick={fetchData}> Fetch Data </button>

      {requestFailed && (
        <>
          <h2>Request Failed</h2>
          <button onClick={fetchData}> Retry </button>
        </>
      )}

      {users.length > 0 && (
        <>
          <h2>Users</h2>
          {users.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </>
      )}
    </>
  );
};

export default Task6;
