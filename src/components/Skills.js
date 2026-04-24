import React from 'react';
import './styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Java', proficiency: 90 },
        { name: 'Python', proficiency: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', proficiency: 90 },
        { name: 'REST APIs', proficiency: 95 },
        { name: 'Hibernate', proficiency: 85 },
        { name: 'Maven/Gradle', proficiency: 80 },
        { name: 'JUnit', proficiency: 85 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'Database Management', proficiency: 80 }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Observability', proficiency: 80 },
        { name: 'Vulnerability Handling', proficiency: 75 },
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 80 },
        { name: 'IntelliJ IDEA', proficiency: 95 }
      ]
    },
    {
      category: 'Specialized',
      skills: [
        { name: 'DLQ Management', proficiency: 85 },
        { name: 'JSONata', proficiency: 80 },
        { name: 'Async Workflows', proficiency: 90 },
        { name: 'Solace Messaging', proficiency: 80 },
        { name: 'Machine Learning', proficiency: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category card">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

