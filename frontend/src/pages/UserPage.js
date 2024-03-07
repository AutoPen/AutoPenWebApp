import React from 'react';
import { Link } from 'react-router-dom';
import autopenIcon from './images/autopen-icon.png'; // Import Autopen logo image

function UserPage() {
  // Define inline styles for the dashboard
  const dashboardStyles = {
    backgroundColor: 'purple', // Purple background color
    padding: '20px', // Padding for spacing
    color: 'white', // Text color
  };

  // Define inline styles for the buttons
  const buttonStyles = {
    backgroundColor: 'white', // White background color for buttons
    color: 'black', // Black text color for buttons
    padding: '10px 20px', // Padding for spacing
    margin: '10px', // Margin for spacing between buttons
    display: 'inline-block', // Display buttons inline
    textDecoration: 'none', // Remove underlines from links
  };

  return (
    <div className="userpage-container"> {/* Add a class for the main container */}
      {/* Add Autopen logo at the top left of the page */}
      <img src={autopenIcon} alt="AutoPen Icon" style={{ maxWidth: "90px", height: "auto" }} />
      <h2>User Dashboard</h2>
      {/* Apply the inline styles to the dashboard */}
      <div style={dashboardStyles} className="dashboard-links">
        <Link to="/profile" style={buttonStyles}>
          My Profile
        </Link>
        <Link to="/test" style={buttonStyles}>
          Start a Test 
        </Link>
      </div>
    </div>
  );
}

export default UserPage;