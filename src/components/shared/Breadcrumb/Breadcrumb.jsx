import { Link } from 'react-router-dom';

export default function Breadcrumb({ currentPage }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span className="breadcrumb-sep" aria-hidden="true">/</span>
      <span className="breadcrumb-current" aria-current="page">{currentPage}</span>
    </nav>
  );
}
