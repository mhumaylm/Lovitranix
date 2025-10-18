import React from 'react';

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>
        HELPING BUSINESSES GET ON
        <br />
        <span>GOOGLE SEARCH & MAPS</span>
      </h1>
      <p>Increase your online visibility and reach more customers with our professional Google Business Profile services</p>
      <div className="hero-buttons">
        <a href="#services" className="btn btn-outline">Our Services</a>
        <a href="#contact" className="btn btn-yellow">Get Started Today</a>
      </div>
    </div>
    <div className="hero-bg"></div>
  </section>
);

export default Hero;