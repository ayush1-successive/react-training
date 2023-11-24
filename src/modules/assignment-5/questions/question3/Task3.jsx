import { useState } from "react";

const Task3 = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setUsers([]);
    setLoading(true);

    const response = await fetch(apiUrl);
    const data = await response.json();

    setUsers(data.map((elem) => elem.name));
    setLoading(false);
  };

  return (
    <>
      <button onClick={fetchData}> Fetch Data </button>

      {loading && (
        <div>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXJsbG90bzZ0em1saXBkNnpxNG9iNXRqc3Qxd2t6dW1jdjdmdnRobiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="wait"
          />
        </div>
      )}

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

export default Task3;
