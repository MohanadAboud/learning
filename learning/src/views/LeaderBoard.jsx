import React, { useEffect, useState } from 'react'
import { ref, get } from 'firebase/database'
import { rtdb } from '../Firebase'

const LeaderBoard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboardRef = ref(rtdb, 'leaderboard')
      const snapshot = await get(leaderboardRef)
      let leaderboard = []
      if (snapshot.exists()) {
        leaderboard = Object.values(snapshot.val())
        leaderboard.sort((a, b) => b.points - a.points)
      }
      setUsers(leaderboard)
    }
    fetchLeaderboard()
  }, [])

  const podium = users.slice(0, 3)

  return (
    <div className="leaderboard-page">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <p className="leaderboard-desc">Se de bedste platformen</p>

      <div className="leaderboard-top3">
        {podium.map((user, idx) => (
          <div className={`leaderboard-top-card top${idx + 1}`} key={user.username}>
            <div className="leaderboard-avatar">{user.username?.[0]?.toUpperCase() || '?'}</div>
            <div className="leaderboard-name">{user.username}</div>
            <div className="leaderboard-points">{user.points} pts</div>
          </div>
        ))}
      </div>

      <div className="leaderboard-table-wrap">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rang</th>
              <th>Bruger</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.username}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaderBoard
