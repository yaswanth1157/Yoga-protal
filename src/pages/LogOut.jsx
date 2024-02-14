import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Logout.css';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem('authToken');


    setTimeout(() => {
      navigate('/');
    }, 2000); 
  }, [navigate]);

  return (
    <div className="logout-container">
      <p className="logout-message">Logging out...</p>
      <div className="logout-spinner"></div>
    </div>
  );
};

export default LogoutPage;
