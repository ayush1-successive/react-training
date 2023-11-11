import React from "react";
import GreetingComponent from "./questions/question1/GreetingComponent";
import UserCardComponent from "./questions/question2/UserCardComponent";
import WeatherComponent from "./questions/question3/WeatherComponent";
import CounterComponent from "./questions/question4/CounterComponent";
import TaskListComponent from "./questions/question5/TaskListComponent";
import ButtonComponent from "./questions/question6/ButtonComponent";
import { QuestionsArray } from "./QuestionsArray";
import "./index.css";

const Assignment1 = () => {
  const taskArray = [
    "Complete the Assignment",
    "Raise PR for review",
    "To Suggestion Work",
    "Finalize Review",
    "Merge the PR",
  ];

  return (
    <>
      <h1 className="task-text">Assignment-1 Page</h1>

      <div className="task-text" id="Task-1">
        <h2>{QuestionsArray[1]}</h2>
        <GreetingComponent />
      </div>

      <div className="task-text" id="Task-2">
        <h2>{QuestionsArray[2]}</h2>
        <UserCardComponent
          name="John Doe"
          email="john@gmail.com"
          avatar="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Blank&hatColor=Blue01&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=PastelGreen&graphicType=Resist&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Yellow"
        />
        <UserCardComponent
          name="Amy Shaw"
          email="amy22@gmail.com"
          avatar="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Selena&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Tanned"
        />
        <UserCardComponent
          name="Karl Max"
          email="karl7@gmail.com"
          avatar="https://avataaars.io/?avatarStyle=Transparent&topType=Eyepatch&accessoriesType=Blank&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Happy&eyebrowType=AngryNatural&mouthType=Smile&skinColor=Pale"
        />
      </div>

      <div className="task-text" id="Task-3">
        <h2>{QuestionsArray[3]}</h2>
        <WeatherComponent temperature={26} />
        <WeatherComponent temperature={7} />
      </div>

      <div className="task-text" id="Task-4">
        <h2>{QuestionsArray[4]}</h2>
        <CounterComponent />
      </div>

      <div className="task-text" id="Task-5">
        <h2>{QuestionsArray[5]}</h2>
        <TaskListComponent tasks={taskArray}></TaskListComponent>
      </div>

      <div className="task-text" id="Task-6">
        <h2>{QuestionsArray[6]}</h2>
        <ButtonComponent
          backgroundColor="blue"
          color="white"
          fontSize="20px"
          width="150px"
          height="50px"
          margin="10px"
        />
        <ButtonComponent
          backgroundColor="white"
          color="red"
          fontSize="20px"
          width="150px"
          height="50px"
          margin="20px"
        />
        <ButtonComponent
          backgroundColor="orange"
          color="blue"
          fontSize="20px"
          width="100px"
          height="50px"
          margin="20px"
        />
        <ButtonComponent
          backgroundColor="green"
          color="white"
          fontSize="20px"
          width="300px"
          height="80px"
          margin="40px"
        />
      </div>
    </>
  );
};

export default Assignment1;
