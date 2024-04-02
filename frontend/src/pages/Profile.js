import React from 'react';
import './pageStyles/profile.css'; // Adjust the path as necessary
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate(); // Initialize navigate
  return (
    <><AppBar position="static" color="default" elevation={1}>
    <Toolbar>
      <Button color="inherit" onClick={() => navigate('/Dashboard')}>
        User Dashboard
      </Button>
      <Button color="inherit" onClick={() => navigate('/Start-Test')}>
        Start Test
      </Button>
      <Box sx={{ flexGrow: 1 }} /> {/* Move this Box after the "User Dashboard" button */}
    </Toolbar>
  </AppBar>
  <div className="profile-container">
      <h2>My Profile</h2>
      {/* Profile information goes here */}
      <p>Welcome to your profile page!</p>
    </div>
    </>
    
  );
}

export default Profile;