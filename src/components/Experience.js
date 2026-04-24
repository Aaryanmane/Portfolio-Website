import React from 'react';
import './styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Technology Apprentice',
      company: 'Standard Chartered',
      location: 'Chennai, India',
      duration: 'Jul 2025 – Jul 2026',
      responsibilities: [
        'Developed microservices-based backend applications using Java and Spring Boot',
        'Participated in High-Level Design discussions and implemented scalable backend services',
        'Designed REST APIs for internal services and integrations',
        'Implemented exception handling and resolved production issues including DB locking and message failures',
        'Managed Dead Letter Queue (DLQ) events in asynchronous workflows',
        'Developed cron jobs and background processes for scheduled data tasks',
        'Built 3 delivery workers (Solace, webhook and email) using JSONata for JSON-to-JSON data transformation'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'DLQ', 'JSONata', 'Solace']
    },
    {
      title: 'Intern',
      company: 'MDI NetworX',
      location: 'Pune, India',
      duration: 'Aug 2023 - Oct 2023',
      responsibilities: [
        'Used Python libraries for data extraction, preprocessing, and analysis',
        'Built experimental models using Python, TensorFlow, and Flask',
        'Performed exploratory data analysis to identify correlations in datasets',
        'Developed machine learning pipelines and model optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'Flask', 'Data Analysis', 'Machine Learning']
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content card">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.title}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-location">📍 {exp.location}</span>
                  <span className="exp-duration">📅 {exp.duration}</span>
                </div>
                <ul className="resp-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

