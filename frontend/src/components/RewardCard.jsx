import React from 'react'
import RewardCard from './RewardCard'

const rewards = [
  { level: "Bronze", requirement: 100, reward: "10% Discount" },
  { level: "Silver", requirement: 500, reward: "Free Gift Card" },
  { level: "Gold", requirement: 1000, reward: "Exclusive Access" },
]

function RewardsPage() {
  const currentPoints = 450 // Example points

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary mb-6">Your Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward, index) => (
          <RewardCard key={index} reward={reward} currentPoints={currentPoints} />
        ))}
      </div>
    </div>
  )
}

export default RewardsPage
