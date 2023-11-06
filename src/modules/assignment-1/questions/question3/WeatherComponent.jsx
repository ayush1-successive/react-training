// Task-3
const WeatherComponent = (props) => {
  const { temperature } = props;

  return (
    <>
      {temperature > 25 && (
        <h2 style={{ color: "red" }}> {temperature}: It's sunny day</h2>
      )}
      {temperature < 10 && (
        <h2 style={{ color: "blue" }}>{temperature}: It's cold day</h2>
      )}
    </>
  );
};

export default WeatherComponent;
