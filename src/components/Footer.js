import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Aaryan Mane</h3>
            <p>Backend Developer | Microservices Architect | Published Patent Co-Inventor</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#patents">Patents</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://linkedin.com/in/aaryan-mane" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:aaryanrahulmane@gmail.com">Email</a></li>
              <li><a href="tel:+919420200867">Phone</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>Pune, India</p>
            <p className="contact-info">
              📧 aaryanrahulmane@gmail.com<br />
              📱 +91 9420200867
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aaryan Mane. All rights reserved.</p>
          <p>Designed & Built with <span className="heart">❤️</span> using React, HTML & CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

