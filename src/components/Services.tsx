import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📍',
      title: 'Get Your Business On Google',
      description: 'Put Your Business On The Map! We Help You List Your Company On Google Search And Google Maps So Customers Can Easily Find And Contact You Online. Get Verified And Grow Your Visibility Today.',
    },
    {
      icon: '📈',
      title: 'Optimize Your Google Business Profile',
      description: 'Boost Your Google Business Profile For Maximum Reach. We Enhance Your Listing With The Right Keywords, Photos, And Updates To Attract More Customers And Improve Your Local Search Ranking.',
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer comprehensive solutions to get your business discovered on Google</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className={`btn ${index === 1 ? 'btn-secondary' : ''}`}>
                LEARN MORE{index === 1 ? '!' : ''}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;