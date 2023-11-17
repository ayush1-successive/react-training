import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const About = (props) => {
  const location = useLocation();
  const { state } = location;

  if (state && state.isAuthenticated) {
    return <div>This is About Page.</div>;
  }

  return <Navigate to="../login" />;
};

export default About;
