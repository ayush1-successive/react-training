// Task-8

import { useState, useEffect } from "react";
import "./SlideShow.css";
import "../../index.css";

const SlideComponent = () => {
  const imageUrls = [
    "/images/image-1.jpg",
    "/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
    "/images/image-6.jpg",
    "/images/image-7.jpg",
    "/images/image-8.jpg",
    "/images/image-9.jpg",
    "/images/image-10.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [frameDuration, setFrameDuration] = useState(2000);
  const [animationState, setAnimationState] = useState(false);

  const handleFrameDuration = (event) => {
    // Time interval cannot be negative.
    const newInterval = Math.max(0, Number(event.target.value));
    event.target.value = newInterval;
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
        placeholder="Enter interval in ms."
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
