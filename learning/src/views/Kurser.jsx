import SubjectCard from '../components/SubjectCard'

const Kurser = () => {
  return (
    <div className="page-container">
      <header className="home-header">
        <h1>Gyldendal Learning - Kurser</h1>
      </header>

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
        <SubjectCard
          subject="Political Systems"
          subtitle="Samfundsfag"
          image="/images/social.jpg"
          description="Compare and contrast different political systems and their impact on societies."
          to="/Kurser"
        />
        <SubjectCard
          subject="Political Systems"
          subtitle="Samfundsfag"
          image="/images/social.jpg"
          description="Compare and contrast different political systems and their impact on societies."
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
  )
}

export default Kurser
