import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pageStyles/PricingPlans.css'; 

function PricingPlans() {
  const navigate = useNavigate(); // Initialize navigate for redirection

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

    <div className="pricing-container">
      <h1>Our Pricing Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>2 scans per week</p>
          <p>$0/mo</p>
        </div>
        <div className="plan">
          <h2>Plus</h2>
          <p>3 scans per day</p>
          <p>Extra scans at $19.99/scan</p>
          <p>$29.99/mo</p>
        </div>
        <div className="plan">
          <h2>Premium</h2>
          <p>Unlimited scans per day*</p>
          <p>32 scans per week limit</p>
          <p>Reset week limit for $59.99</p>
          <p>$99.99/mo</p>
        </div>
      </div>
      <p className="note">*Weekly limit applies</p>
    </div>
    </>
  );
}

export default PricingPlans;