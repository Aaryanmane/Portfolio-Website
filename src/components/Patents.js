import React from 'react';
import './styles/Patents.css';

const Patents = () => {
  const patents = [
    {
      title: 'AI-Driven Code Review Assistant System',
      applicationNo: '202541123013',
      publicationNo: 'IN202541123013 A',
      publishedDate: 'Jan 2026',
      country: 'India',
      description: 'Co-inventor of an AI-powered code review system providing automated debugging assistance, optimization suggestions, and coding best practices guidance.',
      features: [
        'Teacher-student architecture for efficient deployment',
        'Fine-tuned language models',
        'Automated debugging assistance',
        'Optimization suggestions',
        'Coding best practices guidance',
        'Optimized for resource-constrained devices'
      ],
      role: 'Co-Inventor'
    }
  ];

  return (
    <section id="patents" className="section patents">
      <div className="container">
        <h2 className="section-title">Patents & Innovation</h2>
        <div className="patents-content">
          {patents.map((patent, index) => (
            <div key={index} className="patent-card card">
              <div className="patent-ribbon">
                <span>Published</span>
              </div>

              <div className="patent-header">
                <h3 className="patent-title">{patent.title}</h3>
                <span className="patent-role">{patent.role}</span>
              </div>

              <div className="patent-metadata">
                <div className="metadata-item">
                  <label>Publication Date</label>
                  <span>{patent.publishedDate}</span>
                </div>
                <div className="metadata-item">
                  <label>Country</label>
                  <span>{patent.country}</span>
                </div>
                <div className="metadata-item">
                  <label>Application No.</label>
                  <span className="mono">{patent.applicationNo}</span>
                </div>
                <div className="metadata-item">
                  <label>Publication No.</label>
                  <span className="mono">{patent.publicationNo}</span>
                </div>
              </div>

              <p className="patent-description">{patent.description}</p>

              <div className="patent-features">
                <h4>Key Features</h4>
                <div className="features-list">
                  {patent.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="patent-actions">
                <button className="btn btn-small">View Patent →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;

