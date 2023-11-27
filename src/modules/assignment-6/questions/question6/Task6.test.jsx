import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import ModalComponent from "./ModalComponent";

test("Modal Component Working", () => {
  render(
    <ModalComponent isOpen={true}>
      <h2>Modal Component</h2>
      <p>This is the content of Modal</p>
    </ModalComponent>
  );

  expect(screen.getByText("Modal Component")).toBeInTheDocument();
  expect(screen.getByText("This is the content of Modal")).toBeInTheDocument();
});
