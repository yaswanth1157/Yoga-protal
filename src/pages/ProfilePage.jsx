
import React, { useState, useEffect } from 'react';
import "../assets/css/Profile.css"
import { ClassNames } from '@emotion/react';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    dob: '12.07.2xxx',
    membership:'12july to 20oct',
    
  
  });

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h2 className="he">Profile Page</h2>
    
        

        <p className="pa">Username: {userData.username}</p>
        <p className="pa" >Email: {userData.email}</p>
        <p className="pa">D.O.B: {userData.dob}</p>
        <p className="pa">MemberShip: {userData.membership}</p>
       
    
      
    </div>
  );
};

export default ProfilePage;
