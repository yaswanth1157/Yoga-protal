import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css"
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
    
    console.log('Login clicked. Implement authentication logic.');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login to Yoga Portal</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        <label style={{color:'white'}}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: '10px 0' }}
          />
        </label>
        <label style={{color:'white'}}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '10px 0' }}
          />
        </label>
        <button type="button" onClick={handleLogin} style={{ margin: '10px 0' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
