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
            I'm <strong>Kanika</strong>, a passionate developer skilled in Flutter, React, and AI/ML.
          </p>
          <p>
            I love building elegant, user-friendly applications and exploring innovative technologies
            that solve real-world problems.
          </p>
          <p>
            My goal is to craft meaningful digital experiences and continuously improve my skills to deliver
            high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
