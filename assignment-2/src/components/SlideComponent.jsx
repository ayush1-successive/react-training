import "./SlideShow.css";
import "./ButtonStyle.css";
import { useState, useEffect } from "react";

// Task-8
const SlideComponent = () => {
  const imageUrls = [
    "/Images/task-8/image-1.jpg",
    "/Images/task-8/image-2.jpg",
    "/Images/task-8/image-3.jpg",
    "/Images/task-8/image-4.jpg",
    "/Images/task-8/image-5.jpg",
    "/Images/task-8/image-6.jpg",
    "/Images/task-8/image-7.jpg",
    "/Images/task-8/image-8.jpg",
    "/Images/task-8/image-9.jpg",
    "/Images/task-8/image-10.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [frameDuration, setFrameDuration] = useState(2000);
  const [animationState, setAnimationState] = useState(false);

  const handleFrameDuration = (event) => {
    // Multiply value by 1000 to set interval in ms.
    // Min interval should be 500 ms.
    const newInterval = Math.max(500, Number(event.target.value) * 1000);
    setFrameDuration(newInterval);
  };

  useEffect(() => {
    if (animationState) {
      const timerID = setInterval(() => {
        setCurrentImage((prevState) => (prevState + 1) % 10);
      }, frameDuration);

      return () => clearInterval(timerID);
    }
  }, [animationState, frameDuration]);

  return (
    <>
      <div>
        <img className="my-slide" src={imageUrls[currentImage]} alt="task-8" />
      </div>

      <input
        className="button-style"
        type="number"
        placeholder="Enter interval in sec"
        onChange={(event) => handleFrameDuration(event)}
      />

      <button className="button-style" onClick={() => setAnimationState(false)}>
        Pause
      </button>
      <button className="button-style" onClick={() => setAnimationState(true)}>
        Play
      </button>
    </>
  );
};

export default SlideComponent;
