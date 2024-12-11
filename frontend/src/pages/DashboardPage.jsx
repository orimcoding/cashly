import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";
import LoadingSpinner from "../components/LoadingSpinner";

function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    try {
      const savedExpenses = localStorage.getItem("transactions");
      const savedGoals = localStorage.getItem("goals");

      const parsedExpenses = savedExpenses ? JSON.parse(savedExpenses) : [];
      const parsedGoals = savedGoals ? JSON.parse(savedGoals) : [];

      // Sort expenses by most recent and limit to 3
      const recentExpenses = parsedExpenses
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

      // Sort goals by closest to completion (saved/target ratio) and limit to 3
      const topGoals = parsedGoals
        .sort((a, b) => b.saved / b.target - a.saved / a.target)
        .slice(0, 3);

      setExpenses(recentExpenses);
      setGoals(topGoals);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />

        <div
          className="flex-grow p-6"
          style={{ backgroundColor: "#1C1C1E", color: "#E0E0E0" }}
        >
          <h1 className="text-5xl font-bold mb-10" style={{ color: "#E0E0E0" }}>
            Dashboard
          </h1>

          {/* Loading Spinner */}
          {loading && <LoadingSpinner />}

          {/* Main Dashboard Sections */}
          {!loading && (
            <>
              {/* Recent Expenses Section */}
              <section className="mb-12">
                <div
                  className="rounded-lg shadow-lg p-6"
                  style={{
                    backgroundColor: "#262626",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6" style={{ color: "#E0E0E0" }}>
                    Recent Expenses
                  </h2>
                  {expenses.length > 0 ? (
                    <div className="space-y-4">
                      {expenses.map((expense) => (
                        <div
                          key={expense.id}
                          className="flex justify-between items-center p-4 rounded-md"
                          style={{
                            backgroundColor: "#1C1C1E",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div>
                            <h3 className="text-lg font-bold" style={{ color: "#E0E0E0" }}>
                              {expense.category}
                            </h3>
                            <p style={{ color: "#B0B0B0", fontSize: "0.9rem" }}>
                              {new Date(expense.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="text-lg font-bold" style={{ color: "#0BDB00" }}>
                            ${expense.amount.toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: "#B0B0B0" }}>No recent expenses to display.</p>
                  )}
                </div>
              </section>

              {/* Top Goals Section */}
              <section className="mb-12">
                <div
                  className="rounded-lg shadow-lg p-6"
                  style={{
                    backgroundColor: "#262626",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6" style={{ color: "#E0E0E0" }}>
                    Top Goals
                  </h2>
                  {goals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {goals.map((goal) => (
                        <div
                          key={goal.id}
                          className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                          style={{
                            backgroundColor: "#1C1C1E",
                            color: "#E0E0E0",
                          }}
                        >
                          {/* Goal Title */}
                          <h3
                            className="font-bold text-lg truncate mb-4"
                            style={{ color: "#FFFFFF" }}
                          >
                            {goal.name}
                          </h3>

                          {/* Progress Information */}
                          <p className="text-sm mb-4" style={{ color: "#B0B0B0" }}>
                            Saved:{" "}
                            <span style={{ color: "#0BDB00", fontWeight: "bold" }}>
                              ${goal.saved.toFixed(2)}
                            </span>{" "}
                            / Target:{" "}
                            <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                              ${goal.target.toFixed(2)}
                            </span>
                          </p>

                          {/* Progress Bar */}
                          <div
                            className="relative w-full h-4 rounded-full mb-4"
                            style={{ backgroundColor: "#1C1C1E" }}
                          >
                            <div
                              className="absolute top-0 left-0 h-4 rounded-full transition-all"
                              style={{
                                width: `${Math.min((goal.saved / goal.target) * 100, 100)}%`,
                                background: "#0BDB00",
                              }}
                            ></div>
                          </div>

                          {/* Completion Button */}
                          <button
                            className="px-4 py-2 rounded font-bold"
                            style={{
                              backgroundColor: "#007BFF",
                              color: "#FFFFFF",
                              transition: "background-color 0.3s ease",
                            }}
                            onClick={() => (window.location.href = "/goals")}
                          >
                            View Goals
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ color: "#B0B0B0" }}>No goals to display.</p>
                  )}
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
