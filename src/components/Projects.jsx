import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Trip App",
      desc: "Flutter-based trip planner app with login, booking & feedback system.",
      github: "https://github.com/kanikasrinivasan/TRIP-PLANNER",
      tech: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Fake News Detection",
      desc: "AI/ML model using TF-IDF and Logistic Regression to detect fake news.",
      github: "https://github.com/kanikasrinivasan/fakenewsdetection-final",
      tech: ["Python", "Scikit-learn", "NLP"],
    },
    {
      title: "Smart Thermostat",
      desc: "IoT-based home automation for temperature monitoring and control.",
      github: "https://github.com/kanikasrinivasan/smart-thermostat",
      tech: ["IoT", "Arduino", "C++"],
    },
    {
     title: "Cybersecurity Threat Classification",
     desc: "Machine learning-based model for detecting and classifying cybersecurity threats using data analysis and predictive algorithms.",
     github: "https://github.com/kanikasrinivasan/Cybersecurity-Threat-Classification-Using-Machine-Learning",
     tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
},
{
  title: "E-commerce Backend",
  desc: "Simple backend built with Node.js, Express, and MongoDB to manage products, users, and orders for an e-commerce platform.",
  github: "https://github.com/kanikasrinivasan/Ecomm-Backend",
  tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
},
{
  
  title: "Netflix Power BI Dashboard",
  desc: "Interactive Power BI dashboard analyzing Netflix content by genre, country, and release trends for data-driven insights.",
  github: "https://github.com/kanikasrinivasan/netflix-powerbi-dashboard",
  tech: ["Power BI", "Data Visualization", "Excel", "DAX"],

},
{

  title: "Inventory Management System",
  desc: "Web application to manage product stock, suppliers, and sales using a Flutter mobile app development",
  tech: ["Flutter", "Firebase", "Dart"],
},

  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="project-tech">
              {p.tech.map((t, index) => (
                <span className="tech-tag" key={index}>
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
