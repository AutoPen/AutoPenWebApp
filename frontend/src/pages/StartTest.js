import React, { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function StartTest() {

    const navigate = useNavigate(); // Initialize navigate
    const [targetIp, setTargetIp] = useState('');
    const [scannerIp, setScannerIp] = useState('');
    const [scanType, setScanType] = useState('lightweight');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would handle the submission, e.g., sending data to a server
        console.log({ targetIp, scannerIp, scanType });
        // Potentially navigate to another page or show a message
    };

    return (
        <>
        <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/Dashboard')}>
            User Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/Profile')}>
            My Profile
          </Button>
          <Box sx={{ flexGrow: 1 }} /> {/* Move this Box after the "User Dashboard" button */}
        </Toolbar>
      </AppBar>
      <div className="start">
        <h2>Launch Scan</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="targetIp">Target IP:</label><br />
            <input type="text" id="targetIp" name="targetIp" placeholder="Enter Target IP" value={targetIp} onChange={(e) => setTargetIp(e.target.value)} /><br />

            <label htmlFor="scannerIp">Scanner IP:</label><br />
            <input type="text" id="scannerIp" name="scannerIp" placeholder="Enter Scanner IP" value={scannerIp} onChange={(e) => setScannerIp(e.target.value)} /><br />

            <label htmlFor="scanType">Scan Type:</label><br />
            <select id="scanType" name="scanType" value={scanType} onChange={(e) => setScanType(e.target.value)}>
                <option value="lightweight">Lightweight</option>
                <option value="fast">Fast</option>
                <option value="balanced">Balanced</option>
                <option value="deep">Deep</option>
            </select><br />

            <input type="submit" value="Start Scan" />
        </form>
    </div></>
       
    );
}

export default StartTest;