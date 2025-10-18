import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">📍</span>
            <span className="logo-text">Lovitranix</span>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
          <a href="#contact" className="contact-btn">CONTACT US!</a>
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;