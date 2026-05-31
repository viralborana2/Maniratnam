import React from "react";
import Logo from "../assets/maniratnamlogo-removebg-preview.png";

const Navbar = () => {
  // Helper function to close mobile menu after clicking a link
  const closeMenu = () => {
  const menu = document.getElementById("menu");
  // Check if bootstrap is defined on window
  if (window.bootstrap && menu.classList.contains("show")) {
    const bsCollapse = new window.bootstrap.Collapse(menu);
    bsCollapse.hide();
  } else if (menu.classList.contains("show")) {
    // Fallback: manually remove the class if bootstrap object isn't found
    menu.classList.remove("show");
  }
};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-nav">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={Logo}
            alt="Maniratnam Developers Logo"
            className="navbar-logo me-2"
          />
          <span className="brand-text">
            MANIRATNAM <small>INFINITY DEVELOPERS LPP</small>
          </span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menu" 
          aria-controls="menu" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link px-3"
                  onClick={closeMenu} // Closes the menu manually
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;