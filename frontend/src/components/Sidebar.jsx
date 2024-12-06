import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="bg-white shadow-lg w-64 p-4 hidden lg:block">
      <nav className="space-y-2">
        <Link to="/dashboard" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Dashboard Overview</Link>
        <Link to="/track-expenses" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Track Expenses</Link>
        <Link to="/goals" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Manage Goals</Link>
        <Link to="/insights" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">AI Insights</Link>
        <Link to="/rewards" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Rewards</Link>
        <Link to="/profile" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">Profile Settings</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
