import React from 'react';
import './LandingPage.css'; // Reusing styles

const LoginPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Login</h1>
          <p className="hero-description">Please enter your credentials to continue.</p>
          {/* You can replace this with a proper form later */}
          <input type="text" placeholder="Username" style={{ padding: '10px', margin: '10px' }} />
          <input type="password" placeholder="Password" style={{ padding: '10px', margin: '10px' }} />
          <button className="cta-button">Login</button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
