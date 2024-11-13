// src/components/Footer/Footer.js

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/chisomhenryg/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/Chisom.henryg?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://x.com/ChisomHenry91" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="https://www.instagram.com/11declan/profilecard/?igsh=bHN3dGxrMW5oYmE0" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://techcampusafrica.slack.com/team/U07BS3H727J" target="_blank" rel="noopener noreferrer">
            Slack
          </a>
          <a href="mailto:chisomhenryg@gmail.com">
            Gmail
          </a>
        </div>
        <a href="#top" className="back-to-top">
          Back to Top
        </a>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
