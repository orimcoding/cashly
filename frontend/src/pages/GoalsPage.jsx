import React, { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Sidebar from "../components/Sidebar";
import GoalCard from "../components/GoalCard";
import GoalEditModal from "../components/GoalEditModal";

function GoalsPage() {
  const [goals, setGoals] = useState(() => {
    try {
      const savedGoals = localStorage.getItem("goals");
      return savedGoals ? JSON.parse(savedGoals) : [];
    } catch (error) {
      console.error("Failed to load goals from localStorage:", error);
      return [];
    }
  });

  const [formData, setFormData] = useState({ name: "", target: "", date: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("goals", JSON.stringify(goals));
    } catch (error) {
      console.error("Failed to save goals to localStorage:", error);
    }
  }, [goals]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.target || !formData.date) {
      alert("Please fill out all fields!");
      return;
    }

    const targetAsNumber = parseFloat(formData.target);

    if (isNaN(targetAsNumber) || targetAsNumber <= 0) {
      alert("Please enter a valid target amount!");
      return;
    }

    const newGoal = {
      id: Date.now(),
      name: formData.name,
      target: targetAsNumber,
      saved: 0,
      date: formData.date,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setFormData({ name: "", target: "", date: "" });
  };

  const handleDelete = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const handleEditClick = (goal) => {
    setGoalToEdit(goal);
    setIsEditing(true);
  };

  const handleSaveEdit = (updatedGoal) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
    );
    setIsEditing(false);
    setGoalToEdit(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setGoalToEdit(null);
  };

  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div
          className="flex-grow p-6"
          style={{
            backgroundColor: "#1C1C1E",
            color: "#E0E0E0",
          }}
        >
          <h1 className="text-4xl font-bold mb-6" style={{ color: "#0BDB00" }}>
            Savings Goals
          </h1>
          <p className="mb-8" style={{ color: "#B0B0B0" }}>
            Set new goals and track your progress toward achieving them.
          </p>

          {/* "Set New Goal" Form */}
          <div
            className="p-6 rounded-lg shadow-lg mb-8"
            style={{ backgroundColor: "#262626" }}
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
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#00A300")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#0BDB00")
                  }
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>

          {/* Goals Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#E0E0E0" }}>
              Your Goals
            </h2>
            {goals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.map((goal) => (
                  <GoalCard
                    key={goal.id}
                    goal={goal}
                    onEdit={() => handleEditClick(goal)}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <p style={{ color: "#B0B0B0" }}>
                No goals added yet. Start by creating a new goal!
              </p>
            )}
          </div>

          {/* Modal */}
          {isEditing && (
            <GoalEditModal
              goal={goalToEdit}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default GoalsPage;
