import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyles/registration.css'; // This assumes the path is correct based on your description
import autopenIcon from '../pages/autopen-icon.png'; // Adjusted path for the image

function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    alert(`Registered with Username: ${username}, Password: ${password}`);
    navigate('/login'); // Redirect to the Login page after successful registration
  };

  return (
    <div className="login-container">
      <div className="login-window">
      <img src={autopenIcon} alt="AutoPen Icon" className="registration-logo" />
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