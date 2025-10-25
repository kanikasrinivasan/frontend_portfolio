import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
     {
      level: "Undergraduate (B.E Computer Science and technology)",
      school: "Vivekanandha College of Engineering for Women",
      year: "2022 - 2026",
      score: "8.5 / 10 CGPA",
      desc: "Currently pursuing Computer Science degree with focus on programming, algorithms, and databases.",
    },
    
    {
      level: "HSC (12th Grade)",
      school: "Vairms Matriculation Higher Secondary School",
      year: "2021",
      score: "67%",
      desc: "Specialized in Computer Science and Mathematics with practical exposure.",
    },
    {
      level: "SSLC (10th Grade)",
      school: "Sacred Heart Girls Higher Secondary School",
      year: "2020",
      score: "9.2 / 10 CGPA",
      desc: "Strong foundation in academics with focus on mathematics and science.",
    },
   
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-header">
              <FaGraduationCap className="edu-icon" />
              <h3 className="edu-level">{edu.level}</h3>
              <span className="edu-year">{edu.year}</span>
            </div>

            <p className="edu-school">{edu.school}</p>

            <div className="edu-score">
              <strong>Score:</strong> {edu.score}
            </div>

            <p className="edu-desc">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
