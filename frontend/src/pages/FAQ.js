import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

function FAQ() {
  const navigate = useNavigate();

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

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>

        {/* Question 1 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>What is AutoPen?</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AutoPen is an advanced automated penetration testing solution designed to identify and exploit vulnerabilities across various digital assets, ensuring enhanced security posture for businesses and organizations.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>How does AutoPen ensure comprehensive coverage?</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              AutoPen utilizes a combination of static and dynamic analysis techniques, along with machine learning algorithms, to thoroughly scan and test applications and networks for vulnerabilities. This holistic approach ensures broad and deep security coverage.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Is AutoPen suitable for small businesses?</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! AutoPen is designed to be scalable, making it suitable for businesses of all sizes. Small businesses can particularly benefit from AutoPen's efficiency and cost-effectiveness, ensuring their digital assets are secured without a significant resource investment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>Can AutoPen replace manual penetration testing?</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              While AutoPen significantly enhances testing efficiency and coverage, we recommend it as a complement to manual penetration testing. The combination of AutoPen's automated capabilities and the nuanced insight of experienced security professionals offers the best protection against a wide range of vulnerabilities.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Question 5 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography><strong>How does AutoPen handle data privacy and security?</strong></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Data privacy and security are our top priorities. AutoPen is designed with strict compliance to data protection regulations, employing state-of-the-art encryption and access controls to ensure all data is handled securely throughout the testing process.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more questions as needed */}
      </Container>
    </>
  );
}

export default FAQ;