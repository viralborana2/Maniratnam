import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const Team = () => (
  <section id="team" className="py-5 mt-5" style={{ backgroundColor: 'transparent' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title mb-3 text-white">Our Team</h2>
        <h6 className="text-gold mb-4" style={{ letterSpacing: '3px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          A brief about our Team
        </h6>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="row g-4 justify-content-center"
      >
        {/* Mr. Aayush Kothari */}
        <motion.div variants={cardVariants} className="col-12 col-md-4">
          <div className="team-card h-100 p-4 text-center d-flex flex-column">
            <i className="bi bi-person-circle fs-1 text-gold mb-3 mx-auto"></i>
            <h4 className="text-white mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>Mr. Aayush Kothari</h4>
            <p className="text-gold mb-4" style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Finance & Liasioning
            </p>
            <div className="text-start mt-auto text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <p>Completed his Masters in Financial Management and has been in the real estate business for over 5 years.</p>
              <p>Acquired an in-depth knowledge of the real estate business and its Financial and Liasioning aspects.</p>
              <p className="mb-0">He brings in a fresh and dynamic perspective to the table.</p>
            </div>
          </div>
        </motion.div>

        {/* Mr. Neel Shemlani */}
        <motion.div variants={cardVariants} className="col-12 col-md-4">
          <div className="team-card h-100 p-4 text-center d-flex flex-column">
            <i className="bi bi-person-circle fs-1 text-gold mb-3 mx-auto"></i>
            <h4 className="text-dark mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>Mr. Neel Shemlani</h4>
            <p className="text-gold mb-4" style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Construction & Site Management
            </p>
            <div className="text-start mt-auto text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <p>With over a decade of experience in the development business, he has successfully funded and managed 5 projects across Mumbai and Pune.</p>
              <p className="mb-0">He has mastered the construction, designing and site management aspects of the real estate business, ensuring delivery of high-quality projects within committed timelines.</p>
            </div>
          </div>
        </motion.div>

        {/* Mr. Mahesh Parekh */}
        <motion.div variants={cardVariants} className="col-12 col-md-4">
          <div className="team-card h-100 p-4 text-center d-flex flex-column">
            <i className="bi bi-person-circle fs-1 text-gold mb-3 mx-auto"></i>
            <h4 className="text-dark mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 'bold' }}>Mr. Mahesh Parekh</h4>
            <p className="text-gold mb-4" style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Sales & Business Development
            </p>
            <div className="text-start mt-auto text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              <p>With over 40 years of experience in the Garment Manufacturing and Retail industry he has acquired extensive expertise of Sales and Marketing.</p>
              <p>He leads the Sales and Business Development side of the Firm.</p>
              <p className="mb-0">His immense knowledge of the business proves to be a valuable asset for the Firm.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Team;