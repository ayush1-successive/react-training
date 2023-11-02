import "./task.css";

const About = (props) => {
  return (
    <div className="task-text">
      <h2>This is About Page.</h2>
      {props.name && (
        <span>
          <h2>Hello {props.name}!</h2>
        </span>
      )}
    </div>
  );
};

export default About;
