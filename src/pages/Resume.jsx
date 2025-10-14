import React from "react";
import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import resumePDF from "../assets/resume.pdf";


const timelineData = [
  {
    type: "Education",
    icon: <FaGraduationCap />,
    title: "B.E in Computer Science and Technology",
    subtitle: "Vivekanandha College of Engineering for Women",
    date: "2022 - 2026",
    description:
      "Focused on full-stack development, AI, and data analytics. Completed projects using MERN and Flutter.",
  },
  {
    type: "Internship",
    icon: <FaBriefcase />,
    title: "Intern - Mobile App Development",
    subtitle: "Hackgenix Tech Pvt Ltd",
    date: "May 2024 - July 2024",
    description:
      "Developed full-stack web apps using React, Node, and MongoDB. Improved app performance by 25%.",
  },
];

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "HTML / CSS / JS",
  "Git & GitHub",
  "Flutter",
  "dart",
  "Figma / UI Design",
  "Python",
  "java"
];

const Resume = () => {
  return (
    <div className="resume-page">
      <header className="resume-header">
        <h1>Kanika Srinivasan</h1>
        <p>Full-Stack Developer |  Flutter Mobile App Development</p>
      </header>

      {/* Timeline Cards */}
      <div className="timeline-cards">
        {timelineData.map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="card-icon">{item.icon}</div>
            <div className="card-content">
              <span className="card-type">{item.type}</span>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <span className="card-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </section>

      {/* Download */}
      <div className="download-section">
        <a href={resumePDF} download="Kanika_Resume.pdf" className="download-btn">
          <FaDownload /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
