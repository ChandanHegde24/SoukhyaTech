import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';
import SolutionVisual from './SolutionVisual';

export default function SolutionChapterCard({ solution, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      id={`solution-${solution.id}`}
      className={`solution-chapter ${isReversed ? 'solution-chapter--reversed' : ''} ${
        index % 2 === 0 ? 'section--white' : 'section--bg'
      }`}
    >
      <div className="container solution-chapter__container">
        <div className="solution-chapter__grid">
          {/* Text Column */}
          <div className="solution-chapter__text-col">
            <Reveal>
              <h2 className="heading-xl solution-chapter__title">
                {solution.title}
              </h2>

              <div className="solution-chapter__paragraphs">
                {solution.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="body-large solution-chapter__text">
                    {p}
                  </p>
                ))}
              </div>

              {/* Technical Capability Tags */}
              <div className="solution-chapter__tags">
                {solution.tags.map((tag) => (
                  <span key={tag} className="chip chip--solution">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="solution-chapter__action">
                <Link to="/contact" className="btn btn--primary">
                  <span>Consult on {solution.shortTitle}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Visual / Image Column */}
          <div className="solution-chapter__visual-col">
            <Reveal delay={0.12}>
              <SolutionVisual solution={solution} index={index} />
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
