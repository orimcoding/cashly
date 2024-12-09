import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Icons for edit and delete actions

function GoalCard({ goal }) {
  const percentage = Math.min((goal.saved / goal.target) * 100, 100); // Cap at 100%

  return (
    <div className="bg-[#1C1C1E] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between w-full md:max-w-[300px]">
      {/* Goal Title */}
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-white truncate">{goal.name}</h3>
        {/* Action Buttons */}
        <div className="flex space-x-2">
          {/* Edit Button */}
          <button
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            title="Edit Goal"
          >
            <FaEdit />
          </button>
          {/* Delete Button */}
          <button
            className="p-2 rounded-full bg-red-600 hover:bg-red-500 text-white transition-colors"
            title="Delete Goal"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Progress Information */}
      <p className="text-sm text-gray-400 mt-2">
        Saved:{" "}
        <span className="text-lime-400 font-medium">${goal.saved.toFixed(2)}</span> / Target:{" "}
        <span className="text-gray-300 font-medium">${goal.target.toFixed(2)}</span>
      </p>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-700 h-3 rounded-full mt-3">
        <div
          className={`absolute top-0 left-0 h-3 rounded-full transition-all ${
            percentage >= 100 ? "bg-lime-400" : "bg-gradient-to-r from-lime-500 to-lime-700"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Completion Status */}
      <p className="text-sm text-gray-300 mt-2">
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
