import React, { useEffect, useState } from "react";
import "./Asking.css"; // Import the updated CSS for heart animation

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate more hearts for a denser rain effect
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        ...Array.from({ length: 5 }).map(() => ({
          id: Math.random(),
          left: Math.random() * 100, // Random left position
          size: Math.random() * 30 + 10, // Random size between 10px and 40px
          duration: Math.random() * 4 + 2, // Different falling speeds
        })),
      ]);
    }, 200); // New batch of hearts every 0.2s for a denser effect

    // Stop generating after 15 seconds
    setTimeout(() => clearInterval(interval), 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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

      {/* Displaying the chosen gif with alt text */}
      <img className="App-gif" src={gif} alt={altText} />

      {/* Asking the special question with personalized name */}
      <p className="App-text">Since you are already my Valentine Mikaela </p>
      <p className="App-text">Mikaela will you still be my Valentine </p>
      <div>
        {/* Button for accepting the proposal */}
        <button className="App-button" onClick={handleAccept}>
          Yes
        </button>
        {/* Button for rejecting the proposal with dynamic text */}
        <button className="App-button" onClick={handleReject}>
          {noButtonText}
        </button>
      </div>
    </>
  );
};

export default Asking;
