import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { Assignment1 } from "./modules";
import Assignment2 from "./modules/assignment-2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
        <Route path="/assignment-2" element={<Assignment2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
