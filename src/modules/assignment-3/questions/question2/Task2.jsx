import NestedParentComponent from "./NestedParentComponent";
import "../../index.css";

const Task2 = () => {
  return (
    <>
      <h2 className="task-text">
        Extend the previous application to demonstrate the use of nested
        contexts. Create a new context to manage user preferences (e.g., theme
        preference). Modify the parent component to provide both the
        authentication and preferences contexts. Create a child component that
        consumes both contexts. Allow the user to change their theme preference
        (light/dark) using a button in the child component. Display the theme
        preference in the UI and adjust the component's styling accordingly.
      </h2>

      <NestedParentComponent />
    </>
  );
};

export default Task2;
