import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-container">
        <div className="footer-col footer-about">
          <h4>Lovitranix</h4>
          <p>
            We specialize in helping businesses establish and optimize their presence 
            on Google Search and Maps, increasing visibility and driving growth.
          </p>
          {/* Social media icons removed */}
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Google Business Listing</a></li>
            <li><a href="#">Profile Optimization</a></li>
            <li><a href="#">Local SEO</a></li>
            <li><a href="#">Google Reviews Management</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Lovitranix. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;