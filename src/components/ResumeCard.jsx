// src/components/ResumeCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ResumeCard = ({ title, subtitle, date, description, className = "" }) => {
  return (
    <motion.div
      className={`relative bg-slate-800 rounded-xl p-6 shadow-lg border-l-4 border-sky-500 ${className}`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-3 top-6 w-6 h-6 bg-sky-500 rounded-full border-2 border-slate-900"></div>

      {/* Card Content */}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-300 font-medium">{subtitle}</p>
      <span className="text-sky-400 text-sm">{date}</span>
      <p className="mt-3 text-slate-300">{description}</p>
    </motion.div>
  );
};

export default ResumeCard;
