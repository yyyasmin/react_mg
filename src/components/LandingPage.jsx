// LandingPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import CustomOrderForm from './CustomOrderForm.jsx';
import { baseUrl } from '../helpers/ServerRoutes';

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Play Your Way</h1>
        <p className="sub-title">Transform Communication Through Play!</p>
      </header>
      
      <section className="game-options">
        <h2>Explore Our Memory Match Games</h2>
        <p className="description">Enhance communication skills with engaging memory games tailored for specific goals.</p>
        <div className="game-cards">
          <div className="game-card">
            <img src="game-image-url" alt="What is Active listening - Play to find out" />
            <p>Active Listening Adventure</p>
            <p>What is Active listening and how it relates to communication skills - Play to find out</p>
            <a href="https://debug3--active-litening.netlify.app" target="_blank" rel="noopener noreferrer">Play Now</a>
          </div>
          <div className="game-card">
            <img src="game-image-url" alt="Sharing and Listening Challenge" />
            <p>Sharing and Listening Challenge</p>
            <p>Promote sharing, listening, and collaboration with diadic memory tasks.</p>
            <a href="https://main--yasmin-mg.netlify.app" target="_blank" rel="noopener noreferrer">Play Now</a>
          </div>
          {/* Add more game cards as needed */}
        </div>
      </section>

      <section className="custom-order">
        <h2>Create Your Custom Game</h2>
        <p className="custom-order-description">Order a personalized game for your specific subject, age group, and skill level.</p>
        <button className="community" onClick={handleShowForm}>Place Custom Order</button>
        {showForm && <CustomOrderForm />}
      </section>

      <section className="community">
        <h2>Join Our Community</h2>
        <p>Connect with others, share experiences, and get exclusive updates.</p>
        <Link to="/community">Join Now</Link>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Play Your Way Memory Match Games. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
