import React from "react";
import { QuestionsArray } from "./QuestionsArray";
import Task1 from "./questions/question1/Task1";
import Task2 from "./questions/question2/Task2";
import Task3 from "./questions/question3/Task3";
import Task4 from "./questions/question4/Task4";
import Task5 from "./questions/question5/Task5";
import Task6 from "./questions/question6/Task6";
import Task7 from "./questions/question7/Task7";
import Task8 from "./questions/question8/Task8";
import Task9 from "./questions/question9/Task9";
import Task10 from "./questions/question10/Task10";
import Task11 from "./questions/question11/Task11";
import Task12 from "./questions/question12/Task12";
import Task13 from "./questions/question13/Task13";
import Task14 from "./questions/question14/Task14";

const Assignment4 = () => {
  return (
    <>
      <h1 className="task-text">Assignment-4 Page</h1>

      <div className="task-text" id="Task-1">
        <h2>Task {QuestionsArray[1]}</h2>
        <Task1 />
      </div>

      <div className="task-text" id="Task-2">
        <h2>Task {QuestionsArray[2]}</h2>
        <Task2 />
      </div>

      <div className="task-text" id="Task-3">
        <h2>Task {QuestionsArray[3]}</h2>
        <Task3 />
      </div>

      <div className="task-text" id="Task-4">
        <h2>Task {QuestionsArray[4]}</h2>
        <Task4 />
      </div>

      <div className="task-text" id="Task-5">
        <h2>Task {QuestionsArray[5]}</h2>
        <Task5 />
      </div>

      <div className="task-text" id="Task-6">
        <h2>Task {QuestionsArray[6]}</h2>
        <Task6 />
      </div>

      <div className="task-text" id="Task-7">
        <h2>Task {QuestionsArray[7]}</h2>
        <Task7 />
      </div>

      <div className="task-text" id="Task-8">
        <h2>Task {QuestionsArray[8]}</h2>
        <Task8 />
      </div>

      <div className="task-text" id="Task-9">
        <h2>Task {QuestionsArray[9]}</h2>
        <Task9 />
      </div>

      <div className="task-text" id="Task-10">
        <h2>Task {QuestionsArray[10]}</h2>
        <Task10 />
      </div>

      <div className="task-text" id="Task-11">
        <h2>Task {QuestionsArray[11]}</h2>
        <Task11 />
      </div>

      <div className="task-text" id="Task-12">
        <h2>Task {QuestionsArray[12]}</h2>
        <Task12 />
      </div>

      <div className="task-text" id="Task-13">
        <h2>Task {QuestionsArray[13]}</h2>
        <Task13 />
      </div>

      <div className="task-text" id="Task-13">
        <h2>Task {QuestionsArray[14]}</h2>
        <Task14 />
      </div>
    </>
  );
};

export default Assignment4;
