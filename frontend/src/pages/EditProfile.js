import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useUser } from './UserContext'; // Import useUser


function EditProfile() {
  const { userData, updateUser } = useUser(); // Access user data and update function
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate



  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSave = () => {
    // Implement logic to save the new username and email
    console.log('Updated username:', newUsername);
    console.log('Updated email:', newEmail);
    // You can add code to update the user's profile here

    // Redirect back to the profile page after saving
    // You can use a navigation method or link to achieve this
    navigate('/profile'); // Redirect to the profile page
    updateUser({
        ...userData,
        username: newUsername,
        email: newEmail,
    });
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label htmlFor="newUsername">New Username:</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="newEmail">New Email:</label>
          <input
            type="email"
            id="newEmail"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;