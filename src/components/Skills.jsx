import React from "react";
import "../App.css"; // ensure path is correct

const Skills = () => {
  const skills = [
    { name: "Communication", type: "Soft Skill" },
    { name: "Teamwork", type: "Soft Skill" },
    { name: "Problem Solving", type: "Soft Skill" },
    { name: "Python", type: "Technical Skill" },
    { name: "Flutter", type: "Technical Skill" },
    { name: "Power BI", type: "Technical Skill" },
    { name: "React", type: "Technical Skill" },
    { name: "UI/UX Design", type: "Technical Skill" },
    { name: "Machine Learning", type: "Technical Skill" },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className={`skill-bubble ${index % 2 === 1 ? "staggered" : ""}`} key={index}>
            {skill.name}
            <span>{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
