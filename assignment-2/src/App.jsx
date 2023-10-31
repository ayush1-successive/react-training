import "./App.css";
import ClockComponent from "./components/ClockComponent";
import CounterComponent from "./components/CounterComponent";
import CounterWithStepComponent from "./components/CounterWithStepComponent";
import LanguageSwitcherComponent from "./components/LanguageContext";
import NotificationComponent from "./components/NotificationComponent";
import PersonFormComponent from "./components/PersonFormComponent";
import RandomNumberGeneratorComponent from "./components/RandomNumberGeneratorComponent";
import SlideComponent from "./components/SlideComponent";
import ThemeSwitcherComponent from "./components/ThemeContext";
import TodoListComponent from "./components/TodoListComponent";
import ShoppingComponent from "./components/ShoppingContext";
import tasks from "./Tasks";
import VotingComponent from "./components/VotingComponent";
import ParentComponent from "./components/ParentChildComponent";
import TaskComponent from "./components/TaskComponent";
import StudentListComponent from "./components/StudentListComponent";
import EmployeeSalaryComponent from "./components/EmployeeSalaryComponent";
import ClipboardComponent from "./components/ClipboardComponent";
import StorageComponent from "./components/StorageComponent";
import TimerComponent from "./components/TimerComponent";

function App() {
  return (
    <>
      <div className="task-text" id="Task-1">
        <h2>Task {tasks[1]}</h2>
        <CounterComponent />
      </div>

      <div className="task-text" id="Task-2">
        <h2>Task {tasks[2]}</h2>
        <PersonFormComponent />
      </div>

      <div className="task-text" id="Task-3">
        <h2>Task {tasks[3]}</h2>
        <TodoListComponent />
      </div>

      <div className="task-text" id="Task-4">
        <h2>Task {tasks[4]}</h2>
        <RandomNumberGeneratorComponent />
      </div>

      <div className="task-text" id="Task-5">
        <h2>Task {tasks[5]}</h2>
        <CounterWithStepComponent />
      </div>

      <div className="task-text" id="Task-6">
        <h2>Task {tasks[6]}</h2>
        <ClockComponent />
      </div>

      <div className="task-text" id="Task-7">
        <h2>Task {tasks[7]}</h2>
        <NotificationComponent />
      </div>

      <div className="task-text" id="Task-8">
        <h2>Task {tasks[8]}</h2>
        <SlideComponent />
      </div>

      <div className="task-text" id="Task-9">
        <h2>Task {tasks[9]}</h2>
        <ThemeSwitcherComponent />
      </div>

      <div className="task-text" id="Task-10">
        <h2>Task {tasks[10]}</h2>
        <LanguageSwitcherComponent />
      </div>

      <div className="task-text" id="Task-11">
        <h2>Task {tasks[11]}</h2>
        <ShoppingComponent />
      </div>

      <div className="task-text" id="Task-12">
        <h2>Task {tasks[12]}</h2>
        <VotingComponent />
      </div>

      <div className="task-text" id="Task-13">
        <h2>Task {tasks[13]}</h2>
        <ParentComponent />
      </div>

      <div className="task-text" id="Task-14">
        <h2>Task {tasks[14]}</h2>
        <TaskComponent />
      </div>

      <div className="task-text" id="Task-15">
        <h2>Task {tasks[15]}</h2>
        <StudentListComponent />
      </div>

      <div className="task-text" id="Task-16">
        <h2>Task {tasks[16]}</h2>
        <EmployeeSalaryComponent />
      </div>

      <div className="task-text" id="Task-17">
        <h2>Task {tasks[17]}</h2>
        <ClipboardComponent />
      </div>

      <div className="task-text" id="Task-18">
        <h2>Task {tasks[18]}</h2>
        <StorageComponent />
      </div>

      <div className="task-text" id="Task-19">
        <h2>Task {tasks[19]}</h2>
        <TimerComponent time="300" />
      </div>
    </>
  );
}

export default App;
