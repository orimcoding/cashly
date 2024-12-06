import React from 'react'

function RewardCard({reward, currentPoints}) {
  const unlocked = currentPoints >= reward.requirement
  return (
    <div className={`p-4 rounded shadow mb-4 ${unlocked ? 'bg-green-100' : 'bg-white'}`}>
      <h4 className="font-bold">{reward.level} Reward</h4>
      <p className="text-sm text-gray-600">Requirement: {reward.requirement} points</p>
      <p className="text-sm">{reward.reward}</p>
      {unlocked ? (
        <p className="text-green-700 mt-2">Unlocked!</p>
      ) : (
        <p className="text-red-600 mt-2">Not yet unlocked</p>
      )}
    </div>
  )
}

export default RewardCard
