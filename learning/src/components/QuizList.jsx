import { Link } from 'react-router-dom'
import './QuizList.css'
import icon from '../assets/icon_one_arm_up.svg' // Import your SVG icon

const QuizList = ({ subject, quizzes }) => (
  <div className="quiz-list-cards">
    {quizzes.map((quiz) => (
      <div className="quiz-card" key={quiz.id} style={{ position: 'relative' }}>
        <h3 className="quiz-card-title">{quiz.title}</h3>
        <Link className="quiz-card-link" to={`/${subject}/${quiz.id}/intro`}>
          Start quiz →
        </Link>
        {/* Icon in the bottom right corner */}
        <img src={icon} alt="Quiz Icon" className="quiz-card-icon" />
      </div>
    ))}
  </div>
)

export default QuizList
