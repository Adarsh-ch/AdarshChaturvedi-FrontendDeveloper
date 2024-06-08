import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-div">
      <div className="logo">AI.GEN</div>
      <nav className="nav">
        <ul>
          {/* <li><a href="#about">About</a></li> */}
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#Tokenomics">Tokenomics</a></li>
        </ul>
      </nav>
      </div>
      <div className="buttons">
        <button>Whitepaper</button>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
