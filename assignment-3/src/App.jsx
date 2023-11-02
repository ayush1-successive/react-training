import { Link, Route, Routes } from "react-router-dom";

import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task6 from "./pages/Task6";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginComponent from "./components/LoginComponent";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

// CSS for NavigationLinks
const navStyle = {
  padding: "5px",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",
  width: "100%",
};

const liStyle = {
  margin: 0,
  padding: 0,
  font: 20,
};

const linkStyle = {
  fontSize: 24,
};

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Assignment-3</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-1">
              Task-1
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-2">
              Task-2
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-3">
              Task-3
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-4">
              Task-4
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-5">
              Task-5
            </Link>
          </li>
          <li style={liStyle}>
            <Link style={linkStyle} to="/task-6">
              Task-6
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<></>} />
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
