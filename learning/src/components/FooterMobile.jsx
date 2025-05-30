import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiUser } from 'react-icons/fi'
import { FaBook, FaTrophy } from 'react-icons/fa'

import './FooterMobile.css'

const FooterMobile = () => {
  const location = useLocation()
  return (
    <nav className="footer-mobile">
      <Link to="/home" className={`footer-mobile-link${location.pathname === '/home' ? ' active' : ''}`}>
        <span className="footer-mobile-icon">
          <FiHome />
        </span>
        <span className="footer-mobile-label">Home</span>
      </Link>
      <Link to="/kurser" className={`footer-mobile-link${location.pathname === '/kurser' ? ' active' : ''}`}>
        <span className="footer-mobile-icon">
          <FaBook />
        </span>
        <span className="footer-mobile-label">Fag</span>
      </Link>
      <Link to="/leaderboard" className={`footer-mobile-link${location.pathname === '/leaderboard' ? ' active' : ''}`}>
        <span className="footer-mobile-icon">
          <FaTrophy />
        </span>
        <span className="footer-mobile-label">Leaderboard</span>
      </Link>
      <Link to="/account" className={`footer-mobile-link${location.pathname === '/account' ? ' active' : ''}`}>
        <span className="footer-mobile-icon">
          <FiUser />
        </span>
        <span className="footer-mobile-label">Profile</span>
      </Link>
    </nav>
  )
}

export default FooterMobile
