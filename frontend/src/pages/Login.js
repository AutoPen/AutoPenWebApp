import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyles/login.css'; // Import the CSS file for styling

function Login() {
  const navigate = useNavigate(); // Initialize navigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    // Assume login is successful
    // Here you would typically verify credentials against your user database or authentication service
    alert(`Logged in with Username: ${username} and Password: ${password}`);
    
    navigate('/dashboard'); // Redirect to the User Dashboard page after successful login
  };

  return (
<>
    <div className="login-container">
      <div className="login-window">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
        <p className="login-register">Don't have an account? <button type="button" onClick={() => navigate('/registration')}>Register</button></p>
      </div>
    </div>
    </>
  );
}


export default Login;