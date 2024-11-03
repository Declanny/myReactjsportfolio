import  { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="header-container">
      <header>
        <nav className="nav-group">
          <a
            href="#home"
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
