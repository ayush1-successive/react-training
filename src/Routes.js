import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, ErrorPage, Home } from "./components";
import {
  Assignment1,
  Assignment2,
  Assignment3,
  Assignment4,
  Assignment5,
  Assignment6,
} from "./modules";

import Task1 from "./modules/assignment-3/questions/question1/Task1";
import Task2 from "./modules/assignment-3/questions/question2/Task2";
import AboutPage from "./modules/assignment-3/questions/question3/AboutPage";
import Task3 from "./modules/assignment-3/questions/question3/Task3";
import LoginComponent from "./modules/assignment-3/questions/question4/LoginComponent";
import Task4 from "./modules/assignment-3/questions/question4/Task4";
import Task5 from "./modules/assignment-3/questions/question5/Task5";
import Task6 from "./modules/assignment-3/questions/question6/Task6";
import ProductDetails from "./modules/assignment-3/questions/question6/ProductDetails";
import ProductList from "./modules/assignment-3/questions/question6/ProductList";
import SampleComponent from "./modules/assignment-5/questions/question14/SampleComponent";
import withAuth from "./modules/assignment-5/questions/question14/withAuth";

const Router = () => {
  const SampleComponentWithAuth = withAuth(SampleComponent);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
        <Route path="/assignment-2" element={<Assignment2 />} />

        <Route path="/assignment-3">
          <Route index element={<Assignment3 />} />
          <Route path="task-1" element={<Task1 />} />
          <Route path="task-2" element={<Task2 />} />
          <Route path="task-3" element={<Task3 />} />
          <Route path="task-3/about" element={<AboutPage />} />
          <Route path="task-4">
            <Route index element={<Task4 />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="task-5/*" element={<Task5 />} />
          <Route path="task-6">
            <Route index element={<Task6 />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="/assignment-4" element={<Assignment4 />} />
        <Route path="/assignment-5" element={<Assignment5 />} />
        <Route
          path="/assignment-5/sample"
          element={<SampleComponentWithAuth />}
        />
        <Route path="/assignment-6" element={<Assignment6 />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
