import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authenticateResponse = await axios.post('http://localhost:8081/api/v1/auth/authen', {
        email: email,
        password: password,
      });

      console.log('Authentication response:', authenticateResponse.data);

      // Check if authentication was successful
      if (authenticateResponse.data.token) {
        // Redirect to home page
        navigate('/home');
      } else {
        // Handle authentication failure
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Authentication failed', error);
      setError('An error occurred during authentication. Please try again later.');
    }
  };

  return (
    <div className="bg-color">
      <div className='login-container'>
        <h2 className='login-h2'>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <label className='login-label'>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='login-input'
            />
          </label>
          <br />
          <label className='login-label'>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='login-input'
            />
          </label>
          <br />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className='login-button'>
            Login
          </button>
          <p className='login-p'>
            Don't have an account? <Link to="/signup" className='login-a'>Sign up here</Link>
          </p>
          <p className='login-p'>
            <Link to="/adminLog" className='login-a'>Login as Admin</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
