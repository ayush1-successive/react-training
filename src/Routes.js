import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components";
import { Assignment1 } from "./modules";
import Assignment2 from "./modules/assignment-2";
import Assignment3 from "./modules/assignment-3";
import Task1 from "./modules/assignment-3/questions/question1/Task1";
import Task2 from "./modules/assignment-3/questions/question2/Task2";
import Task3 from "./modules/assignment-3/questions/question3/Task3";
import Task4 from "./modules/assignment-3/questions/question4/Task4";
import Task5 from "./modules/assignment-3/questions/question5/Task5";
import Task6 from "./modules/assignment-3/questions/question6/Task6";
import { About } from "./components/About";
import LoginComponent from "./modules/assignment-3/questions/question4/LoginComponent";
import ProductList from "./modules/assignment-3/questions/question6/ProductList";
import ProductDetails from "./modules/assignment-3/questions/question6/ProductDetails";
import { ErrorPage } from "./components/ErrorPage";
import Assignment4 from "./modules/assignment-4";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
        <Route path="/assignment-2" element={<Assignment2 />} />

        <Route path="/assignment-3" element={<Assignment3 />} />
        <Route path="/task-1" element={<Task1 />} />
        <Route path="/task-2" element={<Task2 />} />
        <Route path="/task-3" element={<Task3 />} />
        <Route path="/task-4" element={<Task4 />} />
        <Route path="/task-5/*" element={<Task5 />} />
        <Route path="/task-6" element={<Task6 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/assignment-4" element={<Assignment4 />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
