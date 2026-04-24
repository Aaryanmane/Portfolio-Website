import React from 'react';
import './styles/Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Vellore Institute of Technology',
      degree: 'B.Tech in Computer Science',
      specialization: 'Business Systems',
      duration: '2021 - 2025',
      grade: 'Current',
      highlights: ['Coursework in Distributed Systems', 'Database Management', 'Software Engineering']
    },
    {
      institution: 'Namo Rims',
      degree: 'HSC Boards',
      specialization: 'Senior Secondary',
      duration: '2019 - 2021',
      grade: 'Completed',
      highlights: ['Science Stream', 'MSTATEQ certification']
    },
    {
      institution: 'Kendriya Vidyalaya',
      degree: 'CBSE Boards',
      specialization: 'Secondary Education',
      duration: '2009 - 2019',
      grade: 'Completed',
      highlights: ['CBSE Curriculum', 'Strong foundation in Science & Mathematics']
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item card">
              <div className="edu-timeline-dot"></div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3 className="institution">{edu.institution}</h3>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
                <div className="degree-info">
                  <h4 className="degree">{edu.degree}</h4>
                  <span className="specialization">{edu.specialization}</span>
                </div>
                <div className="edu-highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
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

export default Education;

