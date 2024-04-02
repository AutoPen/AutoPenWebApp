import React from 'react';
import { Link } from 'react-router-dom';
import autopenIcon from '../pages/autopen-icon.png'; // Adjust the path as necessary
import './pageStyles/UserDashboard.css';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate(); // Initialize navigate

  // Define inline styles for the dashboard
  const dashboardStyles = {
    backgroundColor: '#800080', // Purple background color
    padding: '20px', // Padding for spacing
    color: 'white', // Text color
    textAlign: 'center', // Center-align text and links
  };

  // Define inline styles for the buttons
  const buttonStyles = {
    backgroundColor: 'white', // White background color for buttons
    color: 'black', // Black text color for buttons
    padding: '10px 20px', // Padding for spacing
    margin: '10px', // Margin for spacing between buttons
    display: 'inline-block', // Display buttons inline
    textDecoration: 'none', // Remove underlines from links
    borderRadius: '5px', // Optional: add border-radius for button-like appearance
  };

  return (
    <>
      

      <div style={{ padding: '20px' }} className="user-dashboard-container">
        <img src={autopenIcon} alt="AutoPen Icon" style={{ maxWidth: "90px", height: "auto", marginBottom: '20px' }} />
        <h2>Dashboard</h2>
        <div style={dashboardStyles}>
          <Link to="/Profile" style={buttonStyles}>
            My Profile
          </Link>
          <Link to="/Start-Test" style={buttonStyles}>
            Start a Test
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;