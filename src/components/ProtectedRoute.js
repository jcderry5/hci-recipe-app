import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  let navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      navigate('/hci-recipe-app/login');
    }
  })
  
  return children;
};

export default ProtectedRoute;