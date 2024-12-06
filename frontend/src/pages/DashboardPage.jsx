import React, { useEffect, useState } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'
import LoadingSpinner from '../components/LoadingSpinner'
import ExpenseItem from '../components/ExpenseItem'
import GoalCard from '../components/GoalCard'
import SkeletonCard from '../components/SkeletonCard'
import { fetchData } from '../utils/fetchData'

function DashboardPage() {
  const [expenses, setExpenses] = useState(null)
  const [goals, setGoals] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetchData('/api/expenses'),
      fetchData('/api/goals')
    ]).then(([expData, goalData]) => {
      setExpenses(expData)
      setGoals(goalData)
      setLoading(false)
    })
  }, [])

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          {loading && <LoadingSpinner />}
          {!loading && (
            <>
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Expense Overview</h2>
                <div className="bg-white p-4 rounded shadow mb-4">
                  <h3 className="font-semibold mb-2">Recent Expenses</h3>
                  {expenses.map(exp => <ExpenseItem key={exp.id} expense={exp} />)}
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-semibold mb-2">Spending Chart (Mock)</h3>
                  <div className="h-32 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 rounded"></div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Savings Goals</h2>
                {goals.map(goal => <GoalCard key={goal.id} goal={goal} />)}
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">AI Suggestions</h2>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-gray-700">"Reduce dining expenses by 10% to reach your Vacation Fund goal sooner!"</p>
                </div>
              </section>
            </>
          )}
          {loading && (
            <div className="grid grid-cols-3 gap-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}

export default DashboardPage
