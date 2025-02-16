import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const BackgroundMusic = () => {
  useEffect(() => {
    // Function to set volume and play the music
    const enableAudio = () => {
      const iframe = document.getElementById("music-iframe");
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"setVolume","args":[25]}', // Set volume to 25%
          "*"
        );
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}', // Play the video
          "*"
        );
      }
    };

    setTimeout(enableAudio, 2000); // Ensure video is ready before playing

    // Add event listeners to enable audio if blocked by autoplay restrictions
    window.addEventListener("click", enableAudio);
    window.addEventListener("keydown", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("keydown", enableAudio);
    };
  }, []);

  return ReactDOM.createPortal(
    <iframe
      id="music-iframe"
      className="background-music"
      src="https://www.youtube.com/embed/GOXGbr10i8s?autoplay=1&loop=1&playlist=GOXGbr10i8s&enablejsapi=1"
      title="Pasilyo - 7clouds"
      frameBorder="0"
      allow="autoplay"
      style={{ display: "none" }} // Hide iframe to avoid UI clutter
    ></iframe>,
    document.getElementById("music-root")
  );
};

export default BackgroundMusic;
