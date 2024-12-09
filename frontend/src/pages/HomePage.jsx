import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'
import HomepageImage from '../assets/sai_homepage.jpg'

function HomePage() {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gradientFrom to-gradientTo text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Simplify Your Spending, <br /> Save Smarter with Cashly!
          </h1>
          <p className="text-lg font-medium mb-8">
            Track expenses, set savings goals, get AI insights, and earn rewards—all in one place.
          </p>
          <Link 
            to="/signup" 
            className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Sign up for free and start managing your budget today!
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-background shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-primary mb-3">Track Expenses in Real-Time</h3>
          <p className="text-sm text-gray-600">Keep all your expenses organized in one place.</p>
        </div>
        <div className="bg-background shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-primary mb-3">Set and Reach Savings Goals</h3>
          <p className="text-sm text-gray-600">Visualize progress and stay motivated.</p>
        </div>
        <div className="bg-background shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-primary mb-3">Personalized AI Insights</h3>
          <p className="text-sm text-gray-600">Get suggestions to save more and spend wisely.</p>
        </div>
        <div className="bg-background shadow-md p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-bold text-primary mb-3">Earn Rewards</h3>
          <p className="text-sm text-gray-600">Get rewarded as you reach your financial goals.</p>
        </div>
      </section>

      {/* Why Cashly Section */}
      <section className="text-center mt-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Why Cashly?</h2>
        <p className="text-lg text-gray-700 mb-10">
          Leverage AI to make your budgeting simpler, smarter, and stress-free.
        </p>
        <img 
          src= {HomepageImage}
          alt="Dashboard preview" 
          className="mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
        />
      </section>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16">
        <Link 
          to="/signup" 
          className="bg-gradient-to-r from-gradientFrom to-gradientTo text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          Get Started for Free
        </Link>
      </div>
    </AnimatedPage>
  )
}

export default HomePage
