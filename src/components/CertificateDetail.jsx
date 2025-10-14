import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Certificates array with images
const certificates = [
  {
    id: 1,
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "09/24",
    details: "This certification covers Python, statistics, data analysis, and machine learning fundamentals.",
    image: require("../assets/certificates/data_science.png"),
  },
  {
    id: 2,
    title: "Power BI Workshop",
    issuer: "Office Master",
    date: "03/24",
    details: "Learned advanced dashboarding, visualization, and Power BI data modeling.",
    image: require("../assets/certificates/power_bi.png"),
  },
  {
    id: 3,
    title: "Industrial IoT Workshop",
    issuer: "Industrial IoT Program",
    date: "03/24",
    details: 'Completed workshop on "Industrial IoT".',
    image: require("../assets/certificates/industrial_iot.png"),
  },
  {
    id: 4,
    title: "Fundamentals of Information Security",
    issuer: "Infosys | Springboard",
    date: "23/24",
    details: 'Completed course completion certificate.',
    image: require("../assets/certificates/infosys_springboard.png"),
  },
];

const CertificateDetail = () => {
  const { id } = useParams();
  const cert = certificates.find(c => c.id === parseInt(id));

  if (!cert)
    return (
      <p style={{ padding: "50px 10%", color: "#f5f5f5" }}>
        Certificate not found
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ padding: "50px 10%", color: "#f5f5f5", paddingBottom: "120px" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ marginBottom: "20px" }}
      >
        {cert.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <strong>Issuer:</strong> {cert.issuer}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <strong>Date:</strong> {cert.date}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {cert.details}
      </motion.p>

      {cert.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: "30px", textAlign: "center" }}
        >
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              maxWidth: "600px",
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 5px 20px rgba(0,188,212,0.3)",
            }}
          />
        </motion.div>
      )}

      {/* Fixed Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Link
          to="/certificate"
          style={{
            display: "inline-block",
            padding: "12px 30px",
            backgroundColor: "#00bcd4",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(0,188,212,0.4)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00e5ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00bcd4")}
        >
          ← Back to Certificates
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CertificateDetail;
