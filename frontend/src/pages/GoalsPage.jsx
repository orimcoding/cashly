import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

function GoalsPage() {
  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>
          <p className="text-gray-600 mb-4">Set new goals and track your progress toward achieving them.</p>
          <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="font-semibold mb-2">Set New Goal</h2>
            <form className="space-y-2">
              <input type="text" placeholder="Goal Name" className="border w-full p-2 rounded"/>
              <input type="number" placeholder="Target Amount" className="border w-full p-2 rounded"/>
              <input type="date" className="border w-full p-2 rounded"/>
              <button className="bg-indigo-600 text-white py-2 w-full rounded hover:bg-indigo-700">Create Goal</button>
            </form>
          </div>
          <p>(Existing goals and progress bars would be displayed here.)</p>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default GoalsPage
