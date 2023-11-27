import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CounterComponent from "../../../assignment-1/questions/question4/CounterComponent";

test("Clicking increment button increases the value", () => {
  render(<CounterComponent />);
  const incrementButton = screen.getByText("increment");

  for (let counter = 0; counter < 10; counter++) {
    fireEvent.click(incrementButton);
  }

  expect(screen.getByText("10")).toBeInTheDocument();
});

test("Clicking decrement button decreases the value", () => {
  render(<CounterComponent />);
  const decrementButton = screen.getByText("decrement");

  for (let counter = 0; counter < 10; counter++) {
    fireEvent.click(decrementButton);
  }

  expect(screen.getByText("-10")).toBeInTheDocument();
});
