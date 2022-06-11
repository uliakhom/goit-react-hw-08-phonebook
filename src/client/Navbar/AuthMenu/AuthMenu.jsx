import { NavLink } from 'react-router-dom';
import s from './authMenu.module.css';

const getActiveLink = ({ isActive }) => (isActive ? s.activeLink : s.link);

const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/login" className={getActiveLink}>
        Login
      </NavLink>{' '}
      |
      <NavLink to="/register" className={getActiveLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthMenu;
