// Task-14

import { useState, useCallback } from "react";
import "../../index.css";

const TaskComponent = () => {
  const textStyle = {
    incompleteTask: {
      fontSize: "22px",
      padding: "15px",
      margin: "20px",
      color: "#333", // Change text color to a darker color
      fontWeight: "bold", // Make the text bold
    },
    completedTask: {
      fontSize: "22px",
      padding: "15px",
      margin: "20px",
      textDecoration: "line-through", // Add a strikethrough effect
      color: "#888", // Change text color to a grayish color
    },
  };

  const initialTaskList = [
    { text: "Buy groceries", completed: false },
    { text: "Pay bills", completed: false },
    { text: "Walk the dog", completed: false },
    { text: "Call mom", completed: false },
    { text: "Read for 30 minutes", completed: false },
    { text: "Exercise for 45 minutes", completed: false },
    { text: "Clean the kitchen", completed: false },
    { text: "Reply to emails", completed: false },
  ];

  const [tasks, setTasks] = useState(initialTaskList);

  const completeTask = useCallback((index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = true;
      return updatedTasks;
    });
  }, []);

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "left" }}>
            <p
              style={
                task.completed
                  ? textStyle.completedTask
                  : textStyle.incompleteTask
              }
            >
              {task.text}
            </p>
            <button
              className="button-style"
              onClick={() => completeTask(index)}
            >
              complete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskComponent;
