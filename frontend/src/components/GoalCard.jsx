import React from 'react'

function GoalCard({goal}) {
  const percentage = (goal.saved / goal.target) * 100
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold">{goal.name}</h3>
      <p className="text-sm text-gray-600">${goal.saved} / ${goal.target}</p>
      <div className="w-full bg-gray-200 h-2 rounded mt-2">
        <div className="bg-indigo-600 h-2 rounded" style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default GoalCard
