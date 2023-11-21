import { Link, Route, Routes } from "react-router-dom";
import "../../index.css";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Setting from "./Setting";

const Task5 = () => {
  return (
    <>
      <h2 className="task-text">
        Extend the application to include nested routes for a more complex user
        interface. Create a new section of your application (e.g., a Dashboard)
        with multiple sub-pages (e.g., Dashboard, Profile, Settings). Implement
        nested routing within this section using nested routes. Add navigation
        links to switch between the sub-pages within the Dashboard section.
        Customize the content displayed on each sub-page.
      </h2>
      <nav>
        <ul>
          <li>
            <Link to="dashboard" style={{ fontSize: 24 }}>
              Dashboard
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="profile" style={{ fontSize: 24 }}>
              Profile
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="setting" style={{ fontSize: 24 }}>
              Setting
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </>
  );
};

export default Task5;
