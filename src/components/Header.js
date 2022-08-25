import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Link to='/portfolio/'>Work</Link>
      <Link to='/portfolio/about'>About</Link>
    </div>
  );
}
