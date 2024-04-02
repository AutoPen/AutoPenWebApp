import React, { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate(); // Initialize navigate for redirection
    const [email, setEmail] = useState(''); // State to hold email input
    const [message, setMessage] = useState(''); // State to hold message input

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Here, you can handle the form submission, such as sending an email or saving the message to a database
        console.log({ email, message }); // For demonstration, just log the input values
        // After handling the submission, you might want to clear the form or give feedback to the user
        setEmail('');
        setMessage('');
        alert('Thank you for your message. We will get back to you soon.'); // Example feedback
    };

    return (
        <>
          <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }} />
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
    
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Box sx={{ ml: 8 }}>
              <Typography variant="body1" gutterBottom>
                If you would like to reach out for more information, do not hesitate to contact us. We can be reached at the following email address. Our business hours are 9-5 during the week, and we will respond within 3-5 business days.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email us at <a href="mailto:customerservice@autopentest.net">customerservice@autopentest.net</a> Or create a message below
              </Typography>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </form>
            </Box>
          </Container>
        </>
      );
}

export default Contact;