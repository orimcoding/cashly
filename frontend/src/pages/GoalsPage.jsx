import React, { useState } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

function GoalsPage() {
  const [goals, setGoals] = useState([])
  const [formData, setFormData] = useState({ name: '', target: '', date: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.target && formData.date) {
      setGoals([...goals, { ...formData, id: Date.now(), saved: 0 }])
      setFormData({ name: '', target: '', date: '' })
    } else {
      alert('Please fill out all fields!')
    }
  }

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6 text-primary">Savings Goals</h1>
          <p className="text-gray-600 mb-8">Set new goals and track your progress toward achieving them.</p>

          {/* Compact "Set New Goal" Form */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Set New Goal</h2>
            <form className="flex flex-wrap gap-4 items-end" onSubmit={handleSubmit}>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Goal Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Vacation Fund"
                  className="border w-full p-2 rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Target Amount</label>
                <input
                  type="number"
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  placeholder="e.g., 5000"
                  className="border w-full p-2 rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">Target Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border w-full p-2 rounded"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>

          {/* Existing Goals Section */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Your Goals</h2>
            {goals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-bold text-lg text-primary mb-2">{goal.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Target: ${parseFloat(goal.target).toFixed(2)} | By: {goal.date}
                    </p>
                    <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden mb-2">
                      <div
                        className="absolute top-0 left-0 h-full bg-green-500"
                        style={{ width: `${(goal.saved / goal.target) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      ${goal.saved.toFixed(2)} saved ({((goal.saved / goal.target) * 100).toFixed(1)}%)
                    </p>
                    <button
                      onClick={() => handleDelete(goal.id)}
                      className="text-red-600 hover:text-red-800 mt-2"
                    >
                      Delete Goal
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No goals added yet. Start by creating a new goal!</p>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default GoalsPage
