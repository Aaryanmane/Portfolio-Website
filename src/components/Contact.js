import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <label>Email</label>
                  <a href="mailto:aaryanrahulmane@gmail.com">aaryanrahulmane@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <label>Phone</label>
                  <a href="tel:+919420200867">+91 9420200867</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <label>Location</label>
                  <span>Pune, India</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/aaryan-mane" className="social-btn" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" className="social-btn" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {submitted && <div className="success-message">✓ Message sent successfully!</div>}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

