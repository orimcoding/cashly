import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function GoalCard({ goal }) {
  const percentage = Math.min((goal.saved / goal.target) * 100, 100); // Cap at 100%

  return (
    <div
      className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
      style={{
        backgroundColor: "#262626", // Secondary background
        color: "#E0E0E0", // Light text
      }}
    >
      {/* Goal Title */}
      <div className="flex justify-between items-center">
        <h3
          className="font-bold text-lg truncate"
          style={{ color: "#FFFFFF" }} // White text for the goal title
        >
          {goal.name}
        </h3>
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="p-2 rounded-full hover:bg-blue-500 transition-colors"
            style={{
              backgroundColor: "#007BFF", // Blue background
              color: "#FFFFFF", // White icon color
            }}
            title="Edit Goal"
          >
            <FaEdit />
          </button>
          <button
            className="p-2 rounded-full hover:bg-red-500 transition-colors"
            style={{
              backgroundColor: "#FF4C4C", // Red background
              color: "#FFFFFF", // White icon color
            }}
            title="Delete Goal"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Progress Information */}
      <p className="text-sm mt-2" style={{ color: "#B0B0B0" }}>
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
        className="relative w-full h-4 mt-3 rounded-full"
        style={{ backgroundColor: "#1C1C1E" }} // Dark progress bar background
      >
        <div
          className="absolute top-0 left-0 h-4 rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            background: "linear-gradient(to right, #0BDB00, #00A300)", // Gradient for progress
          }}
        ></div>
      </div>

      {/* Completion Status */}
      <p className="text-sm mt-2" style={{ color: "#B0B0B0" }}>
        {percentage >= 100 ? (
          <span className="text-lime-400 font-semibold">🎉 Goal Achieved!</span>
        ) : (
          `${percentage.toFixed(1)}% Complete`
        )}
      </p>
    </div>
  );
}

export default GoalCard;
