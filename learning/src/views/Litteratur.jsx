import QuizList from '../components/QuizList'
import { quizTitles } from '../data/quizzes'

const Litteratur = () => (
  <div className="subject-page page-container">
    <h1>Litteratur</h1>
    <QuizList subject="litteratur" quizzes={quizTitles.litteratur} />
  </div>
)

export default Litteratur
