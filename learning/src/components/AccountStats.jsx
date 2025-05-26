import React, { useEffect, useState } from 'react'
import './AccountStats.css'
import { ref, get } from 'firebase/database'
import { rtdb } from '../Firebase'

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
    const fetchStats = async () => {
      const leaderboardRef = ref(rtdb, 'leaderboard')
      const snapshot = await get(leaderboardRef)
      let leaderboard = []
      if (snapshot.exists()) {
        leaderboard = Object.values(snapshot.val())
        leaderboard.sort((a, b) => b.points - a.points)
        const userIndex = leaderboard.findIndex((u) => u.username === username)
        if (userIndex !== -1) {
          const userData = leaderboard[userIndex]
          setStats({
            rank: userIndex + 1,
            points: userData.points || 0,
          })
        }
      }
    }
    fetchStats()
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
