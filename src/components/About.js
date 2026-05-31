import React from "react";
import { motion } from "framer-motion";
import Team from "./Team";

// Animation Variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const About = () => (
  <section id="about" className="py-5" style={{ backgroundColor: 'transparent' }}>
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto col-lg-10 text-center"
      >
        <motion.h2 variants={itemVariants} className="section-title mb-4">
          About Us
        </motion.h2>
        <motion.h6 variants={itemVariants} className="text-gold mb-4" style={{ letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Redefining Real Estate
        </motion.h6>
        
        {/* Company Profile Summary */}
        <motion.div variants={itemVariants} className="mb-5 px-md-5" style={{ color: 'rgb(255, 255, 255)', fontSize: '0.95rem', lineHeight: '1.8' }}>
          <p className="mb-4">
            MANIRATNAM INFINITY DEVELOPERS LLP is a young company founded by veterans of the industry having more than 30 years of collective experience of the real estate business. 
          </p>
          <p>
            Our vision is to be a trusted real estate developer known for commitment to transparency, trust, superior craftmanship and timely delivery of projects. Every project is accomplished by meticulous planning, premium quality materials, and strict adherence to compliance standards.
          </p>
        </motion.div>

        <motion.h6 variants={itemVariants} className="mb-5 text-uppercase text-gold" style={{ letterSpacing: '3px', fontSize: '0.85rem', fontWeight: '600' }}>
          Our Core Values
        </motion.h6>
        
        {/* Animated Staggered Core Values */}
        <motion.div 
          variants={containerVariants}
          className="row g-4 justify-content-center"
        >
          {[
            { icon: "bi-wallet2", title: "ZERO DEBT", sub: "SELF-FINANCING" },
            { icon: "bi-shield-check", title: "INTEGRITY", sub: "HIGH ETHICS" },
            { icon: "bi-award", title: "EXCELLENCE", sub: "SUPERIOR QUALITY" },
            { icon: "bi-clock-history", title: "TIMELY DELIVERY", sub: "STAKEHOLDER SATISFACTION" },
            { icon: "bi-lightbulb", title: "INNOVATION", sub: "PROGRESSIVE DESIGN" }
          ].map((value, index) => (
            <motion.div variants={itemVariants} className="col-6 col-md-4 col-lg-2 value-item" key={index}>
              <i className={`bi ${value.icon}`}></i>
              <div className="value-label">{value.title}</div>
              <div style={{ fontSize: '0.6rem', color: 'rgb(255, 255, 255)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px', opacity: 0.8 }}>
                {value.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Team />
      </motion.div>
    </div>
  </section>
);

export default About;