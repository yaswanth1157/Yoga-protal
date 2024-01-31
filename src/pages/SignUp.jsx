
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSignup = () => {
    console.log('Signup clicked. Implement signup logic.');
    navigate('/home')
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Signup for Yoga Academy</h2>
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
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ margin: '10px 0' }}
          />
        </label>
        <label style={{color:'white'}}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ margin: '10px 0' }}
          />
        </label>
        <label style={{color:'white'}}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="button" onClick={handleSignup} style={{ margin: '10px 0' }}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
