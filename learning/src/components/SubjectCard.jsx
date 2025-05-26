import { Link } from 'react-router-dom'
import './SubjectCard.css'

const SubjectCard = ({ subject, to, image, subtitle, description, cta = 'Vælg Fag →' }) => (
  <Link to={to} className="subject-card">
    {image && <img src={image} alt={subject} className="subject-card-image" />}
    <div className="subject-card-body">
      <span className="subject-card-subject">{subtitle}</span> <h3 className="subject-card-title">{subject}</h3>
      <p className="subject-card-description">{description}</p>
      <span className="subject-card-cta">{cta}</span>
    </div>
  </Link>
)

export default SubjectCard
