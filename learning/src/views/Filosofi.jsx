import QuizList from '../components/QuizList'
import { quizTitles } from '../data/quizzes'

const Filosofi = () => (
  <div className="subject-page page-container">
    <h1>Filosofi</h1>
    <QuizList subject="filosofi" quizzes={quizTitles.filosofi} />
  </div>
)

export default Filosofi
