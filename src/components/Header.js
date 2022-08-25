import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Link to='/'>Work</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}
