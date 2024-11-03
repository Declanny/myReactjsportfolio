// src/components/Contact/Contact.js

import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you&apos;d like to get in touch, feel free to reach out!</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-item">
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png" alt="Facebook" />
          <span>Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-item">
          <img src="https://static.vecteezy.com/system/resources/previews/031/737/227/non_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png" alt="X" />
          <span>X</span>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          <span>Instagram</span>
        </a>
        <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="social-item">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png" alt="Slack" />
          <span>Slack</span>
        </a>
        <a href="mailto:youremail@example.com" className="social-item">
          <img src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" alt="Gmail" />
          <span>Gmail</span>
        </a>
      </div>
      <button className="contact-button">Contact Me</button>
    </section>
  );
};

export default Contact;
