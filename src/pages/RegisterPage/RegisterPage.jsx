import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import RegisterForm from 'client/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';
import s from './registerPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useLogin();

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
    }
  }, [isLogin, navigate]);

  const registerUser = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2 className={s.title}>Register Page</h2>
      <RegisterForm onSubmit={registerUser} />
    </div>
  );
};

export default RegisterPage;
