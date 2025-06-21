import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:manikantaprasad8622@gmail.com" className="contact-btn" target="_blank" rel="noreferrer">
          <FaEnvelope className="icon" /> Gmail
        </a>
        <a href="https://github.com/mkprasadp/" className="contact-btn" target="_blank" rel="noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/manikanta-prasad-padala-b46a44266/" className="contact-btn" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
