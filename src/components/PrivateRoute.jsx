// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isPending } = useAuth();

  if (isPending) {
    return <div>Loading...</div>; // Show a loading state while auth is checked
  }

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
