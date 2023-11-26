import React from "react";

const ButtonComponent = (props) => {
  const buttonStyles = {
    primary: {
      backgroundColor: "#3498db",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#2ecc71",
      color: "#fff",
    },
    danger: {
      backgroundColor: "#e74c3c",
      color: "#fff",
    },
  };

  return (
    <div>
      <button
        style={buttonStyles[props.type]}
        onClick={() => alert(props.text + " clicked.")}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ButtonComponent;
