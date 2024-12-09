import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuth'

function Navbar() {
  const { isLoggedIn, logout } = useAuthContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-background shadow-lg p-4 flex justify-between items-center relative">
      {/* Website Logo */}
      <Link to="/" className="text-2xl font-bold text-accent">Cashly</Link>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-accent"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`md:flex space-x-4 items-center absolute md:static left-0 top-[60px] bg-primary w-full md:w-auto shadow md:shadow-none p-4 md:p-0 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="text-background hover:text-accent block">Home</Link>
        {isLoggedIn && (
          <>
            <Link to="/dashboard" className="text-background hover:text-accent block">Dashboard</Link>
            <Link to="/goals" className="text-background hover:text-accent block">Goals</Link>
            <Link to="/insights" className="text-background hover:text-accent block">Insights</Link>
            <Link to="/track-expenses" className="text-background hover:text-accent block">Track Expenses</Link>
            <Link to="/rewards" className="text-background hover:text-accent block">Rewards</Link>
            <Link to="/profile" className="text-background hover:text-accent block">Profile</Link>
          </>
        )}

        {!isLoggedIn && (
          <div className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0">
            <Link 
              to="/signup" 
              className="bg-gradient-to-b from-gradientFrom to-gradientTo text-white px-4 py-2 rounded hover:opacity-90 text-center md:inline-block"
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="text-accent border border-accent px-4 py-2 rounded hover:bg-accent hover:text-background text-center md:inline-block"
            >
              Log In
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <button 
            onClick={logout} 
            className="mt-2 md:mt-0 text-danger font-semibold hover:underline"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
