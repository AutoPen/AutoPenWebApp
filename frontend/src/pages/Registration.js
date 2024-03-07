import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import autopenIcon from './images/autopen-icon.png';
import './login.css'; // Import CSS file for styling

function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    // You can implement your registration logic here
    // For simplicity, we'll just display the entered username and password
    alert(`Registered with Username: ${username}, Password: ${password}`);
    
    // Redirect to the Login page after successful registration
    navigate('/login');
  };

  return (
    <div className="login-container"> {/* Reuse the login-container class */}
      <div className="login-window"> {/* Reuse the login-window class */}
        <img src={autopenIcon} alt="AutoPen Icon" className="autopen-logo" />
        <h2>Registration</h2>
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;