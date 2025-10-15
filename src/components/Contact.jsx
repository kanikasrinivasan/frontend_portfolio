import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCheck, FaTimes } from "react-icons/fa";
 // Make sure to add your CSS here

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const BACKEND_URL = "https://backend-portfolio-4-e60x.onrender.com"; // Replace with your Render backend URL

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.current.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Reach out via email, phone, or use the form below!</p>

      {/* Contact Cards */}
      <div className="contact-cards">
        <a
          href="mailto:kanikasrinivasan4@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="icon-circle"><FaEnvelope /></div>
          <span>Email</span>
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
