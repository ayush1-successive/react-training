const About = (props) => {
  return (
    <>
      <h1>This is About Page.</h1>
      {props.name && (
        <span>
          <h2>Hello {props.name}!</h2>
        </span>
      )}
    </>
  );
};

export default About;
