import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pageStyles/AboutUs.css';

const About = () => {

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

    <div className="about-container">
      <img src="AutoPenLogo.png" alt="AutoPen Logo" className="logo"/>
      <div className="content">
	    <h1 className="about-title">About Us</h1> 
	    <div className="separator-line"></div>
            <div className="mission-statement">
                <h1>Mission Statement</h1>
                <p>The AutoPen Project is designed to revolutionize penetration testing in the dynamic and challenging field of cybersecurity, where threats are constantly evolving. The core of AutoPen lies in its sophisticated backend, which integrates top-tier penetration testing tools like Burp Suite with a cloud-enabled front service. This combination ensures a flexible yet reliable method for an easy-to-use and effective penetration testing process.</p>
            </div>
        <div className="timeline">
          {
			  <div className="timeline">
			  <div className="timeline-step">
				<div className="timeline-circle"></div>
				<span className="timeline-title">Beginning</span>
				<span className="timeline-subtitle">Framework Fundamentals</span>
			  </div>
			  <div className="timeline-line"></div>
			  <div className="timeline-step">
				<div className="timeline-circle"></div>
				<span className="timeline-title">Middle</span>
				<span className="timeline-subtitle">UI/UX and Web Development</span>
			  </div>
			  <div className="timeline-line"></div>
			  <div className="timeline-step">
				<div className="timeline-circle"></div>
				<span className="timeline-title">End</span>
				<span className="timeline-subtitle">Backend Integration</span>
			  </div>
			</div>
		  }
        </div>
      </div>
    </div>
	</>
  );
};

export default About;