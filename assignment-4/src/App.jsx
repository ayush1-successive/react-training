import "./App.css";
import tasks from "./Tasks";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
import Task8 from "./components/Task8";
import Task9 from "./components/Task9";
import Task10 from "./components/Task10";
import Task11 from "./components/Task11";
import Task12 from "./components/Task12";
import Task13 from "./components/Task13";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

const Task = () => {
  return (
    <>
      <div className="task-text" id="Task-1">
        <h2>Task {tasks[1]}</h2>
        <Task1 />
      </div>

      <div className="task-text" id="Task-2">
        <h2>Task {tasks[2]}</h2>
        <Task2 />
      </div>

      <div className="task-text" id="Task-3">
        <h2>Task {tasks[3]}</h2>
        <Task3 />
      </div>

      <div className="task-text" id="Task-4">
        <h2>Task {tasks[4]}</h2>
        <Task4 />
      </div>

      <div className="task-text" id="Task-5">
        <h2>Task {tasks[5]}</h2>
        <Task5 />
      </div>

      <div className="task-text" id="Task-6">
        <h2>Task {tasks[6]}</h2>
        <Task6 />
      </div>

      <div className="task-text" id="Task-7">
        <h2>Task {tasks[7]}</h2>
        <Task7 />
      </div>

      <div className="task-text" id="Task-8">
        <h2>Task {tasks[8]}</h2>
        <Task8 />
      </div>

      <div className="task-text" id="Task-9">
        <h2>Task {tasks[9]}</h2>
        <Task9 />
      </div>

      <div className="task-text" id="Task-10">
        <h2>Task {tasks[10]}</h2>
        <Task10 />
      </div>

      <div className="task-text" id="Task-11">
        <h2>Task {tasks[11]}</h2>
        <Task11 />
      </div>

      <div className="task-text" id="Task-12">
        <h2>Task {tasks[12]}</h2>
        <Task12 />
      </div>

      <div className="task-text" id="Task-13">
        <h2>Task {tasks[13]}</h2>
        <Task13 />
      </div>
    </>
  );
};

export default App;
