import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { Assignment1 } from "./modules";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
