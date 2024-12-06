import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuth'

function Navbar() {
  const { isLoggedIn, logout } = useAuthContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center relative">
      <Link to="/" className="text-2xl font-bold text-indigo-600">Cashly</Link>
      
      <button 
        className="md:hidden text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      <div className={`md:flex space-x-4 items-center absolute md:static left-0 top-[60px] bg-white w-full md:w-auto shadow md:shadow-none p-4 md:p-0 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="text-gray-700 hover:text-indigo-600 block">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 block">Dashboard</Link>
            <Link to="/goals" className="text-gray-700 hover:text-indigo-600 block">Goals</Link>
            <Link to="/insights" className="text-gray-700 hover:text-indigo-600 block">Insights</Link>
            <Link to="/track-expenses" className="text-gray-700 hover:text-indigo-600 block">Track Expenses</Link>
            <Link to="/rewards" className="text-gray-700 hover:text-indigo-600 block">Rewards</Link>
            <Link to="/profile" className="text-gray-700 hover:text-indigo-600 block">Profile</Link>
          </>
        )}

        {!isLoggedIn && (
          <div className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0">
            <Link to="/signup" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 text-center md:inline-block">Sign Up</Link>
            <Link to="/login" className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 text-center md:inline-block">Log In</Link>
          </div>
        )}
        
        {isLoggedIn && (
          <button onClick={logout} className="mt-2 md:mt-0 text-red-500 font-semibold hover:underline">
            Log Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
