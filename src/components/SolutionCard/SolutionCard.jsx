import React from 'react';

const SolutionCard = ({ title, description, image }) => {
  return (
    <div className="solution-card">
      <img src={image} alt={title} className="solution-image" />
      <h3 className="solution-title">{title}</h3>
      <p className="solution-description">{description}</p>
    </div>
  );
};

export default SolutionCard;
