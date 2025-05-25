import React from 'react'
import './Card.css'

const Card = ({ title, description, icon: Icon }) => {
  return (
    <div className="card">
      {Icon && (
        <span className="card-icon">
          <Icon size={32} />
        </span>
      )}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
