import { Link } from 'react-router-dom'
import './QuizList.css'

const QuizList = ({ subject, quizzes }) => (
  <div className="quiz-list-cards">
    {quizzes.map((quiz) => (
      <div className="quiz-card" key={quiz.id}>
        <h3 className="quiz-card-title">{quiz.title}</h3>
        <Link className="quiz-card-link" to={`/${subject}/${quiz.id}/intro`}>
          Start quiz →
        </Link>
      </div>
    ))}
  </div>
)

export default QuizList
