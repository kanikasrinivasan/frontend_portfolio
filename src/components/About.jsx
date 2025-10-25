import React from "react";
import profileImg from "../assets/profile.jpg"; // adjust path if needed

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        {/* Left – Profile Image */}
        <img src={profileImg} alt="Kanika Profile" className="about-image" />

        {/* Right – About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Kanika</strong>, a final-year student and passionate developer who loves turning ideas into impactful digital experiences.
          </p>
          <p>
          I specialize in Flutter and the MERN Stack, creating smooth, user-friendly mobile and web applications. Alongside development, I’m deeply interested in Power BI and Data Analytics, transforming raw data into meaningful insights and smarter decisions.
          </p>
          <p>
            Driven by curiosity and creativity, I enjoy exploring how technology and data can work together to solve real-world problems. My goal is to keep learning, growing, and building innovative solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
