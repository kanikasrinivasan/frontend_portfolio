import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaBrain, FaLaptopCode } from "react-icons/fa";

const internships = [
  {
    id: 1,
    title: "Mobile App Development Intern",
    company: "Hackgenix Tech Pvt Ltd.",
    period: "06/2025 – Present",
    details:
      "Crafting clean, responsive Flutter apps with Firebase, blending UI/UX design and live data features for smooth user experiences.",
    icon: <FaMobileAlt size={24} color="#00e5ff" />,
  },
  {
    id: 2,
    title: "AI & ML Intern",
    company: "Elevate Labs",
    period: "15/25",
    details:
      "Built and trained ML models in Python using scikit-learn, focusing on classification, prediction, and image tasks. Strengthened skills in data handling, evaluation metrics, and algorithm optimization.",
    icon: <FaBrain size={24} color="#00e5ff" />,
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Prodigy Infotech (Virtual)",
    period: "02/2025",
    details:
      "Designed and developed responsive web pages using HTML, CSS, JavaScript, and React basics, with focus on modern UI and user experience.",
    icon: <FaLaptopCode size={24} color="#00e5ff" />,
  },
];

const Internship = () => {
  return (
    <section
      style={{
        padding: "50px 10%",
        color: "#f5f5f5",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        minHeight: "100vh",
      }}
      id="internship"
    >
      <h2
        style={{ textAlign: "center", marginBottom: "50px", color: "#00e5ff" }}
      >
        Internships
      </h2>

      <div style={{ position: "relative", paddingLeft: "50px" }}>
        {/* Vertical timeline line with moving glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "25px",
            width: "6px",
            height: "100%",
            borderRadius: "3px",
            backgroundColor: "#00bcd4",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              width: "100%",
              height: "30%",
              background:
                "linear-gradient(180deg, rgba(0, 255, 255, 0.7), rgba(0,188,212,0))",
              borderRadius: "3px",
            }}
          />
        </div>

        {internships.map((intern, index) => (
          <motion.div
            key={intern.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,188,212,0.5)" }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: "50px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,188,212,0.3)",
              background:
                "linear-gradient(135deg, rgba(0,188,212,0.1), rgba(0,188,212,0.05))",
              cursor: "pointer",
            }}
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              style={{
                position: "absolute",
                left: "-38px",
                top: "20px",
                width: "20px",
                height: "20px",
                backgroundColor: "#00e5ff",
                borderRadius: "50%",
                border: "3px solid #141e30",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Floating icon inside dot */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {intern.icon}
              </motion.div>
            </motion.div>

            {/* Horizontal line from dot to card */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
              style={{
                position: "absolute",
                top: "29px",
                left: "-8px",
                height: "3px",
                backgroundColor: "#00e5ff",
              }}
            />

            <h3 style={{ marginBottom: "10px", color: "#00e5ff" }}>{intern.title}</h3>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{intern.company}</p>
            <p style={{ fontStyle: "italic", marginBottom: "15px" }}>{intern.period}</p>
            <p style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>{intern.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
