import { useState, useEffect } from 'react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import './QuizPage.css'
import { ref, get, set, update } from 'firebase/database'
import { rtdb } from '../Firebase'
import { getAuth } from 'firebase/auth'

const calculatePoints = (questions, selected) => questions.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 10 : 0), 0)

const saveUserScoreToFirebase = async (username, points) => {
  const userRef = ref(rtdb, `leaderboard/${username}`)
  const snapshot = await get(userRef)
  if (snapshot.exists()) {
    const userData = snapshot.val()
    await update(userRef, { points: (userData.points || 0) + points })
  } else {
    await set(userRef, { username, points })
  }
}

const QuizPage = () => {
  const { subject, quizId } = useParams()
  const navigate = useNavigate()
  const questions = useMemo(() => quizzes[subject]?.[quizId] || [], [subject, quizId])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [score, setScore] = useState(null)
  const [username, setUsername] = useState('Guest')

  useEffect(() => {
    setSelected(Array(questions.length).fill(null))
    setCurrent(0)
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      setUsername(user.displayName || user.email || 'Guest')
    } else {
      setUsername('Guest')
    }
  }, [questions])

  const handleOptionClick = (idx) => {
    const updated = [...selected]
    updated[current] = idx
    setSelected(updated)
  }

  const handlePrev = () => setCurrent((c) => Math.max(0, c - 1))
  const handleNext = () => setCurrent((c) => Math.min(questions.length - 1, c + 1))

  const handleFinish = async () => {
    if (!username) {
      setError('No user found. Please log in.')
      return
    }
    setSaving(true)
    setError('')
    const points = calculatePoints(questions, selected)
    await saveUserScoreToFirebase(username, points)
    setScore(points)
    setSaving(false)
    navigate('/leaderboard')
  }

  if (!questions.length) return <div>No quiz found.</div>

  const progress = questions.length ? Math.round(((current + 1) / questions.length) * 100) : 0

  if (score !== null) {
    return (
      <div className="quiz-page">
        <h2>Quiz finished!</h2>
        <p>
          You scored <b>{score}</b> points.
        </p>
        <button className="quiz-btn quiz-btn-primary" onClick={() => navigate('/leaderboard')}>
          Go to Leaderboard
        </button>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <div className="quiz-progress-bar">
        <span>
          Question <b>{current + 1}</b> of <b>{questions.length}</b>
        </span>
        <span className="quiz-progress-percent">{progress}%</span>
        <div className="quiz-progress-track">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="quiz-card">
        <h2 className="quiz-question">{questions[current].question}</h2>
        <section>
          <legend>Options</legend>
          <div className="quiz-options">
            {questions[current].options.map((opt, idx) => (
              <label key={idx} className={`quiz-option${selected[current] === idx ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name={`question-${current}`}
                  checked={selected[current] === idx}
                  onChange={() => handleOptionClick(idx)}
                  aria-label={opt}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </section>
      </div>
      {error && <div className="quiz-error">{error}</div>}
      <div className="quiz-nav">
        <button className="quiz-btn" onClick={handlePrev} disabled={current === 0 || saving} aria-label="Previous question">
          &#8592; Previous
        </button>
        {current < questions.length - 1 ? (
          <button
            className="quiz-btn quiz-btn-primary"
            onClick={handleNext}
            disabled={selected[current] === null || saving}
            aria-label="Next question"
          >
            Next &#8594;
          </button>
        ) : (
          <button
            className="quiz-btn quiz-btn-primary"
            onClick={handleFinish}
            disabled={selected[current] === null || saving}
            aria-label="Finish quiz"
          >
            {saving ? 'Saving...' : 'Finish'}
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizPage
