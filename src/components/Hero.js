// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

// Hero.jsx
const Hero = () => (
  <section id="home" className="hero-section text-center py-5">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Top small text */}
        <p className="hero-subtitle mb-0" style={{ fontSize: '1.1rem', letterSpacing: '5px' }}>
          MANIRATNAM SERENE
        </p>

        {/* Main Title */}
        <h1 className="hero-title">Launching Soon</h1>
        
        {/* Ornamental Divider */}
        <div className="gold-divider"></div>

        <p className="fst-italic mb-4" style={{ fontSize: '1.4rem', color: '#fff' }}>
          Crafted For Peaceful Living
        </p>

        {/* Location Text */}
        <div className="text-gold-bright mb-2" style={{ fontSize: '0.9rem', fontWeight: '700' }}>
          IN THE HEART OF BHANDUP (E)
        </div>
        
        <h3 className="fw-light text-white mb-5" style={{ letterSpacing: '2px', opacity: 0.9 }}>
          LUXURY 1 & 2 BHK RESIDENCES
        </h3>
        
        <div className="d-flex gap-4 justify-content-center mt-4">
          <a href="#projects" className="btn btn-gold px-5 py-3 fw-bold">VIEW PROJECT</a>
          <a href="#contact" className="btn btn-outline-gold px-5 py-3 fw-bold">ENQUIRE NOW</a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;