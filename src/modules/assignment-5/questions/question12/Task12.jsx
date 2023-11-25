import React from "react";
import ButtonComponent from "./ButtonComponent";

const Task12 = () => {
  return (
    <div>
      <ButtonComponent type="primary" text="Primary Button" />
      <ButtonComponent type="secondary" text="Secondary Button" />
      <ButtonComponent type="danger" text="Danger Button" />
    </div>
  );
};

export default Task12;
