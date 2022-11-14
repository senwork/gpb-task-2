import { NavLink } from "react-router-dom";
import './header.css';

const navbar = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Список услуг', path: '/services' }
];

const Header = () => (
  <header>
    <nav>
      <div className="links">
        {navbar.map(({ id, title, path }) => (
          <NavLink key={id} to={path} exact>{title}</NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
