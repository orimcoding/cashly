import React, { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";
import GoalCard from "../components/GoalCard";

function GoalsPage() {
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({ name: "", target: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.target && formData.date) {
      const targetAsNumber = parseFloat(formData.target);

      if (isNaN(targetAsNumber) || targetAsNumber <= 0) {
        alert("Please enter a valid target amount!");
        return;
      }

      setGoals([
        ...goals,
        {
          id: Date.now(),
          name: formData.name,
          target: targetAsNumber,
          saved: 0,
          date: formData.date,
        },
      ]);
      setFormData({ name: "", target: "", date: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div
          className="flex-grow p-6"
          style={{
            backgroundColor: "#1C1C1E", // Page background color
            color: "#E0E0E0", // Light text
          }}
        >
          <h1
            className="text-4xl font-bold mb-6"
            style={{ color: "#0BDB00" }} // Primary green for header
          >
            Savings Goals
          </h1>
          <p
            className="mb-8"
            style={{ color: "#B0B0B0" }} // Muted text for the subheader
          >
            Set new goals and track your progress toward achieving them.
          </p>

          {/* "Set New Goal" Form */}
          <div
            className="p-6 rounded-lg shadow-lg mb-8"
            style={{ backgroundColor: "#262626" }} // Secondary background for the form
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>
              Set New Goal
            </h2>
            <form className="flex flex-wrap gap-4 items-end" onSubmit={handleSubmit}>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#B0B0B0" }}
                >
                  Goal Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Vacation Fund"
                  className="w-full p-2 rounded"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#B0B0B0" }}
                >
                  Target Amount
                </label>
                <input
                  type="number"
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  placeholder="e.g., 5000"
                  className="w-full p-2 rounded"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: "#B0B0B0" }}
                >
                  Target Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  style={{
                    backgroundColor: "#1C1C1E",
                    color: "#E0E0E0",
                    border: "1px solid #B0B0B0",
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 rounded font-bold"
                  style={{
                    backgroundColor: "#0BDB00",
                    color: "#1C1C1E",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#00A300")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#0BDB00")}
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>

          {/* Goals Section */}
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#E0E0E0" }}
            >
              Your Goals
            </h2>
            {goals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <p style={{ color: "#B0B0B0" }}>
                No goals added yet. Start by creating a new goal!
              </p>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default GoalsPage;
