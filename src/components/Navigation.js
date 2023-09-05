import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <ul className="nav-bar">
      <li className="subject">
        <Link to="/">Stock Screener</Link>
      </li>
      <li>
        <Link to="/screeners">search</Link>
      </li>
      <li />
    </ul>
  );
}

export default Navigation;
