import SubjectCard from '../components/SubjectCard'

const Kurser = () => {
  return (
    <div className="page-container">
      <header className="home-header">
        <h1>Gyldendal Learning - Kurser</h1>
      </header>

      <div className="section-title">
        <h2>Fag</h2>
        <div className="section-line"></div>
      </div>

      <section className="subjects-section">
        <SubjectCard subject="Hvad er filosofi" subtitle="Filosofi" image="/filosofi.avif" to="/filosofi" />
        <SubjectCard subject="Lær om litteraturens verden" subtitle="Litteratur" image="/books.avif" to="/litteratur" />
        <SubjectCard subtitle="Historie" image="/historie.avif" description="Coming soon" to="/*" />
      </section>
    </div>
  )
}

export default Kurser
