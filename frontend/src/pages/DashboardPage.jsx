import React, { useState, useEffect } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'
import LoadingSpinner from '../components/LoadingSpinner'
import ExpenseItem from '../components/ExpenseItem'
import GoalCard from '../components/GoalCard'

function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const mockExpenses = [
      { id: 1, date: '2024-12-01', category: 'Groceries', amount: 150 },
      { id: 2, date: '2024-12-02', category: 'Transport', amount: 50 },
      { id: 3, date: '2024-12-03', category: 'Dining Out', amount: 75 },
    ]
    const mockGoals = [
      { id: 1, name: 'Vacation Fund', saved: 800, target: 2000 },
      { id: 2, name: 'Emergency Fund', saved: 1200, target: 1500 },
      { id: 3, name: 'New Car', saved: 3000, target: 5000 },
    ]

    setTimeout(() => {
      setExpenses(mockExpenses)
      setGoals(mockGoals)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <AnimatedPage>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-grow p-6 bg-background">
          <h1 className="text-4xl font-bold text-primary mb-8">Dashboard</h1>

          {/* Loading Spinner */}
          {loading && <LoadingSpinner />}

          {/* Main Content */}
          {!loading && (
            <>
              {/* Recent Expenses Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Expense Overview</h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="font-semibold text-secondary text-lg mb-4">Recent Expenses</h3>
                  <div className="space-y-4">
                    {expenses.length > 0 ? (
                      expenses.map(expense => (
                        <ExpenseItem key={expense.id} expense={expense} />
                      ))
                    ) : (
                      <p className="text-gray-500">No recent expenses to display.</p>
                    )}
                  </div>
                </div>
              </section>

              {/* Savings Goals Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6">Savings Goals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {goals.length > 0 ? (
                    goals.map(goal => (
                      <GoalCard key={goal.id} goal={goal} />
                    ))
                  ) : (
                    <p className="text-gray-500">No goals to display. Start by creating a new goal!</p>
                  )}
                </div>
              </section>

              {/* AI Suggestions Section */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-6">AI Suggestions</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    "Reduce dining expenses by 10% to reach your Vacation Fund goal sooner!"
                  </p>
                </div>
              </section>

            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default DashboardPage
