import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    { id: 1, title: 'Full Stack IoT', description: 'Complete IoT solutions from hardware to cloud' },
    { id: 2, title: 'AI Driven Solutions', description: 'Intelligent systems powered by machine learning' },
    { id: 3, title: 'Secure Architecture', description: 'Enterprise-grade security for all platforms' },
    { id: 4, title: 'Cloud Integration', description: 'Seamless integration with major cloud providers' },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            <span className="checkmark">✓</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
