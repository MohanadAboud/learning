import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './views/LoginForm'
import RegisterForm from './views/RegisterForm'
import Home from './views/Home'
import LeaderBoard from './views/LeaderBoard'
import Kurser from './views/Kurser'
import Account from './views/Account'
import Logo from './assets/logo.svg'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './Firebase'
import NoPage from './views/NoPage'
import Filosofi from './views/Filosofi'
import Historie from './views/Historie'
import Litteratur from './views/Litteratur'
import FooterMobile from './components/FooterMobile'
import QuizPage from './components/QuizPage'
import QuizIntro from './components/QuizIntro'

const StartupScreen = ({ onClick }) => (
  <>
    <div className="startup-screen" onClick={onClick}>
      <img src={Logo} alt="Gyldendal Logo" />
      <p>Gyldendal Learning</p>
    </div>
    <span className="startup-span">Klick for at fortsætte</span>
  </>
)

const Layout = ({ children, isLoggedIn }) => {
  const location = useLocation()
  const hideNavAndFooter = location.pathname === '/' || location.pathname === '/register'
  return (
    <>
      {!hideNavAndFooter && isLoggedIn && <Navbar />}
      {children}
      {!hideNavAndFooter && isLoggedIn && <Footer />}
      {!hideNavAndFooter && isLoggedIn && <FooterMobile />}
    </>
  )
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showStartup, setShowStartup] = useState(true)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
    })
    return () => unsubscribe()
  }, [])

  if (showStartup) {
    return <StartupScreen onClick={() => setShowStartup(false)} />
  }

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Kurser" element={<Kurser />} />
          <Route path="/account" element={<Account />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/litteratur" element={<Litteratur />} />
          <Route path="/filosofi" element={<Filosofi />} />
          <Route path="/historie" element={<Historie />} />
          <Route path="/:subject/:quizId" element={<QuizPage />} />
          <Route path="/:subject/:quizId/intro" element={<QuizIntro />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
