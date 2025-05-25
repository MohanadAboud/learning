import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import app from '../Firebase'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../assets/logo.svg'

const RegisterForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setSuccess('Account created! Redirecting to login...')
      setFullName('')
      setEmail('')
      setPassword('')
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignup = () => {
    // Add your Google signup logic here
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="login-logo">
          <img src={Logo} alt="Gyldendal Logo" />
        </div>
        <div className="login-title-main">
          Gyldendal
          <br />
          Learning
        </div>
        <div className="login-tabs">
          <Link to="/" className="inactive">
            Log In
          </Link>
          <span className="active">Sign Up</span>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="login-label">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="register-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label className="login-label">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="********"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        <div className="login-divider">
          <span>or</span>
        </div>
        <button onClick={handleGoogleSignup} className="google-btn-modern">
          <FcGoogle className="login-icon" />
          Sign up with Google
        </button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginTop: 10 }}>{success}</div>}
      </div>
    </div>
  )
}

export default RegisterForm
