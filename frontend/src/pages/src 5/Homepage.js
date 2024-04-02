import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import autopenIcon from './images/autopen-icon.png';

function HomePage() {
  return (
    <div>
      <header>
        <nav className="dashboard">
          <div className="container">
            <img src={autopenIcon} alt="AutoPen Icon" style={{ maxWidth: "90px", height: "auto" }} />
            <h1>AutoPen</h1>
            <ul className="dashboard-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li> {/* Keep the FAQ link */}
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </nav>
      </header>

      {/* Remove the FAQ section content */}
      
      <div className="content">
        <h2>Welcome to AutoPen</h2>
        <p>AutoPen is a revolutionary platform that...</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default HomePage;