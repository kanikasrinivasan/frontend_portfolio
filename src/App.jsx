import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import CertificateDetail from "./components/CertificateDetail"; 
import Resume from "./pages/Resume";
// Import detail page
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} /> {/* Add dynamic route */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
