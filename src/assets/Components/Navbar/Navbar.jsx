import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    closeAllDropdowns();
  }, [location]);

  return (
    <>
      <nav className="nav-main">
        <div className="nav-container">
          <div className="logo-wrapper">
            <Link to="/" className="logo-link">
              <img src={logo} alt="HAF Import & Supply Logo" className="logo-img" />
              <span className="logo-text">HAF Import & Supply Trade <br /><span className="logo-amh">ሀፍ አስመጪ እና አቅራቢ ንግድ ስራ</span></span>
              
            </Link>
           
            
          </div>

          <div 
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
            {/* <li className="nav-item"><Link to="/service" className="nav-link">Service</Link></li> */}

            <li 
              className={`nav-item dropdown ${activeDropdown === 'resources' ? 'active' : ''}`}
              onClick={() => toggleDropdown('resources')}
            >
              <div className="nav-link">
                Resources
                <svg className="dropdown-arrow" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
              </div>
              <div className="dropdown-content">
                <Link to="/testimonials" className="dropdown-link"><span className="dropdown-icon">💬</span>Testimonials</Link>
                {/* <Link to="/blog" className="dropdown-link"><span className="dropdown-icon">📰</span>Blog</Link> */}
                <Link to="/faq" className="dropdown-link"><span className="dropdown-icon">❓</span>FAQ</Link>
                <Link to="/stories" className="dropdown-link"><span className="dropdown-icon">🌟</span>Success Stories</Link>
                {/* <Link to="/news" className="dropdown-link"><span className="dropdown-icon">📢</span>Industry News</Link> */}
                <Link to="/media" className="dropdown-link"><span className="dropdown-icon">📺</span>Media Coverage</Link>
              </div>
            </li>

            <li className="nav-item contact-item">
              <Link to="/contact" className="nav-contact-btn">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Prevents content from being covered */}
      <div className="nav-space"></div>
    </>
  );
}

export default Navbar;