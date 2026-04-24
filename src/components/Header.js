import React, { useState } from 'react';
import './styles/Header.css';

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="gradient-text">AM</span>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('patents')}>Patents</a></li>
              <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

