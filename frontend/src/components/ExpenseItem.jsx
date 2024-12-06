import React from 'react'

function ExpenseItem({expense}) {
  return (
    <div className="flex justify-between items-center border-b py-2 text-sm text-gray-700">
      <div>{expense.date}</div>
      <div>{expense.category}</div>
      <div>${expense.amount}</div>
    </div>
  )
}

export default ExpenseItem
