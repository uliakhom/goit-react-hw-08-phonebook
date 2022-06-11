import { Link, NavLink } from 'react-router-dom';

import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import useLogin from 'shared/hooks/useLogin';
import s from './navbar.module.css';

const Navbar = () => {
  const isLogin = useLogin();

  return (
    <nav>
      <div className={s.container}>
        <Link to="/contacts" className={s.logo}>
          PhoneBook
        </Link>
        <NavLink to="/" className={s.home}>
          Home
        </NavLink>
        {isLogin && <UserMenu />}
        {!isLogin && <AuthMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
