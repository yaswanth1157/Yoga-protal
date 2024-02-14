import React, { useState, useEffect } from 'react';
import Header from './Header';
import "../assets/css/Profile.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    members: ['Vionth Raj', 'Vijaya Kumar', 'Yaswanth'],
    email: 'Zenyoga@gmail.com',
    // dob: '12.07.2xxx',
    // membership:'12july to 20oct',
  });

  useEffect(() => {
    // Any side effect code can be placed here
  }, []);

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h2 className="profile-heading">Profile Page</h2>
        <div className="profile-item">
          <span className="profile-label">Team members:</span>
          <span className="profile-value">{userData.members.join(', ')}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{userData.email}</span>
        </div>
        {/* Additional profile items */}
      </div>
    </div>
  );
};

export default ProfilePage;
