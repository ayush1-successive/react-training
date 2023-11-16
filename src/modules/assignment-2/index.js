import React from "react";
import { QuestionsArray } from "../assignment-2/QuestionsArray";
import CounterComponent from "./questions/question1/CounterComponent";
import PersonFormComponent from "./questions/question2/PersonFormComponent";
import TodoListComponent from "./questions/question3/TodoListComponent";
import RandomNumberGeneratorComponent from "./questions/question4/RandomNumberGeneratorComponent";
import CounterWithStepComponent from "./questions/question5/CounterWithStepComponent";
import ClockComponent from "./questions/question6/ClockComponent";
import NotificationComponent from "./questions/question7/NotificationComponent";
import SlideComponent from "./questions/question8/SlideComponent";
import ThemeSwitcherComponent from "./questions/question9/ThemeContext";
import LanguageSwitcherComponent from "./questions/question10/LanguageContext";
import ShoppingComponent from "./questions/question11/ShoppingContext";
import VotingComponent from "./questions/question12/VotingComponent";
import ParentComponent from "./questions/question13/ParentChildComponent";
import TaskComponent from "./questions/question14/TaskComponent";
import StudentListComponent from "./questions/question15/StudentListComponent";
import EmployeeSalaryComponent from "./questions/question16/EmployeeSalaryComponent";
import ClipboardComponent from "./questions/question17/ClipboardComponent";
import StorageComponent from "./questions/question18/StorageComponent";
import TimerComponent from "./questions/question19/TimerComponent";

const Assignment2 = () => {
  return (
    <>
      <>
        <div className="task-text" id="Task-1">
          <h2>Task {QuestionsArray[1]}</h2>
          <CounterComponent />
        </div>

        <div className="task-text" id="Task-2">
          <h2>Task {QuestionsArray[2]}</h2>
          <PersonFormComponent />
        </div>

        <div className="task-text" id="Task-3">
          <h2>Task {QuestionsArray[3]}</h2>
          <TodoListComponent />
        </div>

        <div className="task-text" id="Task-4">
          <h2>Task {QuestionsArray[4]}</h2>
          <RandomNumberGeneratorComponent />
        </div>

        <div className="task-text" id="Task-5">
          <h2>Task {QuestionsArray[5]}</h2>
          <CounterWithStepComponent />
        </div>

        <div className="task-text" id="Task-6">
          <h2>Task {QuestionsArray[6]}</h2>
          <ClockComponent />
        </div>

        <div className="task-text" id="Task-7">
          <h2>Task {QuestionsArray[7]}</h2>
          <NotificationComponent />
        </div>

        <div className="task-text" id="Task-8">
          <h2>Task {QuestionsArray[8]}</h2>
          <SlideComponent />
        </div>

        <div className="task-text" id="Task-9">
          <h2>Task {QuestionsArray[9]}</h2>
          <ThemeSwitcherComponent />
        </div>

        <div className="task-text" id="Task-10">
          <h2>Task {QuestionsArray[10]}</h2>
          <LanguageSwitcherComponent />
        </div>

        <div className="task-text" id="Task-11">
          <h2>Task {QuestionsArray[11]}</h2>
          <ShoppingComponent />
        </div>

        <div className="task-text" id="Task-12">
          <h2>Task {QuestionsArray[12]}</h2>
          <VotingComponent />
        </div>

        <div className="task-text" id="Task-13">
          <h2>Task {QuestionsArray[13]}</h2>
          <ParentComponent />
        </div>

        <div className="task-text" id="Task-14">
          <h2>Task {QuestionsArray[14]}</h2>
          <TaskComponent />
        </div>

        <div className="task-text" id="Task-15">
          <h2>Task {QuestionsArray[15]}</h2>
          <StudentListComponent />
        </div>

        <div className="task-text" id="Task-16">
          <h2>Task {QuestionsArray[16]}</h2>
          <EmployeeSalaryComponent />
        </div>

        <div className="task-text" id="Task-17">
          <h2>Task {QuestionsArray[17]}</h2>
          <ClipboardComponent />
        </div>

        <div className="task-text" id="Task-18">
          <h2>Task {QuestionsArray[18]}</h2>
          <StorageComponent />
        </div>

        <div className="task-text" id="Task-19">
          <h2>Task {QuestionsArray[19]}</h2>
          <TimerComponent time="300" />
        </div>
      </>
    </>
  );
};

export default Assignment2;
