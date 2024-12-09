import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";
import LoadingSpinner from "../components/LoadingSpinner";
import ExpenseItem from "../components/ExpenseItem";
import GoalCard from "../components/GoalCard";

function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const mockExpenses = [
      { id: 1, date: "2024-12-01", category: "Groceries", amount: 150 },
      { id: 2, date: "2024-12-02", category: "Transport", amount: 50 },
      { id: 3, date: "2024-12-03", category: "Dining Out", amount: 75 },
    ];
    const mockGoals = [
      { id: 1, name: "Vacation Fund", saved: 800, target: 2000 },
      { id: 2, name: "Emergency Fund", saved: 1200, target: 1500 },
      { id: 3, name: "New Car", saved: 3000, target: 5000 },
    ];

    setTimeout(() => {
      setExpenses(mockExpenses);
      setGoals(mockGoals);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatedPage>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className="flex-grow p-6"
          style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
        >
          <h1
            className="text-5xl font-bold mb-10"
            style={{
              color: "#E0E0E0",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Dashboard
          </h1>

          {/* Loading Spinner */}
          {loading && <LoadingSpinner />}

          {/* Main Dashboard Sections */}
          {!loading && (
            <>
              {/* Expense Overview Section */}
              <section className="mb-12">
                <div
                  className="rounded-lg shadow-lg p-6"
                  style={{
                    backgroundColor: "#262626",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#E0E0E0" }}
                  >
                    Expense Overview
                  </h2>
                  <div className="space-y-4">
                    {expenses.length > 0 ? (
                      expenses.map((expense) => (
                        <div
                          key={expense.id}
                          className="flex justify-between items-center p-4 rounded-md"
                          style={{
                            backgroundColor: "#1C1C1E",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div>
                            <h3
                              className="text-lg font-bold"
                              style={{ color: "#E0E0E0" }}
                            >
                              {expense.category}
                            </h3>
                            <p style={{ color: "#B0B0B0", fontSize: "0.9rem" }}>
                              {expense.date}
                            </p>
                          </div>
                          <p
                            className="text-lg font-bold"
                            style={{ color: "#0BDB00" }}
                          >
                            ${expense.amount.toFixed(2)}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p style={{ color: "#B0B0B0" }}>
                        No recent expenses to display.
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Savings Goals Section */}
              <section className="mb-12">
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: "#E0E0E0" }}
                >
                  Savings Goals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {goals.length > 0 ? (
                    goals.map((goal) => (
                      <GoalCard key={goal.id} goal={goal} />
                    ))
                  ) : (
                    <p style={{ color: "#B0B0B0" }}>
                      No goals to display. Start by creating a new goal!
                    </p>
                  )}
                </div>
              </section>

              {/* AI Suggestions Section */}
              <section className="mb-12">
                <div
                  className="rounded-lg shadow-lg p-6"
                  style={{
                    backgroundColor: "#262626",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <h2
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#E0E0E0" }}
                  >
                    AI Suggestions
                  </h2>
                  <p style={{ color: "#B0B0B0", lineHeight: "1.6" }}>
                    "Reduce dining expenses by 10% to reach your Vacation Fund
                    goal sooner!"
                  </p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default DashboardPage;
