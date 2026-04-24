import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Lymphographic Data Classification Web App',
      description: 'A machine learning tool for classifying lymphography medical data with preprocessing and model optimization workflows.',
      highlights: [
        'Built ML classification model with TensorFlow',
        'Implemented full preprocessing pipeline',
        'Developed Flask-based web interface',
        'Optimized model performance and accuracy'
      ],
      technologies: ['Python', 'TensorFlow', 'Flask', 'Machine Learning', 'Data Analysis'],
      link: '#',
      status: 'Completed'
    },
    {
      title: 'Event-Driven Delivery Workers System',
      description: 'Built 3 production-grade delivery workers (Solace, webhook, email) with JSONata transformation for event-driven workflows.',
      highlights: [
        'Implemented JSON-to-JSON transformation using JSONata',
        'Built asynchronous event processing pipeline',
        'Integrated Solace message broker',
        'Webhook and email delivery integration'
      ],
      technologies: ['Java', 'Spring Boot', 'Solace', 'JSONata', 'Event-Driven Architecture'],
      link: '#',
      status: 'Production'
    },
    {
      title: 'REST API Gateway with DLQ Management',
      description: 'Scalable REST API services with comprehensive error handling and Dead Letter Queue management for production banking systems.',
      highlights: [
        'Designed scalable API architecture',
        'Implemented DLQ event processing',
        'Exception handling and recovery mechanisms',
        'Production-grade observability'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'DLQ', 'Database Management'],
      link: '#',
      status: 'Production'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status-badge status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4>Key Features</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <a href={project.link} className="btn btn-small">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

