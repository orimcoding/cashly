import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa' // Import icons for actions

function ExpenseItem({ expense }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
      {/* Expense Details */}
      <div>
        <p className="text-lg font-semibold text-primary">{expense.category}</p>
        <p className="text-sm text-gray-500">{expense.date}</p>
      </div>

      {/* Expense Amount */}
      <div className="text-lg font-bold text-green-600">
        ${expense.amount.toFixed(2)}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="text-blue-500 hover:text-blue-700 transition-colors">
          <FaEdit />
        </button>
        <button className="text-red-500 hover:text-red-700 transition-colors">
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
