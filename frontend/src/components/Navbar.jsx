import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuth";

function Navbar() {
  const { isLoggedIn, logout } = useAuthContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1C1C1E] text-[#E0E0E0] shadow-lg p-4 flex justify-between items-center relative z-50">
      {/* Website Logo */}
      <Link to="/" className="text-2xl font-bold text-[#0BDB00] hover:text-[#0ACD00] transition duration-200 ease-in-out">
        Cash.ly
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#0BDB00] hover:text-[#0ACD00] transition duration-200 ease-in-out"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex space-x-4 items-center absolute md:static left-0 top-[60px] bg-[#1C1C1E] w-full md:w-auto shadow md:shadow-none p-4 md:p-0 transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* <Link
          to="/"
          className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
        >
          Home
        </Link> */}
        {isLoggedIn && (
          <>
            <Link
              to="/dashboard"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Dashboard
            </Link>
            <Link
              to="/track-expenses"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Track Expenses
            </Link>
            <Link
              to="/goals"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Goals
            </Link>
            <Link
              to="/insights"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Insights
            </Link>
            {/* <Link
              to="/rewards"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Rewards
            </Link> */}
            <Link
              to="/profile"
              className="text-[#E0E0E0] hover:text-[#0BDB00] block transition duration-200 ease-in-out"
            >
              Profile
            </Link>
          </>
        )}

        {!isLoggedIn && (
          <div className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0">
            <Link
              to="/signup"
              className="bg-[#0BDB00] hover:bg-[#0ACD00] text-[#1C1C1E] font-bold px-4 py-2 rounded-full text-center md:inline-block transition-transform transform hover:scale-105"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="border border-[#0BDB00] text-[#0BDB00] px-4 py-2 rounded-full text-center md:inline-block transition-all duration-200 ease-in-out hover:bg-[#0BDB00] hover:text-[#1C1C1E]"
            >
              Log In
            </Link>
          </div>
        )}

        {isLoggedIn && (
          <button
            onClick={logout}
            className="mt-2 md:mt-0 text-[#D32F2F] font-semibold hover:underline transition-all duration-200 ease-in-out"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
