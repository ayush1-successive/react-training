import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginComponent from "../../../assignment-3/questions/question4/LoginComponent";

test("Entering text in the input field updates the username", () => {
  render(<LoginComponent />);

  const inputUsernameElement = screen.getByPlaceholderText("Your username");
  fireEvent.change(inputUsernameElement, { target: { value: "textUser" } });

  expect(inputUsernameElement).toHaveValue("textUser");
});

test("Entering text in the password field updates the password", () => {
  render(<LoginComponent />);

  const inputPasswordElement = screen.getByPlaceholderText("Your password");
  fireEvent.change(inputPasswordElement, { target: { value: "pass1234" } });

  expect(inputPasswordElement).toHaveValue("pass1234");
});

test("Clicking login button handles authentication process", () => {
  render(<LoginComponent />);

  const inputUsernameElement = screen.getByPlaceholderText("Your username");
  const inputPasswordElement = screen.getByPlaceholderText("Your password");
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.change(inputUsernameElement, { target: { value: "ayush" } });
  fireEvent.change(inputPasswordElement, { target: { value: "123456" } });
  fireEvent.click(loginButton);

  expect(screen.getByText("This is About Page.")).toBeInTheDocument();
});
