import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiLogOut, FiX, FiMenu } from 'react-icons/fi'
import { FaBook, FaTrophy } from 'react-icons/fa'
import './Navbar.css'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen((open) => !open)

  return (
    <>
      {/* Top header bar */}
      <header className="navbar-topbar">
        <Link to="/home" className="navbar-topbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Gyldendal learning</span>
        </Link>
        <button className="navbar-menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`navbar${isSidebarOpen ? ' open' : ''}`}>
        <div className="navbar-header">
          <button className="navbar-close" onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>
        <nav className="navbar-menu">
          <Link to="/home" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FiHome />
            </span>
            <span>Hjem</span>
          </Link>
          <Link to="/Kurser" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FaBook />
            </span>
            <span>Fag</span>
          </Link>
          <Link to="/leaderboard" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FaTrophy />
            </span>
            <span>Leaderboard</span>
          </Link>
          <Link to="/account" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FiUser />
            </span>
            <span>Profil</span>
          </Link>

          <Link to="/" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FiLogOut />
            </span>
            <span>Logud</span>
          </Link>
        </nav>
      </aside>
      {isSidebarOpen && <div className="navbar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Navbar
