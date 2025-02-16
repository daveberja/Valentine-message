import React, { useEffect, useState } from "react";
import kisses from "../kisses.gif";
import "./Asking.css";
import "./TapeAnimation.css";
import "./bg.css";
import "./Success.css";

// Import images dynamically
const images = [
  require("../01.jpg"),
  require("../02.jpg"),
  require("../03.jpg"),
  require("../04.jpg"),
  require("../05.jpg"),
  require("../06.jpg"),
  require("../07.jpg"),
  require("../08.jpg"),
  require("../09.jpg"),
  require("../10.jpg"),
];

const Success = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate heart rain animation
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        ...Array.from({ length: 3 }).map(() => ({
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 30 + 10,
          duration: Math.random() * 4 + 2,
        })),
      ]);
    }, 400);

    setTimeout(() => clearInterval(interval), 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App-success">
      {/* Moving Tape Effect */}
      <div className="tape-container">
        <div className="tape">
          {images.map((img, index) => (
            <div key={index} className="frame">
              <img src={img} alt={`Frame ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Displaying a cute kisses gif */}
      <div className="gif-container">
        <img className="App-gif" src={kisses} alt="Kisses" />
      </div>

      {/* Heart Rain Animation */}
      <div className="heart-rain">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="falling-heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Poem inside paper effect */}
      <div className="poem-paper">
        <p className="App-text-success">
          Since you said yes, I stand by your side, smiling,
          A moment painted in time, forever beguiling.
        </p>

        <p className="App-text-success">
          Having this date with you is joy untold, <br />
          A story of laughter, of love pure and bold. <br />
          Our adventure shall never falter nor fade, <br />
          But dance like the stars in twilight's cascade.
        </p>

        <p className="App-text-success">
          Your eyes, a gaze I could never turn from, <br />
          Your voice, a melody, soft and undone. <br />
          Your lips, the sweetest torment I crave, <br />
          And your love, the fate my heart shall brave.
        </p>

        <p className="App-text-date">16/02/2025</p>
      </div>
    </div>
  );
};

export default Success;
