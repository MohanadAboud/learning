import { useNavigate, useParams } from 'react-router-dom'
import './QuizIntro.css'
import icon from '../assets/icon.svg'

const pdfFiles = {
  litteratur: {
    quiz1: '/Sofies-Verden.pdf',
  },
}

const QuizIntro = () => {
  const { subject, quizId } = useParams()
  const navigate = useNavigate()
  const pdfUrl = pdfFiles[subject]?.[quizId]

  return (
    <div className="quiz-intro-page page-container">
      <h2>Quiz Introduktion</h2>
      {pdfUrl ? <iframe src={pdfUrl} className="quiz-intro-pdf" title="Quiz PDF" /> : <p>PDF ikke fundet.</p>}
      <h5 className="quiz-intro-speech">Læs teksten grundigt, og test derefter din viden!</h5>
      <img src={icon} alt="Quiz Icon" className="quiz-intro-icon" />

      <button className="quiz-btn quiz-btn-primary" onClick={() => navigate(`/${subject}/${quizId}`)}>
        Start Quiz
      </button>
    </div>
  )
}

export default QuizIntro
