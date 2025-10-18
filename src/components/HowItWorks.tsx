import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'We discuss your business goals and requirements'
    },
    {
      number: '2',
      title: 'Setup',
      description: 'We create and verify your Google Business Profile'
    },
    {
      number: '3',
      title: 'Optimization',
      description: 'We optimize your profile with keywords and images'
    },
    {
      number: '4',
      title: 'Results',
      description: 'You start appearing in more searches and get more customers'
    }
  ];

  return (
    <section className="howitworks-section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Our simple 4-step process to get your business on Google</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;