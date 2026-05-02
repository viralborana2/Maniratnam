import React, { useState, useEffect } from 'react';

const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Clean up the listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    
    <footer className="footer-section">
      <div className="container">
        {/* Top Section: CTA and Circular Label */}
        {/* <div className="row align-items-center mb-5 position-relative">
          <div className="col-lg-8">
            <span className="badge rounded-pill border border-gold text-gold px-3 py-2 mb-3">
              HERE · CATCH
            </span>
            <h2 className="footer-cta-text">Your dream home awaits</h2>
          </div>
          <div className="col-lg-4 d-none d-lg-flex justify-content-end">
            <div className="circle-text-wrapper">
              <div className="circle-text">
                LET'S TALK · LET'S TALK · LET'S TALK · 
              </div>
              <i className="bi bi-arrow-up-right center-arrow"></i>
            </div>
          </div>
        </div> */}

        {/* <hr className="footer-divider" /> */}

        {/* Middle Section: Links and Contact */}
        <div className="row py-5 g-4">
          <div className="col-6 col-md-3">
            <h6 className="footer-heading">COMPANY</h6>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#partners">Bank Partnerships</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="footer-heading">ONGOING PROJECTS</h6>
            <ul className="footer-links">
              <li><a href="#anupama">Anupama</a></li>
              <li><a href="#crest">Crest Avenue</a></li>
              <li><a href="#mehr">Mehr</a></li>
              <li><a href="#vaani">Shree Vaani</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">QUICK LINK</h6>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="footer-heading">GET IN TOUCH</h6>
            <div className="contact-info">
              <a href="tel:+918014173572" className="d-block mb-2">+91-8104173572</a>
              <a href="mailto:viralborana2002@gmail.com" className="d-block border-bottom border-gold pb-1 w-fit">viralborana2002@gmail.com</a>
            </div>
            <div className="social-icons mt-4">
              <a href="#"><i className="bi bi-instagram"></i></a>
              {/* <a href="#"><i className="bi bi-facebook"></i></a> */}
              {/* <a href="#"><i className="bi bi-twitter-x"></i></a> */}
              {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom text-center py-4">
          <p className="mb-0">2026 © Maniratnam Developers | Redefining real estate</p>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-actions">
        {/* Only render if isVisible is true */}
        {isVisible && (
          <button onClick={scrollToTop} className="back-to-top-btn fade-in">
            <i className="bi bi-chevron-up"></i>
          </button>
        )}
        
        {/* <a href="https://wa.me/yournumber" className="whatsapp-btn mt-3">
          <i className="bi bi-whatsapp"></i>
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;