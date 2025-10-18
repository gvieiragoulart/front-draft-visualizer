import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <h1>Draft Visualizer</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Matches</Link>
          <Link to="/live" className="nav-link">Live</Link>
          <Link to="/upcoming" className="nav-link">Upcoming</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
