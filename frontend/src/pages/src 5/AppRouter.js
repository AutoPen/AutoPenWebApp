// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login'; // Import the Login component
import Registration from './Registration'; // Import the Registration component
import UserPage from './UserPage'; // Import the UserPage component
import TestPage from './TestPage'; // Import the TestPage component
import ProfilePage from './ProfilePage'; // Import the ProfilePage component
import EditProfile from './EditProfile'; // Import the EditProfile component
import AboutUs from './AboutUs'; // Import the AboutUs component
import FAQPage from './FAQPage'; // Import the FAQPage component
import AboutUsPage from './AboutUsPage'; // Import the About Us page component
import ContactUsPage from './ContactUsPage'; // Import the ContactUsPage component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} /> {/* Add the route for the Login component */}
        <Route path="/registration" element={<Registration />} /> {/* Add the route for the Registration component */}
        <Route path="/user" element={<UserPage />} /> {/* Add the route for the UserPage component */}
        <Route path="/test" element={<TestPage />} /> {/* Add the route for TestPage */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Add the route for ProfilePage */}
        <Route path="/edit-profile" element={<EditProfile />} /> {/* Add the route for EditProfile */}
        <Route path="/about" element={<AboutUs />} /> {/* Define the route for AboutUs */}
        <Route path="/about" element={AboutUsPage} /> {/* Define route for the About Us page */}
        <Route path="/faq" element={<FAQPage />} /> {/* Define the route for FAQPage */}
        <Route path="/contact" element={ContactUsPage} /> {/* Route for the Contact Us page */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;