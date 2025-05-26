import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Bliv en del af Fællesskab</h1>
          <p className="hero-desc">Dyk ned i historie, filosofi og samfundsfag med interaktive kurser og quizzer.</p>
          <div className="hero-buttons">
            <Link to="/Kurser">
              <button className="hero-btn hero-btn-primary">Start Learning</button>
            </Link>
            <Link to="/leaderboard">
              <button className="hero-btn hero-btn-secondary">Se Leaderboard</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
