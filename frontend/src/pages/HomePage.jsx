import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

function HomePage() {
  return (
    <AnimatedPage>
      <section className="text-center py-20 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Simplify Your Spending, Save Smarter with Cashly!</h1>
        <p className="text-gray-700 mb-6">Track expenses, set savings goals, get AI insights, and earn rewards!</p>
        <Link to="/signup" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
          Sign up for free and start managing your budget today!
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
        <div className="bg-white shadow p-4 rounded text-center hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Track Expenses in Real-Time</h3>
          <p className="text-sm text-gray-600">Keep all your expenses organized in one place.</p>
        </div>
        <div className="bg-white shadow p-4 rounded text-center hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Set and Reach Savings Goals</h3>
          <p className="text-sm text-gray-600">Visualize progress and stay motivated.</p>
        </div>
        <div className="bg-white shadow p-4 rounded text-center hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Personalized AI Insights</h3>
          <p className="text-sm text-gray-600">Get suggestions to save more and spend wisely.</p>
        </div>
        <div className="bg-white shadow p-4 rounded text-center hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">Earn Rewards</h3>
          <p className="text-sm text-gray-600">Get rewarded as you reach your financial goals.</p>
        </div>
      </section>

      <section className="text-center mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Cashly?</h2>
        <p className="text-gray-700 mb-6">Leverage AI to make your budgeting simpler and more effective.</p>
        <img src="https://via.placeholder.com/800x400" alt="Dashboard preview" className="mx-auto rounded shadow hover:shadow-xl transition-shadow"/>
      </section>
      
      <div className="text-center mt-8">
        <Link to="/signup" className="text-indigo-600 font-bold hover:underline">Get Started</Link>
      </div>
    </AnimatedPage>
  )
}

export default HomePage
