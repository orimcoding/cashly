import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

function TrackExpensesPage() {
  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">Track Expenses</h1>
          <p className="text-gray-600 mb-4">Add, edit, and review all your transactions. Coming soon: AI-powered category suggestions.</p>
          <div className="bg-white rounded shadow p-4 mb-4">
            <h2 className="font-semibold mb-2">Add New Expense</h2>
            <form className="flex space-x-2">
              <input type="date" className="border p-1 rounded" />
              <input type="text" placeholder="Category" className="border p-1 rounded" />
              <input type="number" placeholder="Amount" className="border p-1 rounded w-24" />
              <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">Add</button>
            </form>
          </div>
          <p>(Mock transaction list and editing tools would appear here.)</p>
          <div className="h-32 mt-4 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded"></div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default TrackExpensesPage
