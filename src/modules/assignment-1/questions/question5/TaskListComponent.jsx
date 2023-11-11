// Task-5
const TaskListComponent = (props) => {
  const textStyle = {
    textAlign: "left",
  };

  const taskArray = props.tasks;

  return (
    <>
      <h2 style={textStyle}>Tasks To Do:</h2>
      <ul>
        {taskArray.map((task, index) => (
          <li style={textStyle} key={index}>
            <h2>{task}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListComponent;
