// AboutUs.js
import React from 'react';
import autopenIcon from './images/autopen-icon.png'; // Import autopenIcon


function AboutUs() {
  return (
    <div className="container">
         <img src={autopenIcon} alt="AutoPen Icon" style={{ maxWidth: "90px", height: "auto" }} />
      <h2>About Us</h2>
      <p>AutoPen is a leading provider of AI-powered penetration testing solutions, dedicated to helping businesses secure their digital assets.</p>
    </div>
  );
}

export default AboutUs;