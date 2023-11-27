import React from "react";
import { Suspense, lazy } from "react";

const Component1 = lazy(() => import("./LazyComponent"));

const Task1 = () => {
  return (
    <div>
      <Suspense fallback={<div>Component1 is loading....</div>}>
        <Component1 name="Ayush" />
      </Suspense>
    </div>
  );
};

export default Task1;
