import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiLogOut, FiX, FiMenu } from 'react-icons/fi'
import { FaGraduationCap, FaTrophy } from 'react-icons/fa'
import './Navbar.css'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen((open) => !open)

  return (
    <>
      {/* Top header bar */}
      <header className="navbar-topbar">
        <div className="navbar-topbar-left">
          <div className="navbar-topbar-left">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="navbar-title">Gyldendal learning</span>
          </div>
        </div>
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
            <span>Home</span>
          </Link>
          <Link to="/Kurser" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FaGraduationCap />
            </span>
            <span>kurser</span>
          </Link>
          <Link to="/leaderboard" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FaTrophy />
            </span>
            <span>Leaderboard</span>
          </Link>
          <Link to="/Account" className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FiUser />
            </span>
            <span>Account</span>
          </Link>
          <div className="navbar-item" onClick={toggleSidebar}>
            <span className="navbar-icon">
              <FiLogOut />
            </span>
            <span>Logout</span>
          </div>
        </nav>
      </aside>
      {isSidebarOpen && <div className="navbar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Navbar
