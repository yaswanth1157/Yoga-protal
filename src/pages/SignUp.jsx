import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:8081/api/v1/auth/register', {  
      name: `${firstName} ${lastName}`,
      email,
      password
    })
    .then(response => {
      console.log('Signup successful:', response.data);
      navigate('/login');
    })
    .catch(error => {
      console.error('Signup error:', error.response.data);
    });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-h2">Signup for Yoga Academy</h2>
      <form>
        <label className="signup-label">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="signup-label">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="signup-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </label>
        <label className="signup-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </label>
        <button type="button" onClick={handleSignup} className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
