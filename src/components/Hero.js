import React from 'react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="stars"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Aaryan Mane</span>
          </h1>
          <p className="hero-subtitle">
            Backend Developer | Microservices Architect | Published Patent Co-Inventor
          </p>
          <p className="hero-description">
            Building scalable distributed systems with Java & Spring Boot.
            Production experience in banking microservices. Strong in REST APIs, async workflows, and system debugging.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Download CV</button>
            <button className="btn">View My Work</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <div className="avatar-inner">
              <span>AM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <div className="wheel"></div>
      </div>
    </section>
  );
};

export default Hero;

