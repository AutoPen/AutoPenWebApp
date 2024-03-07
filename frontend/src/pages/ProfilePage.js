import React from 'react';
import { useUser } from './UserContext'; // Import useUser
import { Link } from 'react-router-dom';

function ProfilePage() {

    const { userData } = useUser(); // Access user data

  return (
    <div className="container">
       <h2>Profile Page</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <Link to="/edit-profile">Edit Profile</Link> {/* Add the link to EditProfile */}
    </div>
  );
}

export default ProfilePage;