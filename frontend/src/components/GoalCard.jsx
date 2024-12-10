import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function GoalCard({ goal, onEdit, onDelete }) {
  const percentage = Math.min((goal.saved / goal.target) * 100, 100); // Cap at 100%

  // Default color for the green text and progress bar if no color is set
  const progressColor = goal.color || "#0BDB00";

  return (
    <div
      className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
      style={{
        backgroundColor: "#262626", // Card background remains constant
        color: "#E0E0E0",
      }}
    >
      {/* Goal Title */}
      <div className="flex justify-between items-center">
        <h3
          className="font-bold text-lg truncate"
          style={{ color: "#FFFFFF" }}
        >
          {goal.name}
        </h3>
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="p-2 rounded-full hover:bg-blue-500 transition-colors"
            style={{
              backgroundColor: "#007BFF",
              color: "#FFFFFF",
            }}
            title="Edit Goal"
            onClick={onEdit}
          >
            <FaEdit />
          </button>
          <button
            className="p-2 rounded-full hover:bg-red-500 transition-colors"
            style={{
              backgroundColor: "#FF4C4C",
              color: "#FFFFFF",
            }}
            title="Delete Goal"
            onClick={() => onDelete(goal.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Progress Information */}
      <p className="text-sm mt-2" style={{ color: "#B0B0B0" }}>
        Saved:{" "}
        <span style={{ color: progressColor, fontWeight: "bold" }}>
          ${goal.saved.toFixed(2)}
        </span>{" "}
        / Target:{" "}
        <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>
          ${goal.target.toFixed(2)}
        </span>
      </p>

      {/* Progress Bar */}
      <div
        className="relative w-full h-4 mt-3 rounded-full"
        style={{ backgroundColor: "#1C1C1E" }}
      >
        <div
          className="absolute top-0 left-0 h-4 rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            background: progressColor, // Progress bar matches the selected color
          }}
        ></div>
      </div>

      {/* Completion Status */}
      <p className="text-sm mt-2" style={{ color: "#B0B0B0" }}>
        {percentage >= 100 ? (
          <span style={{ color: progressColor, fontWeight: "bold" }}>
            🎉 Goal Achieved!
          </span>
        ) : (
          `${percentage.toFixed(1)}% Complete`
        )}
      </p>
    </div>
  );
}

export default GoalCard;
