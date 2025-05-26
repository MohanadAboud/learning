import React, { useEffect, useState } from 'react'
import './AccountStats.css'

const LOCAL_LEADERBOARD_KEY = 'local_leaderboard'

const StatCard = ({ icon, label, value, className }) => (
  <div className={`stat-card ${className}`}>
    <div className="stat-icon">{icon}</div>
    <div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  </div>
)

const AccountStats = ({ username }) => {
  const [stats, setStats] = useState({
    rank: 1,
    points: 0,
  })

  useEffect(() => {
    let leaderboard = []
    try {
      leaderboard = JSON.parse(localStorage.getItem(LOCAL_LEADERBOARD_KEY)) || []
    } catch {
      leaderboard = []
    }
    const userIndex = leaderboard.findIndex((u) => u.username === username)
    if (userIndex !== -1) {
      const userData = leaderboard[userIndex]
      setStats({
        rank: userIndex + 1,
        points: userData.points || 0,
      })
    }
  }, [username])

  return (
    <div className="account-stats">
      <div className="account-stats-title">Stats</div>
      <StatCard icon="🏆" label="Rank" value={`#${stats.rank}`} className="stat-rank" />
      <StatCard icon="📈" label="Points" value={stats.points} className="stat-points" />
    </div>
  )
}

export default AccountStats
