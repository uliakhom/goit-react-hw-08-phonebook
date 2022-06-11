import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from 'client/Navbar';
import Routes from 'Routes';
import { getCurrentUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};
