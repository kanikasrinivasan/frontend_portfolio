import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email, phone, or connect with me on LinkedIn & GitHub!</p>

      <div className="contact-cards">
        {/* Email */}
        <a href="gmail kanikasrinivasan4@gmail.com" className="contact-card">
          <div className="icon-circle"><FaEnvelope /></div>
          <span>gmail</span>
        </a>

        {/* Phone */}
        <a href="tel: 9524577795" className="contact-card">
          <div className="icon-circle"><FaPhone /></div>
          <span>9524577795</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/kanika-srinivasan-8aab862b2" target="_blank" rel="noreferrer" className="contact-card">
          <div className="icon-circle"><FaLinkedin /></div>
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/kanikasrinivasan" target="_blank" rel="noreferrer" className="contact-card">
          <div className="icon-circle"><FaGithub /></div>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
