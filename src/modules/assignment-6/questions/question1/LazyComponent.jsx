import React from "react";

const LazyComponent = (props) => {
  const { name } = props;

  return (
    <div>
      <h2>This is a Lazy Component</h2>
      <h2>Welcome {name}!</h2>
    </div>
  );
};

export default LazyComponent;
