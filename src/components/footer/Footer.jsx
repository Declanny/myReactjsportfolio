// src/components/Footer/Footer.js

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
            Slack
          </a>
          <a href="mailto:youremail@example.com">
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
