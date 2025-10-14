import React from "react";
import { FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";

const certificates = [
  {
    id: 1,
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "09/24",
    details: "This certification covers Python, statistics, data analysis, and machine learning fundamentals."
  },
  {
    id: 2,
    title: "Power BI Workshop",
    issuer: "Office Master",
    date: "03/24",
    details: "Learned advanced dashboarding, visualization, and Power BI data modeling."
  },

  {
    id: 3,
    title: "Industrial IoT Workshop",
    issuer: "Industrial IoT Program",
    date: "03/24",
    details: 'Completed workshop on "Industrial IoT".'
  },
  {
  id: 4,
    title: "Fundamentals of Information Security",
    issuer: "Infosys|Springboard",
    date: "23/24",
    details: 'Completed course completion certificate".',
    
  },
];

const Certificate = () => {
  return (
    <section className="certificate-section" id="certificate">
      <h2 className="certificate-title">Certificates</h2>
      <div className="certificate-container">
        {certificates.map(cert => (
          <Link
            to={`/certificate/${cert.id}`}
            className="certificate-card"
            key={cert.id}
          >
            <div className="cert-header">
              <FaCertificate className="cert-icon" />
              <h3 className="cert-title">{cert.title}</h3>
              <span className="cert-date">{cert.date}</span>
            </div>
            <p className="cert-issuer">{cert.issuer}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
