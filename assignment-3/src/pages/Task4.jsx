import { Link } from "react-router-dom";
import "./task.css";

const Task4 = () => {
  return (
    <>
      <h2 className="task-text">
        Enhance the previous application by adding protected routes that require
        authentication. Create a login page with a form that accepts a username
        and password. Implement authentication logic (e.g., hardcode a username
        and password for now). Secure the About page so that it can only be
        accessed by authenticated users. Redirect unauthenticated users to the
        login page. Display a message on the Home page welcoming the
        authenticated user.
      </h2>

      <nav>
        <ul>
          <li>
            <Link style={{ fontSize: 24 }} to="../login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Task4;
