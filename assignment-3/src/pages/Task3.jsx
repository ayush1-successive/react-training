import { Link } from "react-router-dom";
import "./task.css";

const Task3 = () => {
  return (
    <>
      <h2 className="task-text">
        Create pages: Home and About. Implement routing using React Router DOM.
        Create navigation links to switch between the Home and About pages.
        Display appropriate content on each page. Add a "404 Not Found" page for
        any invalid routes.
      </h2>
      <nav>
        <ul>
          <li>
            <Link style={{ fontSize: 24 }} to="../home">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                fontSize: 24,
              }}
              to="../about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Task3;
