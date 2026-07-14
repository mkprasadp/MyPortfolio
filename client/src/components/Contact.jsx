import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useReveal from "./useReveal";

const Contact = () => {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="section-head reveal" ref={headRef}>
          <span className="tag on-dark">O(1) — contact</span>
          <h2>Let's build something.</h2>
          <p>Open to internships, entry-level roles, and interesting collaborations.</p>
        </div>

        <div className="contact-grid reveal" ref={gridRef}>
          <a href="mailto:manikantaprasad8622@gmail.com" className="contact-card">
            <div className="icn"><FaEnvelope /></div>
            <div>
              <div className="lbl">EMAIL</div>
              <div className="val">manikantaprasad8622@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/mkprasadp/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="icn"><FaGithub /></div>
            <div>
              <div className="lbl">GITHUB</div>
              <div className="val">github.com/mkprasadp</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/manikanta-prasad-padala-b46a44266/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="icn"><FaLinkedin /></div>
            <div>
              <div className="lbl">LINKEDIN</div>
              <div className="val">Manikanta Prasad Padala</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;