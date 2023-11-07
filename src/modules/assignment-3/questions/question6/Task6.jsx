import { Link } from "react-router-dom";
import "../../index.css";

const Task6 = () => {
  return (
    <>
      <h2 className="task-text">
        Create a list of items (e.g., products, articles) in your application.
        Implement dynamic routing to display details for each item when clicked.
        Create a route parameter that represents the item's ID in the URL (e.g.,
        "/products/:id"). Fetch item details based on the route parameter and
        display them on the detail page. Add a "Go Back" button on the detail
        page to return to the list.
      </h2>
      <nav>
        <ul>
          <li>
            <Link style={{ fontSize: 24 }} to="/products">
              Product List
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Task6;
