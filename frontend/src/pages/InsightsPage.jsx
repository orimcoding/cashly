import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

function InsightsPage() {
  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">AI Insights</h1>
          <p className="text-gray-600 mb-4">Personalized recommendations based on your spending patterns.</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="font-semibold mb-2">Monthly Summary</h2>
            <p>You spent 30% more on groceries this month than last month.</p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="font-semibold mb-2">Actionable Tips</h2>
            <p>Cancel this subscription to save $15 a month.</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default InsightsPage
