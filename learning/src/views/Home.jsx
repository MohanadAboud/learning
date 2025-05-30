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
            title="Indhold"
            description="Omhyggeligt sammensatte kurser inden for historie, filosofi og samfundsfag."
            icon={PiBookOpenTextDuotone}
          />
          <Card title="Interaktive Quizzer" description="Test din viden med udfordrende quizzer og optjen point." icon={PiStudentDuotone} />
          <Card title="Belønningssystem" description="Optjen badges og følg din fremgang, mens du gennemfører kurser." icon={PiMedalDuotone} />
          <Card title="Fællesskab" description="Konkurrer med andre på leaderboardet og del din viden." icon={PiUsersDuotone} />
        </div>

        <div className="section-title">
          <h2>Fag</h2>
          <div className="section-line"></div>
        </div>
        <section className="subjects-section">
          <SubjectCard subtitle="Litteratur" image="/books.avif" to="/litteratur" />
          <SubjectCard subtitle="Filosofi" image="/filosofi.avif" to="/filosofi" />
          <SubjectCard subtitle="Historie" image="/historie.avif" description="Coming soon" to="/*" />
        </section>
      </div>
    </>
  )
}

export default Home
