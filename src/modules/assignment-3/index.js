import React from "react";
import { Link } from "react-router-dom";

const Assignment3 = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    margin: "0 20px",
    fontSize: 24,
  };

  return (
    <>
      <h1 className="task-text">Assignment-3 Page</h1>

      <nav style={navStyle}>
        <Link style={linkStyle} to="task-1">
          Task-1
        </Link>
        <Link style={linkStyle} to="task-2">
          Task-2
        </Link>
        <Link style={linkStyle} to="task-3">
          Task-3
        </Link>
        <Link style={linkStyle} to="task-4">
          Task-4
        </Link>
        <Link style={linkStyle} to="task-5">
          Task-5
        </Link>
        <Link style={linkStyle} to="task-6">
          Task-6
        </Link>
      </nav>
    </>
  );
};

export default Assignment3;
