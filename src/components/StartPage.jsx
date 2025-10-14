import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span>Kanika’s Portfolio</span>
      </motion.h1>

      <motion.button
        className="start-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/dashboard")}
      >
        Get Started 🚀
      </motion.button>
    </div>
  );
};

export default StartPage;
