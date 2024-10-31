import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const readText = () => {
    const text = "Hello, I'm Chisom, a Software Engineer with a passion for business. I enjoy creating innovative solutions and supporting others.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1>Hello, I'm Chisom</h1>
          <p>
            Software Engineer with a passion for business.
            <br /> I enjoy creating innovative solutions and supporting others. <br /> I'm very active on LikedIn
          </p>
          <div className="audio-indicator" onClick={readText}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/microphone.png"
              alt="Microphone Icon"
              className="microphone-icon"
            />
            <div className={`wave-indicator ${isSpeaking ? 'active' : ''}`}>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <div className="header-image">
          <img src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032518/chef6_yeyo3z.jpg" alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Home;
