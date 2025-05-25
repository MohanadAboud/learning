import SubjectCard from '../components/SubjectCard'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { PiBookOpenTextDuotone } from 'react-icons/pi'
import { PiStudentDuotone } from 'react-icons/pi'
import { PiMedalDuotone } from 'react-icons/pi'
import { PiUsersDuotone } from 'react-icons/pi'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="page-container">
        <div className="section-title">
          <h2>Hvem er vi</h2>
          <div className="section-line"></div>
        </div>

        <div className="cards-container">
          <Card
            title="Rich Content"
            description="Expertly curated courses in history, philosophy, and social studies."
            icon={PiBookOpenTextDuotone}
          />
          <Card title="Interactive Quizzes" description="Test your knowledge with challenging quizzes and earn points." icon={PiStudentDuotone} />
          <Card title="Achievement System" description="Earn badges and track your progress as you complete courses." icon={PiMedalDuotone} />
          <Card title="Community" description="Compete with others on the leaderboard and share your knowledge." icon={PiUsersDuotone} />
        </div>

        <div className="section-title">
          <h2>Quizzer</h2>
          <div className="section-line"></div>
        </div>
        <section className="subjects-section">
          <SubjectCard
            subject="Ancient Greek Philosophy"
            subtitle="Filosofi"
            image="/images/philosophy.jpg"
            description="Explore the foundational ideas of Western philosophy with Socrates, Plato, and Aristotle."
            to="/Kurser"
          />
          <SubjectCard
            subject="World War II"
            subtitle="Historie"
            image="/images/history.jpg"
            description="Understand the causes, major events, and lasting impact of the Second World War."
            to="/Kurser"
          />
          <SubjectCard
            subject="Political Systems"
            subtitle="Samfundsfag"
            image="/images/social.jpg"
            description="Compare and contrast different political systems and their impact on societies."
            to="/Kurser"
          />
        </section>
      </div>
    </>
  )
}

export default Home
