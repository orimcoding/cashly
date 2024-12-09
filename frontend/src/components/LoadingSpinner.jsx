import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Enhanced Spinner */}
      <div
        className="w-12 h-12 border-4 rounded-full animate-spin"
        style={{
          borderColor: "#262626", // Light background color for outer border
          borderTopColor: "#0BDB00", // Primary green for the spinning effect
        }}
      ></div>
      {/* Loading Message */}
      <p
        className="mt-4 text-sm font-medium"
        style={{ color: "#B0B0B0" }} // Muted text color for a subtle appearance
      >
        Loading, please wait...
      </p>
    </div>
  );
}

export default LoadingSpinner;
