import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/"> <img src="AutoPenLogo.png" alt="AutoPen Logo" style={{width: '75px', height: '75px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" className={styles.navLink}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className={styles.navLink}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/PricingPlans" className={styles.navLink}>
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/FAQ" className={styles.navLink}>
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/FAQPage" className={styles.navLink}>
              FAQPage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;