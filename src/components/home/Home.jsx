import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [badgePosition, setBadgePosition] = useState({ top: 0, right: 0 });

  const readText = () => {
    const text = "Hello, I'm Chisom, a Software Engineer with a passion for business. I enjoy creating innovative solutions and supporting others.";
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    speech.onstart = () => setIsSpeaking(true);
    speech.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    const adjustBadgePosition = () => {
      const image = document.querySelector('.header-image img');
      if (image) {
        setBadgePosition({
          top: -0.1 * image.offsetHeight,
          right: -0.1 * image.offsetWidth,
        });
      }
    };
    
    adjustBadgePosition();
    window.addEventListener('resize', adjustBadgePosition);
    return () => window.removeEventListener('resize', adjustBadgePosition);
  }, []);

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1>Hello, I'm Chisom</h1>
          <p>
            Software Engineer with a passion for business.
            <br /> I enjoy creating innovative solutions and supporting others. <br /> I'm very active on LinkedIn
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
        <div className="image-container">
          <div className="header-image">
            <img src="https://res.cloudinary.com/dqbbm0guw/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1727183081/portfolio_z2ldxh.jpg" alt="Profile" />
          </div>
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1730574869/icons8-verified-50_t63xgm.png"
            alt="Verification Badge"
            className="verification-badge"
            style={{
              top: badgePosition.top,
              right: badgePosition.right,
              width: '40px',
              height: '40px',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
