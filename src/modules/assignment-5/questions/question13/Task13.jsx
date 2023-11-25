import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

const Task13 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Component</h2>
        <p>This is the content of Modal</p>
      </ModalComponent>
    </>
  );
};

export default Task13;
