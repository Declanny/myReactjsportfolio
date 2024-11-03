
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav className="nav-group">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
