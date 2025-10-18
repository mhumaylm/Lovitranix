import React, { useState, useEffect, useRef } from 'react';

const Stats: React.FC = () => {
  const [counters, setCounters] = useState([
    { label: 'Businesses Listed', value: 0, target: 500 },
    { label: 'Success Rate', value: 0, target: 98 },
    { label: 'Customers Reached', value: 0, target: 1200 },
    { label: 'Hours Support', value: 0, target: 24 },
  ]);

  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const speed = 200;
    
    counters.forEach((counter, index) => {
      const updateCounter = () => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index].value < counter.target) {
            newCounters[index].value = Math.ceil(
              newCounters[index].value + (counter.target / speed)
            );
            setTimeout(updateCounter, 1);
          } else {
            newCounters[index].value = counter.target;
          }
          return newCounters;
        });
      };
      updateCounter();
    });
  };

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {counters.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;