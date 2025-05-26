import React from 'react'
import './ProfileHeader.css'

const ProfileHeader = ({ name, avatarUrl }) => (
  <div className="profile-header">
    <div className="profile-avatar-wrap">
      <img className="profile-avatar" src={avatarUrl || '/default-avatar.png'} alt={name || 'User avatar'} />
    </div>
    <div className="profile-info">
      <div className="profile-name">{name || 'User'}</div>
    </div>
  </div>
)

export default ProfileHeader
