import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AI.GEN</div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
