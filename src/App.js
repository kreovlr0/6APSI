import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes, and import adjusted
import LandingPage from './LandingPage'; // Direct import from src
import LoginPage from './LoginPage'; // Direct import from src

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} /> {/* Use element prop for React Router v6 */}
        <Route path="/" element={<LandingPage />} /> {/* Use element prop for React Router v6 */}
      </Routes>
    </Router>
  );
}

export default App;
