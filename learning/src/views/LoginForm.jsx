import React, { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../Firebase'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      localStorage.setItem('quiz_username', user.displayName || user.email)
      setIsLoggedIn(true)
      navigate('/home')
    } catch (err) {
      setError('Google Login Error: ' + err.message)
    }
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      const user = result.user
      localStorage.setItem('quiz_username', user.displayName || user.email)
      setIsLoggedIn(true)
      navigate('/home')
    } catch (err) {
      setError('Login Error: ' + err.message)
    }
  }

  return (
    <div className="login-card-bg">
      <div className="login-card">
        <div className="login-logo">
          <img src={Logo} alt="Gyldendal Logo" />
        </div>
        <div className="login-title-main">
          Gyldendal
          <br />
          Learning
        </div>
        <div className="login-tabs">
          <span className="active">Log In</span>
          <Link to="/register" className="inactive">
            Sign Up
          </Link>
        </div>
        <form className="login-form-modern" onSubmit={handleEmailLogin}>
          <label className="login-label">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="login-input-modern"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="********"
            className="login-input-modern"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn-modern">
            Log In
          </button>
        </form>
        <div className="login-divider">
          <span>or</span>
        </div>
        <button onClick={handleGoogleLogin} className="google-btn-modern">
          <FcGoogle className="login-icon" />
          Continue with Google
        </button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </div>
    </div>
  )
}

export default LoginForm
