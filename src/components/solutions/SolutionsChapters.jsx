import React from 'react';
import SolutionChapterCard from './SolutionChapterCard';
import { solutionShowcase } from '../../data/solutions';

export default function SolutionsChapters({ solutions = solutionShowcase }) {
  return (
    <section className="solutions-chapters" aria-label="Solutions Detailed Chapters">
      {solutions.map((solution, idx) => (
        <SolutionChapterCard key={solution.id} solution={solution} index={idx} />
      ))}
    </section>
  );
}
