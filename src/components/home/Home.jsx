import React from 'react';
import './Home.css';

const Home = () => {
  const logoUrl = 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032518/chef6_yeyo3z.jpg'; // Replace with your actual image URL

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
         
          <h1>Hello, I'm Chisom</h1>
          <p>Software Engineer with a passion for business. <br /> I enjoy creating innovative solutions and supporting others. <br />Very engaged on Twitter.</p>
        </div>
        <div className="header-image">
          <img src={logoUrl} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Home;
