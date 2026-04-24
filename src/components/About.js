import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Backend Developer with hands-on production experience building microservices
              in a high-scale banking environment. I specialize in designing and implementing
              robust REST APIs, managing complex asynchronous workflows, and debugging distributed systems.
            </p>
            <p>
              As a published patent co-inventor, I combine technical depth with innovation.
              I'm passionate about building scalable systems that solve real-world problems,
              and I'm always eager to learn cutting-edge technologies.
            </p>
            <p>
              Currently based in Pune, India, with a strong foundation from my internship experiences
              and ongoing professional development in enterprise-level systems.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">1</div>
                <div className="stat-label">Published Patent</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Delivery Workers Built</div>
              </div>
              <div className="stat">
                <div className="stat-number">1+</div>
                <div className="stat-label">Year Experience</div>
              </div>
            </div>
          </div>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>System Design</h3>
              <p>Expert in microservices architecture and scalable REST APIs</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <h3>Async Workflows</h3>
              <p>Proficient with event-driven architectures and DLQ management</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Debugging</h3>
              <p>Strong in production issue resolution and system observability</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>Co-inventor with published patent in AI-driven code review systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

