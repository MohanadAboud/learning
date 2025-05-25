import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Discover the Depths <br /> of Human Knowledge
          </h1>
          <p className="hero-desc">Explore history, philosophy, and social studies through interactive courses and quizzes.</p>
          <div className="hero-buttons">
            <Link to="/Kurser">
              <button className="hero-btn hero-btn-primary">Start Learning</button>
            </Link>
            <Link to="/*">
              <button className="hero-btn hero-btn-secondary">View Leaderboard</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
