import React, { useEffect, useState } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'
import LoadingSpinner from '../components/LoadingSpinner'
import RewardCard from '../components/RewardCard'
import { fetchData } from '../utils/fetchData'

function RewardsPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData('/api/rewards').then(d => {
      setData(d)
      setLoading(false)
    })
  }, [])

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">Rewards</h1>
          <p className="text-gray-600 mb-4">Earn points and redeem them for cool perks.</p>
          {loading && <LoadingSpinner />}
          {!loading && data && (
            <div>
              <p className="mb-4">Points: {data.points}</p>
              <p className="mb-4">Next Reward: {data.nextReward}</p>
              {data.rewards.map(r => <RewardCard key={r.level} reward={r} currentPoints={data.points}/>)}
              <div className="bg-white p-4 rounded shadow mt-6">
                <h2 className="font-semibold mb-2">Referral Program</h2>
                <p>Invite a friend and earn 50 points!</p>
                <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Get Referral Link</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default RewardsPage
