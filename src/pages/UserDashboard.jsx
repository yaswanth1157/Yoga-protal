// LandingPage.js

import React from 'react';
import '../assets/css/Card.css'

const UserDashboard = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome Friends</h1>
        <p>Unlock the Path to Wellness</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Explore Courses</h2>
          <p>Discover a variety of yoga courses for all levels and interests.</p>
        </div>
        <div className="feature">
          <h2>Expert Instructors</h2>
          <p>Learn from experienced and certified yoga instructors.</p>
        </div>
        <div className="feature">
          <h2>Flexible Schedule</h2>
          <p>Choose classes that fit your schedule and lifestyle.</p>
        </div>
      </section>
      <section className="cta">
        <p>Embark on a journey to holistic well-being.</p>
        <button>Get Started</button>
      </section>
      <footer>
        <p>&copy; 2024 Yoga Admission Portal</p>
      </footer>
    </div>
  );
};

export default UserDashboard;
