import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} /> {/* This Box pushes everything after it to the right */}
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box component="section" id="features" sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Key Features
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 4 }}>
            {/* Replace the image paths with your actual icons */}
            <div>
              <img src="EnhancedSecurityIcon.png" alt="Security Icon" width="200" height="200" />
              <Typography variant="h6">Enhanced Security</Typography>
              <Typography variant="body2">Identify and rectify vulnerabilities in your networks and systems.</Typography>
            </div>
            <div>
              <img src="SpeedIcon.png" alt="Speed Icon" width="200" height="200" />
              <Typography variant="h6">Quick and Efficient</Typography>
              <Typography variant="body2">Rapidly scan and analyze large volumes of data for faster results.</Typography>
            </div>
            <div>
              <img src="adaptIcon.png" alt="Adapt Icon" width="200" height="200" />
              <Typography variant="h6">Adaptive Testing</Typography>
              <Typography variant="body2">Stay ahead of evolving threats with machine learning.</Typography>
            </div>
          </Box>
          <Button variant="contained" color="primary" href="#features">
            Learn More
          </Button>
        </Container>
      </Box>

      <Box component="section" id="about" sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            AutoPen is a leading provider of automated penetration testing solutions, dedicated to helping businesses secure their digital assets.
          </Typography>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or inquiries, please feel free to contact our team.
          </Typography>
          <Button variant="contained" color="primary" href="./Contact">
            Contact Us
          </Button>
        </Container>
      </Box>

      <Box component="footer" sx={{ backgroundColor: '#333', color: 'white', py: 2 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2023 AutoPen. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;