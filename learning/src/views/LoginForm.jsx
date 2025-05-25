import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase'
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
      await signInWithPopup(auth, provider)
      setIsLoggedIn(true)
      navigate('/home')
    } catch (error) {
      setError('Google Login Error: ' + error.message)
    }
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setIsLoggedIn(true)
      navigate('/home')
    } catch (error) {
      setError('Login Error: ' + error.message)
    }
  }

  return (
    <div className="login-card-bg">
      <div className="login-card">
        <div className="login-logo">
          <img src={Logo} alt="Gyldendal Logo" />
        </div>
        <div className="login-title-main">Gyldendal<br />Learning</div>
        <div className="login-tabs">
          <span className="active">Log In</span>
          <Link to="/register" className="inactive">Sign Up</Link>
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