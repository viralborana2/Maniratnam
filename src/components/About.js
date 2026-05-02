import { motion } from "framer-motion";

const About = () => (
<section id="about" className=" text-center">
  <div className="container py-5">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto col-md-10"
    >
      <h2 className="section-title display-4 mb-5">About</h2>
      <h6 className="text-gold mb-3" style={{ letterSpacing: '3px', fontWeight: 'bold' }}>
        REDEFINING REAL ESTATE
      </h6>
      
      <div className="row g-4 justify-content-center mt-4">
        {/* Value 1 */}
        <div className="col-6 col-md-3 value-item">
          <i className="bi bi-tree fs-1 text-gold"></i>
          <p className="value-label">Peaceful<br/>Surroundings</p>
        </div>
        
        {/* Value 2 */}
        <div className="col-6 col-md-3 value-item">
          <i className="bi bi-building-check fs-1 text-gold"></i>
          <p className="value-label">Thoughtfully<br/>Designed</p>
        </div>
        
        {/* Value 3 */}
        <div className="col-6 col-md-3 value-item">
          <i className="bi bi-gem fs-1 text-gold"></i>
          <p className="value-label">Premium<br/>Amenities</p>
        </div>
        
        {/* Value 4 */}
        <div className="col-6 col-md-3 value-item">
          <i className="bi bi-shield-lock fs-1 text-gold"></i>
          <p className="value-label">Trusted<br/>Developer</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>
);

export default About;