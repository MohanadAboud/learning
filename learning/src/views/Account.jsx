import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import AccountStats from '../components/AccountStats'
import { auth } from '../Firebase'

const Account = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = auth.currentUser
    let avatarUrl = '/avatar.png'
    let name = ''
    if (currentUser) {
      avatarUrl = currentUser.photoURL || avatarUrl
      name = currentUser.displayName || currentUser.email || ''
    }
    setUser({
      name,
      avatarUrl,
    })
  }, [])

  const handleEditProfile = () => {
    alert('Edit Profile clicked!')
  }

  if (!user) return null // or a loading spinner

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
