import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  //   auth redirect after login
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-info "></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

// Prop-Types validate
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
