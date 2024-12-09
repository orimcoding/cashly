import React from 'react'

function GoalCard({ goal }) {
  const percentage = (goal.saved / goal.target) * 100

  return (
    <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-4">
      <h3 className="font-bold text-primary text-lg">{goal.name}</h3>
      <p className="text-sm text-gray-600 mt-2">
        Saved: <span className="text-foreground">${goal.saved.toFixed(2)}</span> / Target: <span className="text-foreground">${goal.target.toFixed(2)}</span>
      </p>
      <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
        <div 
          className={`h-3 rounded-full transition-all ${
            percentage >= 100 ? 'bg-success' : 'bg-gradient-to-r from-gradientFrom to-gradientTo'
          }`} 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {percentage >= 100
          ? <span className="text-success font-semibold">🎉 Goal Achieved!</span>
          : <span className="text-foreground">{percentage.toFixed(1)}% Complete</span>}
      </p>
    </div>
  )
}

export default GoalCard
