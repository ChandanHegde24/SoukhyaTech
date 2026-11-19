import React from 'react';

export default function SolutionVisual({ solution, index }) {
  return (
    <div className="solution-visual-wrapper">
      <div className="solution-visual-frame">
        <div className="solution-visual-media">
          <img
            src={solution.img}
            alt={solution.title}
            className="solution-visual-img"
            loading="lazy"
            width="720"
            height="460"
          />
        </div>
      </div>
    </div>
  );
}
