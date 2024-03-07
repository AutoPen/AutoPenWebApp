import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import autopenIcon from './images/autopen-icon.png';
import './login.css'; // Import CSS file for styling

function Login() {
  const navigate = useNavigate(); // Initialize navigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    // For simplicity, we'll just check if both fields are non-empty
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }
    // Clear any previous errors
    setError(null);
    // Perform your login logic here
    // For simplicity, we'll just display the entered username and password
    alert(`Logged in with Username: ${username} and Password: ${password}`);
    
    navigate('/user'); // Redirect to the UserPage after successful login
  };

  return (
    <div className="login-container">
      <div className="login-window">
        <img src={autopenIcon} alt="AutoPen Icon" className="autopen-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
          {/* Change the Link to a button with onClick event */}
          <p>Don't have an account? <button type="button" onClick={() => navigate('/registration')}>Create one</button></p>
        </form>
      </div>
    </div>
  );
}

export default Login;