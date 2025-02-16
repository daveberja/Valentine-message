import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import BackgroundMusic from "./components/BackgroundMusic"; // Import Background Music
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);
    const rejectionTexts = [
      "Are you sure?",
      "Maybe try again?",
      "Think again!",
      "Pakipot kapa eh",
      "Bawal po mag no talaga",
      "PLS SAY YES!!!",
    ];
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      {/* Background Music Component */}
      <BackgroundMusic />
      

      <div className="App-body">
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
