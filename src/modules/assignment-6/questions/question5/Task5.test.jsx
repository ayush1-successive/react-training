import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserProfile from "./UserProfile";

test("UserProfile component properly display information from props", () => {
  render(<UserProfile name="ayush" email="ayush@gmail.com" phoneNo="123987" />);

  expect(screen.getByText("Name: ayush")).toBeInTheDocument();
  expect(screen.getByText("Email: ayush@gmail.com")).toBeInTheDocument();
  expect(screen.getByText("Phone Number: 123987")).toBeInTheDocument();
});
