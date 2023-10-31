import { useState } from "react";
import "./ButtonStyle.css";

// Task-3
const TodoListComponent = () => {
  const [todos, setTodos] = useState([]);
  const [todoCheckboxes, setTodoCheckboxes] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleCheckboxes = (position) => {
    const updatedCheckboxes = todoCheckboxes.map((item, index) =>
      index === position ? !item : item
    );
    setTodoCheckboxes(updatedCheckboxes);
  };

  const handleDeleteTodo = (position) => {
    todos.splice(position, 1);
    todoCheckboxes.splice(position, 1);
    setTodos([...todos]);
    setTodoCheckboxes([...todoCheckboxes]);
  };

  return (
    <>
      <input
        className="button-style"
        type="text"
        placeholder="Enter a task"
        onChange={(event) => setCurrentTodo(event.target.value)}
      />
      <button
        className="button-style"
        type="button"
        onClick={() => {
          setTodos([...todos, currentTodo]);
          setTodoCheckboxes([...todoCheckboxes, false]);
        }}
      >
        Submit
      </button>
      <h2 style={{ textAlign: "left" }}> Todo List:</h2>
      <ul style={{ textAlign: "left" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex", alignItems: "left" }}>
            <input
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              type="checkbox"
              checked={todoCheckboxes[index]}
              onClick={() => handleCheckboxes(index)}
            />
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                fontSize: "22px",
              }}
            >
              {todo}
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                marginRight: "1600px",
              }}
              onClick={() => handleDeleteTodo(index)}
            >
              <img
                src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
                alt="Delete Button"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListComponent;
