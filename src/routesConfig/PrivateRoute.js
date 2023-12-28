import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'store/auth/selectors';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);

  function pleaseLogin() {
    return <Navigate to={'/login'} />;
  }
  return token ? children : pleaseLogin();
};

export default PrivateRoute;
