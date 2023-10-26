import React from "react";
import "./App.css";
import WeatherComponent from "./components/WeatherComponent";
import CounterComponent from "./components/CounterComponent";
import TaskListComponent from "./components/TaskListComponent";
import ButtonComponent from "./components/ButtonComponent";
import GreetingComponent from "./components/GreetingComponent";
import UserCardComponent from "./components/UserCardComponent";

function App() {
  const taskArray = [
    "Complete the Assignment",
    "Raise PR for review",
    "To Suggestion Work",
    "Finalize Review",
    "Merge the PR",
  ];

  return (
    <>
      <div className="task-text" id="Task-1">
        <h2>
          Task-1: Create a functional component named Greeting that displays a
          simple "Hello, React!" message on the screen. Import and render the
          Greeting component in the App component.
        </h2>
        <GreetingComponent />
      </div>
      <div className="task-text" id="Task-2">
        <h2>
          Task-2: Create a functional component named UserCard that accepts the
          following props: name, email, and avatarURL. Use the props to display
          the user's name, email, and an image (avatar) in the UserCard
          component. Create multiple instances of the UserCard component with
          different user data.
        </h2>
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
        <h2>
          Task-3: Create a functional component named Weather that accepts a
          prop called temperature (a number). Display a message like "It's sunny
          today!" if the temperature is above 25°C and "It's cold today!" if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </h2>
        <WeatherComponent temperature={26} />
        <WeatherComponent temperature={7} />
      </div>
      <div className="task-text" id="Task-4">
        <h2>
          Task-4: Create a functional component named Counter that displays a
          count and two buttons: "Increment" and "Decrement". Implement event
          handlers for the "Increment" and "Decrement" buttons to increase and
          decrease the count. Display the updated count on the screen.
        </h2>
        <CounterComponent />
      </div>
      <div className="task-text" id="Task-5">
        <h2>
          Task-5: Create a functional component named TaskList that accepts an
          array of task names as a prop. Use the map function to render each
          task name as a list item. Import and render the TaskList component in
          the App component with an array of tasks.
          <TaskListComponent tasks={taskArray}></TaskListComponent>
        </h2>
      </div>
      <div className="task-text" id="Task-6">
        <h2>
          Task-6: Create a functional component named Button that accepts props
          for text and color. Style the button using inline styles or CSS
          classes based on the color prop. Import and render the Button
          component in the App component with different text and color props.
        </h2>
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
}

export default App;
