import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import AccountStats from '../components/AccountStats'
import { auth } from '../Firebase'

const Account = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem('quiz_username') || 'Alex Johnson',
    avatarUrl: '/avatar.png',
  })

  useEffect(() => {
    let avatarUrl = '/avatar.png'
    const currentUser = auth.currentUser
    if (currentUser && currentUser.photoURL) {
      avatarUrl = currentUser.photoURL
    }
    setUser((prev) => ({
      ...prev,
      avatarUrl,
    }))
  }, [])

  const handleEditProfile = () => {
    alert('Edit Profile clicked!')
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
      <div className="account-header-row">
        <ProfileHeader name={user.name} avatarUrl={user.avatarUrl} onEdit={handleEditProfile} />
        <AccountStats username={user.name} />
      </div>
    </div>
  )
}

export default Account
