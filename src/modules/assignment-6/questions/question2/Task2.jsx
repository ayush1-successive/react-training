import React from "react";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Component1 = lazy(() => import("../question1/LazyComponent"));

const Task2 = () => {
  return (
    <div>
      <ErrorBoundary
        fallback={
          <div>"Some error occured while loading the lazy component!"</div>
        }
      >
        <Component1 />
      </ErrorBoundary>
    </div>
  );
};

export default Task2;
