import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <CustomLink to='/portfolio/'>Work</CustomLink>
      <CustomLink to='/portfolio/about'>About</CustomLink>
    </div>
  );
}

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} {...props} className={isActive ? "link active" : "link"}>
      {children}
    </Link>
  )
}