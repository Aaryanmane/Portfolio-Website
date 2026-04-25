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
      link: 'https://github.com/Aaryanmane/Lymphography-Classification-Tool',
      status: 'Completed'
    },
    {
      title: 'House Price Prediction',
      description: 'A machine learning project for predicting house prices using advanced regression models and feature engineering.',
      highlights: [
        'Data preprocessing and feature engineering',
        'Multiple regression model implementation',
        'Model evaluation and optimization',
        'Price prediction accuracy improvement'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Regression Models'],
      link: 'https://github.com/Aaryanmane/House-Price-Prediction',
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React showcasing projects, skills, and professional experience with smooth animations and interactive UI elements.',
      highlights: [
        'Responsive design across all devices',
        'Smooth scroll animations and transitions',
        'Interactive component-based architecture',
        'Production-ready deployment on Render'
      ],
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Development'],
      link: 'https://github.com/Aaryanmane/Portfolio-Website/tree/master',
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

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-small">
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

