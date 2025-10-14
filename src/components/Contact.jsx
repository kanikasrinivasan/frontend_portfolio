import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCheck, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS Service ID
        "your_template_id",     // Replace with your EmailJS Template ID
        form.current,
        "your_public_key"       // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => setStatus(null), 4000); // hide after 4s
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email, phone, or use the form below.</p>

      {/* Contact Cards */}
      <div className="contact-cards">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kanikasrinivasan4@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-circle"><FaEnvelope /></div>
          <span>Gmail</span>
        </a>

        <a href="tel:9524577795" className="contact-card">
          <div className="icon-circle"><FaPhone /></div>
          <span>Call</span>
        </a>

        <a
          href="https://linkedin.com/in/kanika-srinivasan-8aab862b2"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-circle"><FaLinkedin /></div>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/kanikasrinivasan"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-circle"><FaGithub /></div>
          <span>GitHub</span>
        </a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" className="send-btn">Send Message</button>
      </form>

      {/* Popup Notification */}
      {status && (
        <div className={`popup ${status}`}>
          {status === "success" && <><FaCheck /> Message sent successfully!</>}
          {status === "error" && <><FaTimes /> Failed to send message!</>}
        </div>
      )}
    </section>
  );
};

export default Contact;
