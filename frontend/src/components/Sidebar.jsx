import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="bg-primary text-background shadow-lg w-64 p-6 hidden lg:block">
      <nav className="space-y-4">
        <Link 
          to="/dashboard" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          Dashboard Overview
        </Link>
        <Link 
          to="/track-expenses" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          Track Expenses
        </Link>
        <Link 
          to="/goals" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          Manage Goals
        </Link>
        <Link 
          to="/insights" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          AI Insights
        </Link>
        <Link 
          to="/rewards" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          Rewards
        </Link>
        <Link 
          to="/profile" 
          className="block text-background hover:bg-gradient-to-r hover:from-gradientFrom hover:to-gradientTo hover:text-white p-3 rounded transition-all"
        >
          Profile Settings
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
