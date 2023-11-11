// Task-3
const WeatherComponent = (props) => {
  const { temperature } = props;

  let message;
  let color;

  if (temperature > 25) {
    message = `${temperature}: It's a sunny day`;
    color = "red";
  } else if (temperature < 10) {
    message = `${temperature}: It's a cold day`;
    color = "blue";
  }

  return (
    <>
      <h2 style={{ color }}> {message}</h2>
    </>
  );
};

export default WeatherComponent;
