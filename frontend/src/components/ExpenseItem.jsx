import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for actions

function ExpenseItem({ expense }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
      {/* Expense Details */}
      <div>
        <p className="text-lg font-semibold text-lime-400">{expense.category}</p>
        <p className="text-sm text-gray-400">{expense.date}</p>
      </div>

      {/* Expense Amount */}
      <div className="text-lg font-bold text-lime-400">
        ${expense.amount.toFixed(2)}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="p-2 rounded-full bg-gray-700 text-lime-400 hover:bg-gray-600 transition-colors"
          title="Edit Expense"
        >
          <FaEdit />
        </button>
        <button
          className="p-2 rounded-full bg-gray-700 text-red-500 hover:bg-gray-600 transition-colors"
          title="Delete Expense"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
