import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome</h1>
          <p className="hero-description"></p>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
