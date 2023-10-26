// Task-5
const TaskListComponent = (props) => {
  const textStyle = {
    textAlign: "left",
  };

  const taskArray = props.tasks;

  return (
    <>
      <h3 style={textStyle}>Tasks To Do:</h3>
      <ul>
        {taskArray.map((task, index) => (
          <li style={textStyle} key={index}>
            {task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListComponent;
