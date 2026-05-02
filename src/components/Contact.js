import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mdayjpbw", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Inquiry Sent Successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send.");
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          
          <motion.div 
            className="col-lg-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title display-4 mb-5">
              Contact
            </h2>
            <h6 className="text-gold mb-4" style={{ letterSpacing: '3px', fontWeight: 'bold' }}>
              LEAVE A MESSAGE
            </h6>
            
            <form onSubmit={handleSubmit} className="row g-4 text-start">
              <div className="col-md-12">
                <input type="text" name="name" className="form-control rounded-pill dark-form-input" placeholder="Your Name*" required />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" className="form-control rounded-pill dark-form-input" placeholder="Email*" required />
              </div>
              <div className="col-md-6">
                <input type="tel" name="phone" className="form-control rounded-pill dark-form-input" placeholder="Phone Number*" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="pincode" className="form-control rounded-pill dark-form-input" placeholder="Pincode*" required />
              </div>
              <div className="col-md-6">
                <select name="interest" className="form-select rounded-pill dark-form-input">
                  <option value="">Interested in?*</option>
                  <option value="2bhk">2 BHK Apartment</option>
                  <option value="3bhk">3 BHK Apartment</option>
                </select>
              </div>
              <div className="col-12">
                <textarea name="message" className="form-control dark-form-input rounded-4" rows="4" placeholder="Your Message..."></textarea>
              </div>
              
              <div className="col-12 text-center mt-5">
                <button type="submit" className="pill-submit-btn mx-auto">
                  <span>SUBMIT INQUIRY</span>
                  <div className="icon-circle">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </button>
              </div>
              {status && <p className="mt-4 text-center text-gold fw-bold">{status}</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;