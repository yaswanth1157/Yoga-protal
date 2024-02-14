import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const AdminLog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleLogin = () => {
    // Implement authentication logic here
    // Check the entered username and password against the actual admin credentials
    // You might want to use a state management library or context for handling authentication state
    console.log('Login clicked:', username, password);
    navigate("/admin")

  };

  return (
    <div className="admin-login-container">
      <h2 style={{color:'black', textAlign:'center',fontSize:'20px'}}>Admin Login</h2>
      <form>
        <label htmlFor="username" style={{color:'black', textAlign:'center',fontSize:'20px'}}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="center-input"  
        />

        <label htmlFor="password" style={{color:'black', textAlign:'center',fontSize:'20px'}}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLog;
