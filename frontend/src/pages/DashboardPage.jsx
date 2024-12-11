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

      // Sort and select data
      const recentExpenses = parsedExpenses
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
      const topGoals = parsedGoals
        .sort((a, b) => (b.saved / b.target || 0) - (a.saved / a.target || 0))
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

          {loading && <LoadingSpinner />}

          {!loading && (
            <>
              {/* Recent Expenses Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: "#E0E0E0" }}>
                  Recent Expenses
                </h2>
                {expenses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expenses.map((expense) => (
                      <div
                        key={expense.id}
                        className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                        style={{
                          backgroundColor: "#262626",
                          color: "#E0E0E0",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <div className="mb-4">
                          <h3 className="text-lg font-bold mb-2">
                            {expense.category}
                          </h3>
                          <p style={{ color: "#B0B0B0", fontSize: "0.9rem" }}>
                            {new Date(expense.date).toLocaleDateString()}
                          </p>
                        </div>
                        <p
                          className="text-xl font-bold"
                          style={{ color: "#0BDB00" }}
                        >
                          ${parseFloat(expense.amount || 0).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: "#B0B0B0" }}>No recent expenses to display.</p>
                )}
              </section>

              {/* Top Goals Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: "#E0E0E0" }}>
                  Top Goals
                </h2>
                {goals.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {goals.map((goal) => {
                      const progress = Math.min((goal.saved / goal.target) * 100, 100);
                      const goalColor = goal.color || "#0BDB00"; // Default color if no color is assigned

                      return (
                        <div
                          key={goal.id}
                          className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                          style={{
                            backgroundColor: "#262626",
                            color: "#E0E0E0",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <h3
                            className="font-bold text-lg truncate mb-4"
                            style={{ color: "#FFFFFF" }}
                          >
                            {goal.name}
                          </h3>
                          <div className="mb-4">
                            <p style={{ color: "#B0B0B0", fontSize: "0.9rem" }}>
                              Target:{" "}
                              <span style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                                ${parseFloat(goal.target || 0).toFixed(2)}
                              </span>
                            </p>
                            <p style={{ color: "#B0B0B0", fontSize: "0.9rem" }}>
                              Saved:{" "}
                              <span style={{ fontWeight: "bold", color: goalColor }}>
                                ${parseFloat(goal.saved || 0).toFixed(2)}
                              </span>
                            </p>
                          </div>
                          <div
                            className="w-full h-4 rounded-full mb-4"
                            style={{ backgroundColor: "#1C1C1E" }}
                          >
                            <div
                              className="h-4 rounded-full"
                              style={{
                                width: `${progress}%`,
                                background: progress === 100 ? "#FFD700" : goalColor,
                              }}
                            ></div>
                          </div>
                          <button
                            className="px-4 py-2 rounded font-bold"
                            style={{
                              backgroundColor: goalColor,
                              color: "#FFFFFF",
                              transition: "background-color 0.3s ease",
                            }}
                            onClick={() => (window.location.href = "/goals")}
                          >
                            View All Goals
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: "#B0B0B0" }}>No goals to display.</p>
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default DashboardPage;
