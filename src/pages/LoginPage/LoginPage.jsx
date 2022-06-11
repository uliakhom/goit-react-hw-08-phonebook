import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import LoginForm from 'client/LoginForm';
import { login } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';
import s from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
  }, [isLogin, navigate]);

  const loginUser = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2 className={s.title}>Login Page</h2>
      <LoginForm onSubmit={loginUser} />
    </div>
  );
};

export default LoginPage;
