import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaBrain, 
  FaUser, 
  FaProjectDiagram, 
  FaEnvelope, 
  FaGraduationCap, 
  FaCertificate, 
  FaBriefcase,
  FaFileAlt
} from "react-icons/fa";

// ✅ Import your resume PDF
import resumePDF from "../assets/resume.pdf";


const Dashboard = () => {
  const navigate = useNavigate();

  const tiles = [
    { name: "About", icon: <FaUser />, path: "/about" },
    { name: "Skills", icon: <FaBrain />, path: "/skills" },
    { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
    { name: "Internship", icon: <FaBriefcase />, path: "/internship" },
    { name: "Education", icon: <FaGraduationCap />, path: "/education" },
    { name: "Certification", icon: <FaCertificate />, path: "/certificate" },
    { name: "Resume", icon: <FaFileAlt />, path: "/resume" },
  ];

  // ✅ Function to download resume
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Kanika_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard">
      <h1>Kanikasrinivasan's Portfolio</h1>

      <div className="tile-container">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`tile ${t.name === "Resume" ? "resume-tile" : ""}`}
            onClick={() => {
              if (t.name === "Resume") {
                handleDownloadResume();
              } else {
                navigate(t.path);
              }
            }}
          >
            <div className="icon">{t.icon}</div>
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
