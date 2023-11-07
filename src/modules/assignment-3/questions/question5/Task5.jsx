import { Link, Outlet, Route, Routes } from "react-router-dom";
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
            <Link style={{ fontSize: 24 }} to="dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link style={{ fontSize: 24 }} to="profile">
              Profile
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link style={{ fontSize: 24 }} to="setting">
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
      <Outlet />
    </>
  );
};

export default Task5;
