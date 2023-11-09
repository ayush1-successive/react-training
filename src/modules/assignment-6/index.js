import React from "react";
import { QuestionsArray } from "./QuestionsArray";
import Task1 from "./questions/question1/Task1";
import Task2 from "./questions/question2/Task2";

const Assignment6 = () => {
  return (
    <>
      <h1 className="task-text">Assignment-6 Page</h1>

      <div className="task-text" id="Task-1">
        <h2>Task {QuestionsArray[1]}</h2>
        <Task1 />
      </div>

      <div className="task-text" id="Task-2">
        <h2>Task {QuestionsArray[2]}</h2>
        <Task2 />
      </div>
    </>
  );
};

export default Assignment6;
