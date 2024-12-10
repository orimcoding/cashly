import React from "react";

function DashboardGoalCard({ goal }) {
  const percentage = Math.min((goal.saved / goal.target) * 100, 100); // Cap progress at 100%

  // Default green color for progress bar and percentage text
  const progressColor = goal.color || "#0BDB00";

  return (
    <div
      className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
      style={{
        backgroundColor: "#262626", // Card background color
        color: "#E0E0E0",
      }}
    >
      {/* Goal Name */}
      <h3 className="font-bold text-lg truncate" style={{ color: "#FFFFFF" }}>
        {goal.name}
      </h3>

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
            background: progressColor,
          }}
        ></div>
      </div>

      {/* Redirect Button */}
      <button
        className="mt-4 px-4 py-2 rounded font-bold text-white"
        style={{
          backgroundColor: progressColor,
        }}
        onClick={() => (window.location.href = "/goals")} // Redirect to goals page
      >
        View Goals
      </button>
    </div>
  );
}

export default DashboardGoalCard;